import LayoutSub from '@/layouts/LayoutSub';
import InfoTable11 from '@/modules/InfoTable11';

function PageMyPage25() {
  return (
    <div className={`PageMyPage25`}>
      <section data-seq={`20230814170030`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`Title-3`}>
              <div className={`Txt1`}>상품문의</div>
            </div>
            <div>
              <InfoTable11 />
            </div>
            <div className={`mt-[40px]`}>
              <button className={`ButtonStyle1 ButtonXl w-full`}>목록으로</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

PageMyPage25.Layout = LayoutSub;
export default PageMyPage25;
