import SwiperButtonNext from '@/swiper_parts/SwiperButtonNext';
import SwiperButtonPause from '@/swiper_parts/SwiperButtonPause';
import SwiperButtonPrev from '@/swiper_parts/SwiperButtonPrev';
import SwiperButtonResume from '@/swiper_parts/SwiperButtonResume';
import SwiperNumberCurrent from '@/swiper_parts/SwiperNumberCurrent';
import SwiperNumberTotal from '@/swiper_parts/SwiperNumberTotal';
import Image from 'next/image';
import {useRef} from 'react';

import {Autoplay, Controller, Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
/* https://swiperjs.com/demos */
import {Swiper, SwiperSlide} from 'swiper/react';

function MainVisualBanner(props) {
  const { children, className = '' } = props;

  const slide_width = 1464;
  const slide_height = 760;

  const dummy_data = Array.from(Array(5));

  const ref_swiper = useRef();
  const ref_pause_btn = useRef();
  const ref_resume_btn = useRef();

  function checkAutoPlayState() {
    const swiper = ref_swiper.current.swiper;
    const el_resume_btn = ref_resume_btn.current;
    const el_pause_btn = ref_pause_btn.current;

    const is_paused = swiper.autoplay.paused;
    if (is_paused) {
      el_pause_btn.classList.remove('On');
      el_resume_btn.classList.add('On');
    } else {
      el_resume_btn.classList.remove('On');
      el_pause_btn.classList.add('On');
    }
  }

  const pagination_progress = {
    el: '.PageNationBox',
    type: 'progressbar',
  };

  return (
    <>
      {/*prettier-ignore*/}
      <style jsx global>{`
        /* 전역 선언 */
        /**/
        .MainVisualBanner .swiper-slide{ width:1464px !important; }
        /**/
        .MainVisualBanner .PageNationBox{--bullet-size:10px;}
        .MainVisualBanner .PageNationBox{text-align:center;font-size:0;}
        .MainVisualBanner .PageNationBox{display:flex;justify-content:center;gap:4px;}
        .MainVisualBanner .PageNationBox > .PageDot{display:block;width:var(--bullet-size);height:var(--bullet-size);cursor:pointer;border-radius:100%;}
        .MainVisualBanner .PageNationBox > .PageDot{opacity:0.3;background-color:black;}
        .MainVisualBanner .PageNationBox > .PageDot.Active{opacity:1;}
        /**/
        .MainVisualBanner .PageNationBox.swiper-pagination-progressbar{position:relative;top:auto;bottom:auto;left:auto;right:auto;font-size:0;height:auto;text-align:center;}
        .MainVisualBanner .PageNationBox.swiper-pagination-progressbar{background-color:rgba(255, 255, 255, 0.4); width:150px; height:1px;}
        .MainVisualBanner .PageNationBox.swiper-pagination-progressbar > .swiper-pagination-progressbar-fill{position:relative;top:auto;bottom:auto;left:auto;right:auto;font-size:0;}
        .MainVisualBanner .PageNationBox.swiper-pagination-progressbar > .swiper-pagination-progressbar-fill{display:inline-block;height:100%;}
        .MainVisualBanner .PageNationBox.swiper-pagination-progressbar > .swiper-pagination-progressbar-fill{background-color:white;}
      `}</style>
      <Swiper
        ref={ref_swiper}
        {...props}
        className={`MainVisualBanner ${className}`}
        spaceBetween={14}
        slidesPerView={'auto'}
        // slidesPerView={1.2}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation, Controller]}
        loop={true}
        navigation={{
          prevEl: '.NaviGationBox > .NaviBtn.Prev',
          nextEl: '.NaviGationBox > .NaviBtn.Next',
        }}
        pagination={pagination_progress}
        onSwiper={(swiper) => {
          // console.log('onSwiper');
          checkAutoPlayState();
        }}
        onSlideChange={(swiper) => {
          // console.log('onSlideChange');
          // checkAutoPlayState();
        }}>
        {dummy_data.map((obj, idx) => {
          return (
            <SwiperSlide key={idx}>
              <div className={`h-[760px] w-full`}>
                <Image
                  className={`aspect-[1464/760] h-full w-full object-cover`}
                  src={`https://picsum.photos/1464/760.jpg?random=${idx}`}
                  priority
                  width={slide_width}
                  height={slide_height}
                  alt=''
                />
                <div className={`absolute top-[0] left-[0] z-10 h-full w-full`}>
                  <div className={`Montserrat absolute bottom-[153px] left-[120px] z-10`}>
                    <div className={`text-[18px] font-[500] leading-[20px] text-[white]`}>MIND BRIDGE</div>
                    <div className={`mt-[27px] text-[48px] font-[700] text-[white]`}>
                      23 NEW SUMMER
                      <br />
                      ARRIVALS
                    </div>
                    <div className={`mt-[20px] text-[42px] font-[500] text-[white]`}>신상품 최대 43% OFF</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <div
          className={`pointer-events-none absolute top-[0] left-1/2 z-10 h-full -translate-x-1/2`}
          style={{ width: slide_width }}>
          <div className={`pointer-events-auto absolute top-[50px] right-[50px] z-10`}>
            <div className={`flex flex-row items-center justify-center`}>
              <div className={`flex h-[20px] flex-row items-center justify-center gap-[10px]`}>
                <SwiperNumberCurrent className={`Montserrat text-[16px] font-[700] text-[white]`} />
                <div>
                  <div className={`PageNationBox`}></div>
                </div>
                <SwiperNumberTotal className={`Montserrat text-[16px] font-[400] text-[white]`} />
              </div>
              <div className={`ml-[10px] flex flex-row items-center justify-center`}>
                <SwiperButtonPrev>
                  <Image src={`/icons/zco_4_1.svg`} width={20} height={20} alt='' />
                </SwiperButtonPrev>
                <SwiperButtonPause
                  className={`hidden [&.On]:block`}
                  refdata={ref_pause_btn}
                  callback={checkAutoPlayState}>
                  <Image src={`/icons/zco_4_2.svg`} width={20} height={20} alt='' />
                </SwiperButtonPause>
                <SwiperButtonResume
                  className={`hidden [&.On]:block`}
                  refdata={ref_resume_btn}
                  callback={checkAutoPlayState}>
                  <Image src={`/icons/zco_4_4.svg`} width={20} height={20} alt='' />
                </SwiperButtonResume>
                <SwiperButtonNext id={`MainVisualSlideNext`}>
                  <Image src={`/icons/zco_4_3.svg`} width={20} height={20} alt='' />
                </SwiperButtonNext>
              </div>
            </div>
          </div>
        </div>

        <div className={`RR absolute top-[0] left-[0] z-10 bg-red-600`}>
          <div className={`relative mx-[var(--contents-side-padding)] h-full`}>
            <div
              className={`Montserrat absolute top-[23px] left-[0] z-10 flex flex-row items-center justify-center gap-[4px] text-[14px] font-[500] text-white`}></div>
          </div>
        </div>
        {/*
        <div className={`NaviGationBox`}>
          <div className={`NaviBtn Prev`}>Prev</div>
          <div className={`NaviBtn Next`}>Next</div>
        </div>
        */}
      </Swiper>
    </>
  );
}

export default MainVisualBanner;
