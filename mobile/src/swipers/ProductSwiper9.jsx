/* https://swiperjs.com/demos */
import Image from 'next/image';
import { useRef } from 'react';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

function ProductSwiper9(props) {
  const { children, className = '' } = props;

  const dummy_data = Array.from(Array(30));
  const ref_swiper = useRef();

  return (
    <div {...props} className={`ProductSwiper9 relative ${className}`}>
      <Swiper
        ref={ref_swiper}
        {...props}
        className={``}
        spaceBetween={8}
        // slidesPerView={"auto"} // - auto 일때는 .swiper-slide 에 너비 수동 지정 필요
        slidesPerView={3.5} // - slidesPerView, slidesPerGroup 함께 설정 필요
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
            <SwiperSlide key={idx}>
              <div>
                <Image
                  className={`aspect-[83/112] h-full w-full object-cover`}
                  src={`https://picsum.photos/83/112.jpg?random=${idx}`}
                  width={83}
                  height={112}
                  alt=''
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default ProductSwiper9;
