import { useEffect, useState, useContext } from "react";
import { AoutContext } from "./AuothProvider/AuothProvider";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const MyList = () => {
    const { user } = useContext(AoutContext) || {};
    const [items, setItems] = useState([]);
    useEffect(() => {
        const fetchItems = async () => {
            if (user?.email) {
                try {
                    const response = await fetch(`http://localhost:5000/sportByEmail/${user.email}`);
                    const data = await response.json();
                    setItems(data);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            }
        };

        fetchItems();
    }, [user?.email]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await fetch(`http://localhost:5000/delete/${id}`, {
                        method: "DELETE",
                    });
                    const data = await response.json();
                    if (data.deletedCount > 0) {
                        setItems(items.filter(item => item._id !== id));
                        Swal.fire("Deleted!", "Your file has been deleted.", "success");
                    }
                } catch (error) {
                    console.error("Error deleting item:", error);
                }
            }
        });
    };

    return (
        <div style={{ padding: '20px' }}>
            <Helmet>
                <title>My List</title>
            </Helmet>
            <h1 style={{ fontSize: '24px', marginBottom: '10px', textAlign: 'center' }}>My List</h1>
            <p style={{ textAlign: 'center', fontSize: '18px', marginBottom: '20px' }}>Items: {items.length}</p>
            <div style={{ marginTop: '20px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead style={{ backgroundColor: '#f4f4f4' }}>
                        <tr>
                            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>#</th>
                            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Name</th>
                            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Email</th>
                            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Spot</th>
                            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={item._id}>
                                <td style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>{index + 1}</td>
                                <td style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>{item.UserName}</td>
                                <td style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>{item.UserEmail}</td>
                                <td style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>{item.tourists_spot_name}</td>
                                <td style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>
                                    <NavLink 
                                        style={{
                                            border: '1px solid #3085d6',
                                            backgroundColor: 'white',
                                            color: '#3085d6',
                                            cursor: 'pointer',
                                            padding: '5px 10px',
                                            textDecoration: 'none',
                                            marginRight: '10px'
                                        }} 
                                        to={`/CurdDitels/${item._id}`}
                                    >
                                        Update
                                    </NavLink>
                                    <button 
                                        style={{
                                            border: '1px solid #3085d6',
                                            backgroundColor: 'white',
                                            color: '#3085d6',
                                            cursor: 'pointer',
                                            padding: '5px 10px'
                                        }} 
                                        onClick={() => handleDelete(item._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyList;
