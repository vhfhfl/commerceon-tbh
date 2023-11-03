import Image from 'next/image';

import {Autoplay, Controller, Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
/* https://swiperjs.com/demos */
import {Swiper, SwiperSlide} from 'swiper/react';

function ExhibitionList(props) {
  const { children, className = '' } = props;

  const dummy_data = Array.from(Array(10));

  return (
    <>
      <Swiper
        {...props}
        className={`ExhibitionList ${className} !pl-[20px]`}
        // slidesPerView={"auto"} // - auto 일때는 .swiper-slide 에 너비 수동 지정 필요
        slidesPerView={1.1} // - slidesPerView, slidesPerGroup 함께 설정 필요
        slidesPerGroup={1} // - slidesPerView, slidesPerGroup 함께 설정 필요
        spaceBetween={10}
        breakpoints={{
          768: {
            slidesPerView: 2.1,
          },
        }}
        // autoplay={{
        //   delay : 3000,
        //   disableOnInteraction : false,
        // }}
        modules={[Autoplay, Pagination, Navigation, Controller]}
        loop={true}
        onSwiper={(swiper) => {
          // console.log('onSwiper');
          // console.log(swiper);
        }}
        onSlideChange={(swiper) => {
          // console.log('onSlideChange');
          // console.log(swiper);
          // console.log("swiper.realIndex == ", swiper.realIndex);
        }}>
        {dummy_data.map((obj, idx) => {
          return (
            <SwiperSlide key={idx}>
              <div>
                <div className={`w-full`}>
                  <Image
                    className={`aspect-[300/350] h-full w-full object-cover`}
                    src={`https://picsum.photos/658/707.jpg?random=${idx}`}
                    width={658}
                    height={707}
                    alt=''
                  />
                </div>
                <div className={`mt-[20px]`}>
                  <div
                    className={`Montserrat inline-flex flex-row items-center justify-center bg-[var(--color1)] px-[12px] py-[8px] text-[10px] font-[500] text-[white] `}>
                    BRAND NAME
                  </div>
                  <div className={`mt-[16px]`}>
                    <div className={`Montserrat text-[16px] font-[700] text-[var(--color1)] `}>
                      마인드 브릿지 BRAND WEEK ({idx + 1})
                    </div>
                    <div className={`mt-[10px] text-[15px] font-[500] text-[var(--color1)] truncate`}>
                      단 7일간, UP TO 83% OFF3만원 쿠폰팩 증정 단 7일간, UP TO 83% OFF3만원 쿠폰팩 증정
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default ExhibitionList;
