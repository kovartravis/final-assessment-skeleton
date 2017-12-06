import './app.styles.css'
import templateUrl from './app.component.html'

const controller = class AppController {

  constructor ($log, userService, $state) {
    'ngInject'
    this.service = userService
    this.state = $state
    $log.log('AppController is a go.')
  }

  //bookflight page needs to be reloaded after transition or map wont show up
  gotobook(){
    this.state.transitionTo('bookFlightPage').then(result => {
      location.reload()
    })
  }

  gotoview(){
    if(this.service.user.username !== 'Login'){
      this.state.transitionTo('viewBookingPage').then(result => {
        location.reload()
      })
    }
  }

}

export const appComponent =  {
  controller,
  templateUrl,
  controllerAs: 'appcomp'
}
