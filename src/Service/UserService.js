import AxiosService from "./AxiosService";

const axiosservice = new AxiosService();

const baseUrl = "https://new-bookstore-backend.herokuapp.com";

let header={
    headers: {
        Authorization: localStorage.getItem("token")
    }
}

class UserService {
    login(data){
        return axiosservice.postMethod(`${baseUrl}/bookstore_user/login`,data);
    }
    Signup(data){
        return axiosservice.postMethod(`${baseUrl}/bookstore_user/registration`,data);
    }
}

export default UserService;







