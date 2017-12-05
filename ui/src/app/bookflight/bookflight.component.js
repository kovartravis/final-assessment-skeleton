import './bookflight.styles.css'
import templateUrl from './bookflight.template.html'

const controller = class BookFlightComponent{

    constructor(userService, $log, flightService, $interval, $q){
        'ngInject'
        this.userService = userService
        this.flightService = flightService
        this.allflights = []
        $interval( () =>{
            this.flightService.getAllFlights().then(result =>{
                this.updateFlights(result)
            })
        }, 5000)
        $log.log("hello from book flight component!")
    }

    updateFlights(flights){
        this.allflights = flights
    }
}

export const bookFlightComponent = {
    controller, 
    templateUrl,
    controllerAs: 'bookflight'
}