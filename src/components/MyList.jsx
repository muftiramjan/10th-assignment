import { useEffect, useState } from "react";
import { useContext } from "react";
import { AoutContext } from "./AuothProvider/Auothprovhider";




const MyList = () => {

const {user} = useContext(AoutContext) || {} ;
const [item,setitem]=useState([]);
console.log(user);
useEffect( () =>{
    fetch(`http://localhost:5000/sport/${user?.email}`)
    .then(res => res.json())
    .then(data => {
        setitem(data);
    })
},[user])


    return (
    <div>
        <p>item:{item.length}</p>
        <p>tourists_spot_name{item.tourists_spot_name}</p>
    </div>
    );
};

export default MyList;