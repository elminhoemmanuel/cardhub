import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Keyboard, Pagination, Autoplay } from 'swiper';
import SignUpSlides from './SignUpSlides';
import 'swiper/swiper-bundle.css';
import { onboardData } from "./OnboardData"


SwiperCore.use([Navigation, Keyboard, Pagination, Autoplay]);

const SignUpRight = () => {

    const slides = [];

    for (let i = 0; i < onboardData.length; i += 1) {
        slides.push(
            <SwiperSlide key={`slide-${i}`} tag='li'>
                <SignUpSlides data={onboardData[i]} />
            </SwiperSlide>
        )
    }

    return (
        <div className="hidden md:col-span-4 bg-gradient-to-b from-white to-gradblue h-full p-6 md:flex items-center justify-center">
            <Swiper id='main' tag="section" wrapperTag="ul"
             keyboard spaceBetween={0} slidesPerView={1}  spaceBetween={0}
             pagination={{ "clickable": true }} autoplay={{
                "delay": 6000,
                "disableOnInteraction": false
            }}
            >
                {slides}                
            </Swiper>
        </div>
    )
}

export default SignUpRight
