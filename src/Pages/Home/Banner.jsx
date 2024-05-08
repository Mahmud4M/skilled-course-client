import { Swiper, SwiperSlide } from 'swiper/react';
import bannerOne from '/bannerOne.jpg'
import bannerTwo from '/bannerTwo.jpg'
import bannerThree from '/bannerThree.jpg'
import bannerFour from '/bannerFour.jpg'
import bannerFive from '/bannerFive.jpg'
import bannerSix from '/bannerSix.jpg'
import bannerSeven from '/bannerSeven.jpg'
import bannerEight from '/bannerEight.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './App.css'

// import required modules
import { Pagination } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
            <div className='z-0'>
           <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
            
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='w-[640px] md:w-[768px] h-[300px] lg:w-full lg:h-[550px] rounded-xl bg-opacity-30' src={bannerThree} alt="" />
                    <div className='text-xl lg:text-4xl p-5 lg:p-10 bg-yellow-500 opacity-60 text-center uppercase w-[10prem] lg:w-[45rem] mx-auto rounded-xl relative  bottom-56 md:bottom-60 lg:bottom-96 font-semibold roboto-slab'>
                        <h1>Luxury Tour Service</h1>
                        <p className='text-lg font-raleway mt-5'>www-beskilled-private-tour.com</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-[640px] md:w-[768px] h-[300px] lg:w-full lg:h-[550px] rounded-xl bg-opacity-30' src={bannerTwo} alt="" />
                    <div className='text-xl lg:text-4xl p-5 lg:p-10 bg-yellow-500 opacity-60 text-center uppercase w-[10prem] lg:w-[45rem] mx-auto rounded-xl relative bottom-56 md:bottom-60 lg:bottom-96 font-semibold roboto-slab'>
                        <h1>Personal Concierge Service</h1>
                        <p className='text-lg font-raleway mt-5'>www-beskilled-private-tour.com</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-[640px] md:w-[768px] h-[300px] lg:w-full lg:h-[550px] rounded-xl bg-opacity-30' src={bannerOne} alt="" />
                    <div className='text-xl lg:text-4xl p-5 lg:p-10 bg-yellow-500 opacity-60 text-center uppercase w-[10prem] lg:w-[45rem] mx-auto rounded-xl relative bottom-56 md:bottom-60 lg:bottom-96 font-semibold roboto-slab'>
                        <h1>25 day tour in California</h1>
                        <p className='text-lg font-raleway mt-5'>www-beskilled-private-tour.com</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-[640px] md:w-[768px] h-[300px] lg:w-full lg:h-[550px] rounded-xl bg-opacity-30' src={bannerFour} alt="" />
                    <div className='text-xl lg:text-4xl p-5 lg:p-10 bg-yellow-500 opacity-60 text-center uppercase w-[10prem] lg:w-[45rem] mx-auto rounded-xl relative bottom-56 md:bottom-60 lg:bottom-96 font-semibold roboto-slab'>
                        <h1>Free Travel Consulting</h1>
                        <p className='text-lg font-raleway mt-5'>www-beskilled-private-tour.com</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-[640px] md:w-[768px] h-[300px] lg:w-full lg:h-[550px] rounded-xl bg-opacity-30' src={bannerFive} alt="" />
                    <div className='text-xl lg:text-4xl p-5 lg:p-10 bg-yellow-500 opacity-60 text-center uppercase w-[10prem] lg:w-[45rem] mx-auto rounded-xl relative bottom-56 md:bottom-60  lg:bottom-96 font-semibold roboto-slab'>
                        <h1>Traveling Beyon the Oridinary</h1>
                        <p className='text-lg font-raleway mt-5'>www-beskilled-private-tour.com</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-[640px] md:w-[768px] h-[300px] lg:w-full lg:h-[550px] rounded-xl bg-opacity-30' src={bannerSix} alt="" />
                    <div className='text-xl lg:text-4xl p-5 lg:p-10 bg-yellow-500 opacity-60 text-center uppercase w-[10prem] lg:w-[45rem] mx-auto rounded-xl relative bottom-56 md:bottom-60 lg:bottom-96 font-semibold roboto-slab'>
                        <h1>Your Travel will Specialized</h1>
                        <p className='text-lg font-raleway mt-5'>www-beskilled-private-tour.com</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-[640px] md:w-[768px] h-[300px] lg:w-full lg:h-[550px] rounded-xl bg-opacity-30' src={bannerSeven} alt="" />
                    <div className='text-xl lg:text-4xl p-5 lg:p-10 bg-yellow-500 opacity-60 text-center uppercase w-[10prem] lg:w-[45rem] mx-auto rounded-xl relative bottom-56 md:bottom-60 lg:bottom-96 font-semibold roboto-slab'>
                        <h1>23 day tour in Netherlands</h1>
                        <p className='text-lg font-raleway mt-5'>www-beskilled-private-tour.com</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-[640px] md:w-[768px] h-[300px] lg:w-full lg:h-[550px] rounded-xl bg-opacity-30' src={bannerEight} alt="" />
                    <div className='text-xl lg:text-4xl p-5 lg:p-10 bg-yellow-500 opacity-60 text-center uppercase w-[10prem] lg:w-[45rem] mx-auto rounded-xl relative bottom-56 md:bottom-60 lg:bottom-96 font-semibold roboto-slab'>
                        <h1>15 day tour in italy</h1>
                        <p className='text-lg font-raleway mt-5'>www-beskilled-private-tour.com</p>
                    </div>
                </SwiperSlide>
            </Swiper>
           </div>
        </div>
    );
};

export default Banner;