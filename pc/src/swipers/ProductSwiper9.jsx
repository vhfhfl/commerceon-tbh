/* https://swiperjs.com/demos */
import Image from 'next/image';
import { useRef } from 'react';

import { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
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
        spaceBetween={10}
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
        modules={[Autoplay, Navigation]}
        navigation={{
          prevEl: '.NaviGationBox > .NaviBtn.Prev',
          nextEl: '.NaviGationBox > .NaviBtn.Next',
        }}
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
                {/*[.ProductSwiper9_.swiper-slide-active_&]:opacity-100*/}
                <Image
                  className={`aspect-[105/140] h-full w-full object-cover duration-300 ease-out will-change-auto [.ProductSwiper9_.swiper-slide-active_&]:opacity-100`}
                  src={`https://picsum.photos/105/140.jpg?random=${idx}`}
                  width={105}
                  height={140}
                  alt=''
                />
              </div>
            </SwiperSlide>
          );
        })}
        <div className={`relative`} slot='container-start'>
          <div
            className={`NaviGationBox pointer-events-none absolute top-[0] left-[0] z-10 grid aspect-[386/140] w-full grid-cols-[auto_auto] items-center justify-between`}>
            <div className={`NaviBtn Prev pointer-events-auto cursor-pointer`}>
              <Image src={`/icons/icon_41_1.svg`} width={24} height={25} alt='왼쪽 화살표' />
            </div>
            <div className={`NaviBtn Next pointer-events-auto cursor-pointer`}>
              <Image src={`/icons/icon_41_2.svg`} width={24} height={25} alt='오른쪽 화살표' />
            </div>
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default ProductSwiper9;
