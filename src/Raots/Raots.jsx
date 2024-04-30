import { createBrowserRouter } from "react-router-dom";
import Root from "../Leout/Root";
import Hoome from "../Paigase/Hoome/Hoome";
import UpdateProfile from "../Paigase/Hoome/UpdateProfile/UpdateProfile";
import LoginFrom from "../components/LoginFrom";
import Register from "../components/Register";
import Error from "../components/Error"
import Ditaels from "../components/Book/Ditaels";
import Praivhetrout from "../components/Praivhetrout"
import EditProfile from "../Paigase/Hoome/UpdateProfile/EditProfile";
import TouristsSpotForm from "../Paigase/Hoome/userprofile/TouristsSpotForm";
import CurdDitels from "../Paigase/Hoome/userprofile/CurdDitels";
import MyList from "../components/MyList";
import AllAdededSpot from "../Paigase/Hoome/AllAdededSpot";







const Raots = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Hoome></Hoome>
            },
            {
                path: '/UpdateProfile',
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path: '/MyList',
                element: <MyList></MyList>
            },
            {
                path: '/EditProfile',
                element: <EditProfile></EditProfile>
            },
            {
                path: '/TouristsSpotForm',
                element: <TouristsSpotForm></TouristsSpotForm>,
                loader: () => fetch('https://my-coffee-shope-server.vercel.app/sport')
            },
            {
                path: '/CurdDitels/:id',
                element: <CurdDitels></CurdDitels>

            },
            {
                path: '/AllAdededSpot',
                element: <Praivhetrout><AllAdededSpot></AllAdededSpot></Praivhetrout>,
            },
            {
                path: '/login',
                element: <LoginFrom></LoginFrom>
            },
            {
                path: '/Register',
                element: <Register></Register>
            },
            {
                path: '/LoginFrom',
                element: <LoginFrom></LoginFrom>
            },
            {
                path: '/Hoome',
                loader: () => fetch('https://my-coffee-shope-server.vercel.app/user'),
                element: <Hoome></Hoome>
            },
            {
                path: '/book/:id',
                element: <Praivhetrout><Ditaels></Ditaels> </Praivhetrout>,
            }
        ]
    }
]);
export default Raots;