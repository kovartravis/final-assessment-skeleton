import './viewbooking.styles.css'
import templateUrl from './viewbooking.template.html'

const controller = class ViewBookingComponent{

    constructor(userService, $log){
        'ngInject'
        $log.log("hello from view booking component!")
    }
}

export const viewBookingComponent = {
    controller, 
    templateUrl,
    controllerAs: 'viewbooking'
}