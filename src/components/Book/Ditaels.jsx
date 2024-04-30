import { useEffect, useState } from "react";
import { Link,  useParams } from "react-router-dom";


const Ditaels = () => {
    const [singleCart, setSingleCart] = useState([])

    const { id } = useParams();

    useEffect(() => {
        fetch(`https://my-coffee-shope-server.vercel.app/singleUser/${id}`)
            .then(res => res.json())
            .then(dt => setSingleCart(dt))
    }, [id])



    return (
        <div>
            <div className="hero min-h-[400] bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={singleCart.image} className="max-w-2xl p-5  rounded-lg shadow-2xl" />
                    <div className="space-y-5">
                        <h1 className="text-5xl font-bold">{singleCart.tourists_spot_name}</h1>
                        <p>country_Name: {singleCart.country_Name}</p>
                        <p>location: {singleCart.location}</p>
                        <p>average_cost: {singleCart.average_cost}</p>
                        <p>seasonality: {singleCart.seasonality}</p>
                        <p>travel_time: {singleCart.travel_time}</p>
                        <p>totalVisitorsPerYear: {singleCart.totalVisitorsPerYear}</p>
                        <p>userEmail: {singleCart.userEmail}</p>
                        <p>userName: {singleCart.userName}</p>


                    </div>
                </div>
            </div>
          
            <p className="font-bold text-neutral-700 text-2xl"> <span className="font-bold text-3xl text-indigo-600">description:</span>  {singleCart.description}</p>
            <Link to="/Hoome" className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50 mb-10 mt-8">
                <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="relative">Back To HoMe</span>
            </Link>
        </div>
    );
};

export default Ditaels;
