import Gnb2 from '@/modules/Gnb2';
import HeaderFixed from '@/modules/HeaderFixed';
import HeaderLineBanner2 from "@/modules/HeaderLineBanner2";
import HeaderLogoBar2 from '@/modules/HeaderLogoBar2';
import SearchWrap from '@/modules/SearchWrap';
import SubMenuWrap from '@/modules/SubMenuWrap';
import SubMenuWrap2 from '@/modules/SubMenuWrap2';

function HeaderBasic2() {
  return (
    <>
      <header className={`relative z-[100]`}>
        <div className={'Shell'}>
          <div
            id={'MobileHeader'}
            className={`ChangeBgWrap duration-300 ease-out will-change-auto [&.On]:bg-white`}
            onMouseEnter={(evt) => {
              const target = evt.target.closest('.ChangeBgWrap');
              target.classList.add('On');
            }}
            onMouseLeave={(evt) => {
              const target = evt.target.closest('.ChangeBgWrap');
              target.classList.remove('On');
            }}>
            <div className={'Shell'}>
              <HeaderLineBanner2 />
              <HeaderLogoBar2 />
              <Gnb2 />
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

export default HeaderBasic2;
