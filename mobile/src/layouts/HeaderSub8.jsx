import SubPageTitleBar8 from "@/modules/SubPageTitleBar8";

function HeaderSub8() {

  return (
    <>
      <header className={`relative z-[999]`}>
        <div className={'Shell'}>
          <div id={'MobileHeader'} className={`FixedBox`}>
            <div className={'Shell SyncHeight'}>
              <SubPageTitleBar8 />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderSub8;