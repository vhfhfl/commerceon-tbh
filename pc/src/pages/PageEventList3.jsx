import LayoutBasic from '@/layouts/LayoutBasic';
import ItemList3 from '@/modules/ItemList3';
import Menu1 from '@/modules/Menu1';

function PageEventList3() {
  return (
    <div className={`PageEventList3`}>
      <div className={`H-Box mt-[100px]`}>
        <div className={`Inner`}>
          <section data-seq={`20230702184340668`}>
            <div className={`Montserrat text-center text-[36px] font-[700] text-[var(--color1)]`}>MAGAZINE</div>
            <div className={`mt-[48px]`}>
              <Menu1 />
            </div>
          </section>
          <section data-seq={`20230702184344967`} className={`mt-[95px]`}>
            <div className={`Montserrat text-[18px] font-[400] text-[var(--color1)]`}>진행중 기획전 (24)</div>
            <div className={`mt-[30px]`}>
              <ItemList3 />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

PageEventList3.Layout = LayoutBasic;
export default PageEventList3;
