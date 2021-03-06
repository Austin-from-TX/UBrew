import LogoutButton from '../auth/LogoutButton';
import { useSelector } from 'react-redux';

export default function ProfileLinks({setAuthenticated, setDisplay}){

    const user = useSelector(state => state.session.user)
    
    return (
        <>
        {user && 
        <div className="ml-3 relative flex">
                            
            <a href={`/profile`} className="text-yellow hover:bg-brown hover:text-amber px-6 py-4 rounded-md text-xl" role="menuitem"  style={{fontFamily: 'Bourbon Grotesque'}}>Home</a>
            <a href={`/users/${user.id}/brews`} className="text-yellow hover:bg-brown hover:text-amber px-6 py-4 rounded-md text-xl" role="menuitem"  style={{fontFamily: 'Bourbon Grotesque'}}>Brews</a>
            <a href={`/brews/add/new`} className="text-yellow hover:bg-brown hover:text-amber px-6 py-4 rounded-md text-xl" role="menuitem"  style={{fontFamily: 'Bourbon Grotesque'}}>Upload a Brew</a>
            <a href={`/users/${user.id}/rotation`} className="text-yellow hover:bg-brown hover:text-amber px-6 py-4 rounded-md text-xl" role="menuitem"  style={{fontFamily: 'Bourbon Grotesque'}}>Rotation</a>
            <LogoutButton setAuthenticated={setAuthenticated} setDisplay={setDisplay} />

        </div>
        }
        </>
    )
}