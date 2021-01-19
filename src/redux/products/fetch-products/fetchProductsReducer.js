import { fetch_products_fail, fetch_products_request, fetch_products_success } from "./fetchProductsConstants";

const initialState={
    progress: false,
    products: [],
    error: ''
};

function fetchProductsReducer(state=initialState,action){

    switch(action.type){

     case fetch_products_request:{
        return  {...state,...action};
     }   

     case fetch_products_success : {
         return {...state,...action};
     }

     case fetch_products_fail : {
         return {...state,...action};
     }

     default : return state;
    }
}


export default fetchProductsReducer;