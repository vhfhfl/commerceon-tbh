import LayoutSub from '@/layouts/LayoutSub';
import FormTable14 from '@/modules/FormTable14';
import { Util } from '@/scripts/util';

function PageMyPage21() {
  return (
    <div className={`PageMyPage21`}>
      <section data-seq={`20230814120611`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`Title-3`}>
              <div className={`Txt1`}>1:1 문의</div>
            </div>
            <div className={`border-t-2 border-solid border-t-[var(--color1)] pt-[15px]`}>
              <div
                className={`SelectBox1 w-full`}
                onClick={(evt) => {
                  const target = evt.target.closest('.SelectBox1');
                  Util.toggleClass(target, 'On');
                }}>
                <button>
                  <div>유형을 선택해주세요.</div>
                </button>
                <div className={`Options`}>
                  <button>유형을 선택해주세요.</button>
                  <button>유형을 선택해주세요.</button>
                  <button>유형을 선택해주세요.</button>
                </div>
              </div>
              <div className={`mt-[9px]`}>
                <button className={`ButtonStyle2 ButtonMd w-full`}>주문 내역 선택</button>
              </div>
              <div className={`mt-[14px]`}>
                <FormTable14 />
              </div>
            </div>
            <div className={`mt-[40px]`}>
              <article className={`grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] items-center justify-center gap-0`}>
                <button className={`ButtonStyle1 ButtonXl`}>목록으로</button>
                <button className={`ButtonStyle2 ButtonXl`}>저장</button>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

PageMyPage21.Layout = LayoutSub;
export default PageMyPage21;
