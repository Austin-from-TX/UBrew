import React from 'react';
import { NavLink } from 'react-router-dom';
import ProfileLinks from '../ProfileLinks'
import LoginModal from '../LoginModal'
import SearchBar from "../SearchBar/SearchBar";
import logo from './logo-update.png'


const NavBar = ({ setAuthenticated , authenticated, setDisplay }) => {
  
  
  
  return (
    <>
    
    <div>
      <nav className='bg-blue border-b-4 border-brown' >
        <div className="mx-auto px-4 sm:px-6 lg:px-2">
          <div className="flex items-center justify-between h-36">
            <div className="flex items-center">
              <div className="flex-shrink-0">
              {!authenticated && <NavLink to='/' exact={true} activeclassName="active">
            <img src={logo} className="h-36 w-36"/>
          </NavLink>}
          {authenticated && <NavLink to={`/profile`} exact={true} activeclassName="active">
           <img className="h-36 w-36" src={logo}  />
          </NavLink>}
                
              </div>
            </div>
              <div className="hidden md:block flex">
                <div className="ml-10 mx-auto flex-grow items-baseline space-x-4">
                
                  <SearchBar className='flex-grow' />
                  
                </div>
              </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                {authenticated ? 
                  <ProfileLinks setAuthenticated={setAuthenticated} setDisplay={setDisplay}/> : 
                  <LoginModal setAuthenticated={setAuthenticated} setDisplay={setDisplay}/>
                }
               
                
              </div>
            </div>
            
          </div>
        </div>
    
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3" role='menu'>
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <NavLink to='/login' className="text-yellow hover:bg-brown hover:text-amber px-6 py-4 rounded-md text-xl" role="menuitem"  style={{fontFamily: 'Bourbon Grotesque'}}>Login</NavLink>
    
            <NavLink to='/sign-up' className="text-yellow hover:bg-brown hover:text-amber px-6 py-4 rounded-md text-xl"  style={{fontFamily: 'Bourbon Grotesque'}}>Signup</NavLink>
    
      
          </div>
        </div>
      </nav>
    </div>
    </>
  );
}

export default NavBar;