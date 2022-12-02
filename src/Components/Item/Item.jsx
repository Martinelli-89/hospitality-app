import "./Item.scss";
import add from "../../Data/Images/addSupplier.svg";
import update from "../../Data/Images/update.svg";
import remove from "../../Data/Images/delete.svg";

const item = ({name, serial}) => {

    return (

        <div className="item">
            <p className="item__name">{name}</p>
            <p className="item__serial">{serial}</p>
            <img className="item__add" src={add}></img>
            <img className="item__update" src={update}></img>
            <img className="item__remove" src={remove}></img>
        </div>

    )

}

export default item;