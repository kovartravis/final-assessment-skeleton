import './flight.styles.css'
import templateUrl from './flight.template.html'

const controller = class FlightController {

  constructor ($log, $map, flightService, userService) {
    'ngInject'
    this.service = flightService
    this.userService = userService
    this.map = $map
    this.$onInit = () => {
        this.class = 'btn-primary'
        if(userService.user.username === 'Login'){
            this.class = 'btn-danger disabled'
            console.log(this.class)
        }
        let l = this.flight.offset + 8
        if(l === 12){
            l = l + 'pm'
        }else if(l > 12){
            l = l - 12
            l = l + 'pm'
        }else{
            l = l + 'am'
        }
        this.leaves = l

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