import LayoutSub4 from '@/layouts/LayoutSub4';
import CustomSelect3 from '@/components/form/CustomSelect3';
import { Data } from '@/scripts/data_manager';
import { Util } from '@/scripts/util';
import ProductItem12 from '@/modules/ProductItem12';

function PageEventList3() {
  return (
    <div className={`PageEventList3`}>
      <section data-seq={`20230727103540`}>
        <CustomSelect3 optionsdata={Data.exhibitionList}></CustomSelect3>
      </section>
      <section data-seq={`20230727103544`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`Montserrat text-[14px] font-[400] text-[var(--color1)]`}>진행중 기획전 (24)</div>
          </div>
        </div>
      </section>
      <section data-seq={`20230727103548`} className={`mt-[20px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div>
              <ProductItem12 />
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

PageEventList3.Layout = LayoutSub4;
export default PageEventList3;
