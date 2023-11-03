import SwiperNumberCurrent from '@/swiper_parts/SwiperNumberCurrent';
import SwiperNumberTotal from '@/swiper_parts/SwiperNumberTotal';
import Image from 'next/image';

import { Autoplay, Controller, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
/* https://swiperjs.com/demos */
import { Swiper, SwiperSlide } from 'swiper/react';

function MainVisualBanner3(props) {
  const { children, className = '' } = props;

  const dummy_data = Array.from(Array(4));

  return (
    <>
      {/* prettier-ignore */}
      <style jsx global>{`
        /* 전역 선언 */
        /**/
        //.MainVisualBanner3 .swiper-slide{ width:278px !important; }
        /**/
        .MainVisualBanner3{user-select:none;}
        .MainVisualBanner3 .PageNationBox.swiper-pagination-progressbar{position:relative;top:auto;bottom:auto;left:auto;right:auto;font-size:0;height:auto;text-align:center;}
        .MainVisualBanner3 .PageNationBox.swiper-pagination-progressbar{background-color:rgba(255, 255, 255, 0.4);height:1px;}
        .MainVisualBanner3 .PageNationBox.swiper-pagination-progressbar > .swiper-pagination-progressbar-fill{position:relative;top:auto;bottom:auto;left:auto;right:auto;font-size:0;}
        .MainVisualBanner3 .PageNationBox.swiper-pagination-progressbar > .swiper-pagination-progressbar-fill{display:inline-block;height:100%;}
        .MainVisualBanner3 .PageNationBox.swiper-pagination-progressbar > .swiper-pagination-progressbar-fill{background-color:white;}
      `}</style>
      <Swiper
        {...props}
        className={`MainVisualBanner3 ${className}`}
        spaceBetween={0}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        modules={[Autoplay, Pagination, Navigation, Controller]}
        loop={true}
        navigation={{
          prevEl: '.NaviGationBox > .NaviBtn.Prev',
          nextEl: '.NaviGationBox > .NaviBtn.Next',
        }}
        // pagination={pagination_progress}
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
              <div className={`h-[470px] w-full`}>
                <Image
                  className={`h-full w-full object-cover`}
                  src={`https://picsum.photos/720/940.jpg?random=${idx}`}
                  priority
                  width={720}
                  height={940}
                  alt=''
                />
                <div className={`absolute top-[0] left-[0] z-10 h-full w-full`}>
                  <div className={`relative mx-[var(--contents-side-padding)] h-full`}>
                    <div className={`Montserrat absolute bottom-[75px] left-[0] z-10`}>
                      <div className={`text-[26px] font-[600] leading-[28px] tracking-[1px] text-[white]`}>
                        23 NEW SUMMER
                        <br />
                        ARRIVALS
                      </div>
                      <div className={`mt-[22px] text-[18px] font-[400] text-[white]`}>
                        마인드브릿지 뉴시즌 최대 43%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <div className={`pointer-events-none absolute top-[0] left-[0] z-10 h-full w-full`}>
          <div className={`relative mx-[var(--contents-side-padding)] h-full`}>
            <div
              className={`Montserrat absolute top-[20px] left-[0] z-10 flex flex-row items-center justify-center gap-[4px] text-[14px] font-[500] text-white `}>
              <SwiperNumberCurrent /> <div>/</div> <SwiperNumberTotal />
            </div>
            {/*<div className={`absolute bottom-[23px] left-[0] z-10 w-full`}>*/}
            {/*  <div className={`PageNationBox`}></div>*/}
            {/*</div>*/}
          </div>
        </div>
      </Swiper>
    </>
  );
}

export default MainVisualBanner3;
