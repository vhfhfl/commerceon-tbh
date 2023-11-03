import HeaderRightUtil2 from '@/modules/HeaderRightUtil2';
import Link from 'next/link';
import { Fragment } from 'react';

function HeaderLogoBar6(props) {
  const { className = '' } = props;

  return (
    <>
      <div {...props} id='HeaderLogoBar6' className={`HeaderLogoBar6 ${className} relative z-0 bg-[var(--color1)]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div
              className={`grid h-[var(--header-logo-bar-hei)] grid-cols-[repeat(2,minmax(0,auto))] items-end justify-between gap-[0]`}>
              <div>
                {/*LEFT*/}
                <button className={`flex h-[30px] flex-row items-center justify-center`}>
                  <img className={`[.ChangeBgWrap.On_&]:hidden`} src={`/logos/brand_logo_white.svg`} alt='로고' />
                  <img className={`hidden [.ChangeBgWrap.On_&]:block`} src={`/logos/brand_logo_black.svg`} alt='로고' />
                </button>
              </div>
              <div>
                {/*RIGHT*/}
                <div className={`flex flex-row items-center justify-center gap-[30px]`}>
                  <ul className={`flex flex-row items-center justify-center gap-[20px]`}>
                    {['로그인', '회원가입', '고객센터'].map((obj, idx) => {
                      return (
                        <Fragment key={idx}>
                          <Link
                            href={`#`}
                            className={`text-[16px] font-[400] text-[white] [.ChangeBgWrap.On_&]:text-[var(--color1)]`}>
                            {obj}
                          </Link>
                        </Fragment>
                      );
                    })}
                  </ul>
                  <div>
                    <HeaderRightUtil2 theme={`Dark`} />
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

export default HeaderLogoBar6;
