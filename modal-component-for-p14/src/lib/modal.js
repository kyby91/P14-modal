import React, { useState } from "react";

const Modal = ({ isOpen , close }) => {

    return (
        <>
            {isOpen ? <div className="modal child1">
                <div className="modal-text">Employee Created</div>
                <div><i className="fa-solid fa-xmark" onClick={(e) => close(false)}></i></div>
            </div>
                : ""}
        </>
    );
};

export default Modal;