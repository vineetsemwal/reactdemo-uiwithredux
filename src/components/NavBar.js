import { BrowserRouter as Rouer, Link, Switch, Route, Router } from 'react-router-dom';

function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/" className="navbar-brand" >ecommerce</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/productsList" className="nav-link">Products List</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/addproduct" className="nav-link">Add Product</Link>
                        </li>
                    </ul>
                    </div>
</nav>
</>
    );

}

export default NavBar;