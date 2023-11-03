import Image from 'next/image';

import {useRef} from 'react';
import {Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

function HeaderLineBanner2(props) {
  const { className = '' } = props;

  const ref_this = useRef();

  return (
    <>
      {/* prettier-ignore */}
      <style jsx global>{`
        /* 전역 선언 */
        .HeaderLineBanner2{display:none;}
        .HeaderLineBanner2.On{display:block;}
      `}</style>
      <div
        ref={ref_this}
        {...props}
        className={`HeaderLineBanner2 On ${className} h-[var(--header-line-banner2-hei)] bg-white`}>
        <div className={`grid h-full grid-cols-[1fr_auto] items-center justify-between gap-[0] pr-[16px]`}>
          <div className={`min-w-[0]`}>
            <Swiper
              direction={'vertical'}
              className='HeaderLineBanner2Swiper !pl-[20px] h-[var(--header-line-banner2-hei)]'
              modules={[Autoplay]}
              // navigation={true}
              // pagination={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}>
              {Array.from(Array(5)).map((obj, idx) => {
                return (
                  <SwiperSlide key={idx}>
                    <div
                      className={`flex h-[var(--header-line-banner2-hei)] flex-row items-center justify-start text-[12px] font-[400] text-[var(--color1)]`}>
                      <span>({idx + 1}) 신규가입시 즉시할인</span>
                      <span className={`ml-[3px] font-[600] text-[var(--color2)]`}>10%쿠폰 증정</span>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div>
            <button
              className={`flex h-[var(--header-line-banner2-hei)] w-[var(--header-line-banner2-hei)] flex-row items-center justify-center`}
              onClick={(evt) => {
                const el_this = ref_this.current;
                el_this.classList.remove('On');
              }}>
              <Image src={`/icons/ico_7.svg`} width={18} height={19} alt='' />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderLineBanner2;
