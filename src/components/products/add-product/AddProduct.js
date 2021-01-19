import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SimpleReactValidator from "simple-react-validator";
import { addProduct } from "../../../redux/products/add-product/addProductActions";

function AddProduct() {

    const [formData, setFormData] = useState({ name: '', price: '' });
    let validator=new SimpleReactValidator();

    const dispatch=useDispatch();
    
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
        const valid=validator.allValid();
        if(!valid){
            return;
        }
        console.log("form valid",valid);
        dispatch(addProduct(formData));
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

                {response.error ? failUi : successUi}
            </div>
        </div>

    );

}

export default AddProduct;