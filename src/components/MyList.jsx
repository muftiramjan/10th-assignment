import { useEffect, useState } from "react";
import { useContext } from "react";
import { AoutContext } from "./AuothProvider/Auothprovhider";




const MyList = () => {

const {user} = useContext(AoutContext) || {} ;
const [item,setitem]=useState([]);
console.log(user);
useEffect( () =>{
    fetch(`http://localhost:5000/sport/${user?.UserEmail}`)
    .then(res => res.json())
    .then(data => {
        setitem(data);
    })
},[user])


    return (
       <div>
        <p>user:{user.length}</p>
        
       </div>
    );
};

export default MyList;