import LayoutSub from '@/layouts/LayoutSub';
import InfoTable7 from '@/modules/InfoTable7';

function PageMyPage11() {
  return (
    <div className={`PageMyPage11`}>
      <section data-seq={`20230810163620`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div>
              <div className={`Title-3`}>
                <div className={`Txt1`}>옵션정보</div>
              </div>
              <div className={`border-t-2 border-solid border-t-[var(--color1)]`}>
                <InfoTable7 />
              </div>
              <div className={`mt-[40px]`}>
                <article
                  className={`grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] items-center justify-center gap-0`}>
                  <button className={`ButtonStyle1 ButtonLg`}>장바구니</button>
                  <button className={`ButtonStyle2 ButtonLg`}>바로구매</button>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

PageMyPage11.Layout = LayoutSub;
export default PageMyPage11;
