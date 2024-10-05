import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Cuntri = ({ cuntri }) => {
    const { image, country_Name, short_description } = cuntri;
    return (
        <div className="card bg-base-100 p-3 gap-y-4 mt-3 shadow-xl font-[family-name:var(--font-geist-sans)] ">
                <figure>
                    <img className='h-80 w-full object-cover' src={image} alt={country_Name} />
                </figure>
                <div className="card-body font-[family-name:var(--font-geist-sans)] ">
                    <h2 className="card-title">{country_Name}</h2>
                    <p className='text-left'>{short_description.slice(0, 120)}...</p>
                </div>
                <Link to={`/cuntrises/${country_Name}`}>
                <button className="text-3xl mt-6 text-center mb-8 text-white relative px-5 py-2 font-semibold group">
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-[18deg] bg-[#188d18] group-hover:bg-[#32CC32] group-hover:skew-x-[18deg]"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-[18deg] bg-[#32CC32] group-hover:bg-[#188d18] group-hover:-skew-x-[18deg]"></span>
                <span className="flex items-center justify-center gap-2 relative">
                    <span className=''>Click for Details</span>
                </span>
            </button>
        </Link>
            </div>
    );
};

Cuntri.propTypes = {
    cuntri: PropTypes.shape({
        image: PropTypes.string.isRequired,
        country_Name: PropTypes.string.isRequired,
        short_description: PropTypes.string.isRequired,
    }).isRequired,
};

export default Cuntri;
