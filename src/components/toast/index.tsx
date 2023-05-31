import React from "react";
import './toast.css'

//props interface for Toast component
interface Props {
    onConfirm: Function;  //returns a value when user click "confirm" button
    closeToast: Function; //returns a value when user click "cancel" button
    isOpen: boolean;
}

const Toast: React.FC<Props> = ({
    onConfirm,
    closeToast,
    isOpen
}) => {
    return (
        <React.Fragment>
            {
                //toast will visible if "isOpen" is true
                isOpen ?
                    <div className="toastWrapper">
                        <div className="toastContent">
                            <h3>Toast title</h3>
                            <p>Long details go here after the title, long details go here after the title </p>
                        </div>
                        <div className="buttonWrapper">
                            {/* confirm button print console.log*/}
                            <button
                                className="btn-primary"
                                onClick={() => { onConfirm("user clicked YES!") }}
                            >Confirm</button>

                            {/* cancel button closes the toast */}
                            <button
                                className="btn-secondary"
                                onClick={() => { closeToast(false) }}
                            >Cancel</button>
                        </div>
                    </div>
                    : null
            }

        </React.Fragment>
    )
}

export default Toast