import { loginState, signupState, bookFlightState, viewBookingState, loggedInState } from './app.state'

export function config($logProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
  'ngInject'
  $locationProvider.html5Mode(true)
  $urlRouterProvider.otherwise('/login')
  $stateProvider.state(loginState)
  $stateProvider.state(signupState)
  $stateProvider.state(bookFlightState)
  $stateProvider.state(viewBookingState)
  $stateProvider.state(loggedInState)
  $logProvider.debugEnabled(true)
}
