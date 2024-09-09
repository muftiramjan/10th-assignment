import { useContext, useState } from "react";
import { AoutContext } from "./AuothProvider/AuothProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { updateProfile } from "firebase/auth";
import Auth from "../../firebase/firebase.init";


const Register = () => {
    const { Registeruser } = useContext(AoutContext)
    const [error, setError] = useState("");
    const [success, setsuccess] = useState("");
    const [swoPassword, setswoPassword] = useState(false);

    const handelRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const conframpasword = e.target.conframpasward.value;
        setError('');
        setsuccess('');


        if (password.length < 6) {
            setError("password minimum 6 charectrs")
            return
        }
        if (password !== conframpasword) {
            setError("password not mathing")
            return
        }
        else if (!/[A-Z]/.test(password)) {
            setError('must Uppercase crecthars')
            return
        }
        else if (!/[a-z]/.test(password)) {
            setError('must Lowercase crecthars')
            return
        }
        console.log(name, photo, email, password, conframpasword)
        Registeruser(email, password)
            .then(() => {
                toast.success('usre craet sacssfully');
                updateProfile(Auth.currentUser, {
                    displayName: name, photoURL: photo
                })
                .then(()=>{})
                .catch(()=>{})
                
            })
            .catch(error =>{
                toast.error(error.message)
            })

    }

    return (
        <div>
            <div className="border-2 border-red-500 p-3 rounded-xl w-[40%] mx-auto">
                <form onSubmit={handelRegister} >
                    <div>
                        <p>Name</p>
                        <input name='name' type="text" placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                    <div>
                        <p>Photo</p>
                        <input name="photo" type="Photo" placeholder="Photo" className="input input-bordered w-full " />
                    </div>
                    <div>
                        <p>Email</p>
                        <input name="email" type="text" placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                    <div className="relative">
                        <p>password</p>
                        <input name="password"
                            type={swoPassword ? "text" : "password"}
                            placeholder="Type here"
                            className="input input-bordered w-full " />
                        <span className="absolute top-1/2 right-2" onClick={() => setswoPassword(!swoPassword)}>
                            {
                                swoPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </span>
                    </div>
                    <div>
                        <p>conframpasward</p>
                        <input name="conframpasward" type="text" placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                    {
                        error && <small className="text-red-800">{error}</small>
                    }

                    <button type="submit" className="btn btn-primary mt-5 text-center">Register</button>
                </form>
                {
                    success && <p className="text-green-600">{success}</p>

                }

                <p className="mt-5 text-center">create a acount? <NavLink to="/LoginFrom" className="text-indigo-600 font-semibold">go to Login</NavLink></p>
            </div>
            <ToastContainer />
        </div>

    );
};

export default Register;