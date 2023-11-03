import MainTit3 from '@/components/common/MainTit3';
import LayoutBasic6 from '@/layouts/LayoutBasic6';
import ProductList4 from '@/modules/ProductList4';
import TimeSale from '@/modules/TimeSale';
import Banner1 from '@/swipers/Banner1';
import MainVisualBanner4 from '@/swipers/MainVisualBanner4';

function PageMain6() {
  return (
    <div className={`PageMain6`}>
      <section data-seq={`20230428144746264`}>
        <div className={`H-Box`}>
          <div className={`Inner NoMargin`}>
            <MainVisualBanner4 />
          </div>
        </div>
      </section>
      <section data-seq={`20230429070827760`} className={`mt-[50px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <MainTit3 href={`https://www.google.com`}>SPECIAL OFFER-TIME SALE</MainTit3>
            <TimeSale className={`mt-[40px]`} />
          </div>
        </div>
      </section>
      <section data-seq={`20230522141029206`} className={`mt-[50px]`}>
        <ProductList4 />
      </section>
      <section data-seq={`20230429201917266`} className={`mt-[60px]`}>
        <Banner1 />
      </section>
    </div>
  );
}

PageMain6.Layout = LayoutBasic6;
export default PageMain6;
