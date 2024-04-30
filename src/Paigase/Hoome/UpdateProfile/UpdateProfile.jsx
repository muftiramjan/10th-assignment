import { useContext, useState } from "react";
import { AoutContext } from "../../../components/AuothProvider/Auothprovhider";
import { Helmet } from "react-helmet-async";
import { FaRegEdit } from "react-icons/fa";
import { updateProfile } from "firebase/auth";

import { toast } from "react-toastify";
import Auth from "../../../../firebase/firebase.init";



const UpdateProfile = () => {
    const { user, setUpdate, update} = useContext(AoutContext);

    const [changedName, setChangedName] =useState(user?.displayName);
    const [changedPhoto, setChangedPhoto] =useState(user?.photoURL);

    console.log(changedName, changedPhoto);

    const [isEdit, setIsEdit] = useState(false);



    const saveBtnHandler = () =>{
        updateProfile(Auth.currentUser, {
            displayName: changedName, photoURL: changedPhoto
        })
        .then(()=>{
            toast.success('Profile Updated Successfuly')
            setUpdate(!update)
        })
        .catch((error)=>{
            toast.error(error.message
            )
        })
    }


    return (
        <div className="">
            <Helmet>
                <title>Update Profile</title>
            </Helmet>

            <div className=" bg-base-200 py-16">
                <div className="">
                    <div className="card relative shrink-0 w-[60%] mx-auto shadow-2xl bg-base-100">
                        {isEdit ||
                            <div className="w-fit absolute top-5 right-5" onClick={() => { setIsEdit(true) }}>
                                <FaRegEdit className="text-xl"></FaRegEdit>
                            </div>
                        }
                        <form className="card-body">
                            {/* email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <p className="input input-bordered flex items-center">{user?.email}</p>
                            </div>

                            {/* name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                {
                                    isEdit ? <input onChange={(e)=>{setChangedName(e.target.value)}} type="text" defaultValue={user?.displayName} className="input input-bordered" /> : <p className="input input-bordered flex items-center">{user?.displayName}</p>
                                }
                                
                            </div>

                            {/* photo */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                {
                                    isEdit ? <input onChange={(e)=>{setChangedPhoto(e.target.value)}} type="text" defaultValue={user?.photoURL} className="input input-bordered" /> : <p className="input input-bordered flex items-center">{user?.photoURL}</p>
                                }
                            </div>
                            {
                                isEdit && <div onClick={() => { setIsEdit(false) }} className="form-control mt-6">
                                    <button onClick={saveBtnHandler} className="btn btn-primary">save</button>
                                </div>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;