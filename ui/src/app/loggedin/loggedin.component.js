import './loggedin.styles.css'
import templateUrl from './loggedin.template.html'

const controller = class LoggedInComponent{

    constructor(userService, $log){
        'ngInject'
        $log.log("hello from log in component!")
    }
}

export const loggedInComponent = {
    controller, 
    templateUrl,
    controllerAs: 'loggin'
}