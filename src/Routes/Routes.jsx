import { createBrowserRouter } from "react-router-dom";
import Root from "../Leout/Root";
import Hoome from "../Paigase/Hoome/Hoome";
import LoginFrom from "../components/LoginFrom";
import Register from "../components/Register";
import Error from "../components/Error";
import Ditaels from "../components/Book/Ditaels";
import Praivhetrout from "../components/Praivhetrout";
import TouristsSpotForm from "../Paigase/Hoome/userprofile/TouristsSpotForm";
import CurdDitels from "../Paigase/Hoome/userprofile/CurdDitels";
import MyList from "../components/MyList";
import AllAdededSpot from "../Paigase/Hoome/AllAdededSpot";
import Ditails2 from "../Paigase/Hoome/userprofile/Ditails2";
import Cuntrise from "../components/Cuntrise";
import SpeceficCountry from "../components/SpeceficCountry";
import Success from "../components/Success";
import Fail from "../components/Fail";
import Cancel from "../components/Cancel";


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Hoome />
            },
            {
                path: '/success',
                element: <Success />
            },
            {
                path: '/fail',
                element: <Fail/>
            },
            {
                path: '/cancel',
                element: <Cancel />
            },
            {
                path: '/MyList',
                element: <MyList />
            },
            {
                path: '/TouristsSpotForm',
                element: <TouristsSpotForm />,
                loader: () => fetch('https://ten-assaiment-server.vercel.app/sport')
            },
            {
                path: '/TouristsSpotForm/:id',
                element: <Ditails2 />,
                loader: ({ params }) => fetch(`https://ten-assaiment-server.vercel.app/singleSport/${params.id}`)
            },
            {
                path: '/CurdDitels/:id',
                element: <CurdDitels />
            },
            {
                path: '/AllAdededSpot',
                element: <Praivhetrout><AllAdededSpot /></Praivhetrout>,
            },
            {
                path: '/login',
                element: <LoginFrom />
            },
            {
                path: '/Register',
                element: <Register />
            },
            {
                path: '/LoginFrom',
                element: <LoginFrom />
            },
            {
                path: '/Hoome',
                loader: () => fetch('https://ten-assaiment-server.vercel.app/user'),
                element: <Hoome />
            },
            {
                path: '/book/:id',
                element: <Praivhetrout><Ditaels /></Praivhetrout>,
                loader: ({ params }) => fetch(`https://ten-assaiment-server.vercel.app/sport2/${params.id}`)
            },
            {
                path: '/cuntrise',
                element: <Cuntrise />,
            },
            {
                path: '/cuntrises/:countryName',
                element: <SpeceficCountry />,
                loader: () => fetch('https://ten-assaiment-server.vercel.app/cuntrises')
            },
        ]
    }
]);

export default Routes;
