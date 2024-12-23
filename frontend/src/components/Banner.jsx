import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Slider from 'react-slick'; 

const Banner = () => {
    const navigate = useNavigate(); 

    const settings = {
        dots: true, 
        infinite: true, 
        speed: 500, 
        slidesToShow: 1, 
        slidesToScroll: 1, 
        autoplay: true, 
        autoplaySpeed: 3000, 
    };

    return (
        <div className="relative w-full mt-16">
            <Slider {...settings}>
                <div>
                    <img
                        onClick={() => navigate('/collection')}
                        src="https://ambraee.com/cdn/shop/files/jpeg-optimizer_SHAADI_KA_UTSAV_copy.jpg?v=1732104516&width=2400"
                        alt="Banner Image 1"
                        className="w-full h-auto object-cover"
                    />
                </div>
                <div>
                    <img
                        onClick={() => navigate('/collection')} 
                        src="https://ambraee.com/cdn/shop/files/jpeg-optimizer_SUIT_SETS_copy_ccd5010b-717e-43f5-9584-b4c8beda856a.jpg?v=1732104607&width=2400"
                        alt="Banner Image 2"
                        className="w-full h-auto object-cover"
                    />
                </div>
                <div>
                    <img
                        onClick={() => navigate('/collection')} 
                        src="http://ambraee.com/cdn/shop/files/jpeg-optimizer_LEHENGAS_copy_6851d301-4329-4a04-bf23-f5e9271dfb0f.jpg?v=1732105244&width=2400"
                        alt="Banner Image 3"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </Slider>
        </div>
    );
};

export default Banner;
