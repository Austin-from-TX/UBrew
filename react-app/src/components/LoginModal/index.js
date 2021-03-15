import {useState} from 'react'
import {NavLink} from 'react-router-dom'
import CustomModal from '../CustomModal'
import SignUpForm from '../auth/SignUpForm'
import LoginForm from '../auth/LoginForm'


export default function LoginModal({setAuthenticated, authenticated}){

    const [showLoginModal, setShowLoginModal] = useState(false)
    const [showSignUpModal, setShowSignUpModal] = useState(false)



    return (
        <>
        <CustomModal showModal={showLoginModal} >
            <LoginForm authenticated={authenticated} setAuthenticated={setAuthenticated} setShowLoginModal={setShowLoginModal} setShowSignUpModal={setShowSignUpModal}/>
        </CustomModal>
        <CustomModal showModal={showSignUpModal} >
            <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} setShowLoginModal={setShowLoginModal} setShowSignUpModal={setShowSignUpModal}/>
        </CustomModal>
        <div className="ml-3 relative flex">
            <button onClick={e => setShowLoginModal(true)} className="transition duration-500 ease-in-out text-yellow hover:bg-brown hover:text-yellow-dark px-6 py-4 rounded-md text-xl" role="menuitem"  style={{fontFamily: 'Bourbon Grotesque'}}>Login</button>
        
            <button onClick={e => setShowSignUpModal(true)} className="transition duration-500 ease-in-out text-yellow hover:bg-brown hover:text-yellow-dark px-6 py-4 rounded-md text-xl"  style={{fontFamily: 'Bourbon Grotesque'}}>Signup</button>
        </div>
        
        </>
    )
}