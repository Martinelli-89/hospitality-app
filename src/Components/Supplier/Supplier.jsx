import { useState } from "react";
import Modal from "../Modal/Modal";
import "./Supplier.scss";
import add from "../../Data/Images/addSupplier.svg";
import update from "../../Data/Images/update.svg";
import remove from "../../Data/Images/delete.svg";


const Supplier = ({name}) => {

    const [modal, showModal] = useState(false);

    const toggleModal = () => {
        showModal(!modal);
    }

    const data = {
        supplier: name
    };

    return (

        <div className="supplier">
            <p className="supplier__name">{name}</p>
            <img className="supplier__add" src={add} onClick={toggleModal}></img>
            <img className="supplier__update" src={update}></img>
            <img className="supplier__remove" src={remove}></img>
            {modal && <Modal type={"Add delivery"} close={toggleModal} data={data} />}
        </div>

    )

}

export default Supplier;