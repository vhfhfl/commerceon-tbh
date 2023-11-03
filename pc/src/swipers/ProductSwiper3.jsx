/* https://swiperjs.com/demos */
import Image from 'next/image';
import Link from 'next/link';
import {Fragment} from 'react';

import {Autoplay, Controller, Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react';

function ProductSwiper3(props) {
  const { children, className = '' } = props;

  const dummy_data = Array.from(Array(3));

  const pagination_progress = {
    el: '.PageNationBox',
    type: 'progressbar',
  };

  return (
    <div {...props} className={`ProductSwiper3 ${className}`}>
      {/*prettier-ignore*/}
      <style jsx global>{`
        // 전역 선언
        .ProductSwiper3 .NaviGationBox{display:grid;grid-template-columns: auto auto;gap:0;justify-content:space-between; padding-left:15px; padding-right:15px; }
        .ProductSwiper3 .NaviGationBox{pointer-events:none;z-index:10;position:absolute;top:0px;left:0px; width:100%; aspect-ratio:800/540; }
        .ProductSwiper3 .NaviGationBox > .NaviBtn{pointer-events:auto;cursor:pointer;display:flex;align-items:center;justify-content:center;}
        /**/
        .ProductSwiper3 .PageNationBox.swiper-pagination-progressbar{position:relative;top:auto;bottom:auto;left:auto;right:auto;font-size:0;height:auto;text-align:center;}
        .ProductSwiper3 .PageNationBox.swiper-pagination-progressbar{background-color:var(--color6);height:2px;}
        .ProductSwiper3 .PageNationBox.swiper-pagination-progressbar > .swiper-pagination-progressbar-fill{position:relative;top:auto;bottom:auto;left:auto;right:auto;font-size:0;}
        .ProductSwiper3 .PageNationBox.swiper-pagination-progressbar > .swiper-pagination-progressbar-fill{display:inline-block;height:100%;}
        .ProductSwiper3 .PageNationBox.swiper-pagination-progressbar > .swiper-pagination-progressbar-fill{background-color:var(--color1);}
      `}</style>
      <Swiper
        {...props}
        className={`${className}`}
        spaceBetween={10}
        slidesPerView={'auto'} // - auto 일때는 .swiper-slide 에 너비 수동 지정 필요
        // slidesPerView={1} // - slidesPerView, slidesPerGroup 함께 설정 필요
        // slidesPerGroup={1} // - slidesPerView, slidesPerGroup 함께 설정 필요
        loop={true} // loop 를 돌릴경우 item 의 총 수량이 반드시 slidesPerGroup 의 배수이어야한다
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        pagination={pagination_progress}
        navigation={{
          prevEl: '.NaviGationBox > .NaviBtn.Prev',
          nextEl: '.NaviGationBox > .NaviBtn.Next',
        }}
        modules={[Autoplay, Pagination, Navigation, Controller]}
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
                <div className={`relative`}>
                  <Image
                    className={`h-full w-full object-contain`}
                    src={`https://picsum.photos/800/540.jpg?random=${idx}`}
                    width={800}
                    height={540}
                    alt=''
                  />
                  <div
                    className={`Montserrat absolute top-0 left-0 z-10 flex h-[44px] flex-row items-center justify-center bg-[var(--color1)] px-[30px] text-[14px] font-[600] text-white`}>
                    BRAND NAME
                  </div>
                  <Link
                    className={`absolute bottom-[0px] right-[0px] z-10 flex h-[56px] flex-row items-center justify-center bg-white px-[25px] text-[16px] font-[400] text-[var(--color1)]`}
                    href={`https://www.google.com`}
                    target={`_blank`}>
                    제품 자세히보기
                  </Link>
                </div>
                <div className={`mt-[20px] flex flex-row items-start gap-[8px] text-[28px] text-[var(—color1)]`}>
                  <div className={`Montserrat font-[700]`}>#SHIRTS</div>
                  <div className={`font-[400]`}>돌아온 셔츠의 계절 {idx}</div>
                </div>
                <div className={`mt-[40px] grid grid-cols-3 items-center justify-center gap-[15px]`}>
                  {Array.from(Array(3)).map((obj, idx) => {
                    return (
                      <Fragment key={idx}>
                        <div>
                          <div className={`relative`}>
                            <Image
                              className={`h-full w-full object-contain`}
                              src={`https://picsum.photos/256/376.jpg?random=${idx}`}
                              width={256}
                              height={376}
                              alt=''
                            />
                            <button
                              className={`RR absolute top-[8px] left-[8px] z-10 flex h-[26px] w-[26px] flex-row items-start justify-start`}>
                              <Image
                                className={`block`}
                                src={`/icons/icon_15_on.svg`}
                                width={30}
                                height={30}
                                priority
                                alt='하트'
                              />
                            </button>
                          </div>
                          <div className={`mt-[20px]`}>
                            <div className={`grid grid-cols-[repeat(2,auto)] items-center justify-between`}>
                              <div className={`Montserrat text-[14px] font-[600] text-[var(--color1)]`}>BRAND NAME</div>
                              <div>
                                <div className={`flex flex-row items-center justify-center`}>
                                  <div className={`text-[12px] font-[400] text-[var(--color1)]`}>리뷰</div>
                                  <div className={`Montserrat ml-[2px] text-[12px] font-[500] text-[var(--color5)]`}>
                                    432
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={`mt-[6px]`}>
                              <div
                                className={`text-[14px] font-[400] leading-[120%] text-[var(--color1)] line-clamp-2`}>
                                상세한 제품 설명 타이틀 상세한 제품 설명 타이틀 상세한 제품 설명 타이틀 상세한 제품 설명
                                타이틀 상세한 제품 설명 타이틀
                              </div>
                            </div>
                            <div className={`mt-[24px] text-[0px]`}>
                              <div className={`PriceBox`}>
                                <div className={`text-[var(--color1)]`}>64,000</div>
                                <div className={`Sale text-[var(--color1)]`}>129,000</div>
                                <div className={`text-[var(--color2)]`}>50%</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Fragment>
                    );
                  })}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <div slot='container-start'>
          <div className={`NaviGationBox`}>
            <div className={`NaviBtn Prev`}>
              <Image src={`/icons/zco_15_1.svg`} width={34} height={62} alt='' />
            </div>
            <div className={`NaviBtn Next`}>
              <Image src={`/icons/zco_15_2.svg`} width={34} height={62} alt='' />
            </div>
          </div>
        </div>
        {/*<div slot='container-end'>Container End</div>*/}
        {/*<div slot='wrapper-start'>Wrapper Start</div>*/}
        {/*<div slot='wrapper-end'>Wrapper End</div>*/}
        <div className={`PageNationBox mt-[54px]`}></div>
      </Swiper>
    </div>
  );
}

export default ProductSwiper3;
