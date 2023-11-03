/* https://swiperjs.com/demos */
import Image from 'next/image';
import Link from 'next/link';
import {Fragment} from 'react';

import {Autoplay, Controller, Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react';

function LookCollectionList(props) {
  const { children, className = '' } = props;

  const dummy_data = Array.from(Array(10));

  return (
    <div {...props} className={`LookCollectionList ${className}`}>
      <Swiper
        {...props}
        className={`${className}`}
        spaceBetween={10}
        // slidesPerView={'auto'} // - auto 일때는 .swiper-slide 에 너비 수동 지정 필요
        slidesPerView={1.1} // - slidesPerView, slidesPerGroup 함께 설정 필요
        slidesPerGroup={1} // - slidesPerView, slidesPerGroup 함께 설정 필요
        loop={true} // loop 를 돌릴경우 item 의 총 수량이 반드시 slidesPerGroup 의 배수이어야한다
        breakpoints={{
          640: {
            slidesPerView: 1.5,
          },
        }}
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
              <div className={`relative`}>
                <div>
                  <Image
                    className={`aspect-[340/520] w-full object-cover`}
                    src={`https://picsum.photos/680/1040.jpg?random=${idx}`}
                    width={680}
                    height={1040}
                    alt=''
                  />
                </div>
                <Link
                  href={`#`}
                  target={`_blank`}
                  className={`Montserrat absolute top-[20px] right-[20px] border-b border-b-[var(--color1)] text-center text-[10px] font-[400] text-[var(--color1)]`}>
                  VIEW LOOK
                </Link>
                <div className={`relative right-0 z-50 ml-[10px] mt-[-163px] bg-white`}>
                  <div className={`pt-[20px] pl-[41px]`}>
                    <div>
                      <div className={`Montserrat text-[20px] font-[700] tracking-[2px] text-[var(--color1)]`}>
                        STYLE {idx + 1}
                      </div>
                      <div className={`Montserrat mt-[8px] text-[14px] font-[500] text-[var(--color1)]`}>
                        SPRING SEASON PART. 1
                      </div>
                    </div>
                    <div className={`mt-[42px]`}>
                      <div
                        className={`grid grid-cols-[repeat(3,_minmax(0,_1fr))] items-center justify-center gap-[10px]`}>
                        {Array.from(Array(6)).map((obj, idx) => {
                          return (
                            <Fragment key={idx}>
                              <div>
                                <Image
                                  className={`aspect-[90/128] w-full object-cover`}
                                  src={`https://picsum.photos/90/128.jpg?random=${idx}`}
                                  width={90}
                                  height={128}
                                  alt=''
                                />
                              </div>
                            </Fragment>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default LookCollectionList;
