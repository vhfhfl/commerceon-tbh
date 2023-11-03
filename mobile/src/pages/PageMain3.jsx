import MainTit3 from '@/components/common/MainTit3';
import LayoutBasic3 from '@/layouts/LayoutBasic3';
import ProductList2 from '@/modules/ProductList2';
import ReviewList from '@/modules/ReviewList';
import TimeSale from '@/modules/TimeSale';
import Banner1 from '@/swipers/Banner1';
import ExhibitionList2 from '@/swipers/ExhibitionList2';
import LookCollectionList from '@/swipers/LookCollectionList';
import MainVisualBanner3 from '@/swipers/MainVisualBanner3';
import NewInSwiper2 from '@/swipers/NewInSwiper2';
import ProductSwiper3 from '@/swipers/ProductSwiper3';
import ProductSwiper4 from '@/swipers/ProductSwiper4';
import ShowCaseSwiper2 from '@/swipers/ShowCaseSwiper2';
import Image from 'next/image';

function PageMain3() {
  return (
    <div className={`PageMain3`}>
      <section data-seq={`20230428144746264`}>
        <div className={`H-Box`}>
          <div className={`Inner NoMargin`}>
            <MainVisualBanner3 />
          </div>
        </div>
      </section>
      <section data-seq={`20230428162952322`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit3 href={`https://www.google.com`}>SEASON EXHIBITION</MainTit3>
          </div>
        </div>
        <div className={`mt-[38px]`}>
          <ExhibitionList2 className={`mt-[40px]`} />
        </div>
      </section>
      <section data-seq={`20230429070823584`} className={`mt-[60px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit3 href={`https://www.google.com`}>NOW PICK BEST</MainTit3>
          </div>
        </div>
        <div className={`mt-[40px]`}>
          <ProductList2 />
        </div>
      </section>
      <section data-seq={`20230429070827760`} className={`mt-[60px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit3 href={`https://www.google.com`}>SPECIAL OFFER-TIME SALE</MainTit3>
            <TimeSale className={`mt-[40px]`} />
          </div>
        </div>
      </section>
      <section data-seq={`20230429070832859`} className={`mt-[60px]`}>
        <div className={`relative z-0 bg-black/50 pt-[60px] pb-[80px]`}>
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
            <div className={`pl-[20px]`}>
              <div className={`Montserrat text-[16px] font-[500] tracking-[2px] text-[white]`}>MD CHOICE</div>
            </div>
            <div className={`mt-[40px]`}>
              <ProductSwiper4 />
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230429070832859`} className={`mt-[60px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit3>LOOK COLLECTION</MainTit3>
          </div>
        </div>
        <div className={`mt-[40px]`}>
          <LookCollectionList />
        </div>
      </section>
      <section data-seq={`20230429070838464`} className={`mt-[60px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit3 href={`https://www.google.com`}>NEW IN</MainTit3>
          </div>
        </div>
        <div className={`mt-[40px]`}>
          <NewInSwiper2 />
        </div>
      </section>
      <section data-seq={`20230429070835479`} className={`mt-[50px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit3>KEYWORD STYLING</MainTit3>
          </div>
        </div>
        <div className={`mt-[50px]`}>
          <ProductSwiper3 />
        </div>
      </section>
      <section data-seq={`20230212090159179`} className={`mt-[60px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit3 href={`https://www.google.com`}>INFLUENCER REVIEW</MainTit3>
            <div className={`mt-[40px]`}>
              <ReviewList />
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230429070842106`} className={`mt-[60px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit3>SHOW CASE</MainTit3>
          </div>
        </div>
        <div className={`mt-[40px]`}>
          <ShowCaseSwiper2 />
        </div>
      </section>
      <section data-seq={`20230429201917266`} className={`mt-[103px]`}>
        <Banner1 />
      </section>
    </div>
  );
}

PageMain3.Layout = LayoutBasic3;
export default PageMain3;
