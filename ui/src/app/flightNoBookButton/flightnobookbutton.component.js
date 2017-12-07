import './flightnobookbutton.styles.css'
import templateUrl from './flightnobookbutton.template.html'

const controller = class FlightNoBookButtonController {

  constructor ($log, $map, flightService) {
    'ngInject'
    this.map = $map
    this.service = flightService

    this.$onInit = () =>{
      this.leaves = []
      let arr = Array.from(this.flight)
      for(let i = 0; i < arr.length; i++){
        let l = arr[i].offset + 8
        if(l === 12){
          l = l + 'pm'
        }else if(l > 12){
          l = l - 12
          l = l + 'pm'
        }else{
          l = l + 'am'
        }
        this.leaves.push(l)
      }
    }

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