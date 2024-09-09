import Slider from "../../components/Slider";
import ResidentialPara from "../../components/ResidentialPara";
import { Helmet } from "react-helmet-async"
import Spots from "../../components/Book/Spots";
import TourismPartners from "../../components/TourismPartners";
import Cuntrise from "../../components/Cuntrise";

const Hoome = () => {

    return (
        <div>
       
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Slider></Slider>
            <ResidentialPara></ResidentialPara>
            <Spots></Spots>
          <TourismPartners></TourismPartners>
          <Cuntrise></Cuntrise>
        </div>
    );
};

export default Hoome;