/* https://swiperjs.com/demos */
import SwiperNumberCurrent from '@/swiper_parts/SwiperNumberCurrent';
import SwiperNumberTotal from '@/swiper_parts/SwiperNumberTotal';
import Image from 'next/image';
import { useRef } from 'react';

import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import ItemFlag1 from '@/components/common/ItemFlag1';

function ProductSwiper7(props) {
  const { children, className = '' } = props;

  const dummy_data = Array.from(Array(10));
  const ref_swiper = useRef();

  return (
    <div {...props} className={`ProductSwiper7 relative ${className}`}>
      <Swiper
        ref={ref_swiper}
        {...props}
        className={``}
        spaceBetween={0}
        // slidesPerView={"auto"} // - auto 일때는 .swiper-slide 에 너비 수동 지정 필요
        slidesPerView={1} // - slidesPerView, slidesPerGroup 함께 설정 필요
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
        modules={[Autoplay, Pagination]}
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
              <div className={`relative`}>
                <Image
                  className={`aspect-[360/480] w-full object-contain`}
                  src={`https://picsum.photos/360/480.jpg?random=${idx}`}
                  width={360}
                  height={480}
                  alt=''
                />
                <div className={`absolute top-[0] right-[0] z-10`}>
                  <ItemFlag1 theme={idx}>Set</ItemFlag1>
                </div>
              </div>
            </SwiperSlide>
          );
        })}

        <div className={`absolute bottom-[16px] right-[20px] z-10`}>
          <div className={`Montserrat flex flex-row items-center justify-end gap-[4px] text-[12px] font-[400] text-white`}>
            <SwiperNumberCurrent /> / <SwiperNumberTotal />
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default ProductSwiper7;
