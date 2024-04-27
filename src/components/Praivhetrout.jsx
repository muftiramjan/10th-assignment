
import { useContext } from 'react';
import { AoutContext } from './AuothProvider/Auothprovhider';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types'

const Praivhetrout = ({children}) => {
    console.log(children)
    const {user, loading}=useContext(AoutContext)
    const location =useLocation();

    if(loading){
        return <div className='flex justify-center items-center h-40'><span className="loading loading-ring loading-lg"></span></div>
    }

    if(!user){
        return <Navigate to="/LoginFrom" state={location.pathname}></Navigate>
    }
    return (
    <div>
        {children}
    </div>);
};

Praivhetrout.propTypes ={
    children: PropTypes.node
}

export default Praivhetrout;