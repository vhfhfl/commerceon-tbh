import Image from 'next/image';
import Link from 'next/link';
import {Children, forwardRef, useRef} from 'react';

const FloatUtil = forwardRef(function FloatUtil(props, forwardedRef) {
  const { children, className = '' } = props;
  const children_cnt = Children.count(children);

  const ref_this = useRef();

  return (
    <>
      {/* prettier-ignore */}
      <style jsx global>{`
        /* 전역 선언 */
        .FloatUtil{ --pos-bottom:10px; --pos-right:18px; }
        .FloatUtil{ font-size:0; display:inline-block; }
        //.FloatUtil{ z-index:0; position:absolute; bottom:calc(var(--foot-menu-bar-height) + var(--pos-bottom)); right:var(--pos-right); }
        .FloatUtil .ScrollTopBtn{ transition:height 300ms cubic-bezier(0.215, 0.610, 0.355, 1.000); will-change:auto; }
        .FloatUtil .ScrollTopBtn{ height:30px; overflow:hidden; }
        [data-scroll-top="0"] .FloatUtil .ScrollTopBtn{ height:0px; }
      `}</style>
      <div
        {...props}
        className={`FloatUtil ${className}`}
        ref={(el) => {
          ref_this.current = el;
          if (forwardedRef) forwardedRef.current = el;
        }}>
        <div className={`flex flex-col items-center justify-center gap-[5px]`}>
          <button
            className={`ScrollTopBtn`}
            onClick={(evt) => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
            }}>
            <Image className={`Icon`} src={`/icons/ico_1_1.svg`} width={30} height={30} priority alt='' />
          </button>
          <Link
            href={`https://www.google.com`}
            className={`LiveOnBtn h-[56px] w-[56px] flex flex-row items-center justify-center`}
            target={`_blank`}>
            <Image className={`Icon`} src={`/icons/ico_8_on.svg`} width={52} height={52} priority alt='' />
          </Link>
        </div>
      </div>
    </>
  );
});

export default FloatUtil;
