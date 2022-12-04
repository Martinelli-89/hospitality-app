import {useState} from 'react';
import "./AddDeliveryForm.scss";
import close from "../../Data/Images/close.svg";

const NewItemForm = ({closeModal, data}) => {

    const [typeDelivery, setTypeDelivery] = useState();

    const handleChange = (event) => {
        setTypeDelivery(event.target.value);
    }

    return (

        <section className="addDeliveryForm">
            <p className="addDeliveryForm__supplier">Supplier</p>
            <p className="addDeliveryForm__supplierName">{data.supplier}</p>
            <p className="addDeliveryForm__type">Type</p>
            <select className="addDeliveryForm__typeInput" value={typeDelivery} onChange={handleChange}>
                <option value="Frozen">Frozen</option>
                <option value="Chilled">Freezer</option>
                <option value="Room temperature">Room temperature</option>
            </select>
            <p className="addDeliveryForm__temperature">Temperature</p>
            <input className="addDeliveryForm__temperatureInput"></input>
            <p className="addDeliveryForm__date">Date</p>
            <input className="addDeliveryForm__dateInput"></input>
            <img src={close} className="addDeliveryForm__close" alt="close icon" onClick={closeModal}></img>
        </section>

    )

}

export default NewItemForm;