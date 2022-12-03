import { useState } from "react";
import AddButton from "../../Components/AddButton/AddButton";
import Supplier from "../../Components/Supplier/Supplier";
import Search from "../../Components/Search/Search";
import Modal from "../../Components/Modal/Modal";
import "./Deliveries.scss";
import addSupplier from "../../Data/Images/addSupplierVan.svg";

const Deliveries = () => {

    const [modal, setModal] = useState (false);

    const toggleModal = () => { setModal(!modal) }

    return (

        <section className="deliveries">
            <section className="deliveries__grid">
                <div className="deliveries__options">
                    <Search />
                    <div className="deliveries__addSupplier">
                        <AddButton 
                            text="Add supplier" 
                            image={addSupplier} 
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
                <Supplier name="Tesco" />
                <Supplier name="Arthur David" />
            </div>
            {modal && <Modal type="supplier" close={toggleModal}/>}
        </section>

    )

}

export default Deliveries;