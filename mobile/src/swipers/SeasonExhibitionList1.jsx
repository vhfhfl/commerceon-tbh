/* https://swiperjs.com/demos */
import Image from 'next/image';
import {Fragment} from 'react';

import {Autoplay, Controller, Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react';

function SeasonExhibitionList1(props) {
  const { children, className = '' } = props;

  const dummy_data = Array.from(Array(10));

  return (
    <div {...props} className={`SeasonExhibitionList1 ${className}`}>
      {/* prettier-ignore */}
      <style jsx global>{`
        /* 전역 선언 */
        /**/
        .SeasonExhibitionList1 .swiper-slide{ width:300px !important; }
      `}</style>
      <Swiper
        {...props}
        className={`${className}`}
        spaceBetween={3}
        slidesPerView={'auto'} // - auto 일때는 .swiper-slide 에 너비 수동 지정 필요
        // slidesPerView={1} // - slidesPerView, slidesPerGroup 함께 설정 필요
        // slidesPerGroup={1} // - slidesPerView, slidesPerGroup 함께 설정 필요
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
        modules={[Autoplay, Pagination, Navigation, Controller]}
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
              <div className={`relative w-[300px]`}>
                {[6, 7].map((obj2, idx2) => {
                  return (
                    <Fragment key={idx2}>
                      <div className={`Item relative`}>
                        <div className={`relative`}>
                          <Image
                            className={`aspect-[600/700] w-full object-contain`}
                            src={`/imgs/amg_${obj2}_${idx + 1}.jpg`}
                            width={600}
                            height={700}
                            alt=''
                          />
                          <div className={`absolute top-[0] left-[0] z-10 h-full w-full bg-[rgba(0,0,0,.1)]`}></div>
                        </div>
                        <div
                          className={`absolute top-0 left-0 z-10 flex h-full w-full flex-col items-start justify-end px-[20px] py-[34px]`}>
                          <div className={`Montserrat text-[14px] font-[500] text-white`}>23 NEW SUMMER</div>
                          <div className={`mt-[18px] text-[20px] font-[600] leading-[24px] text-white`}>
                            쥬시쥬디 여름 뉴시즌
                            <br />
                            최대 30% OFF
                          </div>
                        </div>
                      </div>
                    </Fragment>
                  );
                })}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default SeasonExhibitionList1;
