import AddButton from "../../Components/AddButton/AddButton";
import Item from "../../Components/Item/Item";
import Search from "../../Components/Search/Search";
import "./Equipment.scss";
import addItem from "../../Data/Images/addItem.svg";

const Equipment = () => {

    return (

        <section className="equipment">
            <section className="equipment__grid">
                <div className="equipment__options">
                    <Search />
                    <div className="equipment__addItem">
                        <AddButton text="Add item" image={addItem} alt="add supplier icon"></AddButton>
                    </div>
                </div>
                <p className="equipment__item">Item</p>
                <p className="equipment__serial">Serial</p>
                <p className="equipment__addTemperature">Add temperature</p>
                <p className="equipment__update">Update Info</p>
                <p className="equipment__remove">Remove</p>
            </section>
            <div className="equipment__data">
                <Item name="Fridge" serial="AB345YZ"/>
                <Item name="Fridge" serial="AB345YZ"/>
            </div>
        </section>

    )

}

export default Equipment;