import { useState, useEffect } from "react";
import { getSupplier, updateSupplier } from "../../Utils/APIcalls";
import close from "../../Data/Images/close.svg";

const UpdateSupplierForm = ({data, closeModal}) => {

    const [newSupplier, setNewSupplier] = useState ({
        name: "",
        accountNumber: "",
        email: "",
        phoneNumber: ""
        }
    )

    const getSupplierInfo = async(supplier) => {
        const data = await getSupplier(supplier);
        setNewSupplier({
            name: data.name,
            accountNumber: data.accountNumber,
            email: data.email,
            phoneNumber: data.phoneNumber
            })
        }

    useEffect (() => {
         getSupplierInfo(data.supplier);
    }, [])


    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewSupplier( prevState => ({...prevState, [name]:value}));
    }

    const handleSubmit = () => {
        updateSupplier(newSupplier);
        closeModal();
    }

    return (

        <section className="addSupplierForm">
            <p className="addSupplierForm__name">Name</p>
            <p className="addSupplierForm__nameInput">{newSupplier.name}</p>
            <p className="addSupplierForm__accNumb">Account number</p>
            <p className="addSupplierForm__accNumbInput">{newSupplier.accountNumber}</p>
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
            <button className="addSupplierForm__submit" onClick={handleSubmit}>Update</button>
        </section>

    )

}

export default UpdateSupplierForm;