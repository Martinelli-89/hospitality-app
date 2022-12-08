import { useState } from "react";
import Delivery from "../Delivery/Delivery";
import SearchDelivery from "../SearchDelivery/SearchDelivery";
import "./FilterDelivery.scss";


const DeliveryData = ({suppliers}) => {

    const [deliveries, setDeliveries] = useState ([]);

    const updateDeliveries = async(searchFunction) => {
        setDeliveries(await searchFunction);
    }

    return (

        <section className="deliveryData">
            <section className="deliveryData__grid">
                <p className="deliveryData__title">Search deliveries</p>
                <div className="deliveryData__options">
                    <SearchDelivery suppliers={suppliers} updateDeliveries={updateDeliveries}/>
                </div>
                <p className="deliveryData__supplier">Supplier</p>
                <p className="deliveryData__type">Type</p>
                <p className="deliveryData__temperature">Temperature</p>
                <p className="deliveryData__date">Date</p>
                <p className="deliveryData__accepted">Accepted</p>
            </section>
            <div className="deliveryData__data">
                {deliveries.map((delivery, index) => { 
                    return <Delivery key={index} data={delivery}/>
                })}
            </div>
        </section>

    )

}

export default DeliveryData;