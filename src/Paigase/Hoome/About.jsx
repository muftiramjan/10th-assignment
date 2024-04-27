
import { Helmet } from "react-helmet-async";

const About = () => {
    return (
        <div>
            <Helmet>
                <title>About</title>
            </Helmet>
            <div className="about-section">

                <div className="about-content my-6 p-3">
                    <h2 className="text-center font-bold text-4xl text-slate-950">About Residential Services</h2>
                    <p>Welcome to Residential, your premier destination for all your housing needs. With a diverse portfolio of properties ranging from single-family homes and townhouses to apartments, student housing, senior living communities, and vacation rentals, we offer something for everyone.</p>
                    <p>At Residential, we understand that finding the perfect home is a significant milestone in your life. Whether youre a first-time buyer, a growing family, a student, or a retiree, were here to guide you through every step of the process.</p>
                    <p>Our commitment to excellence extends beyond just matching you with a property. We prioritize your comfort, convenience, and satisfaction, ensuring that you find a place you can truly call home.</p>
                    <h3 className="text-center font-bold text-4xl text-slate-950">Our Mission</h3>
                    <p>Our mission is to redefine the residential real estate experience by providing unparalleled service, expertise, and support to our clients. We strive to create lasting relationships built on trust, integrity, and transparency.</p>
                    <p>With our team of dedicated professionals and cutting-edge technology, we aim to make your housing journey seamless, stress-free, and rewarding. Your happiness and success are our top priorities.</p>
                    <h3 className="text-center font-bold text-4xl text-slate-950">Get in Touch</h3>
                    <p>Ready to find your dream home with Residential? Contact us today to schedule a consultation, explore our listings, or learn more about our services. Were here to help you make your housing dreams a reality!</p>
                </div>
            </div>
        </div>
    );
};

export default About;