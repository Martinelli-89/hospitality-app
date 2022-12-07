import { useState } from "react";
import { deleteEquipment } from "../../Utils/APIcalls";
import Modal from "../Modal/Modal";
import "./Item.scss";
import add from "../../Data/Images/addSupplier.svg";
import updateSvg from "../../Data/Images/update.svg";
import remove from "../../Data/Images/delete.svg";

const Item = ({type, serial, getAllEquipment}) => {

    const [modal, showModal] = useState(false);
    const [update, setUpdate] = useState(false);
    const [seeInfo, setSeeInfo] = useState(false);

    const toggleModal = () => {
        showModal(!modal);
    }

    const handleClickDelete = async() => {
        await deleteEquipment(serial);
        getAllEquipment();
    }

    const data= {
        type: type,
        serialNumber: serial
    }

    const toggleUpdate = () => {
        setUpdate(!update);
    }

    const toggleSeeInfo = () => {
        setSeeInfo(!seeInfo);
    }

    return (

        <div className="item">
            <p className="item__name" onClick={toggleSeeInfo}>{type}</p>
            <p className="item__serial" onClick={toggleSeeInfo}>{serial}</p>
            <img className="item__add" src={add} onClick={toggleModal}></img>
            <img className="item__update" src={updateSvg} onClick={toggleUpdate}></img>
            <img className="item__remove" src={remove} onClick={handleClickDelete}></img>
            {modal && <Modal type={"Add temperature"} close={toggleModal} data={data}/>}
            {update && <Modal type={"Update item"} close={toggleUpdate} data={data} />}
            {seeInfo && <Modal type={"Info item"} close={toggleSeeInfo} data={data} />}
        </div>

    )

}

export default Item;