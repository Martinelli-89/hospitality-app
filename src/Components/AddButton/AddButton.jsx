import "./AddButton.scss";

const AddButton = ({text, image, onClick}) => {

    return (
        <div className="addButton" onClick={onClick}>
            <p>{text}</p>
            <img src={image}></img>
        </div>
    )

}

export default AddButton;