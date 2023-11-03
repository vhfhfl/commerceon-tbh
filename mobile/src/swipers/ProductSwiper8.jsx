/* https://swiperjs.com/demos */
import Image from 'next/image';
import { useRef } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

function SwiperBase(props) {
  const { children, className = '' } = props;

  const dummy_data = Array.from(Array(10));
  const ref_swiper = useRef();

  return (
    <div {...props} className={`SwiperBase relative ${className}`}>
      <Swiper
        ref={ref_swiper}
        {...props}
        className={``}
        spaceBetween={10}
        // slidesPerView={"auto"} // - auto 일때는 .swiper-slide 에 너비 수동 지정 필요
        slidesPerView={1.1} // - slidesPerView, slidesPerGroup 함께 설정 필요
        slidesPerGroup={1} // - slidesPerView, slidesPerGroup 함께 설정 필요
        loop={true} // loop 를 돌릴경우 item 의 총 수량이 반드시 slidesPerGroup 의 배수이어야한다
        breakpoints={
          {
            // 640: {
            //   slidesPerView: 2,
            //   slidesPerGroup: 2,
            // },
          }
        }
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
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
            <SwiperSlide className={``} key={idx}>
              <div>
                {/*[.SwiperBase_.swiper-slide-active_&]:opacity-100*/}
                <Image
                  className={`aspect-[300/350] h-full w-full object-cover duration-300 ease-out will-change-auto`}
                  src={`https://picsum.photos/300/350.jpg?random=${idx}`}
                  width={300}
                  height={350}
                  alt=''
                />
              </div>
              <div
                className={`Montserrat mt-[25px] inline-flex h-[32px] flex-row items-center justify-center border border-[var(--color6)] px-[14px] text-[12px] font-[600] text-[var(--color1)]`}>
                Mind Bridge WOMEN
              </div>
              <div className={`mt-[20px]`}>
                <div className={`text-[18px] text-[var(--color1)] font-[600] truncate`}>마인드 브릿지 BRAND WEEK</div>
                <div className={`mt-[12px] text-[14px] text-[var(--color1)] font-[400] truncate`}>단 7일간, UP TO 83% OFF 3만원 쿠폰팩 증정 단 7일간, UP TO 83% OFF 3만원 쿠폰팩 증정</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default SwiperBase;
