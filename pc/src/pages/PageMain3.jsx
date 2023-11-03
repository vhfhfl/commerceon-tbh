import MainTit2 from '@/components/common/MainTit2';
import MainTit3 from '@/components/common/MainTit3';
import LayerBanner2 from '@/layers/LayerBanner2';
import LayerBanner3 from '@/layers/LayerBanner3';
import LayoutBasic3 from "@/layouts/LayoutBasic3";
import ConceptShop from '@/modules/ConceptShop';
import ProductList2 from '@/modules/ProductList2';
import Banner3 from '@/swipers/Banner3';
import ExhibitionList2 from '@/swipers/ExhibitionList2';
import LookCollectionList2 from '@/swipers/LookCollectionList2';
import MainVisualBanner3 from '@/swipers/MainVisualBanner3';
import MdChoiceSwiper from '@/swipers/MdChoiceSwiper';
import NewInSwiper2 from '@/swipers/NewInSwiper2';
import ProductSwiper3 from '@/swipers/ProductSwiper3';
import ShowCaseSwiper2 from '@/swipers/ShowCaseSwiper2';
import TimeSaleSwiper from '@/swipers/TimeSaleSwiper';
import {Fragment} from 'react';

function PageMain3() {
  return (
    <div className={`PageMain3`}>
      <div>
        <ConceptShop />
      </div>
      <section data-seq='20230428144746264' className={`relative`}>
        <MainVisualBanner3 />
        <div className={`absolute top-[30px] left-[60px] z-10 hidden`}>
          <LayerBanner3 />
        </div>
        <div className={`absolute bottom-[0] left-[var(--contents-side-padding)] z-10 hidden`}>
          <LayerBanner2 />
        </div>
      </section>
      <section data-seq='20230428162952322' className={`mt-[100px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit3 href={`https://www.google.com`}>BRAND EXHIBITION</MainTit3>
          </div>
        </div>
        <div className={`mt-[60px]`}>
          <ExhibitionList2 />
        </div>
      </section>
      <section data-seq='20230429070823584' className={`mt-[120px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit3 href={`https://www.google.com`}>NOW PICK BEST</MainTit3>
            <div className={`mt-[60px]`}>
              <ProductList2 />
            </div>
          </div>
        </div>
      </section>
      <section data-seq='20230429070827760' className={`mt-[170px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit3 href={`https://www.google.com`}>SPECIAL OFFER-TIME SALE</MainTit3>
            <div className={`mt-[60px]`}>
              <TimeSaleSwiper />
            </div>
          </div>
        </div>
      </section>
      <section data-seq='20230520123417272' className={`mt-[95px]`}>
        <MdChoiceSwiper />
      </section>
      <section data-seq='20230429070832859' className={`mt-[120px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit2>LOOK COLLECTION</MainTit2>
          </div>
        </div>
        <div className={`mt-[60px]`}>
          <LookCollectionList2 />
        </div>
      </section>
      <section data-seq='20230429070838464' className={`mt-[100px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit3 href={`https://www.google.com`}>NEW IN</MainTit3>
            <div className={`mt-[60px]`}>
              <NewInSwiper2 />
            </div>
          </div>
        </div>
      </section>
      <section data-seq='20230429070835479' className={`mt-[125px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit3>KEYWORD STYLING</MainTit3>

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
      <section data-seq='20230429070842106' className={`mt-[156px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit3>SHOW CASE</MainTit3>
          </div>
        </div>
        <div className={`mt-[100px]`}>
          <ShowCaseSwiper2 />
        </div>
      </section>
      <section data-seq='20230429201917266' className={`mt-[140px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <Banner3 />
          </div>
        </div>
      </section>
    </div>
  );
}

PageMain3.Layout = LayoutBasic3;
export default PageMain3;
