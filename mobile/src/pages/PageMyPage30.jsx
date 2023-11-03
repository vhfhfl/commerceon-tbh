import LayoutSub from '@/layouts/LayoutSub';
import FormTable19 from '@/modules/FormTable19';

function PageMyPage30() {
  return (
    <div className={`PageMyPage30`}>
      <section data-seq={`20230816165302`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`Title-3`}>
              <div className={`Txt1`}>자주 쓰는 배송지를 최대 30개까지 등록할 수 있습니다.</div>
            </div>
            <div>
              <FormTable19 />
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

PageMyPage30.Layout = LayoutSub;
export default PageMyPage30;
