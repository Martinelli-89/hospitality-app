import AddSupplierForm from "../AddSupllierForm/AddSupplier";
import AddEquipmentForm from "../AddEquipment/AddEquipment";
import AddTemperatureForm from "../AddTemperatureForm/AddTemperature";
import AddDeliveryForm from "../AddDeliveryForm/AddDeliveryForm";
import UpdateSupplierForm from "../UpdateSupplierForm/UpdateSupplierForm";
import SeeSupplierInfo from "../SeeSupplierInfo/SeeSupplierInfo";
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

    if(type == "Add item") {
        render = <AddTemperatureForm data={data} closeModal={close}/>;
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