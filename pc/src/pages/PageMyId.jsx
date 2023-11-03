import LayoutBasic from '@/layouts/LayoutBasic';

function PageMyId() {
  return (
    <div className={`PageMyId`}>
      <div className={`SubPageTitle`}>아이디 확인</div>
      <section data-seq={`20230526140603456`} className={`pb-[30vh]`}>
        <div className={`SubPageContBox1`}>
          <div
            className={`border-t-[1px] border-b-[1px] border-solid border-t-[var(--color6)] border-b-[var(--color6)] py-[57px] text-center text-[18px] font-[400] text-[var(--color1)]`}>
            고객님의 아이디는 <strong>commerceon</strong> 입니다.
          </div>
          <div
            className={`mt-[30px] grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] items-center justify-center gap-[0] text-[14px] font-[400] text-[var(--color5)] `}>
            <a href={`https://www.google.com`} target={`_blank`} className={`block w-full text-center`}>
              로그인
            </a>
            <a href={`https://www.google.com`} target={`_blank`} className={`relative block w-full text-center`}>
              <div
                className={`absolute top-[0] left-[0] z-10 h-[14px] w-[1px] border-l-[1px] border-solid border-l-[var(--color6)]`}></div>
              비밀번호 재설정
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

PageMyId.Layout = LayoutBasic;
export default PageMyId;
