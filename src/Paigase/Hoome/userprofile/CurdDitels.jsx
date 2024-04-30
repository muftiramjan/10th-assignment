import { useEffect } from "react";
import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Swal from "sweetalert2";
const CurdDitels = () => {
    const {id} =useParams();
    console.log(id);
    const [spot,setSpots]=useState({});
    const handelUpdet= (event) =>{
        event.preventDefault();
        const form = event.target;
        const useimageURL = form.useimageURL.value;
        const tourists_spot_name = form.tourists_spot_name.value;
        const country_Name = form.country_Name.value;
        const location = form.location.value;
        const shortdescription = form.shortdescription.value;
        const average_cost = form.average_cost.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const totaVisitorsPerYear = form.totaVisitorsPerYear.value;
        const newSport = { useimageURL, tourists_spot_name, country_Name, location, shortdescription, average_cost, seasonality, travel_time,totaVisitorsPerYear};
        console.log(newSport);

        fetch(`http://localhost:5000/updateSpot/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newSport)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.matchedCount) {
                Swal.fire({
                    title: 'success!',
                    text: 'Tourist Spot update succesfuy',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        })

    }
    useEffect( () => {
        fetch(`http://localhost:5000/Singelspot/${id}`)
        .then (res => res.json())
        .then(data => {
            setSpots(data)
            console.log(data)
        })
    },[id])
    return (
        <div>

        <div className="">
            <h1 className='text-center font-bold text-4xl text-green-500'>updete Form Data here</h1>
            <form onSubmit={handelUpdet} className=" mx-auto bg-[#F4F3F0] w-full p-8 mb-4">
                <div className="flex justify-between space-x-3">
                    <div className=" w-1/2">
                        <p>image</p>
                        <input className="bg-slate-100 border p-1 rounded w-full" type="text" placeholder="use image URL" name="useimageURL" defaultValue={spot.useimageURL} />
                    </div>
                    <div className="w-1/2">
                        <p>tourists_spot_name</p>
                        <input className="bg-slate-100 border p-1 rounded w-full" type="text" placeholder="tourists_spot_name" name="tourists_spot_name" defaultValue={spot.tourists_spot_name} />
                    </div>
                </div>
                <div className="flex justify-between space-x-3">
                    <div className=" w-1/2">
                        <p>country_Name</p>
                        <input className="bg-slate-100 border p-1 rounded w-full" type="text" placeholder="country_Name" name="country_Name" defaultValue={spot.country_Name} />
                    </div>
                    <div className="w-1/2">
                        <p>location</p>
                        <input className="bg-slate-100 border p-1 rounded w-full" type="text" placeholder="location " name="location" defaultValue={spot.location} />
                    </div>
                </div>
                <div className="flex justify-between space-x-3">
                    <div className=" w-1/2">
                        <p>short description</p>
                        <input className="bg-slate-100 border p-1 rounded w-full" type="text" placeholder="short description" name="shortdescription" defaultValue={spot.shortdescription} />
                    </div>
                    <div className="w-1/2">
                        <p>average_cost</p>
                        <input className="bg-slate-100 border p-1 rounded w-full" type="text" placeholder="average_cost" name="average_cost" defaultValue={spot.average_cost} />
                    </div>
                </div>
                <div className="flex justify-between space-x-3">
                    <div className=" w-1/2">
                        <p>seasonality</p>
                        <input className="bg-slate-100 border p-1 rounded w-full" type="text" placeholder="seasonality" name="seasonality" defaultValue={spot.seasonality} />
                    </div>
                    <div className="w-1/2">
                        <p>travel_time </p>
                        <input className="bg-slate-100 border p-1 rounded w-full" type="text" placeholder="travel_time" name="travel_time" defaultValue={spot.travel_time}/>
                    </div>
                </div>
                <div className="flex justify-between space-x-3">
                    <div className=" w-1/2">
                        <p>totaVisitorsPerYear</p>
                        <input className="bg-slate-100 border p-1 rounded w-full" type="text" placeholder="totaVisitorsPerYear" name="totaVisitorsPerYear" defaultValue={spot.totaVisitorsPerYear} />
                    </div>
                    
                </div>
              
                <button className="btn btn-block bg-black text-white">updete</button>
              <NavLink to="/MyList" className="btn btn-block bg-black text-white">Bok to my list</NavLink>
            </form>
        </div>

    </div>
    );
};

export default CurdDitels;