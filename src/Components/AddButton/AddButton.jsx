import "./AddButton.scss";

const AddButton = ({text, image}) => {

    return (
        <div className="addButton">
            <p>{text}</p>
            <img src={image}></img>
        </div>
    )

}

export default AddButton;