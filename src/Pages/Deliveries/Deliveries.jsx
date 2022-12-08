import { useState } from "react";
import { useEffect } from "react";
import AddButton from "../../Components/AddButton/AddButton";
import Supplier from "../../Components/Supplier/Supplier";
import Search from "../../Components/Search/Search";
import Modal from "../../Components/Modal/Modal";
import "./Deliveries.scss";
import addSupplierSvg from "../../Data/Images/addSupplierVan.svg";

const Deliveries = ({suppliers, getAllSuppliers}) => {

    const [modal, setModal] = useState (false);
    const [filter, setFilter] = useState("");

    const toggleModal = () => { setModal(!modal) }

    const updateFilter = (e) => {
        setFilter(e.target.value);
    }

    return (

        <section className="deliveries">
            <section className="deliveries__grid">
                <div className="deliveries__options">
                    <Search updateFilter={updateFilter} filter={filter}/>
                    <div className="deliveries__addSupplier">
                        <AddButton 
                            text="Add supplier" 
                            image={addSupplierSvg} 
                            alt="add supplier icon" 
                            onClick={toggleModal}></AddButton>
                    </div>
                </div>
                <p className="deliveries__supplier">Supplier</p>
                <p className="deliveries__addDelivery">Add delivery</p>
                <p className="deliveries__update">Update Info</p>
                <p className="deliveries__remove">Remove</p>
            </section>
            <div className="deliveries__data">
                {suppliers.map((supplier, index) => { 
                    if(supplier.toLowerCase().includes(filter.toLowerCase())) {
                        return <Supplier key={index} name={supplier} getAllSuppliers={getAllSuppliers}/>
                    }
                })}
            </div>
            {modal && <Modal type="supplier" close={toggleModal} getAllSuppliers={getAllSuppliers}/>}
        </section>

    )

}

export default Deliveries;