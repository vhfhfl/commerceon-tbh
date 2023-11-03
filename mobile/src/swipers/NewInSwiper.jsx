import ItemFlag1 from "@/components/common/ItemFlag1";
import {Util} from "@/scripts/util";
import Image from 'next/image';
import {useEffect, useRef} from 'react';

import {Autoplay, Controller, Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
/* https://swiperjs.com/demos */
import {Swiper, SwiperSlide} from 'swiper/react';

function NewInSwiper(props) {
  const { children, className = '' } = props;

  const dummy_data = Array.from(Array(19));

  const ref_swiper = useRef();
  
    useEffect(() => {
    // mount

    const callbackResize = (evt) => {
      syncSwiperHei();
    };
    Util.on(window, 'resize', callbackResize);

    return () => {
      // unmount
      Util.off(window, 'resize', callbackResize);
    };
  }, []);

  return (
    <>
      <Swiper
        ref={ref_swiper}
        {...props}
        className={`NewInSwiper ${className}`}
        autoHeight={true}
        spaceBetween={10}
        // slidesPerView={'auto'} // - auto 일때는 .swiper-slide 에 너비 수동 지정 필요
        slidesPerView={1.2} // - slidesPerView, slidesPerGroup 함께 설정 필요
        slidesPerGroup={1} // - slidesPerView, slidesPerGroup 함께 설정 필요
        breakpoints={{
          640: {
            slidesPerView: 2.2,
          },
        }}
        centeredSlides={true}
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
        onSwiper={(swiper) => {
          // console.log('onSwiper');
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
                <div
                  className={`Thumb aspect-[280/332] duration-300 ease-out will-change-auto [.NewInSwiper_.swiper-slide-active_&]:aspect-[280/408]`}
                  onTransitionEnd={(evt) => {
                    // 트랜지션 끝나면 스와이퍼 컨테이너 높이 갱신
                    syncSwiperHei();
                  }}>
                  <Image
                    className={`aspect-[280/408] h-full w-full object-cover`}
                    src={`https://picsum.photos/560/816.jpg?random=${idx}`}
                    width={280 * 2}
                    height={408 * 2}
                    alt=''
                  />
                  <div className={`absolute top-[0] right-[0] z-10`}>
                    <ItemFlag1 theme={idx}>Big</ItemFlag1>
                  </div>
                </div>
                <div className={`Info mt-[10px] text-center`}>
                  <div className={`Montserrat text-[11px] font-[600] text-[black]`}>MIND BRIDGE</div>
                  <div className={`mt-[8px] text-[12px] font-[400] text-[var(--color1)] truncate`}>
                    [1+1]이지케어 솔리드 드레스셔츠 레귤러 [1+1]이지케어 솔리드 드레스셔츠 레귤러 [1+1]이지케어 솔리드 드레스셔츠 레귤러
                  </div>
                  <div></div>
                  <div className={`mt-[20px] text-[0px]`}>
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
    </>
  );

  function syncSwiperHei() {
    // 트랜지션 끝나면 스와이퍼 컨테이너 높이 갱신
    const el_swiper = ref_swiper.current;
    const swiper = el_swiper.swiper;
    const active_slide = swiper.slides[swiper.activeIndex];
    const target_hei = active_slide.clientHeight;
    el_swiper.style.minHeight = `${target_hei}px`;
  }
}

export default NewInSwiper;
