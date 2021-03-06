
export class UserService{

    constructor($http, $log, apiUrl, $cookies){
        'ngInject'
        this.http = $http
        this.log = $log
        this.apiUrl = apiUrl
        this.cookies = $cookies
        this.viewclass = 'bg-success col-md-2'
        this.user = {username: 'Login'}
        if(this.cookies.getObject('user') !== undefined){
            this.user = JSON.parse(this.cookies.get('user'))
        }
        if(this.user.username === 'Login'){
            this.viewclass = 'bg-danger col-md-2'
          }
        $log.log("hello from user service")
    }

    attemptLogin(username, password){
        this.userHolder = {username, password}
        return this.http.post(this.apiUrl + '/passengers/validate', this.userHolder).then(result => {
            this.user = this.userHolder
            this.viewclass = 'bg-success col-md-2'
            this.cookies.putObject('user', this.user)
            return Promise.resolve(result.data)
        }).catch(error => {
            return Promise.reject(error)
        })
    }

    createUser(username, password){
        this.userHolder = {username, password}
        return this.http.post(this.apiUrl + '/passengers/new', this.userHolder).then(result =>{
            this.user = this.userHolder
            this.viewclass = 'bg-success col-md-2'
            this.cookies.putObject('user', this.user)
            return Promise.resolve(result.data)
        }).catch(error=>{
            return Promise.reject(error)
        })
    }

    logOut(){
        this.user = {username: 'Login'}
        this.viewclass = 'bg-danger col-md-2'
        this.cookies.putObject('user', this.user)
    }

}