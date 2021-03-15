import LogoutButton from '../auth/LogoutButton';
import { useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom'

export default function ProfileLinks({setAuthenticated, setDisplay}){

    const user = useSelector(state => state.session.user)
    // const history = useHistory()

    // const onClick = (e) => {
    //     e.preventDefault()
    //     history.push(`$rotations/${user.id}`)
    // }

    return (
        <>
        {user && 
        <div className="flex-col ml-3 relative xs:flex">
            <NavLink to={`/users/${user.id}`} className="transition duration-500 ease-in-out text-yellow hover:bg-brown hover:text-yellow-dark px-6 py-4 rounded-md text-xl" role="menuitem"  style={{fontFamily: 'Bourbon Grotesque'}}>Home</NavLink>
            <NavLink to={`/search/brews`} className="transition duration-500 ease-in-out text-yellow hover:bg-brown hover:text-yellow-dark px-6 py-4 rounded-md text-xl" role="menuitem"  style={{fontFamily: 'Bourbon Grotesque'}}>Brews</NavLink>             
            <NavLink to={`/rotations/${user.id}`} className="transition duration-500 ease-in-out text-yellow hover:bg-brown hover:text-yellow-dark px-6 py-4 rounded-md text-xl" role="menuitem"  style={{fontFamily: 'Bourbon Grotesque'}}>Rotation</NavLink>
            <LogoutButton setAuthenticated={setAuthenticated} setDisplay={setDisplay} />

        </div>
        }
        </>
    )
}