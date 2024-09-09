import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Cuntri = ({ cuntri }) => {
    const { image, country_Name, short_description } = cuntri;
    return (
        <Link to={`/cuntrises/${country_Name}`}>
            <div className="card bg-base-100 p-3 gap-y-4 mt-3 shadow-xl">
                <figure>
                    <img className='h-80 w-full object-cover' src={image} alt={country_Name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{country_Name}</h2>
                    <p className='text-left'>{short_description.slice(0, 120)}...</p>
                </div>
            </div>
        </Link>
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
