/* https://swiperjs.com/demos */
import ProductList from '@/modules/ProductList';
import {Fragment, useEffect, useRef, useState} from 'react';

import {Autoplay, Controller, Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react';

function ProductSwiper(props) {
  const { children, className = '' } = props;

  const [selected_idx, setSelectedIdx] = useState(0);

  const ref_swiper = useRef();

  const dummy_data = Array.from(Array(3));

  let iv;
  useEffect(() => {
    // mount
    iv = setInterval(() => {
      const swiper = ref_swiper.current.swiper;
      if (swiper) {
        swiper.updateAutoHeight(500);
      }
    }, 100);

    return () => {
      // unmount
      clearInterval(iv);
    };
  }, []);

  return (
    <>
      {/* prettier-ignore */}
      <style jsx global>{`
        /* 전역 선언 */
        .ProductSwiperNaviList{display:grid;grid-template-columns: repeat(3, minmax(0, 1fr));gap:1px;}
        .ProductSwiperNaviList > button{font-family:'Montserrat', Pretendard, sans-serif;font-weight:500;font-size:12px;color:var(--color1);line-height:100%;}
        .ProductSwiperNaviList > button{height:50px;border-bottom:1px solid var(--color6);}
        .ProductSwiperNaviList > button.On{font-weight:700;border-bottom:2px solid var(--color1);}
      `}</style>
      <div className={`ProductSwiperNaviList`}>
        {['ALL', 'MAN', 'WOMEN'].map((obj, idx) => {
          return (
            <Fragment key={idx}>
              <button
                className={`${idx == selected_idx && `On`}`}
                onClick={(evt) => {
                  const swiper = ref_swiper.current.swiper;
                  swiper.slideTo(idx);
                }}>
                {obj}
              </button>
            </Fragment>
          );
        })}
      </div>
      <Swiper
        ref={ref_swiper}
        className={`ProductSwiper mt-[40px] ${className}`}
        // slidesPerView={"auto"} // - auto 일때는 .swiper-slide 에 너비 수동 지정 필요
        slidesPerView={1} // - slidesPerView, slidesPerGroup 함께 설정 필요
        slidesPerGroup={1} // - slidesPerView, slidesPerGroup 함께 설정 필요
        spaceBetween={0}
        autoHeight={true}
        // autoplay={{
        //   delay : 3000,
        //   disableOnInteraction : false,
        // }}
        modules={[Autoplay, Pagination, Navigation, Controller]}
        onSwiper={(swiper) => {}}
        onSlideChange={(swiper) => {
          // console.log('onSlideChange');
          // console.log(swiper);
          setSelectedIdx(swiper.realIndex);
        }}>
        <SwiperSlide>
          <ProductList />
        </SwiperSlide>
        <SwiperSlide>
          <ProductList />
        </SwiperSlide>
        <SwiperSlide>
          <ProductList />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default ProductSwiper;
