
export class UserService{

    constructor($http, $log){
        'ngInject'
        this.http = $http
        this.log = $log
        this.user = null
        $log.log("hello from user service")
    }

    attemptLogin(user){
        return this.http.post(apiUrl + '/passengers/validate', user).then(result => {
            this.log(result)
            return Promise.resolve(result.data)
        }, error => {
            this.log(error)
            return Promise.reject(error)
        })
    }

}