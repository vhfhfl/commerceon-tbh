import {Layer} from '@/scripts/util';
import Image from 'next/image';

import {Autoplay, Controller, EffectCreative, Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
/* https://swiperjs.com/demos */
import {Swiper, SwiperSlide} from 'swiper/react';

function ShowCaseSwiper(props) {
  const { children, className = '' } = props;

  const dummy_data = Array.from(Array(5));

  const min_wid = 900;
  const max_wid = 1050;

  // active 아닌 아이템들의 스케일 : 작아진 너비 / 원본 너비
  const not_active_scale = (min_wid / max_wid).toFixed(2);

  return (
    <>
      {/*prettier-ignore*/}
      <style jsx global>{`
        /* 전역 선언 */
        /**/
        //.ShowCaseSwiper .swiper-slide{ width:278px !important; }
        .ShowCaseSwiper .swiper-slide .InfoBox{ opacity:0; }
        .ShowCaseSwiper .swiper-slide .InfoBox{ transition: opacity 300ms cubic-bezier(0.215, 0.610, 0.355, 1.000); will-change:opacity; }
        .ShowCaseSwiper .swiper-slide.swiper-slide-active .InfoBox{ opacity:1; }
        .ShowCaseSwiper .swiper-slide .Dim{ opacity:1; z-index:5; position:absolute; top:0px; left:0px; width:100%; height:100%; background-color:rgba(0,0,0, .5); }
        .ShowCaseSwiper .swiper-slide .Dim{ transition: opacity 300ms cubic-bezier(0.215, 0.610, 0.355, 1.000); will-change:opacity; }
        .ShowCaseSwiper .swiper-slide .Dim{ overflow:hidden; aspect-ratio:560/315; }
        .ShowCaseSwiper .swiper-slide.swiper-slide-active .Dim{ opacity:0.1; }
        .ShowCaseSwiper .swiper-slide .PlayIcon{ opacity:0; transition:all 300ms cubic-bezier(0.33, 1, 0.68, 1); will-change:auto; }
        .ShowCaseSwiper .swiper-slide.swiper-slide-active .PlayIcon{ opacity:1; }
        /**/
        .ShowCaseSwiper{ user-select:none; }
        .ShowCaseSwiper .NaviGationBox{ display:grid; grid-template-columns:auto auto; gap:0; justify-content:space-between; aspect-ratio:100/32.8; }
        .ShowCaseSwiper .NaviGationBox{ pointer-events:none; z-index:10; position:absolute; top:0px; left:0px; width:100%; }
        .ShowCaseSwiper .NaviGationBox > .NaviBtn{ pointer-events:auto; cursor:pointer; display:flex; align-items:center; justify-content:center; }
      `}</style>
      <Swiper
        {...props}
        className={`ShowCaseSwiper ${className}`}
        // slidesPerView={"auto"} // - auto 일때는 .swiper-slide 에 너비 수동 지정 필요
        slidesPerView={1.8} // - slidesPerView, slidesPerGroup 함께 설정 필요
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
        navigation={{
          prevEl: '.NaviGationBox > .NaviBtn.Prev',
          nextEl: '.NaviGationBox > .NaviBtn.Next',
        }}
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
                  className={`aspect-[1050/620] h-full w-full object-cover`}
                  src={`https://picsum.photos/1050/620.jpg?random=${idx}`}
                  width={1050}
                  height={620}
                  alt=''
                />
                <button
                  className={`PlayBtn absolute top-[0] left-[0] z-10 flex h-full w-full flex-row items-center justify-center`}
                  >
                  <div className={`Dim`}></div>
                  <Image
                    className={`PlayIcon`}
                    src={`/icons/icon_13.svg`}
                    width={104}
                    height={104}
                    priority
                    alt='재생 아이콘'
                  />
                </button>
              </div>
              <div className={`InfoBox mt-[72px] bg-white text-center text-[var(--color1)]`}>
                <div className={`text-[12px] font-[600]`}>BRAND NAME {idx + 1}</div>
                <div className={`mt-[22px] text-[18px] font-[500] leading-[28px]`}>
                  2024 Mind Bridge Season Video
                  <br />
                  마인드브릿지 뉴 시즌
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <div className={`NaviGationBox px-[17.5%]`}>
          <div className={`NaviBtn Prev w-[60px]`}>
            <Image src={`/icons/zco_16_1.svg`} width={34} height={62} alt='' />
          </div>
          <div className={`NaviBtn Next w-[60px]`}>
            <Image src={`/icons/zco_16_2.svg`} width={34} height={62} alt='' />
          </div>
        </div>
      </Swiper>
    </>
  );
}

export default ShowCaseSwiper;
