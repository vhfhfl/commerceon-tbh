/* https://swiperjs.com/demos */
import { Fragment, useRef } from 'react';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

function ReviewSwiper2(props) {
  const { children, className = '' } = props;

  const dummy_data = Array.from(Array(10));
  const ref_swiper = useRef();

  return (
    <div {...props} className={`ReviewSwiper2 relative h-full ${className}`}>
      <div className={`pt-[216px]`}>
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
          modules={[Autoplay, Navigation]}
          navigation={{
            prevEl: '.NaviGationBox > .NaviBtn.Prev',
            nextEl: '.NaviGationBox > .NaviBtn.Next',
          }}
          // pagination={pagination_basic}
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
              <SwiperSlide className={`flex flex-row items-center justify-center gap-0`} key={idx}>
                <div>
                  <img
                    className={`w-full object-cover`}
                    src={`https://picsum.photos/600/600.jpg?random=${idx}`}
                    alt={``}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className={`mt-[10px]`}>
        <article className={`flex flex-row items-center justify-center gap-[10px]`}>
          {Array.from(Array(3)).map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <div>
                  <img src={`https://picsum.photos/100/100.jpg?random=${idx}`} alt={``} />
                </div>
              </Fragment>
            );
          })}
        </article>
      </div>
      <div
        className={`pointer-events-none absolute bottom-0 left-0 z-10 flex w-full flex-row items-center justify-between px-[32px] pb-[32px] text-[16px] font-[600] text-white`}>
        <button
          className={`CenterCenter pointer-events-auto`}
          onClick={(evt) => {
            const swiper = ref_swiper.current.swiper;
            swiper.slidePrev();
          }}>
          <span>
            <img className={`Icon`} src={`/icons/icon_51_1.svg`} alt={``} />
          </span>
          <span className={`ml-[8px]`}>이전사진</span>
        </button>
        <button
          className={`CenterCenter pointer-events-auto`}
          onClick={(evt) => {
            const swiper = ref_swiper.current.swiper;
            swiper.slideNext();
          }}>
          <span>다음사진</span>
          <span>
            <img className={`Icon ml-[8px]`} src={`/icons/icon_51_2.svg`} alt={``} />
          </span>
        </button>
      </div>
    </div>
  );
}

export default ReviewSwiper2;
