import Marquee from "react-fast-marquee";
import 'swiper/css/pagination';
import 'swiper/css';
import sliad1 from "../assets/Img/40.jpg";
import sliad2 from "../assets/Img/45.jpg";
import sliad3 from "../assets/Img/46.jpg";
import sliad4 from "../assets/Img/47.jpg";
import sliad5 from "../assets/Img/48.jpg";
import sliad6 from "../assets/Img/49.jpg";
import sliad7 from "../assets/Img/50.jpg";
import sliad8 from "../assets/Img/51.jpg";

import { useState } from "react";

const TourismPartners = () => {
    const [selectedCompany, setSelectedCompany] = useState(null);

    const images = [
        { src: sliad1, name: "Wanderlust Travels", description: "Wanderlust Travels offers exceptional tour packages and travel experiences across Europe. Their expertise ensures that travelers get an immersive and authentic taste of European culture and landmarks." },
        { src: sliad2, name: "Safari Adventures", description: "Safari Adventures specializes in unforgettable safari tours in Africa. With experienced guides and well-planned itineraries, they bring the wild and beautiful landscapes of Africa closer to travelers." },
        { src: sliad3, name: "Oriental Escapades", description: "Oriental Escapades provides curated travel experiences in Asia, focusing on cultural immersion and unique adventures. Their tours highlight the rich heritage and modern marvels of Asian countries." },
        { src: sliad4, name: "Aussie Outback Tours", description: "Aussie Outback Tours takes you deep into the heart of Australia with their adventurous outback trips. Their tours offer a perfect blend of nature, wildlife, and Aboriginal culture." },
        { src: sliad5, name: "Nordic Expeditions", description: "Nordic Expeditions offers captivating tours across the Nordic countries. From the stunning fjords of Norway to the vibrant cities of Sweden, they provide a comprehensive travel experience." },
        { src: sliad6, name: "Latin Fiesta Tours", description: "Latin Fiesta Tours brings the vibrant and colorful culture of Latin America to life. Their tours cover everything from historical landmarks to lively festivals across South America." },
        { src: sliad7, name: "Island Hoppers", description: "Island Hoppers specializes in tropical island getaways, offering luxurious and relaxing experiences in the Caribbean and South Pacific. Their packages ensure a perfect escape to paradise." },
        { src: sliad8, name: "Middle Eastern Mystique", description: "Middle Eastern Mystique offers a deep dive into the rich history and modern wonders of the Middle East. Their tours highlight the region's unique blend of ancient and contemporary attractions." }
    ];

    const handleImageClick = (company) => {
        setSelectedCompany(company);
    };

    return (
        <section className="font-[family-name:var(--font-geist-sans)] ">
            <div className="flex justify-center">
                <button className="text-3xl mt-6 text-center mb-8 text-white relative px-5 py-2 font-semibold group">
                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-[18deg] bg-[#188d18] group-hover:bg-[#32CC32] group-hover:skew-x-[18deg]"></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-[18deg] bg-[#32CC32] group-hover:bg-[#188d18] group-hover:-skew-x-[18deg]"></span>
                    <span className="flex items-center justify-center gap-2 relative">
                        <span>Our Partner Companies</span>{" "}
                    </span>
                </button>
            </div>
            <Marquee pauseOnClick={true} pauseOnHover={true} speed={50}>
                {images.map((image, index) => (
                    <div key={index} className="flex flex-col items-center" onClick={() => handleImageClick(image)}>
                        <img
                            className="w-96 h-80 p-4 mr-8 rounded-xl cursor-pointer"
                            src={image.src}
                            alt={image.name}
                        />
                    </div>
                ))}
            </Marquee>
            {selectedCompany && (
                <div className="mt-4 p-4 bg-black rounded-lg flex flex-col items-center">
                    <img className="w-24 h-24 mb-4 rounded-full" src={selectedCompany.src} alt={selectedCompany.name} />
                    <p className="text-white text-xl font-bold mb-2">{selectedCompany.name}</p>
                    <p className="text-white">{selectedCompany.description}</p>
                </div>
            )}
        </section>
    );
};

export default TourismPartners;
