import SwiperNumberCurrent from '@/swiper_parts/SwiperNumberCurrent';
import SwiperNumberTotal from '@/swiper_parts/SwiperNumberTotal';
import Image from 'next/image';

import {Autoplay, Controller, Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
/* https://swiperjs.com/demos */
import {Swiper, SwiperSlide} from 'swiper/react';

function MainVisualBanner2(props) {
  const { children, className = '' } = props;

  const dummy_data = Array.from(Array(4));

  const pagination_progress = {
    el: '.PageNationBox',
    type: 'progressbar',
  };

  return (
    <>
      {/* prettier-ignore */}
      <style jsx global>{`
        /* 전역 선언 */
        /**/
        .MainVisualBanner2 .PageNationBox.swiper-pagination-progressbar{position:relative;top:auto;bottom:auto;left:auto;right:auto;font-size:0;height:auto;text-align:center;}
        .MainVisualBanner2 .PageNationBox.swiper-pagination-progressbar{background-color:rgba(255, 255, 255, 0.4);height:1px;}
        .MainVisualBanner2 .PageNationBox.swiper-pagination-progressbar > .swiper-pagination-progressbar-fill{position:relative;top:auto;bottom:auto;left:auto;right:auto;font-size:0;}
        .MainVisualBanner2 .PageNationBox.swiper-pagination-progressbar > .swiper-pagination-progressbar-fill{display:inline-block;height:100%;}
        .MainVisualBanner2 .PageNationBox.swiper-pagination-progressbar > .swiper-pagination-progressbar-fill{background-color:white;}
      `}</style>
      <Swiper
        {...props}
        className={`MainVisualBanner2 ${className}`}
        spaceBetween={0}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
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
              <div className={`h-[580px] w-full`}>
                <Image
                  className={`h-full w-full object-cover`}
                  src={`https://picsum.photos/1035/580.jpg?random=${idx}`}
                  priority
                  width={1035}
                  height={580}
                  alt=''
                />
                <div className={`absolute top-[0] left-[0] z-10 h-full w-full`}>
                  <div className={`relative mx-[var(--contents-side-padding)] h-full`}>
                    <div className={`Montserrat absolute bottom-[107px] left-[0] z-10`}>
                      <div className={`text-[26px] font-[800] leading-[30px] text-[white]`}>
                        WELCOME,
                        <br />
                        23 NEW SUMMER ({idx + 1})
                      </div>
                      <div className={`mt-[30px] text-[16px] font-[400] text-[white]`}>
                        쥬시쥬디 여름 뉴시즌 최대 30% OFF
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
            <div className={`absolute bottom-[40px] left-[0] z-10 w-full`}>
              <div
                className={`Montserrat mb-[15px] flex flex-row items-center justify-start gap-[4px] text-[14px] font-[500] text-white`}>
                <SwiperNumberCurrent /> <div>/</div> <SwiperNumberTotal />
              </div>
              <div className={`PageNationBox`}></div>
            </div>
          </div>
        </div>
      </Swiper>
    </>
  );
}

export default MainVisualBanner2;
