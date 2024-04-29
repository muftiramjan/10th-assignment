import { useEffect, useState } from "react";
import { useContext } from "react";
import { AoutContext } from "./AuothProvider/Auothprovhider";

const MyList = () => {
const {user} = useContext(AoutContext) || {} ;
const [items,setitem]=useState([]);
// console.log(user);
useEffect( () =>{
    fetch(`http://localhost:5000/sport/${user?.email}`)
    .then(res => res.json())
    .then(data => {
        setitem(data);
    })
},[user])


    return (
    <div>
        <p>item:{items.length}</p>
       {
        items.map(item => 
        <div key={item._id} >
            {item.UserEmail}
            <p>{item.UserName}</p>
            <p>{item.UserName}</p>
            <p>{item.UserName}</p>
            <p>{item.UserName}</p>
            <p>{item.UserName}</p>
            <p>{item.UserName}</p>

            </div>)

       }
       <div>
        
       </div>
    </div>
    );
};

export default MyList;