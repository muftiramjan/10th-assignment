import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const SpotsCurds = ({ spot }) => {

    const {_id, name,
        useimageURL,
        tourists_spot_name,
        country_Name,
        average_cost,
        totaVisitorsPerYear,
        seasonality, travel_time } = spot;
    return (
        <div>
            <div className="card h-full bg-base-100 shadow-xl my-5 p-5 gap-y-2 bg-green-100">
            <img className='h-80' src={useimageURL} alt="" />
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                </h2>
                <div className="">
                    <div className="badge badge-outline">tourists_spot_name:{tourists_spot_name}</div>
                    <div className="badge badge-outline">country_Name:{country_Name}</div>
                    <div className="badge badge-outline">average_cost:{average_cost}</div>
                    <div className="badge badge-outline">totaVisitorsPerYear:{totaVisitorsPerYear}</div>
                    <div className="badge badge-outline">travel_time:{travel_time}</div>
                    <div className="badge badge-outline">seasonality:{seasonality}</div>
                </div>
            </div>
            <Link to={`/TouristsSpotForm/${_id}`}>
                <a href="#_" className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
                  <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                  <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </span>
                  <span className="relative">View Details</span>
                </a>
              </Link>
        </div>
        </div>
    );
};
SpotsCurds.propTypes = {
    spot: PropTypes.object
  }

export default SpotsCurds;