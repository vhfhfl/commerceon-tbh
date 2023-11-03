/* https://swiperjs.com/demos */
import SwiperButtonNext from '@/swiper_parts/SwiperButtonNext';
import SwiperButtonPause from '@/swiper_parts/SwiperButtonPause';
import SwiperButtonPrev from '@/swiper_parts/SwiperButtonPrev';
import SwiperButtonResume from '@/swiper_parts/SwiperButtonResume';
import SwiperNumberCurrent from '@/swiper_parts/SwiperNumberCurrent';
import SwiperNumberTotal from '@/swiper_parts/SwiperNumberTotal';
import SwiperProgressBar from '@/swiper_parts/SwiperProgressBar';
import Image from 'next/image';
import {useRef} from 'react';

import {Autoplay, Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react';

function SwiperBase(props) {
  const { children, className = '' } = props;

  const dummy_data = Array.from(Array(10));
  const ref_swiper = useRef();

  const pagination_basic = {
    el: '.PageNationBox',
    clickable: true,
    type: 'bullets',
    bulletClass: 'PageDot',
    bulletActiveClass: 'Active',

    renderBullet: function (index, className) {
      return `<div class="${className} text-[0px] w-[10px] h-[10px] bg-[black] [&.Active]:bg-[red] rounded-full"> ${index} </div>`;
    },
  };

  const pagination_fraction = {
    el: '.PageNationFractionBox',
    type: 'fraction',
    clickable: true,
    renderFraction: function (currentClass, totalClass) {
      return `
      <div class="Montserrat flex flex-row gap-[4px] items-center justify-center bg-black/80 font-[600] text-[14px] rounded-[20px] overflow-hidden h-[30px]">
        <div class="text-[red] ${currentClass}"></div>
        <div class="text-[green] sym">/</div>
        <div class="text-[blue] ${totalClass}"></div>
      </div>
      `;
    },
  };

  const pagination_progress = {
    el: '.PageNationProgressBox',
    type: 'progressbar',
    renderProgressbar: function (progressbarFillClass) {
      return `<div class="${progressbarFillClass} !bg-[var(--color1)]"></div>`;
    },
  };

  return (
    <div {...props} className={`SwiperBase relative ${className}`}>
      <div className={`pointer-events-none mb-[10px] flex w-full flex-row items-center justify-between bg-red-500/20`}>
        <button
          className={`pointer-events-auto`}
          onClick={(evt) => {
            const swiper = ref_swiper.current.swiper;
            swiper.slidePrev();
          }}>
          <Image src={`https://gifpng.com/40x40/`} width={40} height={40} alt='' />
        </button>
        <button
          className={`pointer-events-auto`}
          onClick={(evt) => {
            const swiper = ref_swiper.current.swiper;
            swiper.slideNext();
          }}>
          <Image src={`https://gifpng.com/40x40/`} width={40} height={40} alt='' />
        </button>
      </div>

      <Swiper
        ref={ref_swiper}
        {...props}
        className={``}
        spaceBetween={0}
        // slidesPerView={"auto"} // - auto 일때는 .swiper-slide 에 너비 수동 지정 필요
        slidesPerView={1.5} // - slidesPerView, slidesPerGroup 함께 설정 필요
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
        modules={[Autoplay, Pagination, Navigation]}
        navigation={{
          prevEl: '.NaviGationBox > .NaviBtn.Prev',
          nextEl: '.NaviGationBox > .NaviBtn.Next',
        }}
        pagination={pagination_basic}
        // pagination={pagination_fraction}
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
            <SwiperSlide className={``} key={idx}>
              <div>
                {/*[.SwiperBase_.swiper-slide-active_&]:opacity-100*/}
                <Image
                  className={`aspect-[560/315] h-full w-full object-cover opacity-50 duration-300 ease-out will-change-auto [.SwiperBase_.swiper-slide-active_&]:opacity-100`}
                  src={`https://picsum.photos/560/315.jpg?random=${idx}`}
                  width={560}
                  height={315}
                  alt=''
                />
              </div>
            </SwiperSlide>
          );
        })}
        <div className={`relative`} slot='container-start'>
          <div
            className={`NaviGationBox pointer-events-none absolute top-[0] left-[0] z-10 grid aspect-[560/315] w-full grid-cols-[auto_auto] items-center justify-between bg-[yellow]/20`}>
            <div className={`NaviBtn Prev pointer-events-auto cursor-pointer`}>
              <Image src={`https://gifpng.com/40x40/`} width={40} height={40} alt='' />
            </div>
            <div className={`NaviBtn Next pointer-events-auto cursor-pointer`}>
              <Image src={`https://gifpng.com/40x40/`} width={40} height={40} alt='' />
            </div>
          </div>
        </div>
        {/*<div slot='container-end'>Container End</div>*/}
        {/*<div slot='wrapper-start'>Wrapper Start</div>*/}
        {/*<div slot='wrapper-end'>Wrapper End</div>*/}

        <div className={`PageNationBox mt-[10px] flex flex-row items-center justify-center gap-[4px]`}></div>
        <div className={`PageNationFractionBox mt-[10px]`}></div>
        <div className={`RR PageNationProgressBox !relative mt-[10px] !h-[10px] !bg-[var(--color2)]`}></div>

        <div>
          <div className={`RR py-[10px]`}>
            <SwiperProgressBar>SwiperProgressBar</SwiperProgressBar>
          </div>
          <div className={`mt-[10px] text-center`}>
            <SwiperNumberCurrent /> / <SwiperNumberTotal />
          </div>
          <div className={`mt-[10px] flex flex-row items-center justify-center`}>
            <SwiperButtonPrev>
              <Image src={`/icons/basic/swiper_prev.svg`} width={24} height={24} alt='' />
            </SwiperButtonPrev>
            <SwiperButtonResume>
              <Image src={`/icons/basic/swiper_play.svg`} width={24} height={24} alt='' />
            </SwiperButtonResume>
            <SwiperButtonPause>
              <Image src={`/icons/basic/swiper_pause.svg`} width={24} height={24} alt='' />
            </SwiperButtonPause>
            <SwiperButtonNext>
              <Image src={`/icons/basic/swiper_next.svg`} width={24} height={24} alt='' />
            </SwiperButtonNext>
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default SwiperBase;
