import {useState} from 'react';
import { addTemperature } from '../../Utils/APIcalls';
import "./AddTemperatureForm.scss";
import close from "../../Data/Images/close.svg";

const AddTemperature = ({closeModal, data}) => {

    const [temperature, setTemperature] = useState ({
        equipmentSerialNumber: data.serialNumber,
        equipmentType: "Frozen",
        temperature: "",
        date: ""
        }
    )

    const handleChange = (event) => {
        const { name, value } = event.target;
        setTemperature( prevState => ({...prevState, [name]:value}));
    }

    const handleSubmit = async () => {
        const response = await addTemperature(temperature);
        if(response == 201) {
            alert("Temperature added");
            closeModal();
        }
    }

    return (

        <section className="addTemperatureForm">
            <p className="addTemperatureForm__serial">Serial</p>
            <p className="addTemperatureForm__serialNumber">{data.serialNumber}</p>
            <p className="addTemperatureForm__type">Type</p>
            <select className="addTemperatureForm__typeInput" value={temperature.equipmentType} name={"equipmentType"} onChange={handleChange}>
                <option value="Frozen">Frozen</option>
                <option value="Chilled">Chilled</option>
                <option value="Hot display">Hot display</option>
            </select>
            <p className="addTemperatureForm__temperature">Temperature</p>
            <input className="addTemperatureForm__temperatureInput"  value={temperature.temperature} name={"temperature"} onChange={handleChange}></input>
            <p className="addTemperatureForm__delivery">Day taken</p>
            <input className="addTemperatureForm__deliveryDateInput" type="date"  value={temperature.date} name={"date"} onChange={handleChange}></input>
            <img src={close} className="addTemperatureForm__close" alt="close icon" onClick={closeModal}></img>
            <button className="addTemperatureForm__submit" onClick={handleSubmit}>Submit</button>
        </section>

    )

}

export default AddTemperature;