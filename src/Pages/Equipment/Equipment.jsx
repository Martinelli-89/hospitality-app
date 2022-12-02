import Item from "../../Components/Item/Item";
import "./Equipment.scss";

const Equipment = () => {

    return (

        <section className="equipment">
            <section className="equipment__grid">
                <div className="equipment__options">
                    <div>Filter</div>
                    <div>Add equipment</div>
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