
import { Helmet } from "react-helmet-async";
import SpotsCurds from "./userprofile/SpotsCurds";
import AddToristSpotFrom from "../../components/AddToristSpotFrom";


const AllAdededSpot = () => {
    return (
        <div>
            <Helmet>
                <title>AllAdededSpot</title>
            </Helmet>
            <AddToristSpotFrom></AddToristSpotFrom> 
        </div>
    );
};

export default AllAdededSpot;