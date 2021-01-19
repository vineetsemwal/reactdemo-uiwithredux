import { add_product_fail, add_product_request, add_product_success } from "./addProductConstants";

const initialState={
    progress: false,
    product: null,
    error: ''
};

function addProductReducer(state=initialState,action){

    switch(action.type){
        case add_product_request :{
            return {...state,...action};
        }

        case add_product_fail : {
            return {...state,...action};
        }

        case add_product_success : {
            return {...state,...action};
        }

        default: return state;
    }
   
}

export default addProductReducer;