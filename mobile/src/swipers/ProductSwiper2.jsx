import Image from 'next/image';

import { Autoplay, Controller, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
/* https://swiperjs.com/demos */
import { Swiper, SwiperSlide } from 'swiper/react';

function ProductSwiper2(props) {
  const { children, className = '' } = props;

  const dummy_data = Array.from(Array(18));

  const pagination_progress = {
    el: '.PageNationBox',
    type: 'progressbar',
  };

  return (
    <>
      {/* prettier-ignore */}
      <style jsx global>{`
        /* 전역 선언 */
        .ProductSwiper2 .PageNationBox.swiper-pagination-progressbar{ position:relative; top:auto; bottom:auto; left:auto; right:auto; font-size:0; height:auto; text-align:center; }
        .ProductSwiper2 .PageNationBox.swiper-pagination-progressbar{ background-color:var(--color6); height:1px; }
        .ProductSwiper2 .PageNationBox.swiper-pagination-progressbar > .swiper-pagination-progressbar-fill{ position:relative; top:auto; bottom:auto; left:auto; right:auto; font-size:0; }
        .ProductSwiper2 .PageNationBox.swiper-pagination-progressbar > .swiper-pagination-progressbar-fill{ display:inline-block; height:100%; }
        .ProductSwiper2 .PageNationBox.swiper-pagination-progressbar > .swiper-pagination-progressbar-fill{ background-color:var(--color1); }
        /**/
        .ProductSwiper2 .SwiperProgressBar{ height:50px;}
      `}</style>
      <Swiper
        {...props}
        className={`ProductSwiper2 ${className} !pl-[80px]`}
        spaceBetween={4}
        // slidesPerView={'auto'} // - auto 일때는 .swiper-slide 에 너비 수동 지정 필요
        slidesPerView={2.4} // - slidesPerView, slidesPerGroup 함께 설정 필요
        slidesPerGroup={1} // - slidesPerView, slidesPerGroup 함께 설정 필요
        breakpoints={{
          640: {
            slidesPerView: 3.4,
          },
        }}
        // autoplay={{
        //   delay : 3000,
        //   disableOnInteraction : false,
        // }}
        modules={[Autoplay, Pagination, Navigation, Controller]}
        loop={true}
        pagination={pagination_progress}
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
                  className={`aspect-[266/362] h-full w-full object-contain`}
                  src={`https://picsum.photos/266/362.jpg?random=${idx}`}
                  width={266}
                  height={362}
                  alt=''
                />
              </div>
              <div className={`mt-[10px]`}>
                <div className={`text-[10px] font-[600] text-[black]`}>BRAND NAME ({idx + 1})</div>
                <div className={`mt-[12px] truncate text-[12px] font-[400] leading-[14px] text-[var(--color1)]`}>
                  텍스트 설정 없을시 상품명 이 노출 됩니다 텍스트 설정 없을시 상품명 이 노출 됩니다 텍스트 설정 없을시
                  상품명 이 노출 됩니다
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <div className={`mt-[60px]`}>
          <div className={`PageNationBox`}></div>
        </div>
      </Swiper>
    </>
  );
}

export default ProductSwiper2;
