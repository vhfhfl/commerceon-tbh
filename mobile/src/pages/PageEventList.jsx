import LayoutSub4 from '@/layouts/LayoutSub4';
import CustomSelect3 from '@/components/form/CustomSelect3';
import { Data } from '@/scripts/data_manager';
import { Util } from '@/scripts/util';
import ProductItem10 from '@/modules/ProductItem10';

function PageEventList() {
  return (
    <div className={`PageEventList`}>
      <section data-seq={`20230725134233`}>
        <CustomSelect3 optionsdata={Data.exhibitionList}></CustomSelect3>
      </section>
      <section data-seq={`20230726134291`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <article className={`TabUi-2`}>
              <button className={`On`}>진행중 (14)</button>
              <button>종료 (14)</button>
            </article>
          </div>
        </div>
      </section>
      <section data-seq={`20230726134603`} className={`mt-[20px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div>
              <ProductItem10 />
            </div>
            <div className={`mt-[82px]`}>
              <button
                className={`Montserrat flex w-full flex-row items-center justify-center gap-[6px] py-[4px] text-[14px] font-[600] text-[var(--color1)]`}
                onClick={(evt) => {
                  const target = evt.target.closest('button');
                  Util.toggleClass(target, 'On');
                }}>
                <div>MORE</div>
                <div>
                  <img
                    className={`Icon duration-300 ease-out will-change-auto [button.On_&]:rotate-180`}
                    src={`/icons/icon_63.svg`}
                    alt={``}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

PageEventList.Layout = LayoutSub4;
export default PageEventList;
