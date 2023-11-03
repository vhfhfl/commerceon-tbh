import SubPageTitleBar6 from '@/modules/SubPageTitleBar6';

function HeaderSub6() {
  return (
    <>
      <header className={`relative z-[999]`}>
        <div className={'Shell'}>
          <div id={'MobileHeader'} className={`FixedBox`}>
            <div className={'Shell SyncHeight'}>
              <SubPageTitleBar6 />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderSub6;
