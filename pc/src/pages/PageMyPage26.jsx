import LayoutBasic from '@/layouts/LayoutBasic';
import FormTable20 from '@/modules/FormTable20';
import FormTable21 from '@/modules/FormTable21';
import MyPageAside from '@/modules/MyPageAside';

function PageMyPage26() {
  return (
    <div className={`PageMyPage26`}>
      <div className={`SubContainer mt-[120px]`}>
        <article className={`grid grid-cols-[290px_1fr] gap-[0]`}>
          <div>
            <MyPageAside />
          </div>
          <div>
            <section data-seq={`20230710133111456`}>
              <div className={`Title-1`}>
                <div className={`Txt1`}>회원정보 변경</div>
                {/*<div className={`Txt2`}>각 항목별로 더 많은 궁금증을 해결하실 수 있습니다.</div>*/}
              </div>
              <article className={`mt-[90px] mb-[8px] flex flex-row items-center justify-between gap-[0]`}>
                <div>
                  <div className={`Title-2`}>
                    <div className={`Txt1`}>기본정보</div>
                    {/*<div className={`Txt2`}>홍길동님께서 본 최근 상품입니다</div>*/}
                  </div>
                </div>
                <article className={`flex flex-row items-center gap-[0]`}>
                  <div className={`text-[14px] font-[400] text-[var(--color2)]`}>* 필수 입력 항목입니다.</div>
                </article>
              </article>
              <div>
                <FormTable20 />
              </div>
            </section>
            <section data-seq={`20230710133111456`} className={`mt-[60px]`}>
              <div className={`Title-2 mt-[90px] mb-[8px]`}>
                <div className={`Txt1`}>부가정보</div>
                {/*<div className={`Txt2`}>*/}
                {/*  <span className={`text-[var(--color2)]`}>* 필수 입력 항목입니다.</span>*/}
                {/*</div>*/}
              </div>
              <div>
                <FormTable21 />
              </div>
              <article className={`CenterCenter mt-[90px] !gap-[16px]`}>
                <button className={`ButtonXl ButtonStyle1 w-[230px]`}>취소</button>
                <button className={`ButtonXl ButtonStyle2 w-[230px]`}>수정</button>
              </article>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}

PageMyPage26.Layout = LayoutBasic;
export default PageMyPage26;
