import {NavLink} from 'react-router-dom'

export default function LoginModal({setAuthenticated, setDisplay}){

    return (
        <>
        <div className="ml-3 relative flex">
            <NavLink to='/login' className="text-yellow hover:bg-brown hover:text-amber px-6 py-4 rounded-md text-xl" role="menuitem"  style={{fontFamily: 'Bourbon Grotesque'}}>Login</NavLink>
        
            <NavLink to='/sign-up' className="text-yellow hover:bg-brown hover:text-amber px-6 py-4 rounded-md text-xl"  style={{fontFamily: 'Bourbon Grotesque'}}>Signup</NavLink>
        </div>
        </>
    )
}