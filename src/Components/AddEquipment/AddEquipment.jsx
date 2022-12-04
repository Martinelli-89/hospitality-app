import "./AddEquipment.scss";
import close from "../../Data/Images/close.svg";
import { useState } from "react";

const AddSupplierForm = ({closeModal}) => {

    const [typeItem, setTypeItem] = useState()

    const handleChange = (event) => {
        setTypeItem(event.target.value);
    }

    return (

        <section className="addEquipmentForm">
            <p className="addEquipmentForm__serial">Serial</p>
            <input className="addEquipmentForm__serialInput"></input>
            <p className="addEquipmentForm__type">Type</p>
            <select className="addEquipmentForm__typeInput" value={typeItem} onChange={handleChange}>
                <option value="Fridge">Fridge</option>
                <option value="Freezer">Freezer</option>
                <option value="Hot display">Hot Display</option>
            </select>
            <p className="addEquipmentForm__lastServiced">Last serviced</p>
            <input className="addEquipmentForm__lastServicedInput"></input>
            <img src={close} className="addEquipmentForm__close" alt="close icon" onClick={closeModal}></img>
        </section>

    )

}

export default AddSupplierForm;