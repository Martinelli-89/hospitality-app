import { Route, Routes } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";
import Deliveries from "../Deliveries/Deliveries";
import Equipment from "../Equipment/Equipment";
import Home from "../Home/Home";

const LoggedIn = () => {

    return (
        <Routes>
            <Route 
                path="*" 
                element={
                    <>
                        <Nav />
                        <Home />
                    </>
                } />
            <Route 
                path="/addTemperature" 
                element={
                    <>
                        <Nav />
                        <Equipment />
                    </>
                } />
            <Route 
                path="/addDelivery" 
                element={
                    <>
                        <Nav />
                        <Deliveries />
                    </>
                } />  
        </Routes>
    )

}

export default LoggedIn;