import "./Temperature.scss";

const Temperature = ({data}) => {

    return (

        <div className="temperatureCard">
            <p className="delivery__supplier">{data.equipmentSerialNumber}</p>
            <p className="delivery__type">{data.equipmentType}</p>
            <p className="delivery__temperature">{data.temperature}</p>
            <p className="delivery__date">{data.date}</p>
        </div>

    )

}

export default Temperature;