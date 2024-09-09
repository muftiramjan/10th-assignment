
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { NavLink } from 'react-router-dom';

const Slider = () => {
    const slides = [
        {
            image: "https://i.ibb.co/3rSHKbK/3.jpg",
            title: "Beautiful Nature",
            description: "This is a beautiful tourist spot where you can enjoy the beauty of nature.",
            button: "Get Started"
        },
        {
            image: "https://i.ibb.co/gg4z6Xq/1650ab9c-ca94-41d6-9844-e8ae1c8d70af.jpg",
            title: "Mountain Paradise",
            description: "Here you can enjoy the beauty of lakes and mountains.",
            button: "Get Started"
        },
        {
            image: "https://i.ibb.co/THshscN/koksbajar.jpg",
            title: "Cox's Bazar",
            description: "Cox's Bazar is the world's longest sea beach which you can enjoy.",
            button: "Get Started"
        }
    ];

    return (
        <div style={{ position: 'relative', border: '2px solid #eaeaea', borderRadius: '24px' }}>
            <div style={{
                position: 'absolute',
                top: '10%',
                left: '50%',
                transform: 'translateX(-50%)',
                color: 'white',
                textAlign: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: '20px',
                borderRadius: '10px',
                zIndex: '2'
            }}>
                <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>Explore Beautiful Places</h2>
                <p style={{ fontSize: '16px', marginBottom: '20px' }}>Discover the most amazing places around the world with us.</p>
                <NavLink to='/AllAdededSpot'>
                <button  className="text-xl text-white relative px-5 py-2 font-semibold group">
                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-[18deg] bg-[#188d18] group-hover:bg-[#32CC32] group-hover:skew-x-[18deg]"></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-[18deg] bg-[#32CC32] group-hover:bg-[#188d18] group-hover:-skew-x-[18deg]"></span>
                    <span className="flex items-center justify-center gap-2 relative">
                        <span>Get Started</span>
                    </span>
                </button> </NavLink>
            </div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <img src={slide.image} alt={slide.title} style={{ width: "100%", height: "500px" }} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;