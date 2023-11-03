/* https://swiperjs.com/demos */
import ItemFlag1 from '@/components/common/ItemFlag1';
import Image from 'next/image';

import {Autoplay, Controller, Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react';

function ProductSwiper6(props) {
  const { children, className = '' } = props;

  const dummy_data = Array.from(Array(10));

  return (
    <div {...props} className={`ProductSwiper6 ${className}`}>
      <Swiper
        {...props}
        className={`!pl-[20px] ${className}`}
        spaceBetween={2}
        // slidesPerView={'auto'} // - auto 일때는 .swiper-slide 에 너비 수동 지정 필요
        slidesPerView={1.8} // - slidesPerView, slidesPerGroup 함께 설정 필요
        slidesPerGroup={1} // - slidesPerView, slidesPerGroup 함께 설정 필요
        loop={true} // loop 를 돌릴경우 item 의 총 수량이 반드시 slidesPerGroup 의 배수이어야한다
        breakpoints={{
          640: {
            slidesPerView: 2.8,
          },
        }}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        modules={[Autoplay, Pagination, Navigation, Controller]}
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
                  className={`aspect-[200/256] w-full object-contain`}
                  src={`https://picsum.photos/400/512.jpg?random=${idx}`}
                  width={200}
                  height={256}
                  alt=''
                />
                <div className={`absolute top-[0] right-[0] z-10`}>
                  <ItemFlag1 theme={idx}>Big</ItemFlag1>
                </div>
              </div>
              <div className={`mt-[20px] text-center`}>
                <div className={`Montserrat text-[12px] font-[700] text-[var(--color1)]`}>BRAND NAME ({idx + 1})</div>
                <div className={`mt-[8px] truncate font-['Pretendard'] text-[12px] font-[400] text-[var(--color1)]`}>
                  별빛이 이름자 추억과 오는 쉬이 새겨지는 멀리 봅니다. 그리고 아름다운 별 어머님, 아직 소녀들의 나의
                </div>
                <div className={`mt-[20px] text-[0px]`}>
                  <div className={`PriceBox Montserrat`}>
                    <div className={`text-[var(--color1)]`}>64,000</div>
                    <div className={`text-[var(--color14)]`}>50%</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default ProductSwiper6;
