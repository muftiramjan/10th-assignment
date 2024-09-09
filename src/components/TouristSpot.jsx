import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TouristSpot = ({ spot }) => {
    const { tourists_spot_name, location, short_description, average_cost, seasonality } = spot;

    return (
        <div className="card bg-base-100 p-3 gap-y-4 mt-3 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{tourists_spot_name}</h2>
                <p className='text-left'>Location: {location}</p>
                <p className='text-left'>{short_description}</p>
                <p className='text-left'>Cost: {average_cost}</p>
                <p className='text-left'>Best Season: {seasonality}</p>
                <Link  to='/AllAdededSpot'>
                    <button className="text-xl text-white relative px-5 py-2 font-semibold group">
                        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-[18deg] bg-[#188d18] group-hover:bg-[#32CC32] group-hover:skew-x-[18deg]"></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-[18deg] bg-[#32CC32] group-hover:bg-[#188d18] group-hover:-skew-x-[18deg]"></span>
                        <span className="flex items-center justify-center gap-2 relative">
                            <span>View Details</span>
                        </span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

TouristSpot.propTypes = {
    spot: PropTypes.shape({
        tourists_spot_name: PropTypes.string.isRequired,
        country_Name: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        short_description: PropTypes.string.isRequired,
        average_cost: PropTypes.string.isRequired,
        seasonality: PropTypes.string.isRequired,
    }).isRequired,
};

export default TouristSpot;
