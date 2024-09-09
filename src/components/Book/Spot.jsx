
import PropTypes from 'prop-types'
import { FaArrowCircleRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import 'tippy.js/dist/tippy.css';
import Tippy from "@tippyjs/react";
import { NavLink } from 'react-router-dom';
const Spot = ({ book }) => {
  const { _id, image, tourists_spot_name, totalVisitorsPerYear, location, seasonality, country_Name } = book;
  return (
    <div data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1000">
      <div className="card  shadow-2xl p-3">
        <img className="h-80 w-full object-cover p-4 rounded" src={image} />
        <div className="space-x-6 p-2">
          <p className="font-bold text-2xl flex justify-center">{tourists_spot_name}</p>
          <hr />
          <div className="card-actions flex items-center mx-5 mt-3 font-semibold">
            <div className="flex justify-center items-center mr-24"><FaLocationDot />{location} ,</div>
           <div className="flex justify-center items-center ">
           <FaLocationDot />  {country_Name}
           </div>
           <div className="flex justify-center items-center ">
           <FaArrowCircleRight />  {totalVisitorsPerYear}
           </div>
           <div className="flex justify-center items-center">
           <FaArrowCircleRight /> {seasonality}
           </div>
            <div>

            <Tippy content="view Ditails">
            <NavLink className="" to={`/book/${_id}`}>
                <button  className="ml-16 text-xl text-white relative px-5 py-2 font-semibold group">
                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-[18deg] bg-[#188d18] group-hover:bg-[#32CC32] group-hover:skew-x-[18deg]"></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-[18deg] bg-[#32CC32] group-hover:bg-[#188d18] group-hover:-skew-x-[18deg]"></span>
                    <span className="flex items-center justify-center gap-2 relative">
                        <span>View Ditails</span>
                    </span>
                </button> </NavLink>
              
             </Tippy>
             
            </div>
          </div>
        </div>
      </div>

      <div>
      </div>
    </div>
  );
};
Spot.propTypes = {
  book: PropTypes.object
}

export default Spot;