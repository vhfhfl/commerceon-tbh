import Image from 'next/image';

import {Autoplay, Controller, Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
/* https://swiperjs.com/demos */
import {Swiper, SwiperSlide} from 'swiper/react';

function Banner4(props) {
  const { children, className = '' } = props;

  const dummy_data = Array.from(Array(3));

  const pagination_basic = {
    el: '.PageNationBox',
    clickable: true,
    type: 'bullets',
    bulletClass: 'PageDot',
    bulletActiveClass: 'Active',
  };

  return (
    <>
      {/* prettier-ignore */}
      <style jsx global>{`
        /* 전역 선언 */
        /**/
        .Banner4 .PageNationBox{--bullet-size:4px;}
        .Banner4 .PageNationBox{text-align:center;font-size:0;}
        .Banner4 .PageNationBox{display:flex;justify-content:center;gap:8px;}
        .Banner4 .PageNationBox > .PageDot{display:block;width:var(--bullet-size);height:var(--bullet-size);cursor:pointer;border-radius:100%;}
        .Banner4 .PageNationBox > .PageDot{opacity:0.3;background-color:var(--color5);}
        .Banner4 .PageNationBox > .PageDot.Active{opacity:1;background-color:var(--color1);}
      `}</style>
      <Swiper
        {...props}
        className={`Banner4 ${className}`}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        modules={[Autoplay, Pagination, Navigation, Controller]}
        loop={true}
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
                  className={`aspect-[360/160] h-full w-full object-cover md:hidden`}
                  src={`https://picsum.photos/360/160.jpg?random=${idx}`}
                  width={360}
                  height={160}
                  alt=''
                />
              </div>
            </SwiperSlide>
          );
        })}
        <div className={`mt-[20px]`}>
          <div className={`PageNationBox`}></div>
        </div>
      </Swiper>
    </>
  );
}

export default Banner4;
