import ItemFlag1 from '@/components/common/ItemFlag1';
import Image from 'next/image';
import {Autoplay, Controller, Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
/* https://swiperjs.com/demos */
import {Swiper, SwiperSlide} from 'swiper/react';

function ProductSwiper2(props) {
  const { children, className = '' } = props;

  const dummy_data = Array.from(Array(18));

  const pagination_progress = {
    el: '.PageNationBox',
    type: 'progressbar',
  };

  return (
    <>
      <div className={`ProductSwiper2`}>
        {/*prettier-ignore*/}
        <style jsx global>{`
          /* 전역 선언 */
          /**/
          //.ProductSwiper2 .swiper-slide{ width:250px !important; }
          /**/
          .ProductSwiper2{ overflow:hidden; padding-right:60px; }
          .ProductSwiper2 > .swiper{ overflow:visible; margin-left:0; }
          .ProductSwiper2 .PageNationBox.swiper-pagination-progressbar{ position:relative; top:auto; bottom:auto; left:auto; right:auto; font-size:0; height:auto; text-align:center; }
          .ProductSwiper2 .PageNationBox.swiper-pagination-progressbar{ background-color:var(--color3); height:2px; }
          .ProductSwiper2 .PageNationBox.swiper-pagination-progressbar > .swiper-pagination-progressbar-fill{ position:relative; top:auto; bottom:auto; left:auto; right:auto; font-size:0; }
          .ProductSwiper2 .PageNationBox.swiper-pagination-progressbar > .swiper-pagination-progressbar-fill{ display:inline-block; height:100%; }
          .ProductSwiper2 .PageNationBox.swiper-pagination-progressbar > .swiper-pagination-progressbar-fill{ background-color:var(--color1); }
        `}</style>
        <Swiper
          {...props}
          className={`w-full ${className}`}
          spaceBetween={20}
          // slidesPerView={'auto'} // - auto 일때는 .swiper-slide 에 너비 수동 지정 필요
          slidesPerView={6} // - slidesPerView, slidesPerGroup 함께 설정 필요
          slidesPerGroup={6} // - slidesPerView, slidesPerGroup 함께 설정 필요
          loop={true}
          // autoplay={{
          //   delay : 3000,
          //   disableOnInteraction : false,
          // }}
          modules={[Autoplay, Pagination, Navigation, Controller]}
          pagination={pagination_progress}
          onSwiper={(swiper) => {
            // console.log('onSwiper');
            // console.log(swiper);
          }}
          onSlideChangeTransitionEnd={(swiper) => {
            // console.log(swiper);
            swiper.loopDestroy();
            swiper.loopCreate();
          }}
          onSlideChange={(swiper) => {
            // console.log(swiper);
            // console.log("swiper.realIndex == ", swiper.realIndex);
          }}>
          {dummy_data.map((obj, idx) => {
            return (
              <SwiperSlide key={idx}>
                <div className={`relative`}>
                  <Image
                    className={`h-full w-full object-contain`}
                    src={`https://picsum.photos/230/338.jpg?random=${idx}`}
                    width={230}
                    height={338}
                    alt=''
                  />
                  <div className={`absolute top-[0] right-[0] z-10`}>
                    <ItemFlag1 theme={idx}>Big</ItemFlag1>
                  </div>
                </div>
                <div className={`mt-[20px]`}>
                  <div className={`text-[14px] font-[600] text-[black]`}>BRAND NAME ({idx + 1})</div>
                  <div className={`mt-[8px] text-[14px] font-[400] leading-[20px] text-[var(--color1)] line-clamp-2`}>
                    텍스트 설정 없을시 상품명이 텍스트 설정 없을시 상품명이 설정 없을시 상품명이 텍스트 설정 없을시
                    상품명이
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          <div className={`mt-[98px]`}>
            <div className={`PageNationBox`}></div>
          </div>
        </Swiper>
      </div>
    </>
  );
}

export default ProductSwiper2;
