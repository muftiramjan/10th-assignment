
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AoutContext } from "./AuothProvider/Auothprovhider";
import { useEffect } from "react";
import { toast } from 'react-toastify';
// import { useForm, SubmitHandler } from "react-hook-form"


const LoginFrom = () => {
    const { Loginuser, GoogleLogin, FacebookLogin, user } = useContext(AoutContext)
    const location = useLocation()
    const navigait = useNavigate()
    console.log(location)


    const handelLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const passwrd = e.target.passwrd.value;

        Loginuser(email, passwrd)
            .then(() => {
                toast.success('Login sussecfull')
            })
            .catch(error => {
                toast.error(error.message)
            })
    }


    const handelgoogleLogin = () => {
        GoogleLogin()
            .then(() => {
                toast.success('Google Login sussecfull')
            })
            .catch(error => {
                toast.error(error.message)
            })
    }
    const handelFacebookLogin = () => {
        FacebookLogin()
            .then(() => {
                toast.success('Facebook Login sussecfull')
            })
            .catch(error => {
                toast.error(error.message)
            })
    }
    useEffect(() => {
        if (user) {
            navigait(location.state)
        }
    }, [])
    return (
        <div className="mt-8">
            <div className="border-2 border-red-500 p-3 rounded-xl w-[60%] mx-auto">
                <form onSubmit={handelLogin} >
                    <div>
                        <p>Email</p>
                        <input name="email" type="text" placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                    <div>
                        <p>password</p>
                        <input name="passwrd" type="text" placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                    <button type="submit" className="btn btn-primary mt-5 text-center">Login</button>
                </form>
                <div className="flex justify-between">
                    <button onClick={handelgoogleLogin} className="btn btn-secondary mt-10">GoogleLogin</button>
                    {/* <button onClick={handelGithubLogin} className="btn btn-secondary mt-10">GithubLogin</button> */}
                    <button onClick={handelFacebookLogin} className="btn btn-secondary mt-10">FacebookLogin</button>
                </div>

            </div>
            <p className="mt-5 text-center">you have not user? <NavLink to="/Register" className="text-indigo-600 font-semibold">Register</NavLink></p>

        </div>
    );
};

export default LoginFrom;

