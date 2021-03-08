import {useState} from 'react'
import {NavLink} from 'react-router-dom'
import Modal from 'react-modal'
import SignUpForm from '../auth/SignUpForm'
import LoginForm from '../auth/LoginForm'
import suds from './beer-suds.jpg'

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

export default function LoginModal({setAuthenticated, setDisplay}){

    const [showModal, setShowModal] = useState(false)
    const [showLoginForm, setShowLoginForm] = useState(true)

    const showSignUpModal = () => {
        setShowLoginForm(false)
        setShowModal(true)
        setDisplay(false)
    }

    const showLoginModal = () => {
        setShowLoginForm(true)
        setShowModal(true)
        setDisplay(false)
    }

    const onClick = () => {
        setShowModal(false)
        setDisplay(true)
    }

    return (
        <>
        <div className="ml-3 relative flex">
            <button onClick={showLoginModal} className="text-yellow hover:bg-brown hover:text-amber px-6 py-4 rounded-md text-xl" role="menuitem"  style={{fontFamily: 'Bourbon Grotesque'}}>Login</button>
        
            <button onClick={showSignUpModal} className="text-yellow hover:bg-brown hover:text-amber px-6 py-4 rounded-md text-xl"  style={{fontFamily: 'Bourbon Grotesque'}}>Signup</button>
        </div>
        <Modal style={customStyles} isOpen={showModal} ariaHideApp={false}>
        {
            showLoginForm ?
            <>
             <div className="login-modal-top-row">
                        <h1 className="title">Login</h1>
                        <button className="btn__x" onClick={onClick}>
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                    <LoginForm showLoginForm={showLoginForm} setShowLoginForm={setShowLoginForm}  setAuthenticated={setAuthenticated} />
            
            </>
            :
            <>

                <div className="signup-modal-top-row">
                    <h1 className="title">Sign Up</h1>
                    <button className="btn__x" onClick={onClick}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                <SignUpForm setShowLoginForm={setShowLoginForm} setAuthenticated={setAuthenticated} />
            </>}
        </Modal>
        </>
    )
}