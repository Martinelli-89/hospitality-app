import { useState , useEffect} from "react";
import {addSupplier} from "../../Utils/APIcalls";
import "./AddSupplier.scss";
import close from "../../Data/Images/close.svg";

const AddSupplierForm = ({closeModal, getAllSuppliers}) => {

    const [newSupplier, setNewSupplier] = useState ({
        name: "",
        accountNumber: "",
        email: "",
        phoneNumber: ""
        }
    )

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewSupplier( prevState => ({...prevState, [name]:value}));
    }

    const handleClick = async(e) => { 
        e.preventDefault();
        const response = await addSupplier(newSupplier);
                if(response == 201) {
                    alert("Suppliers saved on database");
                    closeModal();
                    getAllSuppliers();
                } else if (response == 403) {
                    alert("Suppliers already exist");
                } else {
                    alert("There was a problem, please try again");
                }
    }

    return (

        <section className="addSupplierForm">
            <p className="addSupplierForm__name">Name</p>
            <input 
                className="addSupplierForm__nameInput" 
                value={newSupplier.name} 
                name={"name"}
                onChange={handleChange}>
            </input>
            <p className="addSupplierForm__accNumb">Account number</p>
            <input 
                className="addSupplierForm__accNumbInput" 
                value={newSupplier.accountNumber} 
                name={"accountNumber"}
                onChange={handleChange}>
            </input>
            <p className="addSupplierForm__email">Email</p>
            <input 
                className="addSupplierForm__emailInput" 
                value={newSupplier.email} 
                name={"email"}
                onChange={handleChange}>
            </input>
            <p className="addSupplierForm__phone">Phone number</p>
            <input 
                className="addSupplierForm__phoneInput" 
                value={newSupplier.phoneNumber} 
                name={"phoneNumber"}
                onChange={handleChange}>
            </input>
            <img src={close} className="addSupplierForm__close" alt="close icon" onClick={closeModal}></img>
            <button className="addSupplierForm__submit" onClick={handleClick}>Submit</button>
        </section>

    )

}

export default AddSupplierForm;