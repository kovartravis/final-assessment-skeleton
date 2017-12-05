import flightMap from './map/map.module'
import apiUrl from './api.url'
import {appComponent} from './app.component.js'
import {ftSignup} from './signup/signup.component.js'
import {UserService} from './services/user.service.js'
import {FlightService} from './services/flight.service.js'
import {ftLogin} from './login/login.component.js'
import {config} from './app.config.js'
import {bookFlightComponent} from './bookflight/bookflight.component.js'
import {viewBookingComponent} from './viewbooking/viewbooking.component.js'
import {loggedInComponent} from './loggedin/loggedin.component.js'
import {flightComponent} from './flight/flight.component.js'
import mapLocations from './map/map.locations'
import mapComponent from './map/map.component.js'
import mapService from './map/map.service'

export default ng
  .module('flight', ['ui.router', 'ngCookies','ngMap'])
  .constant('apiUrl', apiUrl)
  .constant('locations', mapLocations)
  .service('userService', UserService)
  .service('flightService', FlightService)
  .service('$map', mapService)
  .component('flightMap', mapComponent)
  .component('ftLogin', ftLogin)
  .component('ftSignup', ftSignup)
  .component('flightApp', appComponent)
  .component('bookFlight', bookFlightComponent)
  .component('viewBooking', viewBookingComponent)
  .component('loggedIn', loggedInComponent)
  .component('flight', flightComponent)
  .config(config)
  .name


