/* https://swiperjs.com/demos */
import Image from 'next/image';
import {useRef} from 'react';

import {Autoplay, Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react';

function MdChoiceSwiper(props) {
  const { children, className = '' } = props;

  const dummy_data = Array.from(Array(24));
  const ref_swiper = useRef();

  const pagination_progress = {
    el: '.PageNationProgressBox',
    type: 'progressbar',
    renderProgressbar: function (progressbarFillClass) {
      return `
      <div class="${progressbarFillClass} !bg-[white]"></div>
      `;
    },
  };

  return (
    <div {...props} className={`MdChoiceSwiper relative ${className} relative bg-black`}>
      <div className={`absolute top-[0] left-[0] z-0 h-full w-[calc(100%-527px)]`}>
        <Image
          className={`aspect-[1395/780] h-full w-full object-cover opacity-40`}
          src={`https://picsum.photos/1395/780.jpg?random=1`}
          width={1395}
          height={780}
          alt=''
        />
      </div>
      <Swiper
        ref={ref_swiper}
        {...props}
        className={`z-10 !px-[60px] !pt-[96px] !pb-[120px]`}
        spaceBetween={20}
        // slidesPerView={"auto"} // - auto 일때는 .swiper-slide 에 너비 수동 지정 필요
        slidesPerView={6} // - slidesPerView, slidesPerGroup 함께 설정 필요
        slidesPerGroup={6} // - slidesPerView, slidesPerGroup 함께 설정 필요
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
        pagination={pagination_progress}
        navigation={{
          prevEl: '.NaviGationBox > .NaviBtn.Prev',
          nextEl: '.NaviGationBox > .NaviBtn.Next',
        }}
        onSwiper={(swiper) => {
          // console.log('onSwiper');
          // console.log(swiper);
        }}
        onSlideChangeTransitionEnd={(swiper) => {
          // console.log(swiper);
          swiper.loopDestroy();
          swiper.loopCreate();
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
                <div>
                  <Image
                    className={`aspect-[250/332] h-full w-full object-cover`}
                    src={`https://picsum.photos/250/332.jpg?random=${idx}`}
                    width={250}
                    height={332}
                    alt=''
                  />
                </div>
                <div className={`mt-[20px]`}>
                  <div className={`Montserrat text-[14px] font-[600] text-[white]`}>BRAND NAME ({idx + 1})</div>
                  <div className={`mt-[8px] text-[14px] font-[400] leading-[20px] text-[white]`}>
                    마인드브릿지 시그니쳐 자켓
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <div className={`relative`} slot='container-start'>
          <div className={`mb-[60px] Montserrat text-[32px] font-[500] tracking-[2px] text-[white]`}>MD CHOICE</div>
          <div
            className={`NaviGationBox pointer-events-none absolute top-[0] left-[0] z-10 grid aspect-[1800/383] w-full grid-cols-[auto_auto] items-center justify-between`}>
            <div className={`NaviBtn Prev pointer-events-auto cursor-pointer`}>
              <Image src={`/icons/zco_28_1.svg`} width={34} height={62} alt='' />
            </div>
            <div className={`NaviBtn Next pointer-events-auto cursor-pointer`}>
              <Image src={`/icons/zco_28_2.svg`} width={34} height={62} alt='' />
            </div>
          </div>
        </div>
        {/*<div slot='container-end'>Container End</div>*/}
        {/*<div slot='wrapper-start'>Wrapper Start</div>*/}
        {/*<div slot='wrapper-end'>Wrapper End</div>*/}

        <div className={`PageNationProgressBox !relative mt-[78px] !h-[2px] !bg-white/30`}></div>
      </Swiper>
    </div>
  );
}

export default MdChoiceSwiper;
