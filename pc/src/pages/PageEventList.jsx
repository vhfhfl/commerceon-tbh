import LayoutBasic from '@/layouts/LayoutBasic';
import ItemList2 from '@/modules/ItemList2';
import Menu1 from '@/modules/Menu1';

function PageEventList() {
  return (
    <div className={`PageEventList`}>
      <div className={`H-Box mt-[100px]`}>
        <div className={`Inner`}>
          <section data-seq={`20230702184340668`}>
            <div className={`Montserrat text-center text-[36px] font-[700] text-[var(--color1)]`}>EVENT</div>
            <div className={`mt-[48px]`}>
              <Menu1 />
            </div>
            <article className={`mt-[126px] flex flex-row items-center justify-center gap-[12px]`}>
              <button className={`ButtonXl ButtonStyle2 w-[554px]`}>진행중 (14)</button>
              <button className={`ButtonXl ButtonStyle1 w-[554px]`}>종료 (14)</button>
            </article>
            <article className={`mt-[126px] flex flex-row items-center justify-center gap-[12px]`}>
              <button className={`ButtonXl ButtonStyle1 w-[554px]`}>진행중 (14)</button>
              <button className={`ButtonXl ButtonStyle2 w-[554px]`}>종료 (14)</button>
            </article>
          </section>
          <section data-seq={`20230702184344967`} className={`mt-[95px]`}>
            <ItemList2 />
          </section>
        </div>
      </div>
    </div>
  );
}

PageEventList.Layout = LayoutBasic;
export default PageEventList;
