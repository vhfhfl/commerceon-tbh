import MainTit5 from '@/components/common/MainTit5';
import LayoutBasic4 from '@/layouts/LayoutBasic4';
import ProductList4 from '@/modules/ProductList4';
import ProductSwiper6 from '@/swipers/ProductSwiper6';
import Image from 'next/image';
import {useEffect} from 'react';

function PageMain5() {

  return (
    <div className={`PageMain5`}>
      <section data-seq={`20230428144746264`}>
        <div className={`H-Box`}>
          <div className={`Inner NoMargin`}>
            <Image
              className={`aspect-[360/470] h-full w-full object-cover`}
              src={`https://picsum.photos/360/470.jpg?random=1`}
              width={360}
              height={470}
              alt=''
            />
            <div className={`relative z-10 px-[20px] pt-[15px] pb-[24px] text-[var(--color1)]`}>
              <div className={`flex flex-row items-center justify-between`}>
                <div className={`Montserrat text-[20px] font-[600]`}>ACUASCUTUM</div>
                <button className={`flex flex-row items-center justify-center`}>
                  <Image
                    className={`Icon block aspect-square w-[22px]`}
                    src={`/icons/icon_15_on.svg`}
                    width={22}
                    height={22}
                    priority
                    alt='하트'
                  />
                  <div className={`text-[12px] font-[400] text-[var(--color1)]`}>10</div>
                </button>
              </div>
              <div className={`mt-[21px] text-[14px] font-[400] leading-[20px]`}>
                170여년의 역사와기술력으로 탄생한
                <br />
                영국의클래식과 가치를 담은 British Heritage 브랜드
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230428162952322`} className={`mt-[50px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit5 href={`https://www.google.com`}>NEW ARRIVALS</MainTit5>
          </div>
        </div>
        <div className={`mt-[20px]`}>
          <ProductSwiper6 />
        </div>
      </section>
      <section data-seq={`20230522141029206`} className={`mt-[50px]`}>
        <ProductList4 />
      </section>
    </div>
  );
}

PageMain5.Layout = LayoutBasic4;
export default PageMain5;
