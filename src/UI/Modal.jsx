import React from 'react'
import { createPortal } from 'react-dom'

const Modal = (props) => {
  return (
    <div >
        {
            createPortal(
                <div style={{border: "2px solid", width: "200px"}}>
                    <h1>MODAL</h1>, 
                    <button onClick={props.onClose}>close</button>
                </div>,
            document.getElementById("modal"))
        }
    </div>
  )
}

export default Modal
