import axios  from "axios";
const register_api_url = "http://localhost:8080/api/addUser";
const users_api_url = "http://localhost:8080/api/users";
const Users_Rest_url_getUser = 'http://localhost:8080/api/login';

class RegisterService{
    getUser(){
        // <T>= <any>
        return axios.get(users_api_url);
    }
    addUser(user){
        return axios.post(register_api_url, user)
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
const registerService = new RegisterService()

export default registerService