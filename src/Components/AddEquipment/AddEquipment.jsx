import "./AddEquipment.scss";
import close from "../../Data/Images/close.svg";

const AddSupplierForm = ({closeModal}) => {

    return (

        <section className="addEquipmentForm">
            <p className="addEquipmentForm__serial">Serial</p>
            <input className="addEquipmentForm__serialInput"></input>
            <p className="addEquipmentForm__type">Type</p>
            <input className="addEquipmentForm__typeInput"></input>
            <p className="addEquipmentForm__lastServiced">Last serviced</p>
            <input className="addEquipmentForm__lastServicedInput"></input>
            <img src={close} className="addEquipmentForm__close" alt="close icon" onClick={closeModal}></img>
        </section>

    )

}

export default AddSupplierForm;