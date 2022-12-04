import "./AddTemperatureForm.scss";
import close from "../../Data/Images/close.svg";

const NewItemForm = ({closeModal, data}) => {

    return (

        <section className="addTemperatureForm">
            <p className="addTemperatureForm__serial">Serial</p>
            <p className="addTemperatureForm__serialNumber">{data.serial}</p>
            <p className="addTemperatureForm__type">Type</p>
            <p className="addTemperatureForm__typeItem">{data.type}</p>
            <p className="addTemperatureForm__temperature">Temperature</p>
            <input className="addTemperatureForm__temperatureInput"></input>
            <p className="addTemperatureForm__date">Date</p>
            <input className="addTemperatureForm__dateInput"></input>
            <img src={close} className="addTemperatureForm__close" alt="close icon" onClick={closeModal}></img>
        </section>

    )

}

export default NewItemForm;