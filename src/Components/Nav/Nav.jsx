import AddButton from "../AddButton/AddButton";
import "./Nav.scss";
import delivery from "../../Data/Images/delivery.svg";
import equipment from "../../Data/Images/equipment.svg";
import logout from "../../Data/Images/logout.svg";

const Nav = () => {

    return (
        <nav className="nav">
            <div className="nav__delivery">
                <AddButton  text={"Add delivery"} image={delivery}/>
            </div>
            <div className="nav__temperature">
                <AddButton  text={"Add temperature"} image={equipment}/>
            </div>
            <div className="nav__logout">
                <AddButton  text={"Sign out"} image={logout}/>
            </div>     
        </nav>
    )

}

export default Nav;