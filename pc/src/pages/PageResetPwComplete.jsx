import Btn from '@/components/form/Btn';
import LayoutBasic from '@/layouts/LayoutBasic';

function PageResetPwComplete() {
  return (
    <div className={`PageResetPwComplete`}>
      <div className={`SubPageTitle`}>비밀번호 재설정</div>
      <section data-seq={`20230526140603456`} className={`pb-[30vh]`}>
        <div className={`SubPageContBox1`}>
          <div
            className={`border-t-[1px] border-b-[1px] border-solid border-t-[var(--color6)] border-b-[var(--color6)] py-[57px] text-center text-[18px] font-[400] text-[var(--color1)]`}>
            비밀번호가 정상적으로 변경되었습니다.
          </div>
          <div className={`mt-[30px]`}>
            <Btn theme={`Dark`} className={`w-full`}>
              확인
            </Btn>
          </div>
        </div>
      </section>
    </div>
  );
}

PageResetPwComplete.Layout = LayoutBasic;
export default PageResetPwComplete;
