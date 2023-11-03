import HeaderLogoBar2 from '@/modules/HeaderLogoBar2';
import HeaderLineBanner2 from "@/swipers/HeaderLineBanner2";

function HeaderBasic2() {
  return (
    <>
      <header className={`relative z-[999]`}>
        <div className={'Shell'}>
          <div id={'MobileHeader'}>
            <div className={'Shell'}>
              <HeaderLineBanner2 />
              <HeaderLogoBar2 />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderBasic2;
