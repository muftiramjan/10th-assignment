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
            {/* {item.UserEmail} */}
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>email</th>
        <th>spot</th>
        <th>update/delete</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
    </tbody>
  </table>
</div>
            </div>)

       }
       <div>
        
       </div>
    </div>
    );
};

export default MyList;