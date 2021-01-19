import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsList } from "../../../redux/products/fetch-products/fetchProductsActions";

function DisplayProductList() {
    const response = useSelector((state) => {
        return (
            {
                products: state.fetchProductsList.products,
                error: state.fetchProductsList.error,
                progress: state.fetchProductsList.progress

            }
        );
    });
    const dispatch=useDispatch();
    useEffect(()=>dispatch(fetchProductsList()) ,[]);

    if(response.error){
        return (<div>error is {response.error}</div>)
    }
    return (
       
        <div>
            <h3>Products List</h3>
            { response.products.map((product) => <div key={product.id}> {product.id} {product.name} {product.price} </div>)}
        </div>
    );
}

export default DisplayProductList;