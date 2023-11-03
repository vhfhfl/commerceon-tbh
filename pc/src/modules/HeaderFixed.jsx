import BrandDropDown from '@/modules/BrandDropDown';
import GnbCategory3 from "@/modules/GnbCategory3";
import GnbRightMenu from '@/modules/GnbRightMenu';
import GnbRightMenu2 from '@/modules/GnbRightMenu2';
import HeaderRightUtil from '@/modules/HeaderRightUtil';
import {Util} from '@/scripts/util';
import Image from 'next/image';
import {useEffect, useRef, useState} from 'react';

function HeaderFixed(props) {
  const { className = '' } = props;
  const ref_this = useRef();
  const ref_brand_menu = useRef();

  const [is_hide, setIsHide] = useState(true);

  const callbackScroll = (evt) => {
    const el_html = document.documentElement;
    
    const st = window.pageYOffset || document.documentElement.scrollTop;
    // console.log(st);
    const el_gnb = document.querySelector(`#Gnb`);
    if (!el_gnb) return;
    const rect = el_gnb.getBoundingClientRect();
    const top = rect.top;
    if (top < 0) {
      // setIsHide(false);
      el_html.setAttribute(`data-fixed-gnb`, true);
    } else {
      // setIsHide(true);
      el_html.setAttribute(`data-fixed-gnb`, false);
    }

    const sl = window.pageXOffset || document.documentElement.scrollLeft;
    const el_this = ref_this.current;
    el_this.style.transform = `translateX(-${sl}px)`;
  };

  useEffect(() => {
    // mount
    // console.log('HeaderFixed.jsx mount');

    callbackScroll();

    Util.on(window, 'scroll', callbackScroll);

    return () => {
      // unmount
      // console.log('HeaderFixed.jsx unmount');
      Util.off(window, 'scroll', callbackScroll);
    };
  }, []);

  return (
    <>
      <div
        ref={ref_this}
        {...props}
        className={`hidden [[data-fixed-gnb='true']_&]:block HeaderFixed ${className} h-jull fixed top-[0] left-[0] z-[9999] h-[var(--fixed-header-hei)] w-full min-w-[var(--body-min-width)] bg-white`}>
        <div className={'Shell'}>
          <div className={`H-Box`}>
            <div
              className={`Inner relative flex h-[var(--fixed-header-hei)] flex-row items-center justify-center max-3xl:!mx-[30px]`}>
              <div className={`grid w-full grid-cols-[repeat(2,auto)] items-center justify-between gap-[0]`}>
                <div
                  ref={ref_brand_menu}
                  data-seq='20230517065407380'
                  className={`absolute top-[var(--fixed-header-hei)] left-[0] z-[100] hidden w-[250px] bg-[#333] [&.On]:block`}
                  onMouseLeave={(evt) => {
                    const el_brand_menu = ref_brand_menu.current;
                    el_brand_menu.classList.remove('On');
                  }}>
                  <BrandDropDown theme={`White`} />
                </div>
                <div>
                  {/*LEFT*/}
                  <div className={`flex flex-row items-center justify-center`}>
                    <button
                      className={`DropDownBtn flex flex-row items-center justify-center`}
                      onClick={(evt) => {
                        const el_self = evt.target.closest('button');
                        el_self.classList.toggle('On');

                        const el_brand_menu = ref_brand_menu.current;
                        el_brand_menu.classList.toggle('On');
                      }}>
                      <Image src={`/logos/brand_logo_black.svg`} width={105} height={13} alt='로고' />

                      <div className={`ml-[6px] flex h-[24px] w-[24px] flex-row items-center justify-center`}>
                        <Image className={`[.DropDownBtn.On_&]:rotate-180 duration-300 ease-out will-change-auto`} src={`/icons/zco_18.svg`} width={15} height={9} alt='' />
                      </div>
                    </button>
                    <div className={`ml-[20px]`}>
                      <GnbCategory3 />
                    </div>
                  </div>
                </div>
                <div>
                  {/*RIGHT*/}
                  <div className={`flex flex-row items-center`}>
                    <div>
                      <GnbRightMenu2 />
                    </div>
                    <div className={`mx-[20px]`}>
                      <div className={`h-[18px] w-[1px] bg-[var(--color3)]`}></div>
                    </div>
                    <div>
                      <GnbRightMenu />
                    </div>
                    <div className={`ml-[23px]`}>
                      <HeaderRightUtil />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderFixed;
