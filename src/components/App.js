import { Provider } from "react-redux";
import store from "../redux/products/fetch-products/store";
import DisplayProductList from "./products/products-list/DisplayProductList";
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import NavBar from "./NavBar";
import Home from "./Home";
import AddProduct from "./products/add-product/AddProduct";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <NavBar />
                <section className="container">
                    <section className="row">
                        <section className="offset-md-1 col-md-8 col-xs-9 col-sm-9" style={{marginTop:'50px'}}>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/productsList" component={DisplayProductList} />
                            <Route exact path="/addproduct" component={AddProduct} />
                        </section>
                    </section>
                </section>
            </Router>
        </Provider>
    );
}
export default App;