import { useState } from "react";
import { getTemperatureByDate, getTemperatureBySerial, getTemperatureByType } from "../../Utils/APIcalls";
import AddButton from "../AddButton/AddButton";
import "./SearchTemperature.scss";
import search from "../../Data/Images/search.svg";

const SearchTemperature = ({equipment, updateTemperatures}) => {

    const[serial, setSerial] = useState(equipment[0][0].serial_number);
    const [type, setType] = useState("Frozen");
    const [date, setDate] = useState();
    const [dateOption, setDateOption] = useState("before")

    const serialOptions = equipment.map((item, index) => {
        return <option key={index*Math.random()*17}>{item[0].serial_number}</option>
    })

    const handleSerialChange = (e) => {
        setSerial(e.target.value);
    }

    const handleTypeChange = (e) => {
        setType(e.target.value);
    }

    const handleDateChange = (e) => {
        setDate(e.target.value);
    }

    const handleDateOptionChange = (e) => {
        setDateOption(e.target.value);
    }

    const temperatureSearch = async() => {
        await updateTemperatures(await getTemperatureBySerial(serial));
    }

    const typeSearch = async() => {
        await updateTemperatures(await getTemperatureByType(type));
    }

    const dateSearch = async() => {
        await updateTemperatures(await getTemperatureByDate(dateOption, date));
    }

    return (

        <section className="temperatureSearchOptions">
            <p className="temperatureSearchOptions__title"></p>
            <div className="temperatureSearchOptions__supplier">
                <p>By serial number</p>
            </div>
            <div className="temperatureSearchOptions__type">
                <p>By type</p>
            </div>
            <div className="temperatureSearchOptions__date">
                <p>By date</p>
            </div>
            <div className="temperatureSearchOptions__searchSupplier">
                <AddButton text={"Search"} image={search} onClick={temperatureSearch}/>
            </div>
            <div className="temperatureSearchOptions__searchType">
                <AddButton text={"Search"} image={search} onClick={typeSearch}/>
            </div>
            <div className="temperatureSearchOptions__searchDate" onClick={dateSearch}>
                <AddButton text={"Search"} image={search}/>
            </div>
            <div className="temperatureSearchOptions__supplierOptions">
                <select className="temperatureSearchOptions__typeOptionsDropdown" value={serial} onChange={handleSerialChange}>
                    {serialOptions}
                </select>
            </div>
            <div className="temperatureSearchOptions__typeOptions">
                <select className="temperatureSearchOptions__typeOptionsDropdown" value={type} onChange={handleTypeChange}>
                    <option value="Frozen">Frozen</option>
                    <option value="Chilled">Chilled</option>
                    <option value="Hot display">Hot display</option>
                </select>
            </div>
            <div className="temperatureSearchOptions__dateOptions">
                <select className="temperatureSearchOptions__dateOptionsDropdown" value={dateOption} onChange={handleDateOptionChange}>
                    <option value="before">Entered before</option>
                    <option value="after">Entered after</option>
                </select>
                <input type={"date"}  value={date} onChange={handleDateChange}></input>
            </div>
        </section>

    )

}

export default SearchTemperature;