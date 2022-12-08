import { useState } from "react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";
import Deliveries from "../Deliveries/Deliveries";
import Equipment from "../Equipment/Equipment";
import Home from "../Home/Home";
import FilterDelivery from "../../Components/FilterDeliveries/FilterDelivery";
import FilterTemperature from "../../Components/FilterTemperature/FilterTemperature";

const LoggedIn = () => {

    const [suppliers, setSuppliers] = useState([]);
    const [equipment, setEquipment] = useState([]);

    const getAllSuppliers = async () => {
        const response = await fetch("http://localhost:8080/suppliers");
        const data = await response.json();
        setSuppliers(data); 
    }

    const getAllEquipment = async () => {
        const response = await fetch("http://localhost:8080/equipments");
        const data = await response.json();
        console.log(await data);
        setEquipment(data); 
    }

    useEffect(() => {
        getAllSuppliers();
        getAllEquipment();
    }, [])

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
                        <Equipment 
                            equipment={equipment}
                            getAllEquipment={getAllEquipment}
                        />
                    </>
                } />
            <Route 
                path="/addDelivery" 
                element={
                    <>
                        <Nav />
                        <Deliveries 
                            suppliers={suppliers}
                            getAllSuppliers={getAllSuppliers}
                        />
                    </>
                } /> 
            <Route 
                path="/deliveries" 
                element={
                    <>
                        <Nav />
                        <FilterDelivery suppliers={suppliers}/>
                    </>
                } /> 
            <Route 
                path="/temperatures" 
                element={
                    <>
                        <Nav />
                        <FilterTemperature equipment={equipment}/>
                    </>
                } />   
        </Routes>
    )

}

export default LoggedIn;