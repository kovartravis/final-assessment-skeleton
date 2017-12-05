import './login.styles.css'
import templateUrl from './login.template.html'

const controller = class LoginComponent{

    constructor(userService, $log, $state){
        'ngInject'
        this.service = userService
        this.isError = false
        this.state = $state
        $log.log("hello from login component!")
    }

    clickLogin(){
        this.service.attemptLogin(this.username, this.password).then(result =>{
            
        }).catch(error => {
            if(error.status === 404){
                this.isError = true
            }
        })
    }

    clickLogout(){
        this.service.logOut()
    }

    clickNewUser(){
        this.state.transitionTo('signupPage')
    }
}

export const ftLogin = {
    controller, 
    templateUrl,
    controllerAs: 'login'
}