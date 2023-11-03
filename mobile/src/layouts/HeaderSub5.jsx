import SubPageTitleBar5 from "@/modules/SubPageTitleBar5";

function HeaderSub5() {

  return (
    <>
      <header className={`relative z-[999]`}>
        <div className={'Shell'}>
          <div id={'MobileHeader'} className={`FixedBox`}>
            <div className={'Shell SyncHeight'}>
              <SubPageTitleBar5 />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderSub5;
