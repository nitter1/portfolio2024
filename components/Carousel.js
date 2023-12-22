'use client'
import { register } from 'swiper/element/bundle'
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper/core';
import Img1 from '../public/assets/carousel/01.png'
import Img2 from '../public/assets/carousel/02.png'
import Img5 from '../public/assets/carousel/05.png'
import Img7 from '../public/assets/carousel/07.png'
import Img3 from '../public/assets/carousel/03.png'
SwiperCore.use([Pagination, Navigation, Autoplay]);

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Swiper, SwiperSlide} from 'swiper/react'
import Image from 'next/image';

export default function Carousel() {
  const imagens = [Img1, Img2, Img5, Img7, Img3];



  const data = [
    { id: '1', image: imagens[0] },
    { id: '2', image: imagens[1] },
    { id: '3', image: imagens[2] },
    { id: '4', image: imagens[3] },
    { id: '5', image: imagens[4] },
];

         // Verifica o tamanho da tela antes de renderizar o Carousel
         if (typeof window !== 'undefined' && window.innerWidth > 768)
    return(
        <>
        <Swiper
        slidesPerView={1}
        pagination={{ clickable: true}}
        navigation
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        style={{ zIndex: 0 }}
        >
        {data.map( (item) => (
           <SwiperSlide key={item.id}>
           <Image
               src={item.image}
               alt='Slider'
               style={{ width: '100%', height: '60vh', objectFit: 'contain', alignItems: 'center', display: 'flex', justifyContent: 'center'}}
           />
       </SwiperSlide>
        ) )}
        </Swiper>
        </>
    )
}
