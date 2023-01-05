import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from './lib/modal'
import './lib/style.css'


const App = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleClick = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true)
    }

    return (
        <div>
            <div onClick={(e) => toggleClick()}>Click to Open/Close</div>
            <Modal isOpen={isOpen} close={setIsOpen}></Modal>
        </div>
    )
};

ReactDOM.render(<App></App>, document.getElementById("root"));