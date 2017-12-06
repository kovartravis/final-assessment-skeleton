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

    getFlightsFrom(origin){
        return this.http.get(this.apiUrl + '/flights/booking/' + origin).then(result =>{
            return Promise.resolve(result.data)
        })
    }

    getFlightsTo(destination){
        return this.http.get(this.apiUrl + '/flights/booking/any/' + destination).then(result =>{
            return Promise.resolve(result.data)
        })
    }

    getFlightsFromTo(origin, destination){
        return this.http.get(this.apiUrl + '/flights/booking/' + origin + '/' + destination).then(result => {
            return Promise.resolve(result.data)
        })
    }

    bookFlight(flights){
        let booking = {
            flights,
            login: this.service.user
        }
        console.log(booking)
        return this.http.post(this.apiUrl + '/flights/booking', booking).then(result => {
            return Promise.resolve(result.data)
        })
    }
}