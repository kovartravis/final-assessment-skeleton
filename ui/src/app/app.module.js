import flightMap from './map/map.module'
import apiUrl from './api.url'
import appComponent from './app.component.js'
import {ftSignup} from './signup/signup.component.js'
import {UserService} from './services/user.service.js'
import {ftLogin} from './login/login.component.js'
import {config} from './app.config.js'

export default angular
  .module('flight', ['ui.router', flightMap])
  .constant('apiUrl', apiUrl)
  .service('userService', UserService)
  .component('flightApp', appComponent)
  .component('ftLogin', ftLogin)
  .component('ftSignup', ftSignup)
  .config(config)
  .name
