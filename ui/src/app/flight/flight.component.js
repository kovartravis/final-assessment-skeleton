import './flight.styles.css'
import templateUrl from './flight.template.html'

const controller = class FlightController {

  constructor ($log, $map) {
    'ngInject'
    this.map = $map
    this.$onInit = () => {
        this.leaves = this.flight.offset + 8
        if(this.leaves > 12){
            this.leaves = this.leaves - 12
            this.leaves = this.leaves + 'pm'
        }else{
            this.leaves = this.leaves + 'am'
        }
    }
    $log.log('FlightController is a go.')
  }

  clickView(){
      this.map.viewPath(this.flight.origin, this.flight.destination)
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