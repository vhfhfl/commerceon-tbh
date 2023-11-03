import Btn from '@/components/form/Btn';
import LayoutSub from '@/layouts/LayoutSub';
import MemberBenefitInfo from '@/modules/MemberBenefitInfo';
import SnsLogin from '@/modules/SnsLogin';

function PageJoinGate() {
  return (
    <div className={`PageJoinGate`}>
      <section data-seq={`20230523093041509`} className={`mt-[27px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div>
              <Btn theme={'Dark'} className={`w-full`}>
                TBH SHOP 통합 회원가입 하기
              </Btn>
            </div>
            <div className={`mt-[20px]`}>
              <SnsLogin />
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230523101511355`} className={`mt-[26px]`}>
        <div className={`text-center text-[12px] font-[400] text-[var(--color5)]`}>
          <span>이미 TBH SHOP 회원이신가요?</span>
          &nbsp;
          <a
            href={`https://www.google.com`}
            target={`_blank`}
            className={`ml-[7px] text-[var(--color1)] underline underline-offset-1`}>
            로그인 하러가기
          </a>
        </div>
        <div className={`mt-[20px]`}>
          <MemberBenefitInfo />
        </div>
      </section>
    </div>
  );
}

PageJoinGate.Layout = LayoutSub;
export default PageJoinGate;
