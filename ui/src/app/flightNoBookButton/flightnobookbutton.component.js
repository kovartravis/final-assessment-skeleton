import './flightnobookbutton.styles.css'
import templateUrl from './flightnobookbutton.template.html'

const controller = class FlightNoBookButtonController {

  constructor ($log, $map, flightService) {
    'ngInject'
    this.map = $map
    this.service = flightService
    $log.log('FlightController no button is a go.')
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
}

export const flightNoBookButtonComponent =  {
  controller,
  templateUrl,
  controllerAs: 'flightNoBookButtonController',
  bindings:{
      flight: '='
  }
}