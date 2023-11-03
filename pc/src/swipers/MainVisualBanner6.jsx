/* https://swiperjs.com/demos */
import Image from 'next/image';
import {useRef} from 'react';

import {Autoplay, Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react';

function MainVisualBanner6(props) {
  const { children, className = '' } = props;

  const dummy_data = Array.from(Array(10));
  const ref_swiper = useRef();

  const pagination_basic = {
    el: '.PageNationBox',
    clickable: true,
    type: 'bullets',
    bulletClass: 'PageDot',
    bulletActiveClass: 'Active',

    renderBullet: function (index, className) {
      const num = (index + 1).toString().padStart(2, '0');
      return `
      <div class="${className} relative whitespace-nowrap Montserrat font-[600] text-[20px] text-white flex flex-row items-center justify-center">
        <div class="hidden [.Active_>_&]:block">${num}</div>
        <div class="[.Active_>_&]:hidden z-10 absolute w-[7px] h-[7px] bg-white top-1/2 left-1/2 translate-y-[-3px] translate-x-[-3px]"></div>
      </div>`;
    },
  };

  return (
    <div {...props} className={`MainVisualBanner6 relative ${className}`}>
      <Swiper
        ref={ref_swiper}
        {...props}
        className={``}
        spaceBetween={0}
        // slidesPerView={"auto"} // - auto 일때는 .swiper-slide 에 너비 수동 지정 필요
        slidesPerView={1} // - slidesPerView, slidesPerGroup 함께 설정 필요
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
        navigation={{
          prevEl: '.NaviGationBox > .NaviBtn.Prev',
          nextEl: '.NaviGationBox > .NaviBtn.Next',
        }}
        pagination={pagination_basic}
        // pagination={pagination_fraction}
        // pagination={pagination_progress}
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
              <div className={`relative`}>
                <div>
                  <Image
                    className={`aspect-[1920/760] h-full w-full object-cover`}
                    src={`https://picsum.photos/1920/760.jpg?random=${idx}`}
                    width={1920}
                    height={760}
                    alt=''
                  />
                </div>
                <div className={`absolute top-[0] left-[0] z-10 flex h-full w-full flex-row items-start`}>
                  <div className={`Montserrat pt-[180px] pl-[190px] text-white`}>
                    <div className={`text-[18px] font-[500]`}>MIND BRIDGE</div>
                    <div className={`mt-[27px] text-[48px] font-[700]`}>
                      2023 SUMMER
                      <br />
                      NEW IN
                    </div>
                    <div className={`mt-[20px] text-[42px] font-[500]`}>신상품 최대 43% OFF</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <div className={`relative`} slot='container-start'>
          <div className={`absolute top-[30px] right-[60px] z-10`}>
            <div className={`PageNationBox flex flex-row items-center justify-center gap-[24px]`}></div>
          </div>
          <div className={`absolute top-[478px] left-[190px] z-10`}>
            <div className={`NaviGationBox flex flex-row items-center justify-center`}>
              <div className={`NaviBtn Prev pointer-events-auto cursor-pointer`}>
                <Image src={`/icons/zco_38_1.svg`} width={42} height={42} alt='' />
              </div>
              <div className={`NaviBtn Next pointer-events-auto ml-[14px] cursor-pointer`}>
                <Image src={`/icons/zco_38_2.svg`} width={42} height={42} alt='' />
              </div>
            </div>
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default MainVisualBanner6;
