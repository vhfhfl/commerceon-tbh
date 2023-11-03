import CheckBox1 from '@/components/form/CheckBox1';
import LayoutBasic from '@/layouts/LayoutBasic';
import FormTable13 from "@/modules/FormTable13";
import MyPageAside2 from '@/modules/MyPageAside2';
import TermsBox from '@/modules/TermsBox';

function PageMyPage18() {
  return (
    <div className={`PageMyPage18`}>
      <div className={`SubContainer mt-[120px]`}>
        <article className={`grid grid-cols-[290px_1fr] gap-[0]`}>
          <div>
            <MyPageAside2 />
          </div>
          <div>
            <section data-seq={`20230710133111456`} className={``}>
              <div className={`Title-1`}>
                <div className={`Txt1`}>1:1문의</div>
                {/*<div className={`Txt2`}>각 항목별로 더 많은 궁금증을 해결하실 수 있습니다.</div>*/}
              </div>
              <div className={`bg-[#f5f5f5] px-[20px] py-[15px] text-[14px] font-[400] leading-[20px] text-[#888]`}>
                상품, 주문, CS등 궁금하신 사항에 대해서 문의하시면 관리자가 순차적으로 답변해 드립니다.
              </div>
              <div className={`mt-[34px]`}>
                <FormTable13 />
              </div>
            </section>
            <section data-seq={`20230710134542015`} className={`mt-[40px]`}>
              <div className={`text-[16px] font-[700] text-[var(--color1)]`}>비회원 개인정보 수집 동의</div>
              <div className={`mt-[19px]`}>
                <TermsBox className={`h-[258px]`} />
              </div>
              <div className={`mt-[14px] flex flex-row items-center gap-[0]`}>
                <CheckBox1>
                  <span className={`text-[var(--color13)]`}>(필수)</span>
                  &nbsp;
                  <span>비회원 개인정보 수집 및 이용동의</span>
                </CheckBox1>
                <a
                  href='https://www.google.com'
                  target='_blank'
                  className={`ml-[9px] inline-flex flex-row items-center justify-center gap-[0] text-[14px] font-[400] text-[var(--color5)]`}>
                  전체보기
                  <img src={`/icons/zco_72.svg`} alt={``} />
                </a>
              </div>
              <hr className={`mt-[30px]`} />
              <article className={`mt-[78px] flex flex-row items-center justify-center gap-[14px]`}>
                <button className={`ButtonXl ButtonStyle1 w-[190px]`}>목록으로</button>
                <button className={`ButtonXl ButtonStyle2 w-[190px]`}>저장</button>
                <button className={`ButtonXl ButtonStyle3 w-[190px]`}>삭제</button>
              </article>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}

PageMyPage18.Layout = LayoutBasic;
export default PageMyPage18;
