import MainTit1 from '@/components/common/MainTit1';
import CustomSelect2 from '@/components/form/CustomSelect2';
import LayoutBasic from '@/layouts/LayoutBasic';
import ReviewList from '@/modules/ReviewList';
import TimeSale from '@/modules/TimeSale';
import {Data} from '@/scripts/data_manager';
import Banner1 from '@/swipers/Banner1';
import ExhibitionList from '@/swipers/ExhibitionList';
import MainVisualBanner from '@/swipers/MainVisualBanner';
import NewInSwiper from '@/swipers/NewInSwiper';
import ProductSwiper from '@/swipers/ProductSwiper';
import ProductSwiper2 from '@/swipers/ProductSwiper2';
import ProductSwiper3 from '@/swipers/ProductSwiper3';
import ShowCaseSwiper from '@/swipers/ShowCaseSwiper';

function PageMain() {
  return (
    <div className={`PageMain`}>
      <section data-seq={`20230428144746264`}>
        <div className={`H-Box`}>
          <div className={`Inner NoMargin`}>
            <MainVisualBanner />
          </div>
        </div>
      </section>
      <section data-seq={`20230428162952322`} className={`mt-[50px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit1 href={`https://www.google.com`}>SEASON EXHIBITION</MainTit1>
          </div>
        </div>
        <div className={`mt-[38px]`}>
          <CustomSelect2 optionsdata={Data.exhibitionList}></CustomSelect2>
          <ExhibitionList className={`mt-[40px]`} />
        </div>
      </section>
      <section data-seq={`20230429123243205`} className={`mt-[57px]`}>
        <Banner1 />
      </section>
      <section data-seq={`20230429070823584`} className={`mt-[60px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit1 href={`https://www.google.com`}>NOW PICK BEST</MainTit1>
          </div>
        </div>
        <div className={`mt-[40px]`}>
          <ProductSwiper />
        </div>
      </section>
      <section data-seq={`20230429070827760`} className={`mt-[60px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit1 href={`https://www.google.com`}>SPECIAL OFFER-TIME SALE</MainTit1>
            <TimeSale className={`mt-[40px]`} />
          </div>
        </div>
      </section>
      <section data-seq={`20230429070832859`} className={`mt-[50px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit1>MD CHOICE</MainTit1>
          </div>
        </div>
        <div className={`mt-[44px]`}>
          <div
            className={`relative pt-[40px] pl-[20px] pb-[40px] text-[20px] font-[600] leading-[24px] text-[var(--color1)] `}>
            <div className={`absolute top-[0] left-[0] z-0 h-[257px] w-full bg-[var(--color7)] text-[0px]`}>BG</div>
            <div className={`z-5 relative`}>
              품질까지 보장하는
              <br />
              TBH SHOP 초이스
            </div>
          </div>
          <div className={`relative z-10`}>
            <ProductSwiper2 />
          </div>
        </div>
      </section>
      <section data-seq={`20230429070835479`} className={`mt-[50px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit1>KEYWORD STYLING</MainTit1>
          </div>
        </div>
        <div className={`mt-[50px]`}>
          <ProductSwiper3 />
        </div>
        <div className={`mt-[80px]`}>
          <ProductSwiper3 />
        </div>
      </section>
      <section data-seq={`20230501091656515`} className={`mt-[68px]`}>
        <div
          className={`flex h-[260px] flex-col items-center justify-center bg-[url('https://picsum.photos/750/750.jpg?random=79912371-6')] bg-cover bg-fixed bg-center bg-no-repeat text-center `}>
          <div className={`Montserrat text-[14px] font-[400] text-[white]`}>SET PROJECT</div>
          <div className={`Montserrat mt-[12px] text-[18px] font-[700] tracking-[2px] text-[white]`}>
            F/W SETUP COLLECTION
          </div>
        </div>
      </section>
      <section data-seq={`20230429070838464`} className={`mt-[50px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit1 href={`https://www.google.com`}>NEW IN</MainTit1>
          </div>
        </div>
        <NewInSwiper className={`mt-[30px]`} />
      </section>
      <section data-seq={`20230212090159179`} className={`mt-[50px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit1 href={`https://www.google.com`}>INFLUENCER REVIEW</MainTit1>
            <div className={`mt-[40px]`}>
              <ReviewList />
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230429070842106`} className={`mt-[50px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit1 href={`https://www.google.com`}>SHOW CASE</MainTit1>
          </div>
        </div>
        <ShowCaseSwiper className={`mt-[40px]`} />
      </section>
      <section data-seq={`20230429201917266`} className={`mt-[50px]`}>
        <Banner1 />
      </section>
    </div>
  );
}

PageMain.Layout = LayoutBasic;
export default PageMain;
