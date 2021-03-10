import React from 'react'
import Modal from 'react-modal'

const customStyles = {
    content : {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: "1.5em",
      borderRadius: "2px",
      border: "none",
      width: "40%",
      boxSizing: "border-box",

    },
    overlay : {
        // backgroundColor: "transparent",
        backgroundColor: "rgba(0, 0, 0, .6)",
        zIndex: "100",
    }
};

export default function CustomModal(props){

    return (
        <Modal style={customStyles} isOpen={props.showModal} ariaHideApp={false}>
          {props.children}
        </Modal>
    )
}