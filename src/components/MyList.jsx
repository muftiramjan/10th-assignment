import { useEffect, useState } from "react";
import { useContext } from "react";
import { AoutContext } from "./AuothProvider/Auothprovhider";
import { NavLink } from "react-router-dom";

const MyList = () => {
    const { user } = useContext(AoutContext) || {};
    const [items, setitem] = useState([]);
    const [control, setcontrol] = useState(false);
    // console.log(user);
    useEffect(() => {
        fetch(`https://my-coffee-shope-server.vercel.app/sport/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setitem(data);
            })
    }, [user,control])

    const handelDelete = (id) => {
        fetch(`https://my-coffee-shope-server.vercel.app/delete/${id}`,{
            method:"DELETE",
        })
        .then(res => res.json())
        .then(data => {
        if(data. deletedCount>0){
            setcontrol(!control)
        }
        })
    }
    return (
        <div>
            <p>item:{items.length}</p>
            {
                items.map(item =>
                    <div key={item._id} >
                        {/* {item.UserEmail} */}
                        <div className="overflow-x-auto gap-y-24 space-y-7">
                            <table className="table table-zebra ">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>email</th>
                                        <th>spot</th>
                                        <div>
                                            <th>

                                            </th>
                                        </div>

                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <th>1</th>
                                        <td>{item.UserName}</td>
                                        <td>{item.UserEmail}</td>
                                        <td>{item.tourists_spot_name}</td>
                                        <td>  <NavLink className="btn btn-outline" to={`/CurdDitels/${item._id}`}>update</NavLink>
                                            <NavLink onClick={ () =>handelDelete(item._id)} className="btn btn-outline" >delete</NavLink></td>
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