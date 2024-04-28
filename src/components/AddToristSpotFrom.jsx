
import Swal from 'sweetalert2'
const AddToristSpotFrom = () => {
    const HandaleAddCoffe = event => {
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
        const UserEmail = form.UserEmail.value;
        const UserName = form.UserName.value;

        const newSport = { useimageURL, tourists_spot_name, country_Name, location, shortdescription, average_cost, seasonality, travel_time,totaVisitorsPerYear,UserEmail,UserName};
        console.log(newSport);
        // send data
        fetch('http://localhost:5000/sport', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newSport)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Tourist Spot adeded succesfuy',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }

            })
    }


    return (
        <div>

            <div className="">
                <h1 className='text-center font-bold text-4xl text-green-500'>Adede Form Data here</h1>
                <form onSubmit={HandaleAddCoffe} className=" mx-auto bg-[#F4F3F0] w-full p-8 mb-4">
                    <div className="flex justify-between space-x-3">
                        <div className=" w-1/2">
                            <p>image</p>
                            <input className="bg-slate-100 border p-1 rounded w-full" type="text" placeholder="use image URL" name="useimageURL" />
                        </div>
                        <div className="w-1/2">
                            <p>tourists_spot_name</p>
                            <input className="bg-slate-100 border p-1 rounded w-full" type="text" placeholder="tourists_spot_name" name="tourists_spot_name" />
                        </div>
                    </div>
                    <div className="flex justify-between space-x-3">
                        <div className=" w-1/2">
                            <p>country_Name</p>
                            <input className="bg-slate-100 border p-1 rounded w-full" type="text" placeholder="country_Name" name="country_Name" />
                        </div>
                        <div className="w-1/2">
                            <p>location</p>
                            <input className="bg-slate-100 border p-1 rounded w-full" type="text" placeholder="location " name="location" />
                        </div>
                    </div>
                    <div className="flex justify-between space-x-3">
                        <div className=" w-1/2">
                            <p>short description</p>
                            <input className="bg-slate-100 border p-1 rounded w-full" type="text" placeholder="short description" name="shortdescription" />
                        </div>
                        <div className="w-1/2">
                            <p>average_cost</p>
                            <input className="bg-slate-100 border p-1 rounded w-full" type="text" placeholder="average_cost" name="average_cost" />
                        </div>
                    </div>
                    <div className="flex justify-between space-x-3">
                        <div className=" w-1/2">
                            <p>seasonality</p>
                            <input className="bg-slate-100 border p-1 rounded w-full" type="text" placeholder="seasonality" name="seasonality" />
                        </div>
                        <div className="w-1/2">
                            <p>travel_time </p>
                            <input className="bg-slate-100 border p-1 rounded w-full" type="text" placeholder="travel_time" name="travel_time" />
                        </div>
                    </div>
                    <div className="flex justify-between space-x-3">
                        <div className=" w-1/2">
                            <p>totaVisitorsPerYear</p>
                            <input className="bg-slate-100 border p-1 rounded w-full" type="text" placeholder="totaVisitorsPerYear" name="totaVisitorsPerYear" />
                        </div>
                        <div className="w-1/2">
                            <p>User Email</p>
                            <input className="bg-slate-100 border p-1 rounded w-full" type="text" placeholder="User Email" name="UserEmail" />
                        </div>
                    </div>
                    <div className="flex justify-between space-x-3">
                        <div className=" w-1/2">
                            <p>User Name</p>
                            <input className="bg-slate-100 border p-1 rounded w-full" type="text" placeholder="User Name" name="UserName" />
                        </div>
                    </div>
                    <button className="btn btn-block bg-black text-white">submit</button>
                </form>
            </div>

        </div>
    );
};

export default AddToristSpotFrom;

