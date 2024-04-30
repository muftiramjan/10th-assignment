import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import Tippy from "@tippyjs/react";
const Book = ({ book }) => {
  const { _id, image, tourists_spot_name, totalVisitorsPerYear, location, seasonality, country_Name ,short_description} = book;
  // console.log(_id);
  return (
    <div data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1000">

      <div className="card w-81  shadow-2xl">
        <img className="w-96 h-80 p-4 rounded" src={image} />
        <div className="space-x-6 p-5">
          <p className="font-bold text-2xl flex justify-center">{tourists_spot_name}</p>
          <hr />
          <div className="card-actions justify-between items-center mx-5 mt-3 font-semibold">
            <div className="">country_Name: {country_Name}</div>
            <div className="">location: {location}</div>
            <p> totalVisitorsPerYear: {totalVisitorsPerYear}</p>
            <p> seasonality: {seasonality}</p>
            <div>

              <Link to={`/book/${_id}`} className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
                <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="relative">View Details</span>
              </Link>
              <div >
                <Tippy content="i am tooltip">
             <button className="btn btn-circle"
             >click me</button>
             </Tippy>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
      </div>

    </div>

  );

};

Book.propTypes = {
  book: PropTypes.object
}

export default Book;