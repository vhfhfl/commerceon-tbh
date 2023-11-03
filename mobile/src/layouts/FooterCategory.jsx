import SafeAreaBottom from '@/components/core/SafeAreaBottom';
import Image from 'next/image';
import {Fragment, useRef} from 'react';

function FooterCategory() {
  const ref_shell = useRef();

  return (
    <>
      {/* prettier-ignore */}
      <style jsx global>{`
        /* 전역 선언 */
        //footer{ position:relative; z-index:999; }
        //#FootMenuBar > .shell{ transform:translateY(0); transition:all 300ms cubic-bezier(0.33, 1, 0.68, 1); will-change:auto; }
        //[data-scroll-diretion="down"] #FootMenuBar > .shell{ transform:translateY(var(--foot-menu-bar-height)); }
      `}</style>
      <footer className={`FixedBox`}>
        <div className={'Shell SyncHeight bottom-[0] bg-white'}>
          <div className={`grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] items-center gap-[4px] px-[20px]`}>
            {['주문배송조회', '최근 본 상품', '고객센터', '매장안내'].map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <button
                    className={`h-[var(--category-footer-height)] w-full border-[1px] border-solid border-[var(--color7)] pt-[12px]`}>
                    <div className={`flex flex-row items-center justify-center`}>
                      <Image src={`/icons/zco_15_${idx + 1}.svg`} width={30} height={32} alt='' />
                    </div>
                    <div className={`text-[10px] font-[400] leading-[24px] text-[var(--color1)]`}>{obj}</div>
                  </button>
                </Fragment>
              );
            })}
          </div>
          <SafeAreaBottom />
        </div>
      </footer>
    </>
  );
}

export default FooterCategory;
