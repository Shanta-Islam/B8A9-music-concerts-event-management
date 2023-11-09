import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = () => {
    return (
        <div className='py-20'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
                spaceBetween={50}
                slidesPerView={1}
                effect="fade"
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div className="relative bg-slate-800">
                        <img src="https://i.ibb.co/BLSkFc6/hero-image1.jpg" alt="" className='h-[500px] w-full' />
                        <div className='absolute top-[40%] left-[30%]'>
                            <h2 className='text-white bg-black px-5 py-2 text-center '>THE WORLD's LEADING MUSIC EVENT AND FESTIVAL MANAGEMENT WEBSITE</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative bg-slate-800">
                        <img src="https://i.ibb.co/6F2jyBH/hero-image2.jpg" alt="" className='h-[500px] w-full' />
                        <div className='absolute top-[40%] left-[30%]'>
                            <h2 className='text-white bg-black px-5 py-2 text-center'>THE WORLD's LEADING MUSIC EVENT AND FESTIVAL MANAGEMENT WEBSITE</h2>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;