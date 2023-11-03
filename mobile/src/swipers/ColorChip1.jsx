/* https://swiperjs.com/demos */
import Image from 'next/image';
import { useRef, Fragment } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

function ColorChip1(props) {
  const { children, className = '' } = props;

  const dummy_data = Array.from(Array(10));
  const ref_swiper = useRef();

  return (
    <div {...props} className={`ColorChip1 relative ${className}`}>
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
              <article className={`inline-grid grid-cols-9 gap-[7px]`}>
                <button className={`ColorButton30`}>
                  <img className={`Icon`} src={`/icons/zco_33.svg`} alt={``} />
                </button>
                <button className={`ColorButton30 !bg-[#888]`}></button>
                <button className={`ColorButton30 !bg-[#D9D9D9]`}></button>
                <button className={`ColorButton30 !bg-[#161616]`}></button>
                <button className={`ColorButton30 !bg-[#6688FF]`}></button>
                <button className={`ColorButton30 !bg-[#F1B8B8]`}></button>
                <button className={`ColorButton30 !bg-[#05A185]`}></button>
                <button className={`ColorButton30 !bg-[#E26D6D]`}></button>
                {/* {Array.from(Array(9)).map((obj, idx) => {
                  return (
                    <Fragment key={idx}>
                      <button className={`ColorButton30`}>
                        <img className={`Icon`} src={`/icons/zco_33.svg`} alt={``} />
                      </button>
                    </Fragment>
                  );
                })} */}
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default ColorChip1;
