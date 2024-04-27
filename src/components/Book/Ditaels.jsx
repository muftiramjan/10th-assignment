import { NavLink, useLoaderData, useParams } from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css';
const Ditaels = () => {

    const bookData = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const currentBook = bookData.find(book => book.id === idInt);
    console.log(currentBook);
    return (
        <div>

            <div className="w-96 h-100% mx-auto">

            </div>

            <div className="flex gap-x-11">

                <div className="w-full mt-20">
                    <img className="p-3 rounded" src={currentBook.image} alt="" />
                    <h1 className=" font-bold text-3xl ">{currentBook.tourists_spot_name}</h1>
                </div>
                <div className="space-y-2 mt-11">
                    <hr />
                    <p><span className="text-2xl font-bold ">short_description:</span>{currentBook.short_description}</p>
                    <hr />
                    <p><span className="text-1xl font-bold mr-10">seasonality:</span>{currentBook.seasonality}</p>
                    <p><span className="text-1xl font-bold mr-10">average_cost:</span>{currentBook.average_cost}</p>
                    <p><span className="text-1xl font-bold mr-10">location:</span>{currentBook.location}</p>
                    <p><span className="text-1xl font-bold mr-10">country_Name:</span>{currentBook.country_Name}</p>
                    <p><span className="text-1xl font-bold mr-10">travel_time:</span>{currentBook.travel_time}</p>
                    <p><span className="text-1xl font-bold mr-10">totalVisitorsPerYear:</span>{currentBook.totalVisitorsPerYear}</p>
                    <p><span className="text-1xl font-bold mr-10">userEmail:</span>{currentBook.userEmail}</p>
                    <p><span className="text-1xl font-bold mr-10">userName:</span>{currentBook.userName}</p>
                    <div className="mt-3">
                        <NavLink to="/Hoome" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Bac to Home </NavLink>
                    </div>

                </div>

            </div>
        </div>


    );
};

export default Ditaels;