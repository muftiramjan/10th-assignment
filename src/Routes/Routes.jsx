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
                path: '/MyList',
                element: <MyList />
            },
            {
                path: '/TouristsSpotForm',
                element: <TouristsSpotForm />,
                loader: () => fetch('http://localhost:5000/sport')
            },
            {
                path: '/TouristsSpotForm/:id',
                element: <Ditails2 />,
                loader: ({ params }) => fetch(`http://localhost:5000/singleSport/${params.id}`)
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
                loader: () => fetch('http://localhost:5000/user'),
                element: <Hoome />
            },
            {
                path: '/book/:id',
                element: <Praivhetrout><Ditaels /></Praivhetrout>,
                loader: ({ params }) => fetch(`http://localhost:5000/sport2/${params.id}`)
            },
            {
                path: '/cuntrise',
                element: <Cuntrise />,
            },
            {
                path: '/cuntrises/:countryName',
                element: <SpeceficCountry />,
                loader: () => fetch('http://localhost:5000/cuntrises')
            },
        ]
    }
]);

export default Routes;
