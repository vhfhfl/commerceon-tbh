import SubPageTitleBar2 from "@/modules/SubPageTitleBar2";

function HeaderSub2() {

  return (
    <>
      <header className={`relative z-[999]`}>
        <div className={'Shell'}>
          <div id={'MobileHeader'} className={`FixedBox`}>
            <div className={'Shell SyncHeight'}>
              <SubPageTitleBar2 />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderSub2;
