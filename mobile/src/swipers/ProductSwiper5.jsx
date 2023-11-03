/* https://swiperjs.com/demos */
import ProductList3 from '@/modules/ProductList3';
import Image from 'next/image';
import {useRef} from 'react';

import {Autoplay, Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react';

function ProductSwiper5(props) {
  const { children, className = '' } = props;

  const dummy_data = Array.from(Array(5));
  const ref_swiper = useRef();

  const pagination_basic = {
    el: '.PageNationBox',
    clickable: true,
    type: 'bullets',
    bulletClass: 'PageDot',
    bulletActiveClass: 'Active',

    renderBullet: function (index, className) {
      return `
      <div class="${className} pointer-events-auto text-[0px] w-[6px] h-[6px] bg-[var(--color12)] [&.Active]:bg-[var(--color1)] rounded-full"></div>
      `;
    },
  };

  return (
    <div {...props} className={`ProductSwiper5 relative ${className}`}>
      <Swiper
        ref={ref_swiper}
        {...props}
        className={`!pt-[10px]`}
        spaceBetween={24}
        // slidesPerView={"auto"} // - auto 일때는 .swiper-slide 에 너비 수동 지정 필요
        slidesPerView={1.2} // - slidesPerView, slidesPerGroup 함께 설정 필요
        // slidesPerGroup={1} // - slidesPerView, slidesPerGroup 함께 설정 필요
        loop={true} // loop 를 돌릴경우 item 의 총 수량이 반드시 slidesPerGroup 의 배수이어야한다
        // rewind={true}
        centeredSlides={true}
        breakpoints={{
          640: {
            slidesPerView: 1.8,
          },
        }}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        modules={[Autoplay, Pagination, Navigation]}
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
            <SwiperSlide className={`[&.swiper-slide-active]:!z-10`} key={idx}>
              <div>
                {/* [.ProductSwiper5_.swiper-slide-active_&]:opacity-100 */}
                <div
                  className={`relative duration-300 ease-out will-change-auto [.ProductSwiper5_.swiper-slide-active_&]:scale-[1.07]`}>
                  <Image
                    className={`relative aspect-[282/277] h-full w-full object-cover`}
                    src={`https://picsum.photos/282/277.jpg?random=${idx}`}
                    width={282}
                    height={277}
                    alt=''
                  />
                  <div
                    className={`absolute top-[0] left-[0] z-10 flex h-full w-full flex-row items-end justify-center`}>
                    <div className={`pb-[33px] text-center`}>
                      <div className={`Montserrat text-[18px] font-[600] text-[white]`}>ESSENTIAL</div>
                      <div className={`Btn3 mt-[20px]`}>상품 전체보기 ({idx + 1})</div>
                    </div>
                  </div>
                </div>
                <div className={`mt-[44px]`}>
                  <ProductList3 />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <div className={`pointer-events-none relative z-10`} slot='container-start'>
          <div
            className={`PageNationBox absolute top-[0px] !bottom-auto flex aspect-[302/267] w-full flex-row items-end justify-center gap-[11px]`}></div>
        </div>
      </Swiper>
    </div>
  );
}

export default ProductSwiper5;
