import axios from "axios";
import { urls } from "../../../constants";
import store from "../fetch-products/store";
import { add_product_fail, add_product_request, add_product_success } from "./addProductConstants";

function addProductRequest() {
    return {
        type: add_product_request,
        progress: true,
        product: null,
        error: ''
    }
}

function addProductSuccess(product) {
    return {
        type: add_product_success,
        progress: false,
        product: product,
        error: ''
    };
}


function addProductFail(error) {
    return {
        type: add_product_fail,
        progress: false,
        product: null,
        error: error
    };
}

function addProduct(requestData) {
    const url=urls.add_product_url;
    return () => {
      store.dispatch(addProductRequest());
      axios.post(url,requestData).
      then(response=>store.dispatch(addProductSuccess(response.data))).
      catch(error=>store.dispatch(addProductFail(error.error+" "+error.message)));

    };
    

}

export {addProductRequest, addProductSuccess, addProductFail,addProduct}