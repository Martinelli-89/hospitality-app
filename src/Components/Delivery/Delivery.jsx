import "./Delivery.scss";

const Delivery = ({data}) => {

    return (

        <div className="deliveryCard">
            <p className="delivery__supplier">{data.supplier}</p>
            <p className="delivery__type">{data.type}</p>
            <p className="delivery__temperature">{data.temperature}</p>
            <p className="delivery__date">{data.date}</p>
            <p className="delivery__accepted">{data.accepted? "Yes" : "No"}</p>
        </div>

    )

}

export default Delivery;