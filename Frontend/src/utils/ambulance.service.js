import axios from 'axios'

 const Users_Rest_url_getUser = 'http://localhost:8080/api/login';

 const Ambulance_Rest_Url_RegisterAmbulance = 'http://localhost:8080/api/addambulance';

 const Users_Rest_Url_GetAllUsers = 'http://localhost:8080/api/user';

 const User_Rest_Url_getUserDetail = 'http://localhost:8080/api/user';

 const Messages_Rest_Url_getUsersAllMessages = 'http://localhost:8080/api/mes';

class AmbulanceService {

  getUserAuthenticated(user){
    return axios.post(Users_Rest_url_getUser, user);
  }

  getUserRegistered(user){
    return axios.post(Ambulance_Rest_Url_RegisterAmbulance, user);
  }

  getAllUsers(){
    return axios.get(Users_Rest_Url_GetAllUsers);
  }

  getUserDetail(id){
    return axios.get(User_Rest_Url_getUserDetail + "/" + id);
  }
  
  getUsersAllMessages(userid){
    return axios.get(Messages_Rest_Url_getUsersAllMessages + "/" + userid);
  }

  sendMessage(message){
    return axios.post(Messages_Rest_Url_getUsersAllMessages,message);
  }

}

export default new userService();