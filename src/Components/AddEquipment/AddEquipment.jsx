import { useState } from "react";
import { addEquipment } from "../../Utils/APIcalls";
import "./AddEquipment.scss";
import close from "../../Data/Images/close.svg";

const AddEquipmentForm = ({closeModal, getAllEquipment}) => {

    const [newItem, setNewItem] = useState ({
        serialNumber: "",
        type: "Fridge",
        lastServiced: ""
        }
    )

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewItem( prevState => ({...prevState, [name]:value}));
    }

    const handleClick = async(e) => { 
        e.preventDefault();
        const response = await addEquipment(newItem);
                if(response == 201) {
                    alert("Equipment saved on database");
                    closeModal();
                    getAllEquipment();
                } else if (response == 403) {
                    alert("Equipment already exist");
                } else {
                    alert("There was a problem, please try again");
                }
    }

    return (

        <section className="addEquipmentForm">
            <p className="addEquipmentForm__serial">Serial</p>
            <input className="addEquipmentForm__serialInput" value={newItem.serialNumber} name={"serialNumber"} onChange={handleChange}></input>
            <p className="addEquipmentForm__type">Type</p>
            <select className="addEquipmentForm__typeInput" value={newItem.type} name={"type"} onChange={handleChange}>
                <option value="Fridge">Fridge</option>
                <option value="Freezer">Freezer</option>
                <option value="Hot display">Hot Display</option>
            </select>
            <p className="addEquipmentForm__lastServiced">Last serviced</p>
            <input className="addEquipmentForm__lastServicedInput" value={newItem.date} name={"lastServiced"} onChange={handleChange} type={"date"}></input>
            <img src={close} className="addEquipmentForm__close" alt="close icon" onClick={closeModal}></img>
            <button className="addEquipmentForm__submit" onClick={handleClick}>Submit</button>
        </section>

    )

}

export default AddEquipmentForm;