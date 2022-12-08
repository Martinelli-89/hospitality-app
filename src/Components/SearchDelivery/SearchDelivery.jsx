import { useState } from "react";
import { searchDeliveryBySupplier, searchDeliveryByType, searchDeliveryByAcceptance, searchDeliveryByDate } from "../../Utils/APIcalls";
import AddButton from "../AddButton/AddButton";
import "./SearchDelivery.scss";
import search from "../../Data/Images/search.svg";

const SearchDelivery = ({suppliers, updateDeliveries}) => {

    const[supplier, setSupplier] = useState(suppliers[0]);
    const [type, setType] = useState("Frozen");
    const [accepted, setAccepted] = useState(true);
    const [date, setDate] = useState();
    const [dateOption, setDateOption] = useState("before")

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

    const handleDateChange = (e) => {
        setDate(e.target.value);
    }

    const handleDateOptionChange = (e) => {
        setDateOption(e.target.value);
    }

    const supplierSearch = async() => {
        await updateDeliveries(await searchDeliveryBySupplier(supplier));
    }

    const typeSearch = async() => {
        await updateDeliveries(await searchDeliveryByType(type));
    }

    const acceptanceSearch = async() => {
        await updateDeliveries(await searchDeliveryByAcceptance(accepted));
    }

    const dateSearch = async() => {
        await updateDeliveries(await searchDeliveryByDate(dateOption, date));
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
                <AddButton text={"Search"} image={search} onClick={typeSearch}/>
            </div>
            <div className="deliverySearchOptions__searchDate" onClick={dateSearch}>
                <AddButton text={"Search"} image={search}/>
            </div>
            <div className="deliverySearchOptions__searchAccepted" onClick={acceptanceSearch}>
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
                <select className="deliverySearchOptions__dateOptionsDropdown" value={dateOption} onChange={handleDateOptionChange}>
                    <option value="before">Delivered before</option>
                    <option value="after">Delivered after</option>
                </select>
                <input type={"date"}  value={date} onChange={handleDateChange}></input>
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