import { NavLink } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import 'tippy.js/dist/tippy.css';

import { useLoaderData } from "react-router-dom";

const Ditails2 = () => {
    const Ditails2 = useLoaderData();
   
    return (
       
      <div className="relative w-full mx-auto">
            <div>
                <img src={Ditails2.useimageURL} alt={Ditails2.tourists_spot_name} className="w-full lg:h-[500px] object-cover rounded-lg shadow-md" />
            </div>
            <div className="mt-10 p-6 bg-white bg-opacity-90 rounded-lg shadow-lg mx-auto w-11/12 md:w-3/4 lg:w-6/8">
            <div className="flex items-center">
            <FaLocationDot />
                <h3 className="text-black text-lg font-bold ml-3">{Ditails2.country_Name}</h3>
            </div>
            <div className="flex items-center">
            <FaArrowCircleRight />
                <h3 className="text-black text-lg font-bold ml-3">{Ditails2.tourists_spot_name}</h3>
            </div>
            <div className="flex items-center">
            <FaArrowCircleRight />
                <h3 className="text-black text-lg font-bold ml-3">{Ditails2.average_cost}</h3>
            </div>
            <div className="flex items-center">
            <FaArrowCircleRight />
                <h3 className="text-black text-lg font-bold ml-3"> {Ditails2.totalVisitorsPerYear}</h3>
            </div>
            <div className="flex items-center">
            <FaArrowCircleRight />
                <h3 className="text-black text-lg font-bold ml-3">{Ditails2.seasonality}</h3>
            </div>
            <div className="flex items-center">
            <FaArrowCircleRight />
                <h3 className="text-black text-lg font-bold ml-3">{Ditails2.travel_time}</h3>
            </div>
            <div className="flex items-center">
            <FaArrowCircleRight />
                <p className="text-black text-lg font-bold ml-3">{Ditails2.shortdescription}</p>
            </div>
            <div className="flex items-center">
           <FaArrowCircleRight />
                <h3 className="text-black text-lg font-bold ml-3">{Ditails2.country_Name}</h3>
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

export default Ditails2;