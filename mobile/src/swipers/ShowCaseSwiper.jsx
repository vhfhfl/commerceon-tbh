/* https://swiperjs.com/demos */
import {Layer} from "@/scripts/util";
import Image from 'next/image';

import {Autoplay, Controller, EffectCreative, Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react';

function ShowCaseSwiper(props) {
  const { children, className = '' } = props;

  const dummy_data = Array.from(Array(5));

  const min_wid = 260;
  const max_wid = 300;

  // active 아닌 아이템들의 스케일 : 작아진 너비 / 원본 너비
  const not_active_scale = (min_wid / max_wid).toFixed(2);

  return (
    <>
      {/* prettier-ignore */}
      <style jsx global>{`
        /* 전역 선언 */
        .ShowCaseSwiper .swiper-slide .Info{ opacity:0; }
        .ShowCaseSwiper .swiper-slide .Info{ transition: opacity 300ms cubic-bezier(0.215, 0.610, 0.355, 1.000); will-change:opacity; }
        .ShowCaseSwiper .swiper-slide.swiper-slide-active .Info{ opacity:1; }
        .ShowCaseSwiper .swiper-slide .Dim{ opacity:1; z-index:5; position:absolute; top:0px; left:0px; width:100%; height:100%; background-color:rgba(0,0,0, .5); }
        .ShowCaseSwiper .swiper-slide .Dim{ transition: opacity 300ms cubic-bezier(0.215, 0.610, 0.355, 1.000); will-change:opacity; }
        .ShowCaseSwiper .swiper-slide .Dim{ overflow:hidden; aspect-ratio:560/315; }
        .ShowCaseSwiper .swiper-slide.swiper-slide-active .Dim{ opacity:0; }
      `}</style>
      <Swiper
        {...props}
        className={`ShowCaseSwiper ${className}`}
        // slidesPerView={"auto"} // - auto 일때는 .swiper-slide 에 너비 수동 지정 필요
        slidesPerView={1.2} // - slidesPerView, slidesPerGroup 함께 설정 필요
        slidesPerGroup={1} // - slidesPerView, slidesPerGroup 함께 설정 필요
        spaceBetween={0}
        // autoplay={{
        //   delay : 3000,
        //   disableOnInteraction : false,
        // }}
        centeredSlides={true}
        modules={[Autoplay, Pagination, Navigation, Controller, EffectCreative]}
        effect={'creative'}
        creativeEffect={{
          prev: {
            scale: not_active_scale,
            translate: ['-70%', 0, 0],
          },
          next: {
            scale: not_active_scale,
            translate: ['70%', 0, 0],
          },
        }}
        loop={true}
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
                  className={`aspect-[600/354] h-full w-full object-contain`}
                  src={`https://picsum.photos/600/354.jpg?random=${idx}`}
                  width={600}
                  height={354}
                  alt=''
                />
                <div
                  data-seq={`20230517193125765`}
                  className={`absolute top-[0] left-[0] z-10 flex h-full w-full flex-row items-center justify-center`}
                  >
                  <div className={`Dim`}></div>
                  <Image
                    className={`PlayIcon Icon`}
                    src={`/icons/icon_13.svg`}
                    width={50}
                    height={50}
                    priority
                    alt='재생 아이콘'
                  />
                </div>
              </div>
              <div className={`Montserrat Info mt-[30px] text-center text-[var(--color1)]`}>
                <div className={`text-[13px] font-[500]`}>BRAND NAME ({idx + 1})</div>
                <div className={`mt-[12px] text-[16px] leading-[24px]`}>
                  <div className={`font-[600] truncate`}>2024 Mind Bridge Season Video</div>
                  <div className={`font-[400] truncate`}>마인드브릿지 뉴 시즌</div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default ShowCaseSwiper;
