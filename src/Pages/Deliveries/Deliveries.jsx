import Supplier from "../../Components/Supplier/Supplier";
import "./Deliveries.scss";

const Deliveries = () => {

    return (

        <section className="deliveries">
            <section className="deliveries__grid">
                <div className="deliveries__options">
                    <div>Filter</div>
                    <div>Add supplier</div>
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
        </section>

    )

}

export default Deliveries;