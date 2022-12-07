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
        serial: serial
    }

    return (

        <div className="item">
            <p className="item__name">{type}</p>
            <p className="item__serial">{serial}</p>
            <img className="item__add" src={add} onClick={toggleModal}></img>
            <img className="item__update" src={updateSvg}></img>
            <img className="item__remove" src={remove} onClick={handleClickDelete}></img>
            {modal && <Modal type="Add item" close={toggleModal} data={data}/>}
        </div>

    )

}

export default Item;