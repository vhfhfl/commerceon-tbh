import SubPageTitleBar4 from "@/modules/SubPageTitleBar4";

function HeaderSub4() {

  return (
    <>
      <header className={`relative z-[999]`}>
        <div className={'Shell'}>
          <div id={'MobileHeader'} className={`FixedBox`}>
            <div className={'Shell SyncHeight'}>
              <SubPageTitleBar4 />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderSub4;
