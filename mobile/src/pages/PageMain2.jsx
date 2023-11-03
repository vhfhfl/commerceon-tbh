import MainTit2 from '@/components/common/MainTit2';
import LayoutBasic2 from '@/layouts/LayoutBasic2';
import BestRankingList from '@/modules/BestRankingList';
import Gnb2 from '@/modules/Gnb2';
import ReviewList from '@/modules/ReviewList';
import TimeSale from '@/modules/TimeSale';
import Banner1 from '@/swipers/Banner1';
import LookCollectionList from '@/swipers/LookCollectionList';
import MainVisualBanner2 from '@/swipers/MainVisualBanner2';
import NewInSwiper from '@/swipers/NewInSwiper';
import ProductSwiper3 from '@/swipers/ProductSwiper3';
import SeasonExhibitionList1 from '@/swipers/SeasonExhibitionList1';
import ShowCaseSwiper2 from '@/swipers/ShowCaseSwiper2';
import {useEffect} from 'react';

function PageMain2() {

  return (
    <div className={`PageMain2`}>
      <section data-seq={`20230428144746264`}>
        <div className={`H-Box`}>
          <div className={`Inner NoMargin`}>
            <MainVisualBanner2 />
          </div>
        </div>
      </section>
      <section data-seq={`20230509002502366`}>
        <Gnb2 />
      </section>
      <section data-seq={`20230428162952322`} className={`mt-[32px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit2 href={`https://www.google.com`}>NEW SEASON ITEM</MainTit2>
          </div>
        </div>
        <div className={`mt-[44px]`}>
          <NewInSwiper />
        </div>
      </section>
      <section data-seq={`20230509101323556`} className={`mt-[60px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit2 href={`https://www.google.com`}>SEASON EXHIBITION</MainTit2>
          </div>
        </div>
        <div className={`mt-[44px]`}>
          <SeasonExhibitionList1 />
        </div>
      </section>
      <section data-seq={`20230429123243205`} className={`mt-[80px]`}>
        <Banner1 />
      </section>
      <section data-seq={`20230509101323556`} className={`mt-[60px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit2 href={`https://www.google.com`}>BEST RANKING</MainTit2>
          </div>
        </div>
        <div className={`relative mt-[40px]`}>
          <BestRankingList />
        </div>
      </section>
      <section data-seq={`20230429070827760`} className={`mt-[60px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit2 href={`https://www.google.com`}>SPECIAL OFFER</MainTit2>
            <TimeSale className={`mt-[40px]`} />
          </div>
        </div>
      </section>
      <section data-seq={`20230429070832859`} className={`mt-[50px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit2>LOOK COLLECTION</MainTit2>
          </div>
        </div>
        <div className={`mt-[37px]`}>
          <LookCollectionList />
        </div>
      </section>
      <section data-seq={`20230429070835479`} className={`mt-[80px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit2 href={`https://www.google.com`}>KEYWORD STYLING</MainTit2>
          </div>
        </div>
        <div className={`mt-[50px]`}>
          <ProductSwiper3 />
        </div>
      </section>
      <section data-seq={`20230212090159179`} className={`mt-[50px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit2 href={`https://www.google.com`}>INFLUENCER REVIEW</MainTit2>
            <div className={`mt-[40px]`}>
              <ReviewList />
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230429070842106`} className={`mt-[60px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit2>SHOW CASE</MainTit2>
          </div>
        </div>
        <div className={`mt-[40px]`}>
          <ShowCaseSwiper2 />
        </div>
      </section>
    </div>
  );
}

PageMain2.Layout = LayoutBasic2;
export default PageMain2;
