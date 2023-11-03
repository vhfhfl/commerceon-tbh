/* https://swiperjs.com/demos */
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';

import { Autoplay, Controller, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

function ProductSwiper3(props) {
  const { children, className = '' } = props;

  const dummy_data = Array.from(Array(10));

  const pagination_basic = {
    el: '.PageNationBox',
    clickable: true,
    type: 'bullets',
    bulletClass: 'PageDot',
    bulletActiveClass: 'Active',
  };

  const ksm = (param) => {};

  return (
    <div {...props} className={`ProductSwiper3 ${className}`}>
      <Swiper
        {...props}
        className={`${className} !pl-[var(--contents-side-padding)]`}
        spaceBetween={10}
        // slidesPerView={'auto'} // - auto 일때는 .swiper-slide 에 너비 수동 지정 필요
        slidesPerView={1.1} // - slidesPerView, slidesPerGroup 함께 설정 필요
        slidesPerGroup={1} // - slidesPerView, slidesPerGroup 함께 설정 필요
        loop={true} // loop 를 돌릴경우 item 의 총 수량이 반드시 slidesPerGroup 의 배수이어야한다
        breakpoints={{
          640: {
            slidesPerView: 1.5,
          },
        }}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        modules={[Autoplay, Pagination, Navigation, Controller]}
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
              <div>
                <div className={`flex flex-row items-start gap-[8px]`}>
                  <div className={`Montserrat text-[16px] font-[700] text-[var(—color1)] `}>#SHIRTS</div>
                  <div className={`text-[16px] font-[400] text-[var(—color1)]`}>돌아온 셔츠의 계절 {idx}</div>
                </div>
                <div className={`mt-[20px]`}>
                  <div className={`relative`}>
                    <Image
                      className={`aspect-[320/356] w-full object-cover`}
                      src={`https://picsum.photos/640/712.jpg?random=${idx}`}
                      width={640}
                      height={712}
                      alt='큰 썸네일'
                    />
                    <div
                      className={`Montserrat absolute top-0 left-0 z-10 bg-[var(--color1)] py-[7px] px-[13px] text-center text-[9px] font-[600] text-white `}>
                      BRAND NAME
                    </div>
                  </div>
                  <div className={`relative z-10 ml-[10px] mt-[-97px] bg-white `}>
                    <Link
                      className={`absolute top-[-32px] right-[20px] z-10 border-b border-b-[var(--color1)] text-[10px] font-[400] text-[var(--color1)]`}
                      href={`https://www.google.com`}
                      target={`_blank`}>
                      제품 자세히보기
                    </Link>
                    <div className={`space-y-[10px] p-[10px]`}>
                      {Array.from(Array(3)).map((obj, idx) => {
                        return (
                          <Fragment key={idx}>
                            <div
                              className={`grid w-full grid-cols-[80px_1fr] gap-[20px] border-b border-b-[var(--color3)] pb-[10px] `}>
                              <div>
                                <Image
                                  className={`aspect-square w-full object-cover`}
                                  src={`https://picsum.photos/160/160.jpg?random=${idx}`}
                                  width={160}
                                  height={160}
                                  alt='작은 썸네일'
                                />
                              </div>
                              <div>
                                <div className={`grid grid-cols-[1fr_auto] items-center justify-center gap-[10px]`}>
                                  <div className={`min-w-[0]`}>
                                    <div className={`Montserrat text-[10px] font-[600] text-[var(--color1)]`}>
                                      BRAND NAME
                                    </div>
                                    <div className={`mt-[8px] truncate text-[12px] font-[400] text-[var(--color1)]`}>
                                      봄이 벌써 불러 가을로 까닭입니다. 걱정도 불러 계절이 이국 패, 없이 듯합니다.
                                      하나에 별이 써 피어나듯이 마디씩 밤을 너무나 그리고 계십니다. 별 겨울이 나의 별
                                      가난한 버리었습니다. 언덕 헤는 무덤 있습니다.
                                    </div>
                                    <div className={`mt-[24px] text-[0px]`}>
                                      <div className={`PriceBox`}>
                                        <div className={`text-[var(--color1)]`}>64,000</div>
                                        <div className={`text-[var(--color2)]`}>50%</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <button>
                                      {/*<Image src={`/icons/icon_15.svg`} width={22} height={22} alt='하트' />*/}
                                      <Image className={`Icon`} src={`/icons/icon_15_on.svg`} width={22} height={22} alt='하트' />
                                      <div
                                        className={`mt-[2px] text-center text-[10px] font-[400] tracking-[0.5%] text-[#C6CAD1]`}>
                                        24
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Fragment>
                        );
                      })}
                    </div>
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

export default ProductSwiper3;
