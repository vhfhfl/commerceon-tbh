import Image from 'next/image';

import {useRef} from 'react';
import {Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

function HeaderLineBanner(props) {
  const { className = '' } = props;

  const ref_this = useRef();

  return (
    <>
      {/* prettier-ignore */}
      <style jsx global>{`
        // 전역 선언
        .HeaderLineBanner{ display:none; }
        .HeaderLineBanner.On{ display:block; }
      `}</style>
      <div
        ref={ref_this}
        {...props}
        className={`HeaderLineBanner On ${className} h-[var(--header-line-banner-hei)] overflow-hidden bg-[var(--color1)]`}>
        <div className={`GRID grid grid-cols-[1fr_auto] justify-between gap-[0] pr-[16px]`}>
          <div>
            <Swiper
              direction={'vertical'}
              className='HeaderLineBannerSwiper h-[var(--header-line-banner-hei)] !pl-[20px]'
              modules={[Autoplay]}
              spaceBetween={0}
              slidesPerView={1} // - slidesPerView, slidesPerGroup 함께 설정 필요
              // navigation={true}
              // pagination={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}>
              <div>
                {Array.from(Array(5)).map((obj, idx) => {
                  return (
                    <SwiperSlide key={idx} className={`h-[var(--header-line-banner-hei)]`}>
                      <a
                        href={`https://www.google.com`}
                        target={`_blank`}
                        className={`Item flex h-[var(--header-line-banner-hei)] flex-row items-center justify-start text-[11px] font-[400] text-white`}>
                        <span>({idx + 1}) 신규가입시 즉시할인</span>
                        <span className={`ml-[3px] text-[var(--color2)]`}>10%쿠폰 증정</span>
                      </a>
                    </SwiperSlide>
                  );
                })}
              </div>
            </Swiper>
          </div>
          <div>
            <button
              className={`flex h-[var(--header-line-banner-hei)] w-[var(--header-line-banner-hei)] flex-row items-center justify-center`}
              onClick={(evt) => {
                const el_this = ref_this.current;
                el_this.classList.remove('On');
              }}>
              <Image className={`Icon`} src={`/icons/icon_11.svg`} width={14} height={13} alt='' />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderLineBanner;
