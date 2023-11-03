/* https://swiperjs.com/demos */
import Image from 'next/image';
import { useRef } from 'react';

import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

function SeasonExhibitionList1(props) {
  const { children, className = '' } = props;

  const dummy_data = Array.from(Array(4));
  const ref_swiper = useRef();

  return (
    <div {...props} className={`SeasonExhibitionList1 relative ${className}`}>
      <Swiper
        ref={ref_swiper}
        {...props}
        className={``}
        spaceBetween={0}
        // slidesPerView={"auto"} // - auto 일때는 .swiper-slide 에 너비 수동 지정 필요
        slidesPerView={2.5} // - slidesPerView, slidesPerGroup 함께 설정 필요
        slidesPerGroup={1} // - slidesPerView, slidesPerGroup 함께 설정 필요
        // loop={true} // loop 를 돌릴경우 item 의 총 수량이 반드시 slidesPerGroup 의 배수이어야한다
        rewind={true}
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
            <SwiperSlide key={idx}>
              <a href={`https://www.google.com`} target={`_blank`} className={`relative`}>
                <div>
                  <Image
                    className={`aspect-[748/872] h-full w-full object-cover`}
                    src={`https://picsum.photos/748/872.jpg?random=${idx}`}
                    width={748}
                    height={872}
                    alt=''
                  />
                </div>
                <div
                  className={`absolute top-0 left-0 right-0 z-10 flex h-full w-full flex-col items-start justify-end px-[64px] pb-[107px]`}>
                  <div className={`Montserrat text-[26px] font-[500] text-white`}>23 NEW SUMMER</div>
                  <div className={`mt-[40px]`}>
                    <div className={`text-[50px] font-[600] leading-[60px] text-white`}>
                      쥬시쥬디 여름 뉴시즌 ({idx + 1})
                      <br />
                      최대 30% OFF
                    </div>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default SeasonExhibitionList1;
