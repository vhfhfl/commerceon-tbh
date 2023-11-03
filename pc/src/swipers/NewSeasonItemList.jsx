/* https://swiperjs.com/demos */
import ItemFlag1 from '@/components/common/ItemFlag1';
import Image from 'next/image';
import {useRef} from 'react';

import {Autoplay, Controller, Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react';

function NewSeasonItemList(props) {
  const { children, className = '' } = props;

  // const item_width = '24.51%'; // 1860 의 456
  // const on_item_width = '30.10%'; // 1860 의 560
  const item_width = '456px';
  const on_item_width = '560px';

  const dummy_data = Array.from(Array(19));

  const ref_swiper = useRef();

  return (
    <div {...props} className={`NewSeasonItemList ${className}`}>
      {/*prettier-ignore*/}
      <style jsx global>{`
        /* 전역 선언 */
        /**/
        .NewSeasonItemList .swiper-wrapper{ transition-duration:300ms !important; }
        .NewSeasonItemList .swiper-slide{ width:${item_width}; }
        .NewSeasonItemList .swiper-slide{ transition:all 300ms cubic-bezier(0.33, 1, 0.68, 1); will-change:auto; }
        //.NewSeasonItemList .swiper-slide{ padding-right:1.1%; }
        .NewSeasonItemList .swiper-slide{ padding-right:20px; }
        .NewSeasonItemList .swiper-slide.swiper-slide-active{ }
        .NewSeasonItemList .swiper-slide.swiper-slide-active + .swiper-slide{ width:${on_item_width}; }
        //.NewSeasonItemList .swiper-slide.swiper-slide-active + .swiper-slide + .swiper-slide+ .swiper-slide{ width:${on_item_width}px; }
        /**/
        .NewSeasonItemList{}
        .NewSeasonItemList .NaviGationBox{display:grid; grid-template-columns:auto auto;gap:0;justify-content:space-between;align-items:center;}
        .NewSeasonItemList .NaviGationBox{pointer-events:none;z-index:10;position:absolute;top:0px;left:0px;width:100%;height:600px;}
        .NewSeasonItemList .NaviGationBox{padding-left:100px; padding-right:100px; }
        .NewSeasonItemList .NaviGationBox{ display:none!important; }
        .NewSeasonItemList .NaviGationBox > .NaviBtn{outline:1px dashed red; height:62px; }
        .NewSeasonItemList .NaviGationBox > .NaviBtn{pointer-events:auto;cursor:pointer;display:flex;align-items:center;justify-content:center;}
      `}</style>
      <Swiper
        ref={ref_swiper}
        {...props}
        className={`!pl-[60px]`}
        spaceBetween={0}
        slidesPerView={'auto'} // - auto 일때는 .swiper-slide 에 너비 수동 지정 필요
        observer={true}
        observeParents={true}
        observeSlideChildren={true}
        rewind={true}
        // slidesPerView={3.9} // - slidesPerView, slidesPerGroup 함께 설정 필요
        // slidesPerGroup={1} // - slidesPerView, slidesPerGroup 함께 설정 필요
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
          // console.log(swiper);
        }}
        onSlideChange={(swiper) => {
          // console.log('onSlideChange');
          // console.log(swiper);
          // console.log("swiper.realIndex == ", swiper.realIndex);
        }}>
        {dummy_data.map((obj, idx) => {
          return (
            <SwiperSlide
              key={idx}
              onTransitionEnd={(evt) => {
                // 트랜지션 끝나면 스와이퍼 컨테이너 높이 갱신
                const el_sw = ref_swiper.current;
                const sw_hei = el_sw.clientHeight;
                el_sw.style.minHeight = `${sw_hei}px`;
              }}>
              <div>
                <div className={`relative mx-auto overflow-hidden`}>
                  <div
                    className={`Thumb`}
                    onTransitionEnd={(evt) => {
                      // 트랜지션 끝나면 스와이퍼 컨테이너 높이 갱신
                      const target = evt.target;
                      const el_sw = ref_swiper.current;
                      const sw_hei = el_sw.clientHeight;
                      el_sw.style.minHeight = `${sw_hei}px`;
                    }}>
                    <Image
                      className={`h-full w-full object-contain`}
                      src={`https://picsum.photos/436/600.jpg?random=${idx}`}
                      width={436}
                      height={600}
                      alt=''
                    />
                  </div>
                  <div className={`absolute top-[0] right-[0] z-10`}>
                    <ItemFlag1 theme={idx}>Big</ItemFlag1>
                  </div>
                </div>
                <div className={`mt-[20px]`}>
                  <div className={`text-center`}>
                    <div className={`Montserrat text-[14px] font-[500] text-[var(--color1)]`}>
                      JUCY JUDY ({idx + 1})
                    </div>
                    <div className={`mt-[8px] text-[16px] font-[400] text-[var(--color1)] truncate`}>
                      쥬시쥬디 상세한 제품 설명 타이틀 쥬시쥬디 상세한 제품 설명 타이틀 쥬시쥬디 상세한 제품 설명 타이틀
                    </div>
                  </div>
                  <div className={`mt-[24px] text-center text-[0px]`}>
                    <div className={`PriceBox`}>
                      <div className={`text-[var(--color1)]`}>64,000</div>
                      <div className={`text-[var(--color11)]`}>50%</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <div className={`NaviGationBox`}>
          <div className={`NaviBtn Prev`}>
            <Image src={`/icons/zco_7_1.svg`} width={32} height={61} alt='' />
          </div>
          <div className={`NaviBtn Next`}>
            <Image src={`/icons/zco_7_2.svg`} width={32} height={61} alt='' />
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default NewSeasonItemList;
