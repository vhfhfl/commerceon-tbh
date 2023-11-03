/* https://swiperjs.com/demos */
import Image from 'next/image';
import {useEffect, useRef} from 'react';

import {Autoplay, Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react';

function TimeSaleSwiper(props) {
  const { children, className = '' } = props;

  const dummy_data = Array.from(Array(4));

  const ref_swiper = useRef();

  let iv;

  function updateDisplay(swiper) {
    iv = setInterval(() => {
      swiper.navigation.update();
    }, 100);
  }

  useEffect(() => {
    // mount
    return () => {
      // unmount
      clearInterval(iv);
    };
  }, []);

  return (
    <div {...props} className={`TimeSaleSwiper ${className}`}>
      {/*prettier-ignore*/}
      <style jsx global>{`
        /* 전역 선언 */
        .TimeSaleSwiper{}
        .TimeSaleSwiper .NaviGationBox{display:grid;grid-template-columns: auto auto;gap:0;justify-content:space-between;}
        .TimeSaleSwiper .NaviGationBox{pointer-events:none;z-index:10;position:absolute;top:0px;left:0px;width:100%; height:90%;}
        .TimeSaleSwiper .NaviGationBox > .NaviBtn{pointer-events:auto;cursor:pointer;display:flex;align-items:center;justify-content:center;}
        .TimeSaleSwiper .NaviGationBox > .NaviBtn.swiper-button-disabled{ pointer-events:none; opacity:0; }
      `}</style>
      <Swiper
        ref={ref_swiper}
        className={``}
        spaceBetween={21}
        // slidesPerView={"auto"} // - auto 일때는 .swiper-slide 에 너비 수동 지정 필요
        slidesPerView={3} // - slidesPerView, slidesPerGroup 함께 설정 필요
        slidesPerGroup={1} // - slidesPerView, slidesPerGroup 함께 설정 필요
        // loop={true} // loop 를 돌릴경우 item 의 총 수량이 반드시 slidesPerGroup 의 배수이어야한다
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
          updateDisplay(swiper);
        }}
        onSlideChange={(swiper) => {
          // console.log('onSlideChange');
          // console.log(swiper);
          // console.log("swiper.realIndex == ", swiper.realIndex);
        }}>
        {dummy_data.map((obj, idx) => {
          return (
            <SwiperSlide key={idx}>
              <div className={`border border-[var(--color6)] px-[8px] pt-[49px] pb-[78px]`}>
                <div className={`Montserrat text-center text-[18px] font-[500] leading-[20px] text-[var(--color1)]`}>
                  BRAND NAME
                </div>
                <div className={`mt-[32px]`}>
                  <div className={`relative overflow-hidden rounded-full`}>
                    <div>
                      <Image
                        className={`aspect-square w-full object-cover`}
                        src={`https://picsum.photos/570/570.jpg?random=${idx}`}
                        width={570}
                        height={570}
                        priority
                        alt=''
                      />
                      {idx == 0 && (
                        <div
                          className={`absolute top-[0] left-[0] z-10 flex h-full w-full flex-row items-center justify-center bg-black/60 text-[52px] font-[600] text-[white]`}>
                          12/25 OPEN
                        </div>
                      )}
                    </div>
                    <div className={`absolute bottom-0 right-0 left-0 z-10 bg-[rgba(0_0_0/0.5)] py-[38px]`}>
                      <div className={`text-center text-[20px] font-[400] text-white`}>
                        정해인 변형트러커 ({idx + 1})
                      </div>
                      <div className={`Montserrat mt-[12px] text-center text-[28px] font-[700] text-white`}>
                        <span>34%</span>
                        <span className={`ml-[12px]`}>99,000원</span>
                      </div>
                      <div className={`mt-[34px] text-center`}>
                        <a
                          href={`#`}
                          target={`_blank`}
                          className={`border-b border-white text-center text-[16px] font-[400] text-white`}>
                          자세히보기
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`mt-[30px]`}>
                  <div className={`Montserrat text-center text-[20px] font-[600] text-[var(--color1)]`}>TIMESALE</div>
                  <div
                    className={`Montserrat mt-[12px] flex flex-row items-start justify-center gap-[14px] text-center text-[var(--color1)]`}>
                    {idx == 0 ? (
                      <>
                        <div>
                          <div className={`text-[28px] font-[600]`}>-</div>
                          <div className={`mt-[12px] text-[12px] font-[500]`}>hours</div>
                        </div>
                        <div>
                          <div className={`text-[28px] font-[400]`}>:</div>
                          <div></div>
                        </div>
                        <div>
                          <div className={`text-[28px] font-[600]`}>--</div>
                          <div className={`mt-[12px] text-[12px] font-[500]`}>minutes</div>
                        </div>
                        <div>
                          <div className={`text-[28px] font-[400]`}>:</div>
                          <div></div>
                        </div>
                        <div>
                          <div className={`text-[28px] font-[600]`}>--</div>
                          <div className={`mt-[12px] text-[12px] font-[500]`}>seconds</div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <div className={`text-[28px] font-[600]`}>1</div>
                          <div className={`mt-[12px] text-[12px] font-[500]`}>hours</div>
                        </div>
                        <div>
                          <div className={`text-[28px] font-[400]`}>:</div>
                          <div></div>
                        </div>
                        <div>
                          <div className={`text-[28px] font-[600]`}>23</div>
                          <div className={`mt-[12px] text-[12px] font-[500]`}>minutes</div>
                        </div>
                        <div>
                          <div className={`text-[28px] font-[400]`}>:</div>
                          <div></div>
                        </div>
                        <div>
                          <div className={`text-[28px] font-[600]`}>45</div>
                          <div className={`mt-[12px] text-[12px] font-[500]`}>seconds</div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <div className={`NaviGationBox`}>
          <div className={`NaviBtn Prev`}>
            <Image src={`/icons/zco_22_1.svg`} width={60} height={62} alt='' />
          </div>
          <div className={`NaviBtn Next`}>
            <Image src={`/icons/zco_22_2.svg`} width={60} height={62} alt='' />
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default TimeSaleSwiper;
