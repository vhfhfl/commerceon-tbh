/* https://swiperjs.com/demos */
import Image from 'next/image';
import {Fragment, useRef} from 'react';

import {Autoplay, Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react';

function LookCollectionList(props) {
  const { children, className = '' } = props;

  const dummy_data = Array.from(Array(5));
  const ref_swiper = useRef();

  return (
    <div {...props} className={`LookCollectionList relative ${className}`}>
      <Swiper
        ref={ref_swiper}
        {...props}
        className={`!px-[var(--contents-side-padding)] !pb-[136px]`}
        spaceBetween={60}
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
              <div className={``}>
                <div>
                  <Image
                    className={`aspect-[1800/800] h-full w-full object-cover`}
                    src={`https://picsum.photos/1800/800.jpg?random=${idx}`}
                    width={1800}
                    height={800}
                    alt=''
                  />
                </div>
                <div className='absolute bottom-[-136px] -right-[var(--contents-side-padding)] z-10 w-[79.11%] bg-white px-[3.51%] pt-[3.51%]'>
                  <div>
                    <div className={`Montserrat text-[26px] font-[700] tracking-[2px] text-[var(--color1)]`}>
                      STYLE ({idx + 1})
                    </div>
                    <div className={`Montserrat mt-[12px] text-[16px] font-[500] text-[var(--color1)]`}>
                      SPRING SEASON PART.1
                    </div>
                    <div className={`mt-[2.80%]`}>
                      <div className={`grid grid-cols-6 items-center justify-center gap-[1.4%]`}>
                        {Array.from(Array(6)).map((obj3, idx3) => {
                          return (
                            <Fragment key={idx3}>
                              <div>
                                <Image
                                  className={`aspect-[204/300] h-full w-full object-cover`}
                                  src={`https://picsum.photos/204/300.jpg?random=${idx3}${idx}`}
                                  width={204}
                                  height={300}
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
        <div className={`relative`} slot='container-start'>
          <div
            className={`NaviGationBox pointer-events-none absolute top-[0] left-[0] z-10 grid aspect-[1800/800] w-full grid-cols-[auto_auto] items-center justify-between`}>
            <div className={`NaviBtn Prev pointer-events-auto ml-[20px] cursor-pointer`}>
              <Image
                className={`Icon`}
                src={`/icons/icon_23_1.svg`}
                width={60}
                height={62}
                priority
                alt='왼쪽 화살표'
              />
            </div>
            <div className={`NaviBtn Next pointer-events-auto mr-[20px] cursor-pointer`}>
              <Image
                className={`Icon`}
                src={`/icons/icon_23_2.svg`}
                width={60}
                height={62}
                priority
                alt='오른쪽 화살표'
              />
            </div>
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default LookCollectionList;
