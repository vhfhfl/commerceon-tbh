import Gnb from '@/modules/Gnb';
import HeaderLogoBar from '@/modules/HeaderLogoBar';
import HeaderLineBanner from '@/swipers/HeaderLineBanner';

function HeaderBasic() {
  return (
    <>
      <header className={`relative z-[999]`}>
        <div className={'Shell'}>
          <div id={'MobileHeader'}>
            <div className={'Shell'}>
              <HeaderLogoBar />
              <Gnb />
              <HeaderLineBanner />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderBasic;
