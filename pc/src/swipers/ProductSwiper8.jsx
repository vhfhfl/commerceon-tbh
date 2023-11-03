/* https://swiperjs.com/demos */
import SwiperButtonNext from '@/swiper_parts/SwiperButtonNext';
import SwiperButtonPause from '@/swiper_parts/SwiperButtonPause';
import SwiperButtonPrev from '@/swiper_parts/SwiperButtonPrev';
import SwiperButtonResume from '@/swiper_parts/SwiperButtonResume';
import SwiperNumberCurrent from '@/swiper_parts/SwiperNumberCurrent';
import SwiperNumberTotal from '@/swiper_parts/SwiperNumberTotal';
import SwiperProgressBar from '@/swiper_parts/SwiperProgressBar';
import Image from 'next/image';
import {useRef} from 'react';
import ItemFlag1 from '@/components/common/ItemFlag1';

import {Autoplay, Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react';

function ProductSwiper8(props) {
  const { children, className = '' } = props;

  const dummy_data = Array.from(Array(30));
  const ref_swiper = useRef();

  return (
    <div {...props} className={`ProductSwiper8 relative ${className}`}>

      <Swiper
        ref={ref_swiper}
        {...props}
        className={``}
        spaceBetween={13}
        // slidesPerView={"auto"} // - auto 일때는 .swiper-slide 에 너비 수동 지정 필요
        slidesPerView={5} // - slidesPerView, slidesPerGroup 함께 설정 필요
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
        modules={[Autoplay, Navigation]}
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
              <div className={`ProductItem3`}>
                <div className={`relative w-full`}>
                  <div>
                    <Image
                      className={`h-full w-full object-cover`}
                      src={`https://picsum.photos/278/410.jpg?random=${idx}`}
                      width={278}
                      height={410}
                      priority
                      alt='썸네일'
                    />
                  </div>
                  <div className={`absolute top-[0] right-[0] z-10`}>
                    <ItemFlag1 theme={idx}>Big</ItemFlag1>
                  </div>
                </div>
                <div className={`mt-[20px]`}>
                  <div className={`grid grid-cols-[repeat(2,auto)] items-center justify-between`}>
                    <div className={`Montserrat text-[14px] font-[600] text-[var(--color1)]`}>BRAND NAME ({idx + 1})</div>
                    <div>
                      <div className={`flex flex-row items-center justify-center`}>
                        <div className={`text-[12px] font-[400] text-[var(--color1)]`}>리뷰</div>
                        <div className={`Montserrat ml-[2px] text-[12px] font-[500] text-[var(--color5)]`}>432</div>
                      </div>
                    </div>
                  </div>
                  <div className={`mt-[6px]`}>
                    <div className={`text-[14px] font-[400] leading-[120%] text-[var(--color1)] line-clamp-2`}>
                      [1+1] 이지케어 솔리드 드레스셔츠 레귤러 이지케어 솔리드 드레스셔츠 레귤러 이지케어 솔리드 드레스셔츠
                      레귤러 이지케어 솔리드 드레스셔츠 레귤러
                    </div>
                  </div>
                  <div className={`mt-[24px] text-[0px]`}>
                    <div className={`PriceBox`}>
                      <div className={`text-[var(--color1)]`}>64,000</div>
                      <div className={`Sale text-[var(--color1)]`}>129,000</div>
                      <div className={`text-[var(--color2)]`}>50%</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <div className={`relative`} slot='container-start'>
          <div
            className={`NaviGationBox pointer-events-none absolute top-[0] left-[0] z-10 grid aspect-[1400/398] w-full grid-cols-[auto_auto] items-center justify-between`}>
            <div className={`NaviBtn Prev pointer-events-auto cursor-pointer`}>
              <Image src={`/icons/icon_23_1.svg`} width={60} height={62} priority alt='왼쪽 화살표' />
            </div>
            <div className={`NaviBtn Next pointer-events-auto cursor-pointer`}>
              <Image src={`/icons/icon_23_2.svg`} width={60} height={62} priority alt='오른쪽 화살표' />
            </div>
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default ProductSwiper8;
