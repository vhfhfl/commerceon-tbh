import Gnb4 from "@/modules/Gnb4";
import HeaderLogoBar6 from "@/modules/HeaderLogoBar6";
import HeaderLineBanner2 from "@/swipers/HeaderLineBanner2";

function HeaderBasic6() {
  return (
    <>
      <header className={`relative z-[999]`}>
        <div className={'Shell'}>
          <div id={'MobileHeader'}>
            <div className={'Shell'}>
              <HeaderLineBanner2 />
              <HeaderLogoBar6 />
              <Gnb4 />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderBasic6;
