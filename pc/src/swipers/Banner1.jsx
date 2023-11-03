import Image from 'next/image';

import {Autoplay, Controller, Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
/* https://swiperjs.com/demos */
import {Swiper, SwiperSlide} from 'swiper/react';

function Banner1(props) {
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
      <div className={`Banner1 ${className}`}>
        {/*prettier-ignore*/}
        <style jsx global>{`
          /* 전역 선언 */
          /**/
          //.Banner1 .swiper-slide{ width:278px !important; }
          /**/
          .Banner1{user-select:none;}
          .Banner1 .NaviGationBox{display:grid;grid-template-columns: auto auto;gap:0;justify-content:space-between; }
          .Banner1 .NaviGationBox{pointer-events:none;z-index:10;position:absolute;top:0px;left:0px;width:100%; }
          .Banner1 .NaviGationBox{ display:flex; align-items:center; aspect-ratio:1800/220; }
          .Banner1 .NaviGationBox > .NaviBtn{pointer-events:auto;cursor:pointer;display:flex;align-items:center;justify-content:center; height:40px; }
          /**/
          .Banner1 .PageNationBox{--bullet-size:6px; --bullet-gap:12px; }
          .Banner1 .PageNationBox{text-align:center;font-size:0; }
          .Banner1 .PageNationBox{display:flex;justify-content:center;gap:var(--bullet-gap);}
          .Banner1 .PageNationBox > .PageDot{display:block;width:var(--bullet-size);height:var(--bullet-size);cursor:pointer;border-radius:100%;}
          .Banner1 .PageNationBox > .PageDot{opacity:0.3;background-color:var(--color5);}
          .Banner1 .PageNationBox > .PageDot.Active{opacity:1;background-color:var(--color1);}
        `}</style>
        <Swiper
          {...props}
          // autoplay={{
          //   delay: 3000,
          //   disableOnInteraction: false,
          // }}
          modules={[Autoplay, Pagination, Navigation, Controller]}
          loop={true}
          pagination={pagination_basic}
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
                <div className={`grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] items-center justify-center gap-[0]`}>
                  <a href='#'>
                    <Image
                      className={`h-full w-full object-contain`}
                      src={`https://picsum.photos/900/220.jpg?random=${idx}`}
                      width={900}
                      height={220}
                      alt=''
                    />
                  </a>
                  <a href='#'>
                    <Image
                      className={`h-full w-full object-contain`}
                      src={`https://picsum.photos/900/220.jpg?random=${idx}${idx}`}
                      width={900}
                      height={220}
                      alt=''
                    />
                  </a>
                </div>
              </SwiperSlide>
            );
          })}
          <div className={`NaviGationBox`}>
            <div className={`NaviBtn Prev`}>
              <Image src={`/icons/zco_5_1.svg`} width={40} height={40} alt='' />
            </div>
            <div className={`NaviBtn Next`}>
              <Image src={`/icons/zco_5_2.svg`} width={40} height={40} alt='' />
            </div>
          </div>
          <div className={`mt-[20px]`}>
            <div className={`PageNationBox`}></div>
          </div>
        </Swiper>
      </div>
    </>
  );
}

export default Banner1;
