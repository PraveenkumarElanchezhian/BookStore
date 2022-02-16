import AxiosService from "./AxiosService";

const axiosservice = new AxiosService();

const baseUrl = "https://bookstore.incubation.bridgelabz.com";

let header={
    headers: {
        "x-access-token": localStorage.getItem("token")
    }
}

class UserService {
    login(data){
        return axiosservice.postMethod(`${baseUrl}/bookstore_user/login`,data);
    }
    Signup(data){
        return axiosservice.postMethod(`${baseUrl}/bookstore_user/registration`,data);
    }
    getBook(data){
        return axiosservice.getMethod(`${baseUrl}/bookstore_user/get/book`,data,header);
    }
    addCart(data){
        return axiosservice.postMethod(`${baseUrl}/bookstore_user/add_cart_item/${data.product_id}`,{},header);
    }
    getCart(data){
        return axiosservice.getMethod(`${baseUrl}/bookstore_user/get_cart_items`,header);
    }
    deleteCart(data){
        return axiosservice.deleteMethod(`${baseUrl}/bookstore_user/remove_cart_item`,data,header);
    }
    updateCart(data){
        return axiosservice.updateMethod(`${baseUrl}​/bookstore_user​/cart_item_quantity​`,data,header);
    }
    addWishlist(data){
        return axiosservice.postMethod(`${baseUrl}/bookstore_user/add_wish_list`,data,header);
    }
    getWishlist(data){
        return axiosservice.getMethod(`${baseUrl}/bookstore_user/get_wishlist_items`,data,header);
    }
    deleteWishlist(data){
        return axiosservice.deleteMethod(`${baseUrl}/bookstore_user/remove_wishlist_item`,data,header);
    }
}

export default UserService;







