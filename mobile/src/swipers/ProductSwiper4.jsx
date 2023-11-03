import ItemFlag1 from '@/components/common/ItemFlag1';
import Image from 'next/image';

import {Autoplay, Controller, Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
/* https://swiperjs.com/demos */
import {Swiper, SwiperSlide} from 'swiper/react';

function ProductSwiper4(props) {
  const { children, className = '' } = props;

  const dummy_data = Array.from(Array(10));

  const pagination_progress = {
    el: '.PageNationBox',
    type: 'progressbar',
  };

  return (
    <>
      {/* prettier-ignore */}
      <style jsx global>{`
        /* 전역 선언 */
        /**/
        .ProductSwiper4{ user-select:none; padding-left:20px; }
        .ProductSwiper4 .NaviGationBox{ display:grid; grid-template-columns:auto auto; gap:0; justify-content:space-between; }
        .ProductSwiper4 .NaviGationBox{ pointer-events:none; z-index:10; position:absolute; top:0px; left:0px; width:100%; height:200px; }
        .ProductSwiper4 .NaviGationBox > .NaviBtn{ outline:1px dashed red; }
        .ProductSwiper4 .NaviGationBox > .NaviBtn{ pointer-events:auto; cursor:pointer; display:flex; align-items:center; justify-content:center; }
        /**/
        .ProductSwiper4 .PageNationBox.swiper-pagination-progressbar{ position:relative; top:auto; bottom:auto; left:auto; right:auto; font-size:0; height:auto; text-align:center; }
        .ProductSwiper4 .PageNationBox.swiper-pagination-progressbar{ background-color:rgba(255,255,255,.3); height:1px; }
        .ProductSwiper4 .PageNationBox.swiper-pagination-progressbar > .swiper-pagination-progressbar-fill{ position:relative; top:auto; bottom:auto; left:auto; right:auto; font-size:0; }
        .ProductSwiper4 .PageNationBox.swiper-pagination-progressbar > .swiper-pagination-progressbar-fill{ display:inline-block; height:100%; }
        .ProductSwiper4 .PageNationBox.swiper-pagination-progressbar > .swiper-pagination-progressbar-fill{ background-color:white; }
        /**/
        .ProductSwiper4 .SwiperProgressBar{ height:50px;}
      `}</style>
      <Swiper
        {...props}
        className={`ProductSwiper4 ${className}`}
        // slidesPerView={'auto'} // - auto 일때는 .swiper-slide 에 너비 수동 지정 필요
        spaceBetween={4}
        slidesPerView={2.5} // - slidesPerView, slidesPerGroup 함께 설정 필요
        slidesPerGroup={1} // - slidesPerView, slidesPerGroup 함께 설정 필요
        breakpoints={{
          640: {
            slidesPerView: 3.5,
          },
        }}
        // autoplay={{
        //   delay : 3000,
        //   disableOnInteraction : false,
        // }}
        modules={[Autoplay, Pagination, Navigation, Controller]}
        loop={true}
        navigation={{
          prevEl: '.NaviGationBox > .NaviBtn.Prev',
          nextEl: '.NaviGationBox > .NaviBtn.Next',
        }}
        pagination={pagination_progress}
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
                <Image
                  className={`aspect-[133/180] h-full w-full object-contain`}
                  src={`https://picsum.photos/266/360.jpg?random=${idx}`}
                  width={266}
                  height={360}
                  alt=''
                />
                <button
                  className={`RR absolute top-[0px] left-[0px] z-10 flex h-[26px] w-[26px] flex-row items-start justify-start`}
                  onClick={(evt) => {
                    evt.preventDefault();
                    const target = evt.target.closest('div');
                    console.log(target);
                  }}>
                  <Image
                    className={`Icon block aspect-square w-[22px]`}
                    src={`/icons/icon_15_on.svg`}
                    width={22}
                    height={22}
                    priority
                    alt='하트'
                  />
                </button>
                <div className={`absolute top-[0] right-[0] z-10`}>
                  <ItemFlag1 theme={idx}>Big</ItemFlag1>
                </div>
              </div>
              <div className={`mt-[10px]`}>
                <div className={`text-[10px] font-[600] text-[white]`}>MIND BRIDGE ({idx})</div>
                <div className={`mt-[12px] text-[12px] font-[300] leading-[16px] text-[white]`}>
                  텍스트 설정 없을시 상품명 이 노출 됩니다
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <div className={`mt-[40px]`}>
          <div className={`PageNationBox`}></div>
        </div>
      </Swiper>
    </>
  );
}

export default ProductSwiper4;
