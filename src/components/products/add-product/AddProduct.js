import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SimpleReactValidator from "simple-react-validator";
import { addProduct } from "../../../redux/products/add-product/addProductActions";
import store from "../../../redux/products/fetch-products/store";

function AddProduct() {

    const [formData, setFormData] = useState({ name: '', price: -1 });
    let validator=new SimpleReactValidator();
    useEffect(()=>{
        console.log("inside useeffect");
    });
    
     
    const response = useSelector(state => {
        return {
            product: state.addProduct.product,
            progress: state.addProduct.progress,
            error: state.addProduct.error
        }
    })

    const changeHandler = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        setFormData({ ...formData, [fieldName]: fieldValue });
    }

    const submitHandler = event => {
        event.preventDefault();
        store.dispatch(addProduct(formData));
    }

    let successUi = '';
    if (response.product) {
        successUi = (<div>
            {response.product.id}
            {response.product.name}
            {response.product.price}
        </div>);
    }

    let failUi = '';
    if (response.error) {
        failUi = (
            <div>
                Error in request creation  {response.error}
            </div>
        )
    }

    return (

        <div>
            <h3>Add Product</h3>

            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input name="name" onChange={changeHandler} className="form-control" 
                    onBlur={validator.showMessageFor('name')} />
                    validator state {validator.allValid()}
                    {validator.message('name', formData.name, 'required')}
                </div>

                <div className="form-group">
                    <label>Price</label>
                    <input type="number" name="price" onChange={changeHandler} className="form-control" onBlur={validator.showMessageFor('price')} />
                    {validator.message('price', formData.price, 'required')}
                </div>

                <button onClick={submitHandler} className="btn btn-primary">Add Product</button>

            </form>
            <div>

                <h3>Product Added</h3>

                {response.product ? successUi : failUi}
            </div>
        </div>

    );

}

export default AddProduct;