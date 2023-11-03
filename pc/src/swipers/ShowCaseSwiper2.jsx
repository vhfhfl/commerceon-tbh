/* https://swiperjs.com/demos */
import {Layer, Util} from '@/scripts/util';
import Image from 'next/image';
import {useEffect, useRef} from 'react';

import {Autoplay, Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react';

function ShowCaseSwiper2(props) {
  const { children, className = '' } = props;

  const dummy_data = Array.from(Array(10));
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
    <div {...props} className={`ShowCaseSwiper2 relative ${className} bg-black pt-[100px] pb-[100px]`}>
      <Swiper
        ref={ref_swiper}
        {...props}
        className={``}
        spaceBetween={20}
        // slidesPerView={"auto"} // - auto 일때는 .swiper-slide 에 너비 수동 지정 필요
        slidesPerView={2} // - slidesPerView, slidesPerGroup 함께 설정 필요
        slidesPerGroup={1} // - slidesPerView, slidesPerGroup 함께 설정 필요
        centeredSlides={true}
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
                <div className={`relative`}>
                  <Image
                    className={`aspect-[1050/532] h-full w-full object-cover duration-300 ease-out will-change-auto [.ShowCaseSwiper2_.swiper-slide-active_&]:aspect-[1050/620]`}
                    src={`https://picsum.photos/1050/532.jpg?random=${idx}`}
                    width={1050}
                    height={532}
                    alt=''
                    onTransitionEnd={(evt) => {
                      syncSwiperHei();
                    }}
                  />
                  <button
                    className={`PlayBtn absolute top-[0] left-[0] z-10 flex h-full w-full flex-row items-center justify-center`}
                    >
                    <div
                      className={`absolute top-[0] left-[0] z-10 h-full w-full bg-black opacity-50 duration-300 ease-out will-change-auto [.ShowCaseSwiper2_.swiper-slide-active_&]:opacity-10`}></div>
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
                <div
                  className={`mt-[30px] opacity-0 duration-300 ease-out will-change-auto [.ShowCaseSwiper2_.swiper-slide-active_&]:opacity-100`}>
                  <div className={`Montserrat text-center text-[20px] font-[600] text-white`}>
                    2023 JUCY JUDY Season Video
                  </div>
                  <div className={`mt-[14px] text-center text-[18px] font-[300] leading-[20px] text-white`}>
                    쥬씨쥬디 뉴시즌 봄스타일링
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <div className={`relative`} slot='container-start'>
          <div
            className={`NaviGationBox pointer-events-none absolute top-[0] left-1/2 z-10 grid aspect-[1050/532] w-[49.50%] -translate-x-1/2 grid-cols-[auto_auto] items-center justify-between`}>
            <div className={`NaviBtn Prev pointer-events-auto -translate-x-[calc(60px+50px)] cursor-pointer`}>
              <Image
                className={`Icon`}
                src={`/icons/icon_23_1.svg`}
                width={60}
                height={62}
                priority
                alt='왼쪽 화살표'
              />
            </div>
            <div className={`NaviBtn Next pointer-events-auto translate-x-[calc(60px+50px)] cursor-pointer`}>
              <Image
                className={`Icon`}
                src={`/icons/icon_23_2.svg`}
                width={60}
                height={62}
                priority
                alt='오른쪽 화살표'
              />
            </div>
          </div>
        </div>
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
}

export default ShowCaseSwiper2;
