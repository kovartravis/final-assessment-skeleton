import './viewbooking.styles.css'
import templateUrl from './viewbooking.template.html'

const controller = class ViewBookingComponent{

    constructor(userService, $log){
        'ngInject'
        this.$onInit = () => {
            let arr = Array.from(this.bookings)
            this.totalflights = 0
            this.timeinair = 0
            this.citiesvisited = []
            this.layovers = 0
            arr.forEach( flt => {
                this.totalflights += flt.flights.length
                flt.flights.forEach( f => {
                    this.timeinair += f.flightTime
                    this.citiesvisited.push(f.destination)
                })
                this.layovers += flt.flights.length - 1
            })
            this.citiesvisitiednorepeat = this.citiesvisited.filter( (city, i) => {
                return this.citiesvisited.indexOf(city) === i
            })
        }
        $log.log("hello from view booking component!")
    }
}

export const viewBookingComponent = {
    controller, 
    templateUrl,
    controllerAs: 'viewbooking',
    bindings: {
        bookings: '='
    }
}