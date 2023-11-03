import SubPageTitleBar from '@/modules/SubPageTitleBar';

function HeaderSub() {

  return (
    <>
      <header className={`relative z-[999]`}>
        <div className={'Shell'}>
          <div id={'MobileHeader'} className={`FixedBox`}>
            <div className={'Shell SyncHeight'}>
              <SubPageTitleBar />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderSub;
