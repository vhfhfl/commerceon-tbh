import SubPageTitleBar from '@/modules/SubPageTitleBar';
import SubPageTitleBar7 from "@/modules/SubPageTitleBar7";

function HeaderSub7() {

  return (
    <>
      <header className={`relative z-[999]`}>
        <div className={'Shell'}>
          <div id={'MobileHeader'} className={`FixedBox`}>
            <div className={'Shell SyncHeight'}>
              <SubPageTitleBar7 />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderSub7;
