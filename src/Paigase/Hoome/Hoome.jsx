import Slider from "../../components/Slider";
import Books from "../../components/Book/Books";
import ResidentialPara from "../../components/ResidentialPara";
import { Helmet } from "react-helmet-async"

import { Fade } from "react-awesome-reveal";


const Hoome = () => {
  
    return (
        <div>
            <Fade>
  <p>I will gently appear as I enter the viewport</p>
</Fade>
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