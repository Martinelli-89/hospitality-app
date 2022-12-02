import "./Supplier.scss";
import add from "../../Data/Images/addSupplier.svg";
import update from "../../Data/Images/update.svg";
import remove from "../../Data/Images/delete.svg";


const Supplier = ({name}) => {

    return (

        <div className="supplier">
            <p className="supplier__name">{name}</p>
            <img className="supplier__add" src={add}></img>
            <img className="supplier__update" src={update}></img>
            <img className="supplier__remove" src={remove}></img>
        </div>

    )

}

export default Supplier;