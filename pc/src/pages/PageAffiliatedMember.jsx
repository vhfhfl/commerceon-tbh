import LayoutBasic from '@/layouts/LayoutBasic';
import FormTable8 from '@/modules/FormTable8';

function PageAffiliatedMember() {
  return (
    <div className={`PageAffiliatedMember`}>
      <section data-seq={`20230619174519159`} className={`mt-[120px]`}>
        <div className={`SubContainer2`}>
          <div className={`text-[28px] font-[600] text-[var(--color1)]`}>제휴회원</div>
          <div className={`Title-2 mt-[30px]`}>
            <div className={`Txt1`}>제휴회원 진행안내</div>
          </div>
          <article
            className={`border-t-[3px] border-b-[1px] border-t-[var(--color1)] border-b-[var(--color6)] py-[20px]`}>
            <div className={`flex h-[148px] flex-row items-center justify-center gap-[0]`}>
              <div
                className={`flex h-full min-w-[235px] grow flex-row items-center justify-center gap-[0] rounded-[25px] bg-[var(--color7)]`}>
                <div className={`text-center text-[18px] font-[600] leading-[24px] text-[var(--color1)]`}>
                  제휴회원
                  <br />
                  신청서 작성
                </div>
              </div>
              <div className={`flex min-w-[56px] flex-row items-center justify-center gap-[0] last:hidden`}>
                <img src={`/icons/zco_71.svg`} alt={``} />
              </div>
              <div
                className={`flex h-full min-w-[235px] grow flex-row items-center justify-center gap-[0] rounded-[25px] bg-[var(--color7)]`}>
                <div className={`w-full text-center text-[18px] font-[600] leading-[24px] text-[var(--color1)]`}>
                  신청서 확인 및 안내
                </div>
              </div>
              <div className={`flex min-w-[56px] flex-row items-center justify-center gap-[0] last:hidden`}>
                <img src={`/icons/zco_71.svg`} alt={``} />
              </div>
              <div
                className={`flex h-full min-w-[235px] grow flex-row items-center justify-center gap-[0] rounded-[25px] bg-[var(--color7)]`}>
                <div className={`text-center text-[18px] font-[600] leading-[24px] text-[var(--color1)]`}>
                  임직원 인중
                </div>
              </div>
              <div className={`flex min-w-[56px] flex-row items-center justify-center gap-[0] last:hidden`}>
                <img src={`/icons/zco_71.svg`} alt={``} />
              </div>
              <div
                className={`flex h-full min-w-[235px] grow flex-row items-center justify-center gap-[0] rounded-[25px] bg-[var(--color7)]`}>
                <div className={`text-center text-[18px] font-[600] leading-[24px] text-[var(--color1)]`}>
                  제휴회원 등록
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
      <section data-seq={`20230619174519159`} className={`mt-[70px]`}>
        <div className={`SubContainer2`}>
          <div className={`Title-2`}>
            <div className={`Txt1`}>신청서 작성</div>
            <div className={`Txt2`}>
              <span className={`text-[var(--color2)]`}>* 필수 입력 항목입니다.</span>
            </div>
          </div>
          <FormTable8 />
        </div>
        <div className={`mt-[90px] flex flex-row items-center justify-center gap-[0]`}>
          <button className={`ButtonXl ButtonStyle2 w-[230px]`}>신청완료</button>
        </div>
      </section>
    </div>
  );
}

PageAffiliatedMember.Layout = LayoutBasic;
export default PageAffiliatedMember;
