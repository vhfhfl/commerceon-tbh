import Gnb3 from "@/modules/Gnb3";
import HeaderFixed from '@/modules/HeaderFixed';
import HeaderLineBanner2 from "@/modules/HeaderLineBanner2";
import HeaderLogoBar6 from "@/modules/HeaderLogoBar6";
import SearchWrap from "@/modules/SearchWrap";
import SubMenuWrap from '@/modules/SubMenuWrap';
import SubMenuWrap2 from '@/modules/SubMenuWrap2';

function HeaderBasic6() {
  return (
    <>
      <header className={`relative z-[100]`}>
        <div className={'Shell'}>
          <div id={'MobileHeader'}>
            <div className={'Shell'}>
              <HeaderLineBanner2 />
              <HeaderLogoBar6 />
              <Gnb3 />
              <SearchWrap />
              <HeaderFixed />
              <SubMenuWrap />
              <SubMenuWrap2 />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderBasic6;
