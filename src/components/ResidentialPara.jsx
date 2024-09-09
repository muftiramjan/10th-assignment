
import { Fade } from "react-awesome-reveal";
import 'animate.css';

const ResidentialPara = () => {
    return (
        <div className='text-center mx-auto mt-12 lg:w-[900px] p-6 bg-gradient-to-r from-green-100 to-green-200 rounded-lg shadow-lg'>
            <Fade cascade>
                <h1 className='text-center font-semibold text-4xl text-green-600 mb-4'>
                    Bangladeshs Natural Splendors
                </h1>
                <p className='mt-4 text-lg text-gray-800 leading-relaxed'>
                    Discover the allure of Coxs Bazar, Bandarban, and the Sundarbans. Coxs Bazar boasts expansive beaches, Bandarban offers lush forests, while the Sundarbans harbor serene mangrove life. Explore these gems for an unforgettable journey into Bangladeshs natural beauty.
                </p>
            </Fade>
        </div>
    );
};

export default ResidentialPara;
