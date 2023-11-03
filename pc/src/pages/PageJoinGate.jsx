import Btn from '@/components/form/Btn';
import LayoutBasic from '@/layouts/LayoutBasic';
import MemberBenefitInfo from '@/modules/MemberBenefitInfo';
import SnsLogin from '@/modules/SnsLogin';

function PageJoinGate() {
  return (
    <div className={`PageJoinGate`}>
      <div className={`SubPageTitle`}>회원가입</div>
      <div className={`mx-auto grid w-[1310px] grid-cols-[repeat(auto-fit,minmax(0,1fr))] gap-[0]`}>
        <div data-title='Left' className={`pr-[85px]`}>
          <div>
            <Btn theme={'Dark'} className={`!h-[100px] w-full`}>
              TBH SHOP 통합 회원가입 하기
            </Btn>
          </div>
          <div className={`mt-[20px]`}>
            <SnsLogin />
          </div>
          <div className={`mt-[20px] text-right text-[14px] font-[400] text-[var(--color5)]`}>
            <span>이미 TBH SHOP 회원이신가요?</span>
            &nbsp;
            <a
              href={`https://www.google.com`}
              target={`_blank`}
              className={`text-[var(--color1)] underline underline-offset-1 ml-[11px]`}>
              로그인 하러가기
            </a>
          </div>
        </div>
        <div data-title='Right' className={`border-l-[1px] border-solid border-l-[var(--color6)] pl-[85px]`}>
          <MemberBenefitInfo />
        </div>
      </div>
    </div>
  );
}

PageJoinGate.Layout = LayoutBasic;
export default PageJoinGate;
