import templateUrl from './map.component.html'

class MapController {

  constructor ($map, locations) {
    'ngInject'

    this.map = $map

  }

}

export default {
  templateUrl,
  controller: MapController,
  controllerAs: '$mapCtrl'
}
