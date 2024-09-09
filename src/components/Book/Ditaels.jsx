import { NavLink, useLoaderData } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
const Ditaels = () => {
    const spots = useLoaderData();
    return (
        <div className="relative w-full mx-auto">
            <div>
                <img src={spots.image} alt={spots.tourists_spot_name} className="w-full lg:h-[500px] object-cover rounded-lg shadow-md" />
            </div>
            <div className="mt-10 p-6 bg-white bg-opacity-90 rounded-lg shadow-lg mx-auto w-11/12 md:w-3/4 lg:w-6/8">
            <div className="flex items-center">
            <FaLocationDot />
                <h3 className="text-black text-lg font-bold ml-3">{spots.country_Name}</h3>
            </div>
            <div className="flex items-center">
            <FaArrowCircleRight />
                <h3 className="text-black text-lg font-bold ml-3">{spots.tourists_spot_name}</h3>
            </div>
            <div className="flex items-center">
            <FaArrowCircleRight />
                <h3 className="text-black text-lg font-bold ml-3">{spots.average_cost}</h3>
            </div>
            <div className="flex items-center">
            <FaArrowCircleRight />
                <h3 className="text-black text-lg font-bold ml-3"> {spots.totalVisitorsPerYear}</h3>
            </div>
            <div className="flex items-center">
            <FaArrowCircleRight />
                <h3 className="text-black text-lg font-bold ml-3">{spots.seasonality}</h3>
            </div>
            <div className="flex items-center">
            <FaArrowCircleRight />
                <h3 className="text-black text-lg font-bold ml-3">{spots.travel_time}</h3>
            </div>
            <div className="flex items-center">
            <FaArrowCircleRight />
                <h3 className="text-black text-lg font-bold ml-3">{spots.description}</h3>
            </div>
            <div className="flex items-center">
           <FaArrowCircleRight />
                <h3 className="text-black text-lg font-bold ml-3">{spots.country_Name}</h3>
            </div>
                <NavLink to='/AllAdededSpot'>
                    <button className="text-xl text-white relative px-5 py-2 font-semibold group">
                        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-[18deg] bg-[#188d18] group-hover:bg-[#32CC32] group-hover:skew-x-[18deg]"></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-[18deg] bg-[#32CC32] group-hover:bg-[#188d18] group-hover:-skew-x-[18deg]"></span>
                        <span className="flex items-center justify-center gap-2 relative">
                            <span>Get Started</span>
                        </span>
                    </button> </NavLink>
            </div>

        </div>
    );
};

export default Ditaels;
