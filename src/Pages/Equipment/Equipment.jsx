import { useState } from "react";
import AddButton from "../../Components/AddButton/AddButton";
import Item from "../../Components/Item/Item";
import Search from "../../Components/Search/Search";
import Modal from "../../Components/Modal/Modal"
import "./Equipment.scss";
import addItem from "../../Data/Images/addItem.svg";

const Equipment = ({equipment, getAllEquipment}) => {

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
                {equipment.map((item,index) => {
                    return <Item type={item[0].type} serial={item[0].serial_number} key={Math.random()*index*Math.random()} getAllEquipment={getAllEquipment}/>
                })}
            </div>
            {modal && <Modal type={"item"} close={toggleModal} getAllEquipment={getAllEquipment}/>}
        </section>

    )

}

export default Equipment;