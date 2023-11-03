/* https://swiperjs.com/demos */
import Image from 'next/image';
import Link from 'next/link';
import {Fragment, useRef} from 'react';

import {Autoplay, Controller, Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react';

function ReviewSwiper(props) {
  const { children, className = '' } = props;

  const dummy_data = Array.from(Array(10));
  const ref_swiper = useRef();

  const pagination_fraction = {
    el: '.PageNationBox',
    type: 'fraction',
    clickable: true,
    renderFraction: function (currentClass, totalClass) {
      return `<span class="${currentClass}"></span><span class="sym">/</span><span class="${totalClass}"></span>`;
    },
  };

  return (
    <div {...props} className={`ReviewSwiper ${className}`}>
      {/*prettier-ignore*/}
      <style jsx global>{`
        /* 전역 선언 */
        /**/
        .ReviewSwiper .PageNationBox.swiper-pagination-fraction{position:relative;top:auto;bottom:auto;left:auto;right:auto;font-size:0;height:auto;text-align:center;}
        .ReviewSwiper .PageNationBox.swiper-pagination-fraction{display:flex; align-items:center; justify-content:center; gap:4px;}
        .ReviewSwiper .PageNationBox.swiper-pagination-fraction > span{display:inline-block;font-weight:500;font-size:18px;line-height:100%;}
        .ReviewSwiper .PageNationBox.swiper-pagination-fraction > .swiper-pagination-current{color:white; font-weight:700;}
        .ReviewSwiper .PageNationBox.swiper-pagination-fraction > .sym{color:white;}
        .ReviewSwiper .PageNationBox.swiper-pagination-fraction > .swiper-pagination-total{color:white;}
      `}</style>

      <div
        className={`pointer-events-none absolute top-[0] left-[0] z-10 flex w-full h-full flex-row items-center justify-between`}>
        <button
          className={`pointer-events-auto translate-x-[-100px]`}
          onClick={(evt) => {
            const swiper = ref_swiper.current.swiper;
            swiper.slidePrev();
          }}>
          <Image src={`/icons/zco_23_1.svg`} width={60} height={60} alt='' />
        </button>
        <button
          className={`pointer-events-auto translate-x-[100px]`}
          onClick={(evt) => {
            const swiper = ref_swiper.current.swiper;
            swiper.slideNext();
          }}>
          <Image src={`/icons/zco_23_2.svg`} width={60} height={60} alt='' />
        </button>
      </div>

      <Swiper
        ref={ref_swiper}
        {...props}
        className={``}
        spaceBetween={0}
        // slidesPerView={"auto"} // - auto 일때는 .swiper-slide 에 너비 수동 지정 필요
        slidesPerView={1} // - slidesPerView, slidesPerGroup 함께 설정 필요
        slidesPerGroup={1} // - slidesPerView, slidesPerGroup 함께 설정 필요
        loop={true} // loop 를 돌릴경우 item 의 총 수량이 반드시 slidesPerGroup 의 배수이어야한다
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        modules={[Autoplay, Pagination, Navigation, Controller]}
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
              <div data-seq='20230516213345022' className={`grid grid-cols-[1fr_400px] gap-[0]`}>
                <div>
                  <Image
                    className={`h-full w-full object-cover`}
                    src={`https://picsum.photos/600/776.jpg?random=${idx}`}
                    width={600}
                    height={776}
                    alt=''
                  />
                </div>
                <div className={`bg-white`}>
                  <div
                    className={`grid grid-cols-[auto_1fr] items-center justify-center gap-[20px] py-[15px] px-[20px]`}>
                    <div className={`w-[50px]`}>
                      <Image
                        className={`aspect-square w-full object-cover`}
                        src={`https://picsum.photos/50/50.jpg?random=1`}
                        width={50}
                        height={50}
                        priority
                        alt=''
                      />
                    </div>
                    <div>
                      <div className={`Montserrat text-[14px] font-[600] text-[var(--color1)]`}>BRAND NAME</div>
                      <div className={`fon-[400] mt-[6px] text-[14px] text-[var(--color1)]`}>오버핏 싱글자켓 셋업</div>
                    </div>
                  </div>
                  <div className={`border-t border-[var(--color3)]`}>
                    <div className={`px-[20px] pt-[30px] pb-[20px]`}>
                      <div className={`flex flex-row items-center justify-between`}>
                        <div className={`flex flex-row items-center justify-start`}>
                          <div
                            className={`Montserrat h-[36px] rounded-[6px] bg-[var(--color6)] px-[5px] text-[16px] font-[600] leading-[36px] text-[var(--color1)]`}>
                            4.8
                          </div>
                          <div className={`ml-[14px] flex flex-row items-center justify-center`}>
                            {Array.from(Array(5)).map((obj, idx) => {
                              let src;
                              if (idx == 4) {
                                src = '/icons/icon_17_2.svg';
                              } else {
                                src = '/icons/icon_17_1.svg';
                              }

                              return (
                                <Fragment key={idx}>
                                  <Image className={`Icon`} src={src} width={18} height={17} priority alt='별' />
                                </Fragment>
                              );
                            })}
                          </div>
                        </div>
                        <div className={`flex flex-row items-center justify-center gap-[8px]`}>
                          <span className={`text-[14px] font-[700] text-[var(--color1)]`}>김**</span>
                          <span className={`text-[14px] font-[400] text-[var(--color1)]`}>님의 리뷰</span>
                          <span className={`inline-block h-[15px] w-[1px] bg-[var(--color3)]`}></span>
                          <span className={`text-[14px] font-[300] text-[var(--color5)]`}>23.04.20</span>
                        </div>
                      </div>
                      <div
                        className={`mt-[20px] h-[380px] overflow-y-auto text-[14px] font-[400] leading-[24px] text-[var(--color1)]`}>
                        별빛이 이름자 추억과 오는 쉬이 새겨지는 멀리 봅니다. 그리고 아름다운 별 어머님, 아직 소녀들의
                        나의 가을 까닭입니다. 파란 속의 하나에 나의 아스라히 너무나 청춘이 이름자를 다 있습니다. 노루,
                        무덤 이름을 까닭입니다. 경, 자랑처럼 추억과 강아지, 내일 하나 하나에 밤이 봅니다. 슬퍼하는 시와
                        별 멀듯이, 걱정도 오면 파란 별 다하지 있습니다. 까닭이요, 그러나 것은 파란 소녀들의 둘
                        까닭입니다. 위에도 없이 하나에 까닭입니다. 하나에 딴은 이웃 듯합니다. 것은 계집애들의 무엇인지
                        이네들은 멀리 잔디가 나는 무덤 까닭입니다. 하나 릴케 다 새겨지는 어머니, 말 내린 별에도 쉬이
                        있습니다. 별빛이 이름자 추억과 오는 쉬이 새겨지는 멀리 봅니다. 그리고 아름다운 별 어머님, 아직
                        소녀들의 나의 가을 까닭입니다. 파란 속의 하나에 나의 아스라히 너무나 청춘이 이름자를 다
                        있습니다. 노루, 무덤 이름을 까닭입니다. 경, 자랑처럼 추억과 강아지, 내일 하나 하나에 밤이
                        봅니다. 슬퍼하는 시와 별 멀듯이, 걱정도 오면 파란 별 다하지 있습니다. 까닭이요, 그러나 것은 파란
                        소녀들의 둘 까닭입니다. 위에도 없이 하나에 까닭입니다. 하나에 딴은 이웃 듯합니다. 것은
                        계집애들의 무엇인지 이네들은 멀리 잔디가 나는 무덤 까닭입니다. 하나 릴케 다 새겨지는 어머니, 말
                        내린 별에도 쉬이 있습니다. 별빛이 이름자 추억과 오는 쉬이 새겨지는 멀리 봅니다. 그리고 아름다운
                        별 어머님, 아직 소녀들의 나의 가을 까닭입니다. 파란 속의 하나에 나의 아스라히 너무나 청춘이
                        이름자를 다 있습니다. 노루, 무덤 이름을 까닭입니다. 경, 자랑처럼 추억과 강아지, 내일 하나 하나에
                        밤이 봅니다. 슬퍼하는 시와 별 멀듯이, 걱정도 오면 파란 별 다하지 있습니다. 까닭이요, 그러나 것은
                        파란 소녀들의 둘 까닭입니다. 위에도 없이 하나에 까닭입니다. 하나에 딴은 이웃 듯합니다. 것은
                        계집애들의 무엇인지 이네들은 멀리 잔디가 나는 무덤 까닭입니다. 하나 릴케 다 새겨지는 어머니, 말
                        내린 별에도 쉬이 있습니다.
                      </div>
                      <div className={`mt-[30px] grid grid-cols-4 items-center justify-center gap-[6px]`}>
                        {Array.from(Array(4)).map((obj, idx) => {
                          return (
                            <Fragment key={idx}>
                              <Link href={`https://www.google.com`} target={`_blank`} className={`block w-full cursor-pointer`}>
                                <Image
                                  className={`aspect-square w-full object-cover`}
                                  src={`https://picsum.photos/85/85.jpg?random=${idx}`}
                                  width={85}
                                  height={85}
                                  priority
                                  alt=''
                                />
                              </Link>
                            </Fragment>
                          );
                        })}
                      </div>
                    </div>
                    <div className={`border-t border-[var(--color3)]`}>
                      <div
                        className={`flex flex-row items-center justify-between px-[20px] pt-[30px] pb-[22px]`}>
                        <div className={`text-[14px] font-[400] text-[var(--color1)]`}>리뷰가 도움이 되었나요?</div>
                        <div
                          className={`flex h-[48px] flex-row items-center justify-between rounded-[50px] border border-[var(--color3)] px-[18px]`}>
                          <button className={`w-[24px]`}>
                            <Image
                              className={`Icon`}
                              src={`/icons/icon_18.svg`}
                              width={24}
                              height={24}
                              priority
                              alt='좋아요'
                            />
                          </button>
                          <span className={`Montserrat ml-[10px] text-[14px] font-[600] text-[var(--color1)]`}>24</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <div className={`PageNationBox Montserrat mt-[20px]`}></div>
      </Swiper>
    </div>
  );
}

export default ReviewSwiper;
