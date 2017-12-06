import './bookflight.styles.css'
import templateUrl from './bookflight.template.html'

const controller = class BookFlightComponent{

    constructor(userService, $log, flightService, $interval, $location){
        'ngInject'
        this.userService = userService
        this.flightService = flightService
        this.showAll = 'all'
        this.searchresults = []
        this.allflights = []
        this.noResults = false
        $interval( () =>{
            if(!this.origin && !this.destination){
                this.showAll = 'all'
                this.flightService.getAllFlights().then(result =>{
                    this.updateFlights(result)
                })
            }
            if(!this.origin && this.destination){
                this.showAll = 'simplesearch'
                this.flightService.getFlightsTo(this.destination).then(result => {
                    this.updateSearchResults(result)
                })
            }
            if(!this.destination && this.origin){
                this.showAll = 'simplesearch'
                this.flightService.getFlightsFrom(this.origin).then(result => {
                    this.updateSearchResults(result)
                })
            }
            if(this.origin && this.destination){
                this.showAll = 'complexsearch'
                this.flightService.getFlightsFromTo(this.origin, this.destination).then(result =>{
                    this.updateSearchResults(result)
                })
            }
        }, 1000)
        $log.log("hello from book flight component!")
    }

    updateFlights(flights){
        this.allflights = flights
    }

    updateSearchResults(flights){
        this.searchresults = flights
    }


    // search(){
    //     this.showAll = 'simplesearch'
    // }

    reset(){
        this.showAll = 'all'
        this.origin = undefined
        this.destination = undefined
    }
}

export const bookFlightComponent = {
    controller, 
    templateUrl,
    controllerAs: 'bookflight'
}