import axios from "axios";
import { urls } from "../../../constants";
import { fetch_products_fail, fetch_products_request, fetch_products_success } from "./fetchProductsConstants";
import store from "./store";

function fetchProductListRequest() {
    return ({
        progress: true,
        products: [],
        error: '',
        type: fetch_products_request
    });
}


function fetchProductsListSuccess(products) {
    return (
        {
            progress: false,
            products: products,
            error: '',
            type: fetch_products_success
        }
    );
}

function fetchProductsListFail(error) {
    return (
        {
            progress: false,
            products: [],
            error: error,
            type: fetch_products_fail
        }
    );
}

function fetchProductsList() {
    const url = urls.fetch_productList_url;
    return () => {
       store.dispatch(fetchProductListRequest());
        axios.get(url).
            then((response) => store.dispatch(fetchProductsListSuccess(response.data)))
            .catch(error => store.dispatch(fetchProductsListFail(error.error + " " + error.message)))

    };

}

export { fetchProductListRequest, fetchProductsListSuccess, fetchProductsListFail, fetchProductsList };