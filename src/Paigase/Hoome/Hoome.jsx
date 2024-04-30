import Slider from "../../components/Slider";
import Books from "../../components/Book/Books";
import ResidentialPara from "../../components/ResidentialPara";
import { Helmet } from "react-helmet-async";



  


const Hoome = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
          
            <Slider></Slider>
            <ResidentialPara></ResidentialPara>
            <Books></Books>
        </div>
    );
};

export default Hoome;