import { useState } from "react";
import Modal from "../Modal/Modal";
import "./Item.scss";
import add from "../../Data/Images/addSupplier.svg";
import update from "../../Data/Images/update.svg";
import remove from "../../Data/Images/delete.svg";

const Item = ({name, serial}) => {

    const [modal, showModal] = useState(false);

    const toggleModal = () => {
        showModal(!modal);
    }

    const data= {
        type: name,
        serial: serial
    }

    return (

        <div className="item">
            <p className="item__name">{name}</p>
            <p className="item__serial">{serial}</p>
            <img className="item__add" src={add} onClick={toggleModal}></img>
            <img className="item__update" src={update}></img>
            <img className="item__remove" src={remove}></img>
            {modal && <Modal type="Add item" close={toggleModal} data={data}/>}
        </div>

    )

}

export default Item;