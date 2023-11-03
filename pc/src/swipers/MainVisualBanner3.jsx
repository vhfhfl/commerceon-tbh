/* https://swiperjs.com/demos */
import Image from 'next/image';
import {useRef} from 'react';

import {Autoplay, Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react';

function MainVisualBanner3(props) {
  const { children, className = '' } = props;

  const dummy_data = Array.from(Array(5));
  const ref_swiper = useRef();

  return (
    <div {...props} className={`MainVisualBanner3 relative ${className}`}>
      <Swiper
        ref={ref_swiper}
        {...props}
        className={``}
        spaceBetween={0}
        // slidesPerView={"auto"} // - auto 일때는 .swiper-slide 에 너비 수동 지정 필요
        slidesPerView={1} // - slidesPerView, slidesPerGroup 함께 설정 필요
        slidesPerGroup={1} // - slidesPerView, slidesPerGroup 함께 설정 필요
        loop={true} // loop 를 돌릴경우 item 의 총 수량이 반드시 slidesPerGroup 의 배수이어야한다
        centeredSlides={true}
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
                {/*[.MainVisualBanner3_.swiper-slide-active_&]:opacity-100*/}
                <div>
                  <Image
                    className={`aspect-[1920/760] h-full w-full object-cover`}
                    src={`https://picsum.photos/1920/760.jpg?random=${idx}`}
                    width={1920}
                    height={760}
                    alt=''
                  />
                </div>
                <div
                  className={`absolute top-[0] left-[0] z-10 flex h-full w-full flex-row items-center justify-start`}>
                  <div className={` ml-[214px] text-[white]`}>
                    <div className={`Montserrat text-[18px] font-[500]`}>BASIC HOUSE</div>
                    <div className={`Montserrat mt-[27px] text-[48px] font-[700]`}>
                      2023 SUMMER
                      <br />
                      NEW IN
                    </div>
                    <div className={`mt-[20px] text-[42px] font-[500]`}>신상품 최대 50% OFF</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <div className={`relative`} slot='container-start'>
          <div
            className={`NaviGationBox pointer-events-none absolute top-[0] left-[0] z-10 grid aspect-[560/212] w-full grid-cols-[auto_auto] items-center justify-between`}>
            <div className={`NaviBtn Prev pointer-events-auto ml-[60px] cursor-pointer`}>
              <Image src={`/icons/zco_29_1.svg`} width={32} height={61} alt='' />
            </div>
            <div className={`NaviBtn Next pointer-events-auto mr-[60px] cursor-pointer`}>
              <Image src={`/icons/zco_29_2.svg`} width={32} height={61} alt='' />
            </div>
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default MainVisualBanner3;
