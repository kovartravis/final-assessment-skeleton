import './signup.style.css'
import templateUrl from './signup.template.html'

const controller = class SignupComponent{

    constructor(userService, $log, $state){
        'ngInject'
        this.service = userService
        this.isError = false
        this.state = $state
        $log.log("hello from signup component!")
    }

    clickSignup(){
        this.service.createUser(this.username, this.password).then(result =>{
            this.state.transitionTo('loginPage')
        }).catch(error => {
            if(error.status === 409){
                this.isError = true
            }
        })
    }
}

export const ftSignup = {
    controller, 
    templateUrl,
    controllerAs: 'signup'
}