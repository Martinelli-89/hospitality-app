import { useState, useEffect } from "react";
import { getEquipment, updateEquipment } from "../../Utils/APIcalls";
import close from "../../Data/Images/close.svg";

const UpdateEquipmentForm = ({data, closeModal}) => {

    const [newItem, setNewItem] = useState ({
        serialNumber: "",
        type: "",
        lastServiced: ""
        }
    )

    const getEquipmentInfo = async(item) => {
        const dataApi = await getEquipment(item);
        setNewItem({
            serialNumber: dataApi.serialNumber,
            type: dataApi.type,
            lastServiced: dataApi.lastServiced
            })
        }

    useEffect (() => {
        getEquipmentInfo(data.serialNumber);
    }, [])

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewItem( prevState => ({...prevState, [name]:value}));
    }


    const handleSubmit = () => {
        updateEquipment(newItem);
        closeModal();
    }

    return (

        <section className="addEquipmentForm">
            <p className="addEquipmentForm__serial">Serial</p>
            <p className="addEquipmentForm__serialInput">{newItem.serialNumber}</p>
            <p className="addEquipmentForm__type">Type</p>
            <p className="addEquipmentForm__typeInput" >{newItem.type}</p>
            <p className="addEquipmentForm__lastServiced">Last serviced</p>
            <input className="addEquipmentForm__lastServicedInput" value={newItem.lastServiced} name={"lastService"} onChange={handleChange} type={"date"}></input>
            <img src={close} className="addEquipmentForm__close" alt="close icon" onClick={closeModal}></img>
            <button className="addEquipmentForm__submit" onClick={handleSubmit}>Update</button>
        </section>

    )

}

export default UpdateEquipmentForm;