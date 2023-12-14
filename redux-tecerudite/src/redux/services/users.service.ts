import axios from "axios";
import API from "../../plugins/api";

class UserService {
  login(payload: any) {
    return axios.post("/auth/login", payload);
  }

  register(userData: any) {
    try {
      return axios.post("/auth/register", userData);
    } catch (error) {
      console.log("errrrr", error);
    }
  }
}
export default new UserService();
