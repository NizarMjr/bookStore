import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Favorite from './Favorite';

const Suggestion = ({ suggestions }) => {
    const { id } = useParams;

    const getImageSrc = (image) => {
        if (image && image.data && image.contentType) {
            // Convert buffer to base64 string
            const base64String = btoa(
                String.fromCharCode(...new Uint8Array(image.data.data))
            );
            return `data:${image.contentType};base64,${base64String}`;
        }
        return '';
    };
    return (
        <div className="mx-auto mb-16">
            <div className='h-24 bg-main-bg mb-16 flex items-center'>
                <h1 className='font-bold text-3xl px-4'>كتب ذات صلة</h1>
            </div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                    1280: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                }}
                className="w-full border-2 border-top"
            >
                {suggestions?.map((suggestion, index) => (
                    <SwiperSlide key={index} className='h-full text-center p-4'>
                        <div className="p-4 border rounded shadow-lg">
                            <Favorite index={`_${index}`} />
                            <img src={getImageSrc(suggestion.image)} alt={suggestion.name} className="sm:h-56 h-48 rounded-lg my-4 mx-auto cursor-pointer" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
export default Suggestion;