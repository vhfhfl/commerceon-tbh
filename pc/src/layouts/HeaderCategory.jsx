import LoginBar from '@/modules/LoginBar';
import TabuiBar from '@/modules/TabuiBar';
import { Util } from '@/scripts/util';
import { useEffect } from 'react';

function HeaderCategory() {
  return (
    <>
      <header className={`relative z-[100]`}>
        <div className={'Shell'}>
          <div id={'MobileHeader'}>
            <div className={'Shell'}>
              <LoginBar />
              <TabuiBar />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderCategory;
