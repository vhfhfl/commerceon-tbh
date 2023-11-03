import { Layer } from '@/scripts/util';
import Image from 'next/image';

import { Autoplay, Controller, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
/* https://swiperjs.com/demos */
import { Swiper, SwiperSlide } from 'swiper/react';

function ShowCaseSwiper2(props) {
  const { children, className = '' } = props;

  const dummy_data = Array.from(Array(5));

  const min_wid = 260;
  const max_wid = 300;

  // active 아닌 아이템들의 스케일 : 작아진 너비 / 원본 너비
  const not_active_scale = (min_wid / max_wid).toFixed(2);

  return (
    <>
      <div className={`ShowCaseSwiper2 bg-[var(--color1)] pt-[50px] pb-[100px]`}>
        {/* prettier-ignore */}
        <style jsx global>{`
          /* 전역 선언 */
          /**/
          //.ShowCaseSwiper2 .swiper-slide{ width:278px !important; }
          .ShowCaseSwiper2 .swiper-slide .Info{ opacity:0; }
          .ShowCaseSwiper2 .swiper-slide .Info{ transition:opacity 300ms cubic-bezier(0.215, 0.610, 0.355, 1.000); will-change:opacity; }
          .ShowCaseSwiper2 .swiper-slide.swiper-slide-active .Info{ opacity:1; }
          .ShowCaseSwiper2 .swiper-slide .Dim{ z-index:5; position:absolute; top:0px; left:0px; width:100%; height:100%; }
          .ShowCaseSwiper2 .swiper-slide .Dim{ transition:background-color 300ms cubic-bezier(0.215, 0.610, 0.355, 1.000); will-change:opacity; }
          .ShowCaseSwiper2 .swiper-slide .Dim{ background-color:rgba(0, 0, 0, .5); overflow:hidden; aspect-ratio:560/315; }
          .ShowCaseSwiper2 .swiper-slide.swiper-slide-active .Dim{ background-color:rgba(0, 0, 0, .1); }
          /**/
        `}</style>
        <Swiper
          {...props}
          className={`${className}`}
          spaceBetween={6}
          // slidesPerView={"auto"} // - auto 일때는 .swiper-slide 에 너비 수동 지정 필요
          slidesPerView={1.2} // - slidesPerView, slidesPerGroup 함께 설정 필요
          slidesPerGroup={1} // - slidesPerView, slidesPerGroup 함께 설정 필요
          // autoplay={{
          //   delay : 3000,
          //   disableOnInteraction : false,
          // }}
          centeredSlides={true}
          modules={[Autoplay, Pagination, Navigation, Controller]}
          loop={true}
          navigation={{
            prevEl: '.NaviGationBox > .NaviBtn.Prev',
            nextEl: '.NaviGationBox > .NaviBtn.Next',
          }}
          keyboard={{
            enabled: true,
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
                    className={`aspect-[600/354] h-full w-full object-contain`}
                    src={`/imgs/img_12_${idx + 1}.jpg`}
                    width={600}
                    height={354}
                    alt=''
                  />
                  <div
                    className={`absolute top-[0] left-[0] z-10 flex h-full w-full flex-row items-center justify-center`}>
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
                <div className={`Info mt-[40px] text-center text-[14px] text-white`}>
                  <div className={`Montserrat font-[600] `}>2024 Mind Bridge Season Video</div>
                  <div className={`mt-[10px] font-[300]`}>마인드브릿지 뉴 시즌</div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}

export default ShowCaseSwiper2;
