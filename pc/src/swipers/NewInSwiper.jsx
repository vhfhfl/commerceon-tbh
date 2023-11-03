/* https://swiperjs.com/demos */
import {Util} from "@/scripts/util";
import Image from 'next/image';
import {useEffect, useRef} from 'react';

import {Autoplay, Controller, Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react';

function NewInSwiper(props) {
  const { children, className = '' } = props;

  const dummy_data = Array.from(Array(19));

  const ref_swiper = useRef();

  useEffect(() => {
    // mount
    // console.log('NewInSwiper.jsx mount');

    const callbackResize = (evt) => {
      syncSwiperHei();
    };
    Util.on(window, 'resize', callbackResize);

    return () => {
      // unmount
      // console.log('NewInSwiper.jsx unmount');
      Util.off(window, 'resize', callbackResize);
    };
  }, []);

  return (
    <div {...props} className={`NewInSwiper ${className}`}>
      {/*prettier-ignore*/}
      <style jsx global>{`
        /* 전역 선언 */
        /**/
        //.NewInSwiper .swiper-slide{ width:278px !important; }
        //.NewInSwiper .swiper-slide{ outline:1px dashed red; }
      `}</style>
      <Swiper
        ref={ref_swiper}
        {...props}
        className={``}
        spaceBetween={20}
        // slidesPerView={"auto"} // - auto 일때는 .swiper-slide 에 너비 수동 지정 필요
        slidesPerView={3.4} // - slidesPerView, slidesPerGroup 함께 설정 필요
        centeredSlides={true}
        slidesPerGroup={1} // - slidesPerView, slidesPerGroup 함께 설정 필요
        loop={true} // loop 를 돌릴경우 item 의 총 수량이 반드시 slidesPerGroup 의 배수이어야한다
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        modules={[Autoplay, Pagination, Navigation, Controller]}
        navigation={{
          prevEl: '.NaviGationBox > .NaviBtn.Prev',
          nextEl: '.NaviGationBox > .NaviBtn.Next',
        }}
        onSwiper={(swiper) => {
          // console.log('onSwiper');
        }}
        onSlideChange={(swiper) => {
          setTimeout(() => {
            setHeightUp(swiper);
          }, 1);
        }}>
        {dummy_data.map((obj, idx) => {
          return (
            <SwiperSlide key={idx}>
              <div>
                <div>
                  <Image
                    className={`aspect-[538/596] h-full w-full object-cover duration-300 ease-out will-change-auto [.NewInSwiper_.HeightUp_&]:aspect-[538/734]`}
                    src={`https://picsum.photos/538/596.jpg?random=${idx}`}
                    width={538}
                    height={596}
                    alt=''
                    onTransitionEnd={(evt) => {
                      syncSwiperHei();
                    }}
                  />
                </div>
                <div className={`mt-[18px] text-center`}>
                  <div className={`text-[14px] text-[var(--color1)]`}>
                    <div className={`font-[600]`}>BRAND NAME</div>
                    <div className={`mt-[8px] font-[400]`}>이지케어 솔리드 드레스셔츠 레귤러</div>
                  </div>
                  <div className={`mt-[18px] text-[0px]`}>
                    <div className={`PriceBox`}>
                      <div className={`text-[var(--color1)]`}>64,000</div>
                      <div className={`text-[var(--color2)]`}>50%</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );

  function syncSwiperHei() {
    // 트랜지션 끝나면 스와이퍼 컨테이너 높이 갱신
    const el_swiper = ref_swiper.current;
    const swiper = el_swiper.swiper;
    const active_slide = swiper.slides[swiper.activeIndex];
    const target_hei = active_slide.clientHeight;
    el_swiper.style.minHeight = `${target_hei}px`;
  }

  function setHeightUp(swiper) {
    if (!swiper.slides) return;

    swiper.slides.forEach((slide, idx) => {
      slide.classList.remove('HeightUp');
    });

    const ai = swiper.activeIndex;
    const el_active_slide = swiper.slides[ai];
    const el_prev_slide = swiper.slides[ai - 2];
    const el_next_slide = swiper.slides[ai + 2];

    el_active_slide.classList.add('HeightUp');
    el_prev_slide.classList.add('HeightUp');
    el_next_slide.classList.add('HeightUp');
  }
}

export default NewInSwiper;
