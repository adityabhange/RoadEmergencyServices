import axios  from "axios";
const booking_api_url = "http://localhost:8080/api/addbooking";
const allbooking_api_url = "http://localhost:8080/api/allbooking";
const Users_Rest_url_getUser = 'http://localhost:8080/api/login';

class BookingService{
    getAllBooking(){
        // <T>= <any>
        return axios.get(allbooking_api_url);
    }
    addBooking(booking){
        return axios.post(booking_api_url, booking)
        .then(function(response) {
            console.log(response);
          }).catch(function(error) {
            console.log(error);
          })
    }
    getUserAuthenticated(user){
    return axios.post(Users_Rest_url_getUser, user);
  }
}
const bookingService = new BookingService()

export default BookingService