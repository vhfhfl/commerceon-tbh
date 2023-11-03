/* https://swiperjs.com/demos */
import ProductItem2 from '@/modules/ProductItem2';
import {useRef} from 'react';

import {Autoplay, Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react';

function ProductSwiper5(props) {
  const { children, className = '' } = props;

  const dummy_data = Array.from(Array(8));
  const ref_swiper = useRef();

  const pagination_progress = {
    el: '.PageNationProgressBox',
    type: 'progressbar',
    renderProgressbar: function (progressbarFillClass) {
      return `<div class="${progressbarFillClass} !bg-[var(--color1)]"></div>`;
    },
  };

  return (
    <div {...props} className={`ProductSwiper5 relative ${className}`}>
      <Swiper
        ref={ref_swiper}
        {...props}
        className={``}
        spaceBetween={`1.66%`}
        // slidesPerView={"auto"} // - auto 일때는 .swiper-slide 에 너비 수동 지정 필요
        slidesPerView={4} // - slidesPerView, slidesPerGroup 함께 설정 필요
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
        pagination={pagination_progress}
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
              <ProductItem2 idx={idx} />
            </SwiperSlide>
          );
        })}

        <div className={`PageNationProgressBox !relative mt-[35px] !h-[2px] !bg-[var(--color6)]`}></div>
      </Swiper>
    </div>
  );
}

export default ProductSwiper5;
