import './app.styles.css'
import templateUrl from './app.component.html'

const controller = class AppController {

  constructor ($log, userService) {
    'ngInject'
    this.service = userService
    $log.log('AppController is a go.')
  }

}

export const appComponent =  {
  controller,
  templateUrl,
  controllerAs: 'appcomp'
}
