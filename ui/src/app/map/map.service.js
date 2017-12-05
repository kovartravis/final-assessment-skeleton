
class MapService {
  constructor ($http, apiUrl, locations) {
    'ngInject'
    
    this.zoom = 7
    this.center = [35.5175, -86.5804]
    this.markers = []
    this.paths = []
    
    // add markers from an angular constant
       const { memphis, nashville, knoxville, chattanooga } = locations
    // const markers = [memphis, nashville, knoxville, chattanooga]
    
    // markers.forEach(marker => this.addMarker(marker))
    
    // add paths manually
  //   const paths = [
  //     [memphis, nashville, '#CC0099'],
  //     [nashville, knoxville, '#AA1100']
  //   ]
    
  //   paths.forEach(args => this.addPath(...args))
   }

  viewPath(origin, destination){
    console.log('view path')
    this.markers = [memphis, nashville]
    this.markers.forEach(marker => this.addMarker(marker))
  }

  addMarker ({ latitude, longitude }) {
    this.markers.push({
      position: `[${latitude}, ${longitude}]`
    })
  }

  addPath (a, b, color) {
    this.paths.push({
      path: `[[${a.latitude}, ${a.longitude}], [${b.latitude}, ${b.longitude}]]`,
      strokeColor: color,
      strokeOpacity: 1.0,
      strokeWeight: 3,
      geodesic: true
    })
  }

  getMarkerByCityName (name) {
    return this.$http
      .get(`${this.apiUrl}/location/name`, { params: { name } })
      .then(result => result.data)
  }
}

export default MapService
