import AddSupplierForm from "../AddSupllierForm/AddSupplier";
import AddEquipmentForm from "../AddEquipment/AddEquipment";
import "./Modal.scss";

const Modal = ({type, close}) => {

    let render;

    if(type == "supplier") {
        render = <AddSupplierForm closeModal={close}/>;
    }

    if(type == "item") {
        render = <AddEquipmentForm closeModal={close}/>;
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