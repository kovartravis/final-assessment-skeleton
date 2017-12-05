import './login.style.css'
import templateUrl from './login.template.html'

const controller = class LoginComponent{

    constructor(userService, $log){
        'ngInject'
        $log.log("hello from login component!")
    }
}

export const ftLogin = {
    controller, 
    templateUrl,
    controllerAs: 'login'
}