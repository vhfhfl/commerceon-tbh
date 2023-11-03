import BrandDropDown from '@/modules/BrandDropDown';
import Image from 'next/image';
import Link from 'next/link';
import {Fragment, useRef} from 'react';

function HeaderLineBanner(props) {
  const { className = '' } = props;

  const ref_this = useRef();
  const ref_brand_menu = useRef();

  return (
    <>
      {/*prettier-ignore*/}
      <style jsx>{`
        .HeaderLineBanner .ItemBar{ }
        .HeaderLineBanner .ItemBar + .ItemBar{ }
        .HeaderLineBanner .ItemBar + .ItemBar:before{ background-color:#474747; width:1px; height:18px; top:50%; transform:translateY(-50%); left:-40px; display:inline-block; content:''; position:absolute; z-index:3; background-position:center; background-repeat:no-repeat; }
      `}</style>
      <div
        ref={ref_this}
        className={`HeaderLineBanner ${className} relative z-10 h-[var(--header-line-banner-hei)] border-b-[1px] border-solid border-b-[var(--color1)] bg-[var(--color1)]`}>
        <div className={`H-Box`}>
          <div className={`Inner relative`}>
            <div className={`absolute top-[0] left-[0] z-10 h-[var(--header-line-banner-hei)]`}>
              <button
                className={`DropDownBtn flex h-full flex-row items-center justify-center`}
                onClick={(evt) => {
                  const el_self = evt.target.closest('button');
                  el_self.classList.toggle('On');
                  
                  const el_brand_menu = ref_brand_menu.current;
                  el_brand_menu.classList.toggle('On');
                }}>
                <Image src={`/logos/brand_logo_white.svg`} width={105} height={13} alt='로고' />

                <div className={`ml-[23px] flex h-[24px] w-[24px] flex-row items-center justify-center`}>
                  <Image className={`[.DropDownBtn.On_&]:rotate-180 duration-300 ease-out will-change-auto`} src={`/icons/zco_1.svg`} width={15} height={9} alt='다크테마 에로우' />
                </div>
              </button>
              <div
                ref={ref_brand_menu}
                data-seq='20230517065407380'
                className={`absolute top-[var(--header-line-banner-hei)] left-1/2 z-[100] hidden w-[max-content] -translate-x-1/2 [&.On]:block`}
                onMouseLeave={(evt) => {
                  const el_brand_menu = ref_brand_menu.current;
                  el_brand_menu.classList.remove('On');
                }}>
                <BrandDropDown />
              </div>
            </div>
            <div className={`flex flex-row items-center justify-center gap-[80px]`}>
              {['🍎', '🍋', '🥑'].map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <div className={`ItemBar relative`}>
                      <Link
                        href={`https://www.google.com`}
                        className={`ItemBar flex h-[var(--header-line-banner-hei)] flex-row items-center justify-center pr-[8px] text-[14px] font-[600] text-[white]`}>
                        <div>신규가입 즉시할인 ({obj})</div>
                        &nbsp;
                        <div className={`text-[var(--color2)]`}>10%쿠폰 증정</div>
                        <Image className={`ml-[16px]`} src={`/icons/zco_8.svg`} width={8} height={13} alt='' />
                      </Link>
                    </div>
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderLineBanner;
