import {useState} from 'react';
import { addDelivery } from '../../Utils/APIcalls';
import "./AddDeliveryForm.scss";
import close from "../../Data/Images/close.svg";

const NewItemForm = ({closeModal, data}) => {

    const [delivery, setDelivery] = useState ({
        supplier: data.supplier,
        type: "Frozen",
        temperature: "",
        date: "",
        accepted: true
        }
    )

    const handleChange = (event) => {
        const { name, value } = event.target;
        setDelivery( prevState => ({...prevState, [name]:value}));
    }

    const handleSubmit = async () => {
        const response = await addDelivery(delivery);
        if(response == 201) {
            alert("Delivery added");
            closeModal();
        }
    }

    return (

        <section className="addDeliveryForm">
            <p className="addDeliveryForm__supplier">Supplier</p>
            <p className="addDeliveryForm__supplierName">{data.supplier}</p>
            <p className="addDeliveryForm__type">Type</p>
            <select className="addDeliveryForm__typeInput" value={delivery.type} name={"type"} onChange={handleChange}>
                <option value="Frozen">Frozen</option>
                <option value="Chilled">Freezer</option>
                <option value="Ambient">Ambient</option>
            </select>
            <p className="addDeliveryForm__temperature">Temperature</p>
            <input className="addDeliveryForm__temperatureInput" name={"temperature"} value={delivery.temperature} onChange={handleChange}></input>
            <p className="addDeliveryForm__date">Date</p>
            <input className="addDeliveryForm__dateInput" name={"date"} type={"date"} onChange={handleChange}></input>
            <p className="addDeliveryForm__accepted">Accepted</p>
            <select className="addDeliveryForm__acceptedInput" value={delivery.accepted} name={"accepted"} onChange={handleChange}>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
            <img src={close} className="addDeliveryForm__close" alt="close icon" onClick={closeModal}></img>
            <button className="addDeliveryForm__submit" onClick={handleSubmit}>Submit</button>
        </section>

    )

}

export default NewItemForm;