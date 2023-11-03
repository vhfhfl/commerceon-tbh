import MainTit1 from '@/components/common/MainTit1';
import LayoutBasic from '@/layouts/LayoutBasic';
import ExhibitionLeft from '@/modules/ExhibitionLeft';
import NowPickBestMenu from '@/modules/NowPickBestMenu';
import ProductList from '@/modules/ProductList';
import ReviewList from '@/modules/ReviewList';
import {Data} from '@/scripts/data_manager';
import Banner1 from '@/swipers/Banner1';
import Banner3 from '@/swipers/Banner3';
import ExhibitionList from '@/swipers/ExhibitionList';
import MainVisualBanner from '@/swipers/MainVisualBanner';
import NewInSwiper from '@/swipers/NewInSwiper';
import ProductSwiper2 from '@/swipers/ProductSwiper2';
import ProductSwiper3 from '@/swipers/ProductSwiper3';
import ShowCaseSwiper from '@/swipers/ShowCaseSwiper';
import TimeSaleSwiper from '@/swipers/TimeSaleSwiper';
import {Fragment} from 'react';

function PageMain() {
  return (
    <div className={`PageMain`}>
      <section data-seq='20230428144746264' className={`relative`}>
        <MainVisualBanner />
      </section>
      <section data-seq='20230428162952322' className={`mt-[100px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit1 href={`https://www.google.com`}>BRAND EXHIBITION</MainTit1>
          </div>
        </div>
        <div className={`mt-[70px]`}>
          <div className={`grid grid-cols-[30.72%_1fr] gap-[30px]`}>
            <div className={`bg-[var(--color7)]`}>
              {/*LEFT*/}
              <ExhibitionLeft />
            </div>
            <div className={`min-w-[0]`}>
              {/*RIGHT*/}
              <ExhibitionList />
            </div>
          </div>
        </div>
      </section>
      <section data-seq='20230429123243205' className={`mt-[140px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <Banner1 />
          </div>
        </div>
      </section>
      <section data-seq='20230429070823584' className={`mt-[140px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit1 href={`https://www.google.com`}>NOW PICK BEST</MainTit1>
          </div>
        </div>
        <div className={`H-Box mt-[40px]`}>
          <div className={`Inner`}>
            <div className={`grid grid-cols-[282px_1fr] gap-[48px]`}>
              <div>
                {/*LEFT*/}
                <NowPickBestMenu />
              </div>
              <div>
                {/*RIGHT*/}
                <ProductList datalist={Data.newPickBestList.ALL} />
                {/*<ProductList datalist={Data.newPickBestList.MAN} />*/}
                {/*<ProductList datalist={Data.newPickBestList.WOMEN} />*/}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-seq='20230429070827760' className={`mt-[140px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit1 href={`https://www.google.com`}>SPECIAL OFFER-TIME SALE</MainTit1>
            <div className={`mt-[70px]`}>
              <TimeSaleSwiper />
            </div>
          </div>
        </div>
      </section>
      <section data-seq='20230429070832859' className={`mt-[140px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit1>MD CHOICE</MainTit1>
          </div>
        </div>
        <div className={`mt-[70px] bg-[var(--color7)] pt-[80px] pb-[125px]`}>
          <div className={`grid grid-cols-[270px_1fr] items-start justify-center gap-[34px]`}>
            <div className={`text-right text-[28px] font-[600] leading-[34px] text-[var(--color1)]`}>
              품질까지 보장하는
              <br />
              TBH SHOP 초이스
            </div>
            <div className={`min-w-[0]`}>
              <ProductSwiper2 />
            </div>
          </div>
        </div>
      </section>
      <section data-seq='20230429070835479' className={`mt-[146px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit1>KEYWORD STYLING</MainTit1>

            <div className={`mt-[70px] px-[70px]`}>
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
      <section data-seq='20230501091656515' className={`mt-[140px]`}>
        <div
          className={`Montserrat flex h-[560px] flex-col items-center justify-center bg-[url('/imgs/img_13_1.jpg')] bg-[url('https://picsum.photos/960/1200.jpg?random=1')] bg-cover bg-fixed bg-center bg-no-repeat text-center text-[white]`}>
          <div className={`text-[18px] font-[500]`}>SET PROJECT</div>
          <div className={`mt-[5px] text-[36px] font-[700] leading-[44px] tracking-[2px]`}>F/W SETUP COLLECTION</div>
        </div>
      </section>
      <section data-seq='20230429070838464' className={`mt-[140px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit1 href={`https://www.google.com`}>NEW IN</MainTit1>
          </div>
        </div>
        <div className={`mt-[70px]`}>
          <NewInSwiper />
        </div>
      </section>
      <section data-seq='20230212090159179' className={`mt-[140px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit1 href={`https://www.google.com`}>INFLUENCER REVIEW</MainTit1>
            <div className={`mt-[40px]`}>
              <ReviewList />
            </div>
          </div>
        </div>
      </section>
      <section data-seq='20230429070842106' className={`mt-[158px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit1 href={`https://www.google.com`}>SHOW CASE</MainTit1>
          </div>
        </div>
        <div className={`mt-[40px]`}>
          <ShowCaseSwiper />
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

PageMain.Layout = LayoutBasic;
export default PageMain;
