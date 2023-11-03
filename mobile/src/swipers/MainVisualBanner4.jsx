/* https://swiperjs.com/demos */
import Image from 'next/image';
import {useRef} from 'react';

import {Autoplay, Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react';

function MainVisualBanner4(props) {
  const { children, className = '' } = props;

  const dummy_data = Array.from(Array(10));
  const ref_swiper = useRef();

  const pagination_fraction = {
    el: '.PageNationFractionBox',
    type: 'fraction',
    clickable: true,
    renderFraction: function (currentClass, totalClass) {
      return `
      <div class="Montserrat !relative inline-flex flex-row gap-[4px] items-center justify-center font-[500] text-[14px] rounded-[20px] overflow-hidden h-[30px]">
        <div class="text-[white] ${currentClass}"></div>
        <div class="text-[white] sym">/</div>
        <div class="text-[white] ${totalClass}"></div>
      </div>
      `;
    },
  };

  return (
    <div {...props} className={`MainVisualBanner4 relative ${className}`}>
      <Swiper
        ref={ref_swiper}
        {...props}
        className={``}
        spaceBetween={0}
        // slidesPerView={"auto"} // - auto 일때는 .swiper-slide 에 너비 수동 지정 필요
        slidesPerView={1} // - slidesPerView, slidesPerGroup 함께 설정 필요
        slidesPerGroup={1} // - slidesPerView, slidesPerGroup 함께 설정 필요
        loop={true} // loop 를 돌릴경우 item 의 총 수량이 반드시 slidesPerGroup 의 배수이어야한다
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        modules={[Autoplay, Pagination, Navigation]}
        navigation={{
          prevEl: '.NaviGationBox > .NaviBtn.Prev',
          nextEl: '.NaviGationBox > .NaviBtn.Next',
        }}
        pagination={pagination_fraction}
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
                <div>
                  <Image
                    className={`aspect-[360/470] h-full w-full object-cover`}
                    src={`https://picsum.photos/360/470.jpg?random=${idx}`}
                    width={360}
                    height={470}
                    alt=''
                  />
                  <div
                    className={`absolute top-[0] left-[0] z-10 flex h-full w-full flex-row items-end px-[20px] pb-[38px]`}>
                    <div className={`Montserrat text-[white]`}>
                      <div className={`text-[28px] font-[600]`}>
                        2023 SUMMER
                        <br />
                        NEW IN
                      </div>
                      <div className={`mt-[22px] text-[18px] font-[500]`}>신상품 최대 50% OFF</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <div className={`RR relative bg-red-600`} slot='container-start'>
          <div className={`absolute top-[22px] right-[22px] z-10`}>
            <div className={`PageNationFractionBox`}></div>
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default MainVisualBanner4;
