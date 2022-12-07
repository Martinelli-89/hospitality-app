import { useState, useEffect } from "react";
import { getSupplier} from "../../Utils/APIcalls";
import close from "../../Data/Images/close.svg";

const SeeSupplierInfo = ({data, closeModal}) => {

    const [supplier, setSupplier] = useState ({
        name: "",
        accountNumber: "",
        email: "",
        phoneNumber: ""
        }
    )

    const getSupplierInfo = async(supplier) => {
        const data = await getSupplier(supplier);
        setSupplier({
            name: data.name,
            accountNumber: data.accountNumber,
            email: data.email,
            phoneNumber: data.phoneNumber
            })
        }

    useEffect (() => {
         getSupplierInfo(data.supplier);
    }, [])

    return (

        <section className="addSupplierForm">
            <p className="addSupplierForm__name">Name</p>
            <p className="addSupplierForm__nameInput">{supplier.name}</p>
            <p className="addSupplierForm__accNumb">Account number</p>
            <p className="addSupplierForm__accNumbInput">{supplier.accountNumber}</p>
            <p className="addSupplierForm__email">Email</p>
            <p className="addSupplierForm__emailInput">{supplier.email}</p>
            <p className="addSupplierForm__phone">Phone number</p>
            <p className="addSupplierForm__phoneInput">{supplier.phoneNumber}</p>
            <img src={close} className="addSupplierForm__close" alt="close icon" onClick={closeModal}></img>
        </section>

    )

}

export default SeeSupplierInfo;