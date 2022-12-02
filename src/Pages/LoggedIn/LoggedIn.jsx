import Nav from "../../Components/Nav/Nav";
import Deliveries from "../Deliveries/Deliveries";
import Equipment from "../Equipment/Equipment";
import "./LoggedIn.scss";

const LoggedIn = () => {

    return (
        <main className="main">
            <div className="main__nav">
                <Nav />
            </div>
            <div className="main__content">
                <Equipment />
            </div>
        </main>
    )

}

export default LoggedIn;