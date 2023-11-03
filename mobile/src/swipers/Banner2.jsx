/* https://swiperjs.com/demos */
import Image from 'next/image';
import {Autoplay, Controller, Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react';

function Banner2(props) {
  const { children, className = '' } = props;

  const dummy_data = Array.from(Array(5));

  const pagination_basic = {
    el: '.PageNationBox',
    clickable: true,
    type: 'bullets',
    bulletClass: 'PageDot',
    bulletActiveClass: 'Active',
    dynamicBullets: false,
  };

  return (
    <div {...props} className={`Banner2 ${className}`}>
      {/* prettier-ignore */}
      <style jsx global>{`
        /* 전역 선언 */
        /**/
        //.Banner2 .swiper-slide{ width:278px !important; }
        /**/
        .Banner2 .PageNationBox{ --bullet-size:4px; --dot-gap:8px; }
        .Banner2 .PageNationBox{ text-align:center; font-size:0; }
        .Banner2 .PageNationBox{ display:flex; justify-content:center; gap:var(--dot-gap); }
        .Banner2 .PageNationBox > .PageDot{ display:block; width:var(--bullet-size); height:var(--bullet-size); cursor:pointer; border-radius:100%; }
        .Banner2 .PageNationBox > .PageDot{ opacity:.3; background-color:white; }
        .Banner2 .PageNationBox > .PageDot.Active{ opacity:1; }
      `}</style>
      <Swiper
        {...props}
        className={`${className}`}
        spaceBetween={0}
        // slidesPerView={"auto"} // - auto 일때는 .swiper-slide 에 너비 수동 지정 필요
        slidesPerView={1} // - slidesPerView, slidesPerGroup 함께 설정 필요
        slidesPerGroup={1} // - slidesPerView, slidesPerGroup 함께 설정 필요
        loop={true} // loop 를 돌릴경우 item 의 총 수량이 반드시 slidesPerGroup 의 배수이어야한다
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        modules={[Autoplay, Pagination, Navigation, Controller]}
        pagination={pagination_basic}
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
              <div>
                <Image
                  className={`w-full`}
                  src={`https://picsum.photos/600/600.jpg?random=${idx}`}
                  width={600}
                  height={600}
                  alt=''
                />
              </div>
              <div className={`absolute top-[0] left-[0] z-10 grid h-full w-full grid-cols-1 items-end gap-[0] `}>
                <div className={`p-[20px]`}>
                  <div className={`text-[13px] font-[600] text-[#000]`}>PROMOTION</div>
                  <div className={`mt-[18px] text-[24px] font-[600] leading-[28px] text-[var(--color1)]`}>
                    여름 뉴시즌
                    <br />
                    베이직 아이템
                  </div>
                  <div className={`mt-[18px] text-[14px] font-[500] text-[var(--color1)]`}>신상입고 최대 30% 세일</div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <div slot='container-start'>
          <div className={`mb-[15px] PageNationBox`}></div>
        </div>
        {/*<div slot='container-end'>Container End</div>*/}
        {/*<div slot='wrapper-start'>Wrapper Start</div>*/}
        {/*<div slot='wrapper-end'>Wrapper End</div>*/}
      </Swiper>
    </div>
  );
}

export default Banner2;
