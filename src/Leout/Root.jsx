
import { Outlet, useNavigation } from "react-router-dom"
import Navbar from "../components/Nabvar";
import Footer from "../components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    const navigation = useNavigation();
    return (
        <div className="max-w-6xl mx-auto border p-4 bg-slate-200">
            <div>
                <Navbar></Navbar>
              {
                navigation.state === "loading" ? 
                <p>loading</p>:
                <Outlet></Outlet>
                }

                <Footer></Footer>
            </div>

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;