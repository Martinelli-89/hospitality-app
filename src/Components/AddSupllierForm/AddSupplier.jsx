import "./AddSupplier.scss";
import close from "../../Data/Images/close.svg";

const AddSupplierForm = ({closeModal}) => {

    return (

        <section className="addSupplierForm">
            <p className="addSupplierForm__name">Name</p>
            <input className="addSupplierForm__nameInput"></input>
            <p className="addSupplierForm__accNumb">Account number</p>
            <input className="addSupplierForm__accNumbInput"></input>
            <p className="addSupplierForm__email">Email</p>
            <input className="addSupplierForm__emailInput"></input>
            <p className="addSupplierForm__phone">Phone number</p>
            <input className="addSupplierForm__phoneInput"></input>
            <img src={close} className="addSupplierForm__close" alt="close icon" onClick={closeModal}></img>
        </section>

    )

}

export default AddSupplierForm;