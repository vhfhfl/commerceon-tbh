import Image from 'next/image';

import {useRef} from 'react';
import {Autoplay, Controller, Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

function HeaderLineBanner3(props) {
  const { className = '' } = props;

  const ref_this = useRef();

  return (
    <>
      {/*prettier-ignore*/}
      <style jsx global>{`
        /* 전역 선언 */
        .HeaderLineBanner3{display:none;}
        .HeaderLineBanner3.On{display:block;}
      `}</style>
      <div
        ref={ref_this}
        {...props}
        className={`HeaderLineBanner3 On ${className} h-[var(--header-line-banner3-hei)] bg-[var(--color6)]`}>
        <div className={`RRR grid h-full grid-cols-[repeat(2,auto)] items-center justify-between gap-[0] pr-[16px]`}>
          <div className={`min-w-[0]`}>
            <Swiper
              className='HeaderLineBanner3Swiper !pl-[20px]'
              modules={[Autoplay, Navigation, Pagination, Controller]}
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
                      className={`flex h-[var(--header-line-banner3-hei)] flex-row items-center justify-start text-[11px] font-[400] text-[var(--color1)]`}>
                      <span>({idx + 1}) 신규가입시 즉시할인</span>
                      <span className={`ml-[3px] font-[600]`}>10%쿠폰 증정</span>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div>
            <button
              className={`RR flex h-[var(--header-line-banner3-hei)] w-[var(--header-line-banner3-hei)] flex-row items-center justify-center`}
              onClick={(evt) => {
                const el_this = ref_this.current;
                el_this.classList.remove('On');
              }}>
              <Image src={`/icons/ico_9.svg`} width={18} height={18} alt='' />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderLineBanner3;
