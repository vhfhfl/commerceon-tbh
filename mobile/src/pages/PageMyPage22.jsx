import LayoutSub from '@/layouts/LayoutSub';
import InfoTable10 from '@/modules/InfoTable10';
import InquireField3 from '@/modules/InquireField3';

function PageMyPage22() {
  return (
    <div className={`PageMyPage22`}>
      <section data-seq={`20230814122451`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`Title-3`}>
              <div className={`Txt1`}>1:1 문의</div>
            </div>
            <div>
              <InfoTable10 />
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230814133032`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`Title-3`}>
              <div className={`Txt1`}>추가 문의하기</div>
            </div>
            <div className={`border-t-2 border-solid border-t-[var(--color1)] pt-[14px]`}>
              <InquireField3 />
            </div>
            <div className={`mt-[54px]`}>
              <button className={`ButtonStyle1 ButtonMd w-full`}>목록으로</button>
            </div>
            <div className={`mt-[40px]`}>
              <article className={`grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] items-center justify-center gap-0`}>
                <button className={`ButtonStyle1 ButtonXl`}>수정</button>
                <button className={`ButtonStyle2 ButtonXl`}>삭제</button>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

PageMyPage22.Layout = LayoutSub;
export default PageMyPage22;
