import Btn from '@/components/form/Btn';
import LayoutSub2 from '@/layouts/LayoutSub2';

function PageResetPwComplete() {
  return (
    <div className={`PageResetPwComplete`}>
      <section data-seq={`20230526140603456`} className={`mt-[27px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div
              className={`border-t-[1px] border-b-[1px] border-solid border-t-[var(--color6)] border-b-[var(--color6)] py-[50px] text-center text-[14px] font-[400] text-[var(--color1)]`}>
              비밀번호가 정상적으로 변경되었습니다.
            </div>
            <div className={`mt-[30px]`}>
              <Btn theme={`Dark`} className={`w-full`}>
                확인
              </Btn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

PageResetPwComplete.Layout = LayoutSub2;
export default PageResetPwComplete;
