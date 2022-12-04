import AddButton from "../../Components/AddButton/AddButton";
import Item from "../../Components/Item/Item";
import Search from "../../Components/Search/Search";
import Modal from "../../Components/Modal/Modal"
import "./Equipment.scss";
import addItem from "../../Data/Images/addItem.svg";
import { useState } from "react";

const Equipment = () => {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }

    return (

        <section className="equipment">
            <section className="equipment__grid">
                <div className="equipment__options">
                    <Search />
                    <div className="equipment__addItem">
                        <AddButton 
                            text="Add item" 
                            image={addItem} 
                            alt="add supplier icon"
                            onClick={toggleModal}
                            />
                    </div>
                </div>
                <p className="equipment__item">Item</p>
                <p className="equipment__serial">Serial</p>
                <p className="equipment__addTemperature">Add temperature</p>
                <p className="equipment__update">Update Info</p>
                <p className="equipment__remove">Remove</p>
            </section>
            <div className="equipment__data">
                <Item name="Hot Plate" serial="*&AFT%"/>
                <Item name="Fridge" serial="AB345YZ"/>
            </div>
            {modal && <Modal type={"item"} close={toggleModal}/>}
        </section>

    )

}

export default Equipment;