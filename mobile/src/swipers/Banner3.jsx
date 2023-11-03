/* https://swiperjs.com/demos */
import {Layer} from '@/scripts/util';
import Image from 'next/image';

import {Autoplay, Controller, Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react';

function Banner3(props) {
  const { children, className = '' } = props;

  const dummy_data = Array.from(Array(1));

  // 이 배너의 최초 기획은 슬라이드였습니다.
  // 변경의 가능성이 있으니 소스는 남겨둡니다.
  return (
    <div {...props} className={`Banner3  ${className}`}>
      <Swiper
        {...props}
        className={`bg-[#ffffd4] ${className}`}
        spaceBetween={0}
        slidesPerView={1} // - slidesPerView, slidesPerGroup 함께 설정 필요
        loop={true} // loop 를 돌릴경우 item 의 총 수량이 반드시 slidesPerGroup 의 배수이어야한다
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        modules={[Autoplay, Pagination, Navigation, Controller]}
        navigation={{
          prevEl: '.NaviGationBox > .NaviBtn.Prev',
          nextEl: '.NaviGationBox > .NaviBtn.Next',
        }}
        onSwiper={(swiper) => {
          // console.log('onSwiper');
          // console.log("swiper == ", swiper);
        }}
        onSlideChange={(swiper) => {
          // console.log('onSlideChange');
          // console.log(swiper);
          // console.log("swiper.realIndex == ", swiper.realIndex);
        }}>
        {dummy_data.map((obj, idx) => {
          return (
            <SwiperSlide key={idx}>
              <div
                >
                <div>
                  <Image className={`w-full`} src={`https://picsum.photos/720/466.jpg?random=${idx}`} width={720} height={466} alt='' />
                </div>
                <div
                  className={`absolute top-[0] left-[0] z-10 flex h-full w-full flex-col items-start justify-between px-[20px] pt-[20px] pb-[30px]`}>
                  <div
                    className={`flex h-[40px] w-[40px] flex-row items-center justify-center rounded-full bg-white bg-opacity-[32%] `}>
                    <Image className={`Icon`} src={`/icons/icon_17.svg`} width={22} height={14} priority alt='비디오 아이콘' />
                  </div>
                  <div>
                    <div className={`Montserrat text-[12px] font-[600] leading-[14px] text-white`}>MIND BRIDGE</div>
                    <div className={`Montserrat mt-[18px] text-[20px] font-[600] leading-[20px] text-white`}>
                      2024 MIND BRIDGE
                      <br />
                      SEASON VIDEO
                    </div>
                    <div className={`mt-[14px] text-[18px] font-[300] text-white`}>마인드 브릿지 뉴 시즌</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Banner3;
