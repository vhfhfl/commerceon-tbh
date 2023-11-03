import MainTit4 from '@/components/common/MainTit4';
import LayoutBasic4 from '@/layouts/LayoutBasic4';
import ReviewList from '@/modules/ReviewList';
import TimeSale from '@/modules/TimeSale';
import Banner1 from '@/swipers/Banner1';
import MainVisualBanner3 from '@/swipers/MainVisualBanner3';
import ProductSwiper3 from '@/swipers/ProductSwiper3';
import ProductSwiper4 from '@/swipers/ProductSwiper4';
import ProductSwiper5 from '@/swipers/ProductSwiper5';
import ShowCaseSwiper2 from '@/swipers/ShowCaseSwiper2';
import Image from 'next/image';

function PageMain4() {
  return (
    <div className={`PageMain4`}>
      <section data-seq={`20230428144746264`}>
        <div className={`H-Box`}>
          <div className={`Inner NoMargin`}>
            <MainVisualBanner3 />
          </div>
        </div>
      </section>
      <section data-seq={`20230429070827760`} className={`mt-[50px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit4 href={`https://www.google.com`}>SPECIAL OFFER-TIME SALE</MainTit4>
            <div className={`mt-[30px]`}>
              <TimeSale />
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230520185206971`} className={`mt-[60px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit4>PRODUCT</MainTit4>
          </div>
        </div>
        <div className={`mt-[40px]`}>
          <ProductSwiper5 />
        </div>
      </section>
      <section data-seq={`20230429070835479`} className={`mt-[60px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit4>KEYWORD STYLING</MainTit4>
          </div>
        </div>
        <div className={`mt-[40px]`}>
          <ProductSwiper3 />
        </div>
      </section>
      <section data-seq={`20230429201917266`} className={`mt-[60px]`}>
        <Banner1 />
      </section>
      <section data-seq={`20230429070832859`} className={`mt-[60px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit4 href={`https://www.google.com`}>BEST</MainTit4>
          </div>
        </div>
        <div className={`relative z-0 mt-[40px] bg-black/50 pt-[60px] pb-[80px]`}>
          <div className={`absolute top-[0] left-[0] z-10 h-full w-full`}>
            <div className={`h-full w-[77.55%]`}>
              <Image
                className={`aspect-[254/480] h-full w-full object-cover`}
                src={`https://picsum.photos/960/960.jpg?random=320bd547-d`}
                width={960}
                height={960}
                alt=''
              />
              <div className={`absolute top-[0] left-[0] z-10 h-full w-full bg-[rgba(0,0,0,.6)]`}></div>
            </div>
          </div>
          <div className={`relative z-10`}>
            <div>
              <ProductSwiper4 />
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230212090159179`} className={`mt-[60px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit4 href={`https://www.google.com`}>INFLUENCER REVIEW</MainTit4>
            <div className={`mt-[40px]`}>
              <ReviewList />
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230429070842106`} className={`mt-[60px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit4>SHOW CASE</MainTit4>
          </div>
        </div>
        <div className={`mt-[40px]`}>
          <ShowCaseSwiper2 />
        </div>
      </section>
      <section data-seq={`20230429201917266`} className={`mt-[60px]`}>
        <Banner1 />
      </section>
    </div>
  );
}

PageMain4.Layout = LayoutBasic4;
export default PageMain4;
