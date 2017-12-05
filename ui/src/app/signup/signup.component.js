import './signup.style.css'
import templateUrl from './signup.template.html'

const controller = class SignupComponent{

    constructor(userService, $log){
        'ngInject'
        $log.log("hello from signup component!")
    }
}

export const ftSignup = {
    controller, 
    templateUrl,
    controllerAs: 'signup'
}