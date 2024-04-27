import { createBrowserRouter } from "react-router-dom";
import Root from "../Leout/Root";
import Hoome from "../Paigase/Hoome/Hoome";
import UpdateProfile from "../Paigase/Hoome/UpdateProfile/UpdateProfile";
import LoginFrom from "../components/LoginFrom";
import Register from "../components/Register";
import Error from "../components/Error"
import Ditaels from "../components/Book/Ditaels";
import Praivhetrout from "../components/Praivhetrout"
import About from "../Paigase/Hoome/About";
import EditProfile from "../Paigase/Hoome/UpdateProfile/EditProfile";
import TouristsSpotForm from "../Paigase/Hoome/userprofile/TouristsSpotForm";
import CurdDitels from "../Paigase/Hoome/userprofile/CurdDitels";
import MyList from "../components/MyList";






const Raots= createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement: <Error></Error>,
        children:[
            {
                path:'/',
                element:<Hoome></Hoome>
            },
            {
                path:'/UpdateProfile',
                element:<UpdateProfile></UpdateProfile>
            },
            {
                path:'/MyList',
                element:<MyList></MyList>
            },
            {
                path:'/EditProfile',
                element:<EditProfile></EditProfile>
            },
            {
                path:'/TouristsSpotForm',
                element:<TouristsSpotForm></TouristsSpotForm>,
                loader: ()=> fetch('http://localhost:5000/sport')
            },
            {
                path:'/CurdDitels',
                element:<CurdDitels></CurdDitels>
               
            },
            {
                path:'/About',
                element:<Praivhetrout><About></About></Praivhetrout>,
            },
            {
                path:'/login',
                element:<LoginFrom></LoginFrom>
            },
            {
                path:'/Register',
                element:<Register></Register>
            },
            {
                path:'/LoginFrom',
                element:<LoginFrom></LoginFrom>
            },
            {
                path:'/Hoome',
                loader: ()=> fetch('http://localhost:5000/user'),
                element:<Hoome></Hoome>
            },
            {
                path:'/book/:id',
                element: <Praivhetrout><Ditaels></Ditaels> </Praivhetrout>,
                loader: ()=> fetch('/http://localhost:5000/user')
              }
        ]
    }
]);
export default Raots;