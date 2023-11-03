/* https://swiperjs.com/demos */
import ItemFlag1 from '@/components/common/ItemFlag1';
import Image from 'next/image';
import {useRef} from 'react';

import {Autoplay, Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react';

function ProductSwiper6(props) {
  const { children, className = '' } = props;

  const dummy_data = Array.from(Array(10));
  const ref_swiper = useRef();

  const pagination_progress = {
    el: '.PageNationProgressBox',
    type: 'progressbar',
    renderProgressbar: function (progressbarFillClass) {
      return `
      <div class="${progressbarFillClass} !bg-[var(--color1)]"></div>
      `;
    },
  };

  return (
    <div {...props} className={`ProductSwiper6 relative ${className}`}>
      <Swiper
        ref={ref_swiper}
        {...props}
        className={``}
        spaceBetween={15}
        // slidesPerView={"auto"} // - auto 일때는 .swiper-slide 에 너비 수동 지정 필요
        slidesPerView={4} // - slidesPerView, slidesPerGroup 함께 설정 필요
        slidesPerGroup={1} // - slidesPerView, slidesPerGroup 함께 설정 필요
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
        modules={[Autoplay, Pagination, Navigation]}
        pagination={pagination_progress}
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
            <SwiperSlide className={``} key={idx}>
              <div>
                <div className={`relative`}>
                  <Image
                    className={`aspect-[450/600] h-full w-full object-cover`}
                    src={`https://picsum.photos/450/600.jpg?random=${idx}`}
                    width={450}
                    height={600}
                    alt=''
                  />
                  <div className={`absolute top-[0] right-[0] z-10`}>
                    <ItemFlag1 theme={idx}>Big</ItemFlag1>
                  </div>
                </div>
                <div className={`mt-[20px] text-center`}>
                  <div className={`text-[14px] font-[600] text-[var(--color1)]`}>BRAND NAME</div>
                  <div className={`mt-[8px] text-[16px] font-[400] text-[var(--color1)]`}>상세한 제품 설명 타이틀</div>
                  <div className={`mt-[24px] text-[0px]`}>
                    <div className={`PriceBox`}>
                      <div className={`text-[var(--color1)]`}>64,000</div>
                      <div className={`text-[var(--color14)]`}>50%</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <div className={`relative`} slot='container-start'>
          <div
            className={`hidden NaviGationBox pointer-events-none absolute top-[0] left-[0] z-10 grid aspect-[1000/330] w-full grid-cols-[auto_auto] items-center justify-between bg-[yellow]/20`}>
            <div className={`NaviBtn Prev pointer-events-auto cursor-pointer`}>
              <Image src={`https://gifpng.com/40x40/`} width={40} height={40} alt='' />
            </div>
            <div className={`NaviBtn Next pointer-events-auto cursor-pointer`}>
              <Image src={`https://gifpng.com/40x40/`} width={40} height={40} alt='' />
            </div>
          </div>
        </div>
        <div className={`PageNationProgressBox !relative mt-[50px] mt-[10px] !h-[2px] !bg-[var(--color6)]`}></div>
      </Swiper>
    </div>
  );
}

export default ProductSwiper6;
