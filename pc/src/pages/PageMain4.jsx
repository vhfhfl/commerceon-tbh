import MainTit1 from '@/components/common/MainTit1';
import LayoutBasic3 from '@/layouts/LayoutBasic3';
import ProductList3 from '@/modules/ProductList3';
import ReviewList from '@/modules/ReviewList';
import Banner3 from '@/swipers/Banner3';
import BestSwiper from '@/swipers/BestSwiper';
import MainVisualBanner4 from '@/swipers/MainVisualBanner4';
import ProductSwiper3 from '@/swipers/ProductSwiper3';
import TimeSaleSwiper from '@/swipers/TimeSaleSwiper';
import Image from 'next/image';
import Link from "next/link";
import {Fragment} from 'react';

function PageMain4() {
  return (
    <div className={`PageMain4`}>
      <section data-seq='20230428144746264' className={`relative`}>
        <MainVisualBanner4 />
      </section>
      <section data-seq='20230429070827760' className={`mt-[100px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit1 href={`https://www.google.com`}>SPECIAL OFFER-TIME SALE</MainTit1>
            <div className={`mt-[76px]`}>
              <TimeSaleSwiper />
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230522112017597`} className={`mt-[120px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit1>PRODUCT</MainTit1>
            <div className={`mt-[76px] space-y-[20px]`}>
              <div>
                <ProductList3 />
              </div>
              <div>
                <ProductList3 />
              </div>
              <div>
                <ProductList3 />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-seq='20230429070835479' className={`mt-[120px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit1>KEYWORD STYLING</MainTit1>

            <div className={`mt-[76px] px-[70px]`}>
              <div className={`grid grid-cols-2 items-start justify-center gap-x-[60px] gap-y-[100px]`}>
                {Array.from(Array(4)).map((obj, idx) => {
                  return (
                    <Fragment key={idx}>
                      <div>
                        <ProductSwiper3 />
                      </div>
                    </Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-seq='20230429201917266' className={`mt-[120px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <Banner3 />
          </div>
        </div>
      </section>
      <section data-seq='20230520123417272' className={`mt-[120px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit1 href={`https://www.google.com`}>BEST</MainTit1>
          </div>
        </div>
        <div className={`mt-[76px]`}>
          <BestSwiper />
        </div>
      </section>
      <section data-seq='20230212090159179' className={`mt-[120px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit1 href={`https://www.google.com`}>INFLUENCER REVIEW</MainTit1>
            <div className={`mt-[40px]`}>
              <ReviewList />
            </div>
          </div>
        </div>
      </section>
      <section data-seq='20230429070842106' className={`mt-[120px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit1>SHOW CASE</MainTit1>
          </div>
        </div>
        <div className={`mt-[74px]`}>
          <div className={`bg-[var(--color1)] pt-[100px] pb-[126px]`}>
            <div className={`H-Box`}>
              <div className={`Inner`}>
                <div className={`grid grid-cols-2 items-center justify-center gap-[10px]`}>
                  <div>
                    {/*LEFT*/}
                    <button
                      className={`relative block w-full`}
                      >
                      <Image
                        className={`aspect-[895/555] h-full w-full object-cover`}
                        src={`https://picsum.photos/895/555.jpg?random=1`}
                        width={895}
                        height={555}
                        alt=''
                      />
                      <div
                        className={`pointer-events-none absolute top-[0] left-[0] z-10 flex h-full w-full flex-row items-center justify-center`}>
                        <Image src={`/icons/icon_22.svg`} width={104} height={104} alt='' />
                      </div>
                    </button>
                  </div>
                  <div>
                    {/*RIGHT*/}
                    <Link href={`https://www.google.com`} target={`_blank`} className={`block w-full`}>
                      <div>
                        <Image
                          className={`aspect-[895/555] h-full w-full object-cover`}
                          src={`https://picsum.photos/895/555.jpg?random=2`}
                          width={895}
                          height={555}
                          alt=''
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

PageMain4.Layout = LayoutBasic3;
export default PageMain4;
