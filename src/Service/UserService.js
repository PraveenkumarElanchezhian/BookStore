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
        return axiosservice.deleteMethod(`${baseUrl}/bookstore_user/remove_cart_item/${data}`,{},header);
    }
    updateCart(_id,data){
        let link = 'https://bookstore.incubation.bridgelabz.com/bookstore_user/cart_item_quantity/'+_id;
        return axiosservice.updateMethod(link,data,header);
    }
    addWishlist(data){
        return axiosservice.postMethod(`${baseUrl}/bookstore_user/add_wish_list/${data.product_id}`,data,header);
    }
    getWishlist(data){
        return axiosservice.getMethod(`${baseUrl}/bookstore_user/get_wishlist_items`,header);
    }
    deleteWishlist(data){
        return axiosservice.deleteMethod(`${baseUrl}/bookstore_user/remove_wishlist_item/${data}`,{},header);
    }
    customerDetails(data){
        let links ='https://bookstore.incubation.bridgelabz.com/bookstore_user/edit_user';
        return axiosservice.updateMethod(links,data,header);
    }
    addOrder(data){
        return axiosservice.postMethod(`${baseUrl}/bookstore_user/add/order`,data,header);
    }
}

export default UserService;







