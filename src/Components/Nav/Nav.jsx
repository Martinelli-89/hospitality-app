import AddButton from "../AddButton/AddButton";
import "./Nav.scss";
import delivery from "../../Data/Images/delivery.svg";
import equipment from "../../Data/Images/equipment.svg";
import logout from "../../Data/Images/logout.svg";
import { Link } from "react-router-dom";

const Nav = () => {

    return (
        <nav className="nav">
            <div className="nav__menu">
                <Link to="*">
                    <h2 className="nav__title">Menu</h2>
                </Link>
                <div className="nav__deliveries">
                    <img src={delivery} alt="delivery logo"></img>
                    <h4>Deliveries</h4>
                </div>
                <div className="nav__deliveriesOptions">
                    <Link to="/addDelivery">
                        <p className="nav__add">Add delivery</p>
                    </Link>
                    <Link to="/deliveries">
                        <p className="nav__search">Search deliveries</p>
                    </Link>
                </div>
                <div className="nav__equipment">
                    <img src={equipment} alt="equipment logo"></img>
                    <h4>Equipment</h4>
                </div>
                <div className="nav__equipmentOptions">
                    <Link to="/addTemperature">
                        <p className="nav__add">Add temperature</p>
                    </Link>
                    <Link to="/temperatures">
                        <p className="nav__search">Search temperatures</p>
                    </Link>
                </div>
            </div>
            <div className="nav__logout">
                <AddButton text={"Sign out"} image={logout} />
            </div>
        </nav>
    )

}

export default Nav;