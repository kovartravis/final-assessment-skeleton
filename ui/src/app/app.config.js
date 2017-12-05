import { loginState, signupState } from './app.state'

export function config($logProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
  'ngInject'
  $locationProvider.html5Mode(true)
  $urlRouterProvider.otherwise('/login')
  $stateProvider.state(loginState)
  $stateProvider.state(signupState)
  $logProvider.debugEnabled(true)
}
