import AddSupplierForm from "../AddSupllierForm/AddSupplier";
import AddEquipmentForm from "../AddEquipment/AddEquipment";
import AddTemperature from "../AddTemperatureForm/AddTemperature";
import AddDeliveryForm from "../AddDeliveryForm/AddDeliveryForm";
import UpdateSupplierForm from "../UpdateSupplierForm/UpdateSupplierForm";
import SeeSupplierInfo from "../SeeSupplierInfo/SeeSupplierInfo";
import UpdateEquipmentForm from "../UpdateEquipmentForm/UpdateEquipmentForm";
import SeeEquipmentInfo from "../SeeEquipmentInfo/SeeEquipmentInfo";
import "./Modal.scss";

const Modal = ({type, close, data, getAllSuppliers, getAllEquipment}) => {

    let render;

    if(type == "supplier") {
        render = <AddSupplierForm closeModal={close} getAllSuppliers={getAllSuppliers}/>;
    }

    if(type == "Update supplier") {
        render = <UpdateSupplierForm closeModal={close} data={data}/>;
    }

    if(type == "Info supplier") {
        render = <SeeSupplierInfo closeModal={close} data={data}/>;
    }

    if(type == "item") {
        render = <AddEquipmentForm closeModal={close} getAllEquipment={getAllEquipment}/>;
    }

    if(type == "Add temperature") {
        render = <AddTemperature data={data} closeModal={close}/>;
    }

    if(type == "Update item") {
        render = <UpdateEquipmentForm closeModal={close} data={data}/>;
    }

    if(type == "Info item") {
        render = <SeeEquipmentInfo closeModal={close} data={data}/>;
    }

    if(type == "Add delivery") {
        render = <AddDeliveryForm data={data} closeModal={close}/>;
    }

    return (

        <div className="modal">
            <div className="modal__content">
                {render}
            </div>
        </div>

    )

}

export default Modal;