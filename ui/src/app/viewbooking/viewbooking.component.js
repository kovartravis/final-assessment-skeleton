import './viewbooking.styles.css'
import templateUrl from './viewbooking.template.html'

const controller = class ViewBookingComponent{

    constructor(userService, $log){
        'ngInject'
        this.$onInit = () => {
            let arr = Array.from(this.bookings)
            console.log(arr)
            this.layovers = 0
            this.totalflights = 0
            arr.forEach( f => this.layovers += f.flights.length - 1 )
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