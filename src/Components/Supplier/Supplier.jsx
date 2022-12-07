import { useState } from "react";
import { deleteSupplier } from "../../Utils/APIcalls";
import Modal from "../Modal/Modal";
import "./Supplier.scss";
import add from "../../Data/Images/addSupplier.svg";
import updateSvg from "../../Data/Images/update.svg";
import remove from "../../Data/Images/delete.svg";


const Supplier = ({name, getAllSuppliers}) => {

    const [modal, showModal] = useState(false);
    const [update, setUpdate] = useState(false);
    const [seeInfo, setSeeInfo] = useState(false);

    const toggleModal = () => {
        showModal(!modal);
    }

    const data = {
        supplier: name
    };

    const handleClickDelete = async() => {
        await deleteSupplier(name);
        getAllSuppliers();
    }

    const toggleUpdate = () => {
        setUpdate(!update);
    }

    const toggleSeeInfo = () => {
        setSeeInfo(!seeInfo);
    }

    return (

        <div className="supplier">
            <p className="supplier__name" onClick={toggleSeeInfo}>{name}</p>
            <img className="supplier__add" src={add} onClick={toggleModal}></img>
            <img className="supplier__update" src={updateSvg} onClick={toggleUpdate}></img>
            <img className="supplier__remove" src={remove} onClick={handleClickDelete}></img>
            {modal && <Modal type={"Add delivery"} close={toggleModal} data={data} />}
            {update && <Modal type={"Update supplier"} close={toggleUpdate} data={data} />}
            {seeInfo && <Modal type={"Info supplier"} close={toggleSeeInfo} data={data} />}
        </div>

    )

}

export default Supplier;