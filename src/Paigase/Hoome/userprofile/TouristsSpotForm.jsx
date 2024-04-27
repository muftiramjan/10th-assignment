import { Helmet } from "react-helmet-async";
import AddToristSpotFrom from "../../../components/AddToristSpotFrom";
import { useLoaderData } from "react-router-dom";
import SpotsCurds from "./SpotsCurds";


const TouristsSpotForm  = () => {
  
 const spots = useLoaderData()

    return (
        <div>
             <Helmet>
                <title>Services</title>
            </Helmet>
         <div className="my-6 bg-slate-200 p-3">
         <h2 className="text-center font-bold text-4xl text-slate-950">Tourists Spot form:</h2>
            <AddToristSpotFrom></AddToristSpotFrom>
            
         </div>
         <div>
            <p>All Tourists Spot page:{spots.length}</p>
            {
                spots.map(spot => <SpotsCurds 
                key={spot._id}
                spot={spot}
                ></SpotsCurds>)
            }
         </div>
        </div>
       
    );
};

export default TouristsSpotForm ;