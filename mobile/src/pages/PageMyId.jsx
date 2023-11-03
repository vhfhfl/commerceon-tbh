import LayoutSub2 from '@/layouts/LayoutSub2';

function PageMyId() {
  return (
    <div className={`PageMyId`}>
      <section data-seq={`20230526140603456`} className={`mt-[27px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div
              className={`border-t-[1px] border-b-[1px] border-solid border-t-[var(--color6)] border-b-[var(--color6)] py-[50px] text-center text-[14px] font-[400] text-[var(--color1)]`}>
              고객님의 아이디는 <strong>commerceon</strong> 입니다.
            </div>
            <div
              className={`grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] items-center justify-center gap-[0] text-[12px] font-[400] text-[var(--color5)] `}>
              <a
                href={`https://www.google.com`}
                target={`_blank`}
                className={`flex h-[68px] w-full flex-row items-center justify-center`}>
                로그인
              </a>
              <a
                href={`https://www.google.com`}
                target={`_blank`}
                className={`relative flex h-[68px] w-full flex-row items-center justify-center`}>
                <div
                  className={`absolute top-1/2 left-[0] z-10 h-[14px] w-[1px] -translate-y-1/2 border-l-[1px] border-solid border-l-[var(--color6)]`}></div>
                비밀번호 재설정
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

PageMyId.Layout = LayoutSub2;
export default PageMyId;
