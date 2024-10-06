import PropTypes from 'prop-types';
import TouristSpot from './TouristSpot';

const  CountryCetagory = ({ title, items }) => {
    return (
        <div>
            <h1>{title}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map(item => (
                    <TouristSpot key={item._id} spot={item} />
                ))}
            </div>
        </div>
    );
};

CountryCetagory.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CountryCetagory;
