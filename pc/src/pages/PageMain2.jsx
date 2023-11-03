import MainTit2 from '@/components/common/MainTit2';
import LayoutBasic2 from '@/layouts/LayoutBasic2';
import BestRankingList from '@/modules/BestRankingList';
import ReviewList from '@/modules/ReviewList';
import Banner1_2 from '@/swipers/Banner1_2';
import LookCollectionList from '@/swipers/LookCollectionList';
import MainVisualBanner2 from '@/swipers/MainVisualBanner2';
import NewSeasonItemList from '@/swipers/NewSeasonItemList';
import ProductSwiper3 from '@/swipers/ProductSwiper3';
import SeasonExhibitionList1 from '@/swipers/SeasonExhibitionList1';
import ShowCaseSwiper2 from '@/swipers/ShowCaseSwiper2';
import TimeSaleSwiper from '@/swipers/TimeSaleSwiper';
import {Fragment} from 'react';

function PageMain2() {
  return (
    <div className={`PageMain2`}>
      <section data-seq='20230428144746264' className={`relative`}>
        <MainVisualBanner2 />
      </section>
      <section data-seq='20230428162952322' className={`mt-[97px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit2 href={`https://www.google.com`}>NEW SEASON ITEM</MainTit2>
          </div>
        </div>
        <div className={`mt-[50px]`}>
          <NewSeasonItemList />
        </div>
      </section>
      <section data-seq={`20230509101323556`} className={`mt-[50px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit2 href={`https://www.google.com`}>SEASON EXHIBITION</MainTit2>
          </div>
        </div>
        <div className={`mt-[50px]`}>
          <SeasonExhibitionList1 />
        </div>
      </section>
      <section data-seq='20230429123243205' className={`mt-[80px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <Banner1_2 />
          </div>
        </div>
      </section>
      <section data-seq={`20230509101323556`} className={`mt-[60px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit2 href={`https://www.google.com`}>BEST RANKING</MainTit2>
          </div>
        </div>
        <div className={`mt-[50px]`}>
          <BestRankingList />
        </div>
      </section>
      <section data-seq='20230429070827760' className={`mt-[90px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit2 href={`https://www.google.com`}>SPECIAL OFFER</MainTit2>
            <div className={`mt-[83px]`}>
              <TimeSaleSwiper />
            </div>
          </div>
        </div>
      </section>
      <section data-seq='20230429070832859' className={`mt-[50px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit2>LOOK COLLECTION</MainTit2>
          </div>
        </div>
        <div className={`mt-[50px]`}>
          <LookCollectionList />
        </div>
      </section>
      <section data-seq='20230429070835479' className={`mt-[130px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit2>KEYWORD STYLING</MainTit2>

            <div className={`mt-[60px] px-[70px]`}>
              <div className={`grid grid-cols-2 items-start justify-center gap-x-[60px] gap-y-[100px]`}>
                {Array.from(Array(2)).map((obj, idx) => {
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
      <section data-seq='20230212090159179' className={`mt-[130px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit2 href={`https://www.google.com`}>INFLUENCER REVIEW</MainTit2>
            <div className={`mt-[40px]`}>
              <ReviewList />
            </div>
          </div>
        </div>
      </section>
      <section data-seq='20230429070842106' className={`mt-[156px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit2 href={`https://www.google.com`}>SHOW CASE</MainTit2>
          </div>
        </div>
        <div className={`mt-[100px]`}>
          <ShowCaseSwiper2 />
        </div>
      </section>
    </div>
  );
}

PageMain2.Layout = LayoutBasic2;
export default PageMain2;
