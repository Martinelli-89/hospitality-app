import { useState, useEffect } from "react";
import { getEquipment} from "../../Utils/APIcalls";
import close from "../../Data/Images/close.svg";

const SeeEquipmentInfo = ({data, closeModal}) => {

    const [item, setItem] = useState ({
        serialNumber: "",
        type: "",
        lastServiced: ""
        }
    )

    const getEquipmentInfo = async(item) => {
        const data = await getEquipment(item);
        setItem({
            serialNumber: data.serialNumber,
            type: data.type,
            lastServiced: data.lastServiced
            })
        }

    useEffect (() => {
         getEquipmentInfo(data.serialNumber);
    }, [])

    return (

        <section className="addEquipmentForm">
            <p className="addEquipmentForm__serial">Serial number</p>
            <p className="addEquipmentForm__serialInput">{item.serialNumber}</p>
            <p className="addEquipmentForm__type">Type</p>
            <p className="addEquipmentForm__typeInput">{item.type}</p>
            <p className="addEquipmentForm__lastServiced">Last serviced</p>
            <p className="addEquipmentForm__lastServicedInput">{item.lastServiced}</p>
            <img src={close} className="addEquipmentForm__close" alt="close icon" onClick={closeModal}></img>
        </section>

    )

}

export default SeeEquipmentInfo;