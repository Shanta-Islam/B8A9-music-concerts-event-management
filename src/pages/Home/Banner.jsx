import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = () => {
    return (
        <div className='py-20'>
            {/* <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="relative w-full mx-auto lg:mt-10">
                        <img className="h-[500px] w-full object-cover rounded-lg" src="https://i.ibb.co/BLSkFc6/hero-image1.jpg" alt="Random image"/>
                            <div className="absolute inset-0 bg-gray-950  opacity-60 rounded-lg"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <h2 className="text-white text-2xl lg:text-7xl font-bold">Exotic tastes at your <br/> doorstep
                                    </h2>
                                    <p className="text-white text-sm lg:text-xl font-normal lg:font-medium lg:mt-6">We supply highly
                                        quality organic products</p>
                                    <button className="btn bg-fruit-primary text-white border-0 hover:bg-red-500  mt-4 lg:mt-8">Shop
                                        Now</button>
                                </div>
                            </div>
                    </div>
                    <div
                        className="absolute flex justify-between transform -translate-y-1/2 lg:left-5 left-3 lg:right-5 right-3 top-1/2">
                        <a href="#slide2" className="btn btn-circle bg-[#121212] text-gray-50 border-0">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-[#121212] text-gray-50 border-0">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="relative w-full mx-auto lg:mt-10">
                        <img className="h-[500px] w-full object-cover rounded-lg" src="https://i.ibb.co/6F2jyBH/hero-image2.jpg" alt="Random image"/>
                            <div className="absolute inset-0 bg-gray-950 opacity-60 rounded-lg"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <h2 className="text-white text-2xl lg:text-7xl font-bold">Exotic tastes at your <br/> doorstep
                                    </h2>
                                    <p className="text-white text-sm lg:text-xl font-normal lg:font-medium lg:mt-6">We supply highly
                                        quality organic products</p>
                                    <button className="btn bg-fruit-primary text-white border-0 hover:bg-red-500 mt-4 lg:mt-8">Shop
                                        Now</button>
                                </div>
                            </div>
                    </div>
                    <div
                        className="absolute flex justify-between transform -translate-y-1/2 lg:left-5 left-3 lg:right-5 right-3 top-1/2">
                        <a href="#slide1" className="btn btn-circle bg-[#121212] text-gray-50 border-0">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-[#121212] text-gray-50 border-0">❯</a>
                    </div>
                </div>
                
                
            </div> */}
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