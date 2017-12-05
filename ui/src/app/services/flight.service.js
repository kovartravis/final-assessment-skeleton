export class FlightService{

    constructor(userService, $log, $http, apiUrl){
        this.service = userService
        this.http = $http
        this.apiUrl = apiUrl
        this.log = $log
        $log.log('flight service ready for takeoff')
    }

    getAllFlights(){
        return this.http.get(this.apiUrl + '/flights').then(result =>{
            return Promise.resolve(result.data)
        })
    }
}