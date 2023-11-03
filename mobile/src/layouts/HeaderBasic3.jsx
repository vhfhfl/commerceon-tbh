import Gnb3 from '@/modules/Gnb3';
import HeaderLogoBar3 from '@/modules/HeaderLogoBar3';
import HeaderLineBanner3 from "@/swipers/HeaderLineBanner3";

function HeaderBasic3() {
  return (
    <>
      <header className={`relative z-[999]`}>
        <div className={'Shell'}>
          <div id={'MobileHeader'}>
            <div className={'Shell'}>
              <HeaderLineBanner3 />
              <HeaderLogoBar3 />
              <Gnb3 />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderBasic3;
