

  export const loginState = {
    name: 'loginPage',
    url: '/login',
    component: 'ftLogin'
  }

  export const signupState = {
    name: 'signupPage',
    url: '/signup',
    component: 'ftSignup'
  }

  export const bookFlightState = {
    name: 'bookFlightPage',
    url: '/bookflight',
    component: 'bookFlight'
  }

  export const viewBookingState = {
    name: 'viewBookingPage',
    url: '/viewbooking',
    component: 'viewBooking',
    resolve: {
      bookings: function(flightService){
        'ngInject'
        console.log('hello from resolve')
        return flightService.getBookings()
      }
    }
  }

  export const loggedInState = {
    name: 'loggedInPage',
    url: '/loggedin',
    component: 'loggedIn'
  }