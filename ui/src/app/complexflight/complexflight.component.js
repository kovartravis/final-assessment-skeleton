import './complexflight.styles.css'
import templateUrl from './complexflight.template.html'

const controller = class ComplexFlightController {

  constructor ($log, $map, flightService, userService) {
    'ngInject'
    this.map = $map
    this.userService = userService
    this.service = flightService
    this.$onInit = () => {
      this.class = 'btn-primary'
      if(userService.user.username === 'Login'){
          this.class = 'btn-danger disabled'
          console.log(this.class)
      }
    }
    $log.log('ComplexFlightController is a go.')
  }

  clickView(){
      this.map.resetPath()
      let arr = Array.from(this.flight)
      if(arr.length === 1){
        this.map.viewMarkers(arr[0].origin, arr[0].destination)
        this.map.viewPaths(arr[0].origin, arr[0].destination)
      }
      if(arr.length === 2){
        this.map.viewMarkers(arr[0].origin, arr[1].destination)
        this.map.viewPaths(arr[0].origin, arr[0].destination)
        this.map.viewPaths(arr[1].origin, arr[1].destination)
      }
      if(arr.length === 3){
        this.map.viewMarkers(arr[0].origin, arr[2].destination)
        this.map.viewPaths(arr[0].origin, arr[0].destination)
        this.map.viewPaths(arr[1].origin, arr[1].destination)
        this.map.viewPaths(arr[2].origin, arr[2].destination)
      }
  }

  clickBook(){
    console.log('book')
    this.service.bookFlight(Array.from(this.flight))
  }

}

export const complexFlightComponent =  {
  controller,
  templateUrl,
  controllerAs: 'complexFlightController',
  bindings:{
      flight: '='
  }
}