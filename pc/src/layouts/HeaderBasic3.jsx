import Gnb from '@/modules/Gnb';
import HeaderFixed from '@/modules/HeaderFixed';
import HeaderLineBanner2 from "@/modules/HeaderLineBanner2";
import HeaderLogoBar from '@/modules/HeaderLogoBar';
import SearchWrap from "@/modules/SearchWrap";
import SubMenuWrap from '@/modules/SubMenuWrap';
import SubMenuWrap2 from '@/modules/SubMenuWrap2';

function HeaderBasic3() {
  return (
    <>
      <header className={`relative z-[100]`}>
        <div className={'Shell'}>
          <div id={'MobileHeader'}>
            <div className={'Shell'}>
              <HeaderLineBanner2 />
              <HeaderLogoBar />
              <Gnb />
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

export default HeaderBasic3;
