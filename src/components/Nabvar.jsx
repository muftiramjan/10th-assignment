import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AoutContext } from './AuothProvider/Auothprovhider';
const Navbar = () => {
  const { user, logOut } = useContext(AoutContext);
  console.log(user)
  return (
    <div className="navbar bg-red-50 p-3">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="z-50 menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><NavLink to="/">Home</NavLink> </li>
            {
              user && <li>
                <NavLink to="/UpdateProfile">Update Profile</NavLink>
              </li>
            }
            {
              user && <li>
                <NavLink to="/MyList">MyList</NavLink>
              </li>
            }
            <li><NavLink to="/Services">Services</NavLink></li>
            {
              user && <li><NavLink to="/About">About</NavLink></li>
            }
            <li>
              {
                user ? <button onClick={() => logOut()} className='btn btn-primary'>logOut</button> :
              <NavLink className="btn bg-[#23BE0A]" to="/login">login</NavLink>
              }
            </li>


          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold text-indigo-600">Exotic<span className='hidden md:inline'>Escapes</span></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><NavLink to="/">Home</NavLink> </li>
          {
            user && <li>
              <NavLink to="/UpdateProfile">Update Profile</NavLink>
            </li>
          }
          <li><NavLink to="/TouristsSpotForm">SpotForm</NavLink></li>
          {
            user && <li><NavLink to="/About">About</NavLink></li>
          }
          {
            user && <li><NavLink to="/MyList">MyList</NavLink></li>
          }

        </ul>
      </div>
      <div className="navbar-end flex">
        {user ?
          <>
            <div className="avatar mr-6">
              <div title={user.displayName} className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user.photoURL} />
              </div>
            </div>
            <div className='hidden md:inline'>
              <button onClick={() => logOut()}  className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" to="/login">logOut</button>
            </div>
          </>
          : <NavLink className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" to="/login">login</NavLink>
        }
      </div>
    </div>
  );
};

export default Navbar;