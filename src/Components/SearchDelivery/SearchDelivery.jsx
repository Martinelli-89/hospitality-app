import { useState } from "react";
import AddButton from "../AddButton/AddButton";
import "./SearchDelivery.scss";
import search from "../../Data/Images/search.svg";

const SearchDelivery = ({suppliers, updateDeliveries}) => {

    const[supplier, setSupplier] = useState(suppliers[0]);
    const [type, setType] = useState("Frozen");
    const [accepted, setAccepted] = useState(true);

    const supplierOptions = suppliers.map((supplier, index) => {
        return <option key={index*Math.random()*12}>{supplier}</option>
    })

    const handleSupplierChange = (e) => {
        setSupplier(e.target.value);
    }

    const handleTypeChange = (e) => {
        setType(e.target.value);
    }

    const handleAcceptedChange = (e) => {
        setAccepted(e.target.value);
    }

    const supplierSearch = async() => {
        await updateDeliveries(supplier);
    }

    return (

        <section className="deliverySearchOptions">
            <p className="deliverySearchOption__title"></p>
            <div className="deliverySearchOptions__supplier">
                <p>By supplier</p>
            </div>
            <div className="deliverySearchOptions__type">
                <p>By type</p>
            </div>
            <div className="deliverySearchOptions__date">
                <p>By date</p>
            </div>
            <div className="deliverySearchOptions__accepted">
                <p>Accepted</p>
            </div>
            <div className="deliverySearchOptions__searchSupplier">
                <AddButton text={"Search"} image={search} onClick={supplierSearch}/>
            </div>
            <div className="deliverySearchOptions__searchType">
                <AddButton text={"Search"} image={search}/>
            </div>
            <div className="deliverySearchOptions__searchDate">
                <AddButton text={"Search"} image={search}/>
            </div>
            <div className="deliverySearchOptions__searchAccepted">
                <AddButton text={"Search"} image={search}/>
            </div>
            <div className="deliverySearchOptions__supplierOptions">
                <select className="deliverySearchOptions__typeOptionsDropdown" value={supplier} onChange={handleSupplierChange}>
                    {supplierOptions}
                </select>
            </div>
            <div className="deliverySearchOptions__typeOptions">
                <select className="deliverySearchOptions__typeOptionsDropdown" value={type} onChange={handleTypeChange}>
                    <option value="Frozen">Frozen</option>
                    <option value="Chilled">Chilled</option>
                    <option value="Ambient">Ambient</option>
                </select>
            </div>
            <div className="deliverySearchOptions__dateOptions">
                <select className="deliverySearchOptions__dateOptionsDropdown">
                    <option value="before">Delivered before</option>
                    <option value="after">Delivered after</option>
                </select>
                <input type={"date"}></input>
            </div>
            <div className="deliverySearchOptions__acceptedOptions">
            <select className="deliverySearchOptions__acceptedOptionsDropdown" value={accepted} onChange={handleAcceptedChange}>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
            </div>
        </section>

    )

}

export default SearchDelivery;