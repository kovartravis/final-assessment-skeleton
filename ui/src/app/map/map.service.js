
class MapService {
  constructor ($http, apiUrl, locations) {
    'ngInject'
    
    this.zoom = 7
    this.center = [35.5175, -86.5804]
    this.markers = []
    this.paths = []
    
    this.memphis = {
      latitude: 35.1495,
      longitude: -90.0490
    }
  
    this.nashville = {
      latitude: 36.1627,
      longitude: -86.7816
    },
  
    this.knoxville = {
      latitude: 35.9606,
      longitude: -83.9207
    }
  
    this.chattanooga = {
      latitude: 35.0456,
      longitude:-85.3097
    }
    // add markers from an angular constant
       //const { memphis, nashville, knoxville, chattanooga } = locations
    // const markers = [memphis, nashville, knoxville, chattanooga]
    
    // markers.forEach(marker => this.addMarker(marker))
    
    //add paths manually
    // const paths = [
    //   [memphis, nashville, '#CC0099'],
    //   [nashville, knoxville, '#AA1100']
    // ]
    
    //  paths.forEach(args => this.addPath(...args))
   }

  viewMarkers(origin, destination){
    this.markers = [this.mapToObject(origin), this.mapToObject(destination)]
    this.markers.forEach(marker => this.addMarker(marker))
  }

  viewPaths(origin, destination){
    this.addPath(this.mapToObject(origin), this.mapToObject(destination), '#CC0099')
  }

  resetPath(){
    this.paths = []
  }

  mapToObject(loc){
    if(loc === 'MEMPHIS'){
      return this.memphis
    }
    if(loc === 'NASHVILLE'){
      return this.nashville
    }
    if(loc === 'KNOXVILLE'){
      return this.knoxville
    }
    if(loc === 'CHATTANOOGA'){
      return this.chattanooga
    }
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
