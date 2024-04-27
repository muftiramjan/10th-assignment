
// import { useForm, SubmitHandler } from "react-hook-form"

import { useContext } from "react";
import { AoutContext } from "../../../components/AuothProvider/Auothprovhider";
import { NavLink } from "react-router-dom";

const EditProfile = () => {
    const {Loginuser,updethuserProfile,}= useContext(AoutContext)
    console.log()
    const handleSubmit= (event) =>{
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const passwrd = event.target.passwrd.value;
        const conframpasward = event.target.conframpasward.value;
        console.log(email,passwrd ,conframpasward,name)
        Loginuser(email,passwrd,updethuserProfile)
        }
       
    return (
        <div> 
             <h2 className="text-center text-black font-bold text-4xl">Edit Profile</h2>
            <div className="border-2 border-red-500 p-3 rounded-xl w-[60%] mx-auto">
           <form onSubmit={handleSubmit} >
           <label>
         Name:
         <input name="name"  type="text" placeholder="Type here" className="input input-bordered w-full " />
      </label>
            <div>
            <p>Email</p>
           <input name="email"  type="text" placeholder="Type here" className="input input-bordered w-full " />
           </div>
            <div>
            <p>password</p>
           <input name="passwrd"  type="text" placeholder="Type here" className="input input-bordered w-full " />
           </div>
            <div>
            <p>conframpasword</p>
           <input name="conframpasward"  type="text" placeholder="Type here" className="input input-bordered w-full " />
           </div>
           <button type="submit" className="btn btn-secondary">Save Changes</button>
           </form>
         
          
        </div>
           <p className="mt-5 text-center">Back to Home? <NavLink to="/Hoome" className="text-indigo-600 font-semibold bg-sky-400 border rounded-full p-2">click Here</NavLink></p>
           
        </div>
    );
};

export default EditProfile;


