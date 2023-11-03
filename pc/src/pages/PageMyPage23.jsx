import LayoutBasic from '@/layouts/LayoutBasic';
import FormTable18 from '@/modules/FormTable18';
import FormTable19 from '@/modules/FormTable19';
import MyPageAside from '@/modules/MyPageAside';

function PageMyPage23() {
  return (
    <div className={`PageMyPage23`}>
      <div className={`SubContainer mt-[120px]`}>
        <article className={`grid grid-cols-[290px_1fr] gap-[0]`}>
          <div>
            <MyPageAside />
          </div>
          <div>
            <section data-seq={`20230710133111456`}>
              <div className={`Title-1`}>
                <div className={`Txt1`}>상품 문의내역</div>
                {/*<div className={`Txt2`}>각 항목별로 더 많은 궁금증을 해결하실 수 있습니다.</div>*/}
              </div>
              <div>
                <FormTable18 />
              </div>
            </section>
            <section data-seq={`20230710133111456`} className={`mt-[40px]`}>
              <div className={`Title-2 mb-[8px]`}>
                <div className={`Txt1`}>답변 내용</div>
                {/*<div className={`Txt2`}>각 항목별로 더 많은 궁금증을 해결하실 수 있습니다.</div>*/}
              </div>
              <div>
                <FormTable19 />
              </div>
            </section>
            <section data-seq={`20230710134542015`} className={`mt-[40px]`}>
              <article className={`mt-[78px] flex flex-row items-center justify-center gap-[14px]`}>
                <button className={`ButtonXl ButtonStyle1 w-[190px]`}>목록으로</button>
              </article>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}

PageMyPage23.Layout = LayoutBasic;
export default PageMyPage23;
