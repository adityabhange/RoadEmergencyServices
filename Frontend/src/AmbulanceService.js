import axios  from "axios";
const ambulance_api_url = "http://localhost:8080/api/addAmbulance";
const Users_Rest_Url_GetAllAmbulance = 'http://localhost:8080/api/ambulanceList';


class AmbulanceService{
   
    async addAmbulance(ambulance){
        try {
            const response = await axios.post(ambulance_api_url, ambulance);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    getAllAmbulance(){
        return axios.get(Users_Rest_Url_GetAllAmbulance);
      }
    
}
const ambulanceService = new AmbulanceService()

export default ambulanceService