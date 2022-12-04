import AddSupplierForm from "../AddSupllierForm/AddSupplier";
import AddEquipmentForm from "../AddEquipment/AddEquipment";
import AddTemperatureForm from "../AddTemperatureForm/AddTemperature";
import AddDeliveryForm from "../AddDeliveryForm/AddDeliveryForm";
import "./Modal.scss";

const Modal = ({type, close, data}) => {

    let render;

    if(type == "supplier") {
        render = <AddSupplierForm closeModal={close}/>;
    }

    if(type == "item") {
        render = <AddEquipmentForm closeModal={close}/>;
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