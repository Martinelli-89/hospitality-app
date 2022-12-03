import "./Modal.scss";

const Modal = ({type, close}) => {

    let render;

    if(type == "supplier") {
        render = <p>Delivery</p>;
    }

    if(type == "item") {
        render = <p>Item</p>
    }

    return (

        <div className="modal">
            <div className="modal__content">
                {render}
                <button onClick={close}>close</button>
            </div>
        </div>

    )

}

export default Modal;