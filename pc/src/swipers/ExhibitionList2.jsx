import Image from 'next/image';
import Link from 'next/link';

import {Autoplay, Controller, Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
/* https://swiperjs.com/demos */
import {Swiper, SwiperSlide} from 'swiper/react';

function ExhibitionList2(props) {
  const { children, className = '' } = props;

  const dummy_data = Array.from(Array(30));

  const pagination_basic = {
    el: '.PageNationBox',
    clickable: true,
    type: 'bullets',
    bulletClass: 'PageDot',
    bulletActiveClass: 'Active',
    dynamicBullets: true,
  };

  return (
    <>
      <div className={`ExhibitionList2 ${className}`}>
        <Swiper
          {...props}
          className={`!pl-[var(--contents-side-padding)]`}
          // slidesPerView={'auto'} // - auto 일때는 .swiper-slide 에 너비 수동 지정 필요
          slidesPerView={3.5} // - slidesPerView, slidesPerGroup 함께 설정 필요
          slidesPerGroup={3} // - slidesPerView, slidesPerGroup 함께 설정 필요
          spaceBetween={20}
          // loop={true}
          rewind={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation, Controller]}
          navigation={{
            prevEl: '.NaviGationBox > .NaviBtn.Prev',
            nextEl: '.NaviGationBox > .NaviBtn.Next',
          }}
          // pagination={pagination_basic}

          keyboard={{
            enabled: true,
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
                <Link href={`https://www.google.com`}>
                  <div className={`w-full`}>
                    <Image
                      className={`aspect-[400/466] h-full w-full object-cover`}
                      src={`https://picsum.photos/400/466.jpg?random=${idx}`}
                      width={400}
                      height={466}
                      alt=''
                    />
                  </div>
                  <div className={`mt-[26px]`}>
                    <div
                      className={`Montserrat inline-flex flex-row items-center justify-center bg-[var(--color1)] px-[12px] py-[8px] text-[12px] font-[600] text-[white] `}>
                      BRNAD NAME
                    </div>
                    <div className={`mt-[20px]`}>
                      <div className={`Montserrat text-[20px] font-[600] text-[var(--color1)] `}>
                        마인드 브릿지 BRAND WEEK ({idx + 1})
                      </div>
                      <div
                        className={`mt-[8px] text-[18px] font-[400] leading-[120%] text-[var(--color1)] line-clamp-2`}>
                        단 7일간, UP TO 83% OFF3만원 쿠폰팩 증정 단 7일간, UP TO 83% OFF3만원 쿠폰팩 증정 단 7일간, UP
                        TO 83% OFF3만원 쿠폰팩 증정
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
          <div className={`relative`} slot='container-start'>
            <div
              className={`NaviGationBox pointer-events-none absolute top-[0] left-[0] z-10 grid aspect-[1800/582] w-full grid-cols-[auto_auto] items-center justify-between px-[17px]`}>
              <div className={`NaviBtn Prev pointer-events-auto cursor-pointer`}>
                <Image src={`/icons/zco_16_1.svg`} width={34} height={62} alt='' />
              </div>
              <div className={`NaviBtn Next pointer-events-auto cursor-pointer`}>
                <Image src={`/icons/zco_16_2.svg`} width={34} height={62} alt='' />
              </div>
            </div>
          </div>
        </Swiper>
      </div>
    </>
  );
}

export default ExhibitionList2;
