import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddTouristSpotForm = () => {
  const formdata = useLoaderData();
  console.log(formdata);

  const handleAddTouristSpot = (event) => {
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

    const newSpot = { useimageURL, tourists_spot_name, country_Name, location, shortdescription, average_cost, seasonality, travel_time, totaVisitorsPerYear, UserEmail, UserName };
    console.log(newSpot);

    fetch('https://ten-assaiment-server.vercel.app/sport', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Tourist Spot added successfully',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
        }
      });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Add Tourist Spot</h2>
        <form onSubmit={handleAddTouristSpot} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-600 font-medium mb-1">Image URL</label>
              <input className="w-full bg-gray-200 border border-gray-300 rounded p-2" type="text" placeholder="Image URL" name="useimageURL" />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">Tourist Spot Name</label>
              <input className="w-full bg-gray-200 border border-gray-300 rounded p-2" type="text" placeholder="Tourist Spot Name" name="tourists_spot_name" />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">Country Name</label>
              <input className="w-full bg-gray-200 border border-gray-300 rounded p-2" type="text" placeholder="Country Name" name="country_Name" />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">Location</label>
              <input className="w-full bg-gray-200 border border-gray-300 rounded p-2" type="text" placeholder="Location" name="location" />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">Short Description</label>
              <input className="w-full bg-gray-200 border border-gray-300 rounded p-2" type="text" placeholder="Short Description" name="shortdescription" />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">Average Cost</label>
              <input className="w-full bg-gray-200 border border-gray-300 rounded p-2" type="text" placeholder="Average Cost" name="average_cost" />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">Seasonality</label>
              <input className="w-full bg-gray-200 border border-gray-300 rounded p-2" type="text" placeholder="Seasonality" name="seasonality" />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">Travel Time</label>
              <input className="w-full bg-gray-200 border border-gray-300 rounded p-2" type="text" placeholder="Travel Time" name="travel_time" />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">Total Visitors Per Year</label>
              <input className="w-full bg-gray-200 border border-gray-300 rounded p-2" type="text" placeholder="Total Visitors Per Year" name="totaVisitorsPerYear" />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">User Email</label>
              <input className="w-full bg-gray-200 border border-gray-300 rounded p-2" type="text" placeholder="User Email" name="UserEmail" />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">User Name</label>
              <input className="w-full bg-gray-200 border border-gray-300 rounded p-2" type="text" placeholder="User Name" name="UserName" />
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500 focus:outline-none focus:bg-green-700 transition-all duration-300">
              Add Spot
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTouristSpotForm;
