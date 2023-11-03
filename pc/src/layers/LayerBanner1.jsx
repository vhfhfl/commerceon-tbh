/* https://swiperjs.com/demos */
import Image from 'next/image';
import {useRef} from 'react';

import {Autoplay, Controller, Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react';

function LayerBanner1(props) {
  const { children, className = '' } = props;

  const ref_this = useRef();

  const dummy_data = Array.from(Array(5));

  const pagination_fraction = {
    el: '.PageNationBox',
    type: 'fraction',
    clickable: true,
    renderFraction: function (currentClass, totalClass) {
      return `<span class="${currentClass}"></span><span class="sym">/</span><span class="${totalClass}"></span>`;
    },
  };

  return (
    <div ref={ref_this} className={`LayerBanner1 w-[400px] ${className}`}>
      {/*prettier-ignore*/}
      <style jsx global>{`
        /* 전역 선언 */
        /**/
        //.LayerBanner1 .swiper-slide{ width:278px !important; }
        /**/
        .LayerBanner1{}
        .LayerBanner1 .NaviGationBox{display:grid;grid-template-columns: auto auto;gap:0;justify-content:space-between;}
        .LayerBanner1 .NaviGationBox{pointer-events:none;z-index:10;position:absolute;top:0px;left:0px;width:100%;height:250px;}
        .LayerBanner1 .NaviGationBox > .NaviBtn{pointer-events:auto;cursor:pointer;display:flex;align-items:center;justify-content:center;}
        /**/
        .LayerBanner1 .PageNationBox.swiper-pagination-fraction{background-color:rgba(22, 22, 22, 0.4);}
        .LayerBanner1 .PageNationBox.swiper-pagination-fraction{width:auto; z-index:10; position:absolute;top:30px;bottom:auto;left:auto;right:20px;font-size:0;height:auto;text-align:center;}
        .LayerBanner1 .PageNationBox.swiper-pagination-fraction{ display:flex; align-items:center; justify-content:center; padding-left:10px; padding-right:10px; border-radius:12px; }
        .LayerBanner1 .PageNationBox.swiper-pagination-fraction > span{display:inline-block;font-weight:500;font-size:14px; line-height:22px;}
        .LayerBanner1 .PageNationBox.swiper-pagination-fraction > span{ font-family:'Montserrat', Pretendard, sans-serif; }
        .LayerBanner1 .PageNationBox.swiper-pagination-fraction > .swiper-pagination-current{color:white;}
        .LayerBanner1 .PageNationBox.swiper-pagination-fraction > .sym{color:white; margin-left:2px; margin-right:2px; }
        .LayerBanner1 .PageNationBox.swiper-pagination-fraction > .swiper-pagination-total{color:white;}
      `}</style>
      <Swiper
        {...props}
        className={`${className}`}
        spaceBetween={0}
        // slidesPerView={"auto"} // - auto 일때는 .swiper-slide 에 너비 수동 지정 필요
        slidesPerView={1} // - slidesPerView, slidesPerGroup 함께 설정 필요
        // slidesPerGroup={1} // - slidesPerView, slidesPerGroup 함께 설정 필요
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
        modules={[Autoplay, Pagination, Navigation, Controller]}
        navigation={{
          prevEl: '.NaviGationBox > .NaviBtn.Prev',
          nextEl: '.NaviGationBox > .NaviBtn.Next',
        }}
        pagination={pagination_fraction}
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
                <div>
                  <Image
                    className={`h-full w-full object-contain`}
                    src={`https://picsum.photos/400/250.jpg?random=${idx}`}
                    width={400}
                    height={250}
                    priority
                    alt=''
                  />
                </div>
                <div className={`absolute top-0 left-0 z-10 h-full w-full px-[40px]`}>
                  {idx % 2 == 0 ? (
                    <div className={`mt-[71px] w-full`}>
                      {/*일반 기획전*/}
                      {/*<div className={`Montserrat text-[13px] font-[600] text-[var(--color1)]`}>PROMOTION</div>*/}
                      <div className={`mt-[20px]`}>
                        <div className={`text-[26px] font-[600] leading-[32px] text-[var(--color1)]`}>
                          여름 뉴시즌
                          <br />
                          베이직 아이템
                        </div>
                        <div className={`mt-[20px] text-[16px] font-[400]`}>신상입고 최대 30%세일</div>
                      </div>
                    </div>
                  ) : (
                    <div className={`RR mt-[47px] w-full`}>
                      {/*타임특가형*/}
                      <div className={`Montserrat flex flex-row items-center justify-start gap-[10px]`}>
                        <span className={`text-[24px] font-[600] text-[var(--color1)]`}>1</span>
                        <span className={`mt-[-3px] text-[24px] font-[400] text-[var(--color1)]`}>:</span>
                        <span className={`text-[24px] font-[600] text-[var(--color1)]`}>10</span>
                        <span className={`mt-[-3px] text-[24px] font-[400] text-[var(--color1)]`}>:</span>
                        <span className={`text-[24px] font-[600] text-[var(--color1)]`}>45</span>
                      </div>
                      <div className={`mt-[30px]`}>
                        <div className={`text-[26px] font-[600] leading-[32px] text-[var(--color1)]`}>
                          주말 타임특가
                          <br />
                          게릴라 세일
                        </div>
                        <div className={`mt-[20px] text-[16px] font-[400]`}>절개디테일 테일러드 자켓</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <div slot='container-start'>
          <div className={`PageNationBox`}></div>
        </div>
        {/*<div slot='container-end'>Container End</div>*/}
        {/*<div slot='wrapper-start'>Wrapper Start</div>*/}
        {/*<div slot='wrapper-end'>Wrapper End</div>*/}

        <div className={`NaviGationBox`}>
          <div className={`NaviBtn Prev`}>
            <Image src={`/icons/icon_2_1.svg`} width={40} height={40} alt='' />
          </div>
          <div className={`NaviBtn Next`}>
            <Image src={`/icons/icon_2_2.svg`} width={40} height={40} alt='' />
          </div>
        </div>
      </Swiper>
      <div className={`grid w-full grid-cols-2 items-center justify-between`}>
        <button className={`block h-[56px] bg-[var(--color6)] text-[16px] text-[var(--color1)]`}>
          오늘 하루 보지않기
        </button>
        <button
          className={`block h-[56px] bg-white text-[16px] text-[var(--color1)]`}
          onClick={(evt) => {
            // const target = evt.target.closest('button');
            // console.log(target);
            const el_this = ref_this.current;
            el_this.classList.add('hidden');
          }}>
          닫기
        </button>
      </div>
    </div>
  );
}

export default LayerBanner1;
