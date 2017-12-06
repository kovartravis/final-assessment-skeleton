import './flight.styles.css'
import templateUrl from './flight.template.html'

const controller = class FlightController {

  constructor ($log, $map, flightService) {
    'ngInject'
    this.service = flightService
    this.map = $map
    this.$onInit = () => {
        this.leaves = this.flight.offset + 8
        if(this.leaves > 24){
            this.leaves = this.leaves - 24
        }
    }
    $log.log('FlightController is a go.')
  }

  clickView(){
      this.map.resetPath()
      this.map.viewMarkers(this.flight.origin, this.flight.destination)
      this.map.viewPaths(this.flight.origin, this.flight.destination)
  }

  clickBook(){
      console.log('book')
      this.service.bookFlight([this.flight])
  }

}

export const flightComponent =  {
  controller,
  templateUrl,
  controllerAs: 'flightController',
  bindings:{
      flight: '='
  }
}