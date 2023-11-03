/* https://swiperjs.com/demos */
import { useRef } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

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
      return `<div class="${className} text-[0] w-[7px] h-[7px] bg-[var(--color6)] [&.Active]:bg-[var(--color1)] rounded-full"> ${index} </div>`;
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

  return (
    <div {...props} className={`SwiperBase relative ${className}`}>
      <div className={`absolute top-[26px] left-1/2 z-10 -translate-x-1/2`}>
        <div className={`PageNationBox flex flex-row items-center justify-center gap-[4px]`}></div>
      </div>

      <Swiper
        ref={ref_swiper}
        {...props}
        className={``}
        spaceBetween={0}
        // slidesPerView={"auto"} // - auto 일때는 .swiper-slide 에 너비 수동 지정 필요
        slidesPerView={1} // - slidesPerView, slidesPerGroup 함께 설정 필요
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
                <img
                  className={`aspect-[360/648] h-full w-full object-cover`}
                  src={`https://picsum.photos/360/648.jpg?random=${idx}`}
                  alt=''
                />
              </div>
            </SwiperSlide>
          );
        })}
        <div className={`relative`} slot='container-start'>
          <div
            className={`NaviGationBox pointer-events-none absolute top-0 left-0 z-10 flex aspect-[360/648] w-full flex-row items-end justify-between gap-0 px-[22px] pb-[22px] text-[16px] font-[600] text-white`}>
            <button className={`NaviBtn Prev CenterCenter pointer-events-auto cursor-pointer`}>
              <span>
                <img className={`Icon`} src={`/icons/icon_74_1.svg`} alt={``} />
              </span>
              <span className={`ml-[8px]`}>이전사진</span>
            </button>
            <button className={`NaviBtn Next CenterCenter pointer-events-auto cursor-pointer`}>
              <span>다음사진</span>
              <span>
                <img className={`Icon ml-[8px]`} src={`/icons/icon_74_2.svg`} alt={``} />
              </span>
            </button>
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default SwiperBase;
