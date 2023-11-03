import MainTit3 from '@/components/common/MainTit3';
import LayoutBasic6 from '@/layouts/LayoutBasic6';
import SearchWrapper from '@/modules/SearchWrapper';
import MainVisualBanner6 from '@/swipers/MainVisualBanner6';
import TimeSaleSwiper from '@/swipers/TimeSaleSwiper';

function PageMain6() {
  return (
    <div className={`PageMain6`}>
      <section data-seq='20230428144746264' className={`relative`}>
        <MainVisualBanner6 />
      </section>
      <section data-seq='20230429070827760' className={`mt-[100px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit3 href={`https://www.google.com`}>SPECIAL OFFER-TIME SALE</MainTit3>
            <div className={`mt-[76px]`}>
              <TimeSaleSwiper />
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230522161255553`} className={`mt-[120px]`}>
        <SearchWrapper />
      </section>
    </div>
  );
}

PageMain6.Layout = LayoutBasic6;
export default PageMain6;
