import Gnb3 from "@/modules/Gnb3";
import HeaderLogoBar3 from "@/modules/HeaderLogoBar3";
import HeaderLineBanner2 from "@/swipers/HeaderLineBanner2";

function HeaderBasic4() {
  return (
    <>
      <header className={`relative z-[999]`}>
        <div className={'Shell'}>
          <div id={'MobileHeader'}>
            <div className={'Shell'}>
              <HeaderLineBanner2 />
              <HeaderLogoBar3 />
              <Gnb3 />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderBasic4;
