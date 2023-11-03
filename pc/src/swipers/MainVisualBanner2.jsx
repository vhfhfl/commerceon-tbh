/* https://swiperjs.com/demos */
import SwiperNumberCurrent from '@/swiper_parts/SwiperNumberCurrent';
import SwiperNumberTotal from '@/swiper_parts/SwiperNumberTotal';
import Image from 'next/image';
import {useRef} from 'react';

import {Autoplay, Controller, Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react';

function MainVisualBanner2(props) {
  const { children, className = '' } = props;

  const dummy_data = Array.from(Array(3));
  const ref_swiper = useRef();

  const pagination_progress = {
    el: '.PageNationBox',
    type: 'progressbar',
  };

  return (
    <div {...props} className={`MainVisualBanner2 relative ${className}`}>
      {/*prettier-ignore*/}
      <style jsx global>{`
        /* 전역 선언 */
        /**/
        .MainVisualBanner2{}
        .MainVisualBanner2 .NaviGationBox{display:grid;grid-template-columns: auto auto;gap:0;justify-content:space-between;}
        .MainVisualBanner2 .NaviGationBox{pointer-events:none; width:100%; height:100%; }
        .MainVisualBanner2 .NaviGationBox > .NaviBtn{pointer-events:auto;cursor:pointer;display:flex;align-items:center;justify-content:center;}
        /**/
        .MainVisualBanner2 .PageNationBox.swiper-pagination-progressbar{position:relative;top:auto;bottom:auto;left:auto;right:auto;font-size:0;height:auto;text-align:center;}
        .MainVisualBanner2 .PageNationBox.swiper-pagination-progressbar{background-color:rgba(255, 255, 255, 0.4); width:700px; height:2px;}
        .MainVisualBanner2 .PageNationBox.swiper-pagination-progressbar > .swiper-pagination-progressbar-fill{position:relative;top:auto;bottom:auto;left:auto;right:auto;font-size:0;}
        .MainVisualBanner2 .PageNationBox.swiper-pagination-progressbar > .swiper-pagination-progressbar-fill{display:inline-block;height:100%;}
        .MainVisualBanner2 .PageNationBox.swiper-pagination-progressbar > .swiper-pagination-progressbar-fill{background-color:white;}
      `}</style>

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
        modules={[Autoplay, Pagination, Navigation, Controller]}
        navigation={{
          prevEl: '.NaviGationBox > .NaviBtn.Prev',
          nextEl: '.NaviGationBox > .NaviBtn.Next',
        }}
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
                <div>
                  <Image
                    className={`aspect-[1920/900] h-full w-full object-cover`}
                    src={`https://picsum.photos/1920/900.jpg?random=${idx}${idx}`}
                    width={1920}
                    height={900}
                    alt=''
                  />
                  <div className={`H-Box absolute top-[0] left-[0] z-10 h-full w-full`}>
                    <div className={`Inner flex h-full flex-row items-center px-[90px]`}>
                      <div>
                        <div className={`Montserrat text-[64px] font-[700] text-[white]`}>
                          WELCOME,
                          <br />
                          23 NEW SUMMER
                        </div>
                        <div className={`mt-[50px] text-[36px] font-[400] text-[white]`}>
                          쥬시쥬디 여름 뉴시즌 최대 30% OFF
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <div className={`H-Box pointer-events-none absolute top-[0] left-[0] z-10 aspect-[1920/900] w-full`}>
          <div className={`Inner h-full`}>
            <div className={`NaviGationBox`}>
              <div className={`NaviBtn Prev`}>
                <Image src={`/icons/zco_25_1.svg`} width={32} height={61} alt='' />
              </div>
              <div className={`NaviBtn Next`}>
                <Image src={`/icons/zco_25_2.svg`} width={32} height={61} alt='' />
              </div>
            </div>
          </div>
        </div>

        <div className={`absolute bottom-[155px] left-[0] z-10 w-full`}>
          <div className={`H-Box`}>
            <div className={`Inner px-[90px]`}>
              <div className={`PageNationBox`}></div>
            </div>
          </div>
        </div>

        <div
          className={`Montserrat absolute bottom-[40px] left-[0] z-10 w-full text-center text-[18px] font-[500] text-[white]`}>
          <SwiperNumberCurrent /> / <SwiperNumberTotal />
        </div>
      </Swiper>
    </div>
  );
}

export default MainVisualBanner2;
