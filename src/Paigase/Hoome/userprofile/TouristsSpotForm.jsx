import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import SpotsCurds from "./SpotsCurds";

const TouristsSpotForm = () => {
  const spots = useLoaderData();
  const [sortOrder, setSortOrder] = useState("asc"); 
  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const sortedSpots = [...spots].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.average_cost - b.average_cost;
    } else {
      return b.average_cost - a.average_cost;
    }
  });

  return (
    <div>
      <Helmet>
        <title>All tourest Spots</title>
      </Helmet>
      <div className="my-6 bg-slate-200 p-3">
        <h2 className="text-center font-bold text-2xl text-slate-950">ALL TOURIST SPOTS</h2>
        <div className="flex justify-center my-4">
          <label className="mr-2 rounded bg-green-500 p-2">Sort by Cost:</label>
          <select onChange={handleSortChange} value={sortOrder}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {sortedSpots.map((spot) => (
          <SpotsCurds key={spot._id} spot={spot} />
        ))}
      </div>
    </div>
  );
};

export default TouristsSpotForm;
