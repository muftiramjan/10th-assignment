import { NavLink } from "react-router-dom";
import forpage from"../assets/Img/404.png"

const Error = () => {
    return (
        <div className="w-[800px] mx-auto">
          <img className="" src={forpage} alt="" />
          <div className="mx-auto">
          <p className="text-lime-500 font-bold">not fount please go back</p>
         
         <NavLink to='/'>
             <button  className=" text-xl text-white relative px-5 py-2 font-semibold group">
                 <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-[18deg] bg-[#188d18] group-hover:bg-[#32CC32] group-hover:skew-x-[18deg]"></span>
                 <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-[18deg] bg-[#32CC32] group-hover:bg-[#188d18] group-hover:-skew-x-[18deg]"></span>
                 <span className="flex items-center justify-center gap-2 relative">
                     <span>Back To Home</span>
                 </span>
             </button> </NavLink>
          </div>
         
        </div>
    );
};

export default Error;