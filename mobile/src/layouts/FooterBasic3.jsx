import FloatUtil from '@/components/common/FloatUtil';
import SafeAreaBottom from '@/components/core/SafeAreaBottom';
import ConceptShop from '@/modules/ConceptShop';
import {Data} from "@/scripts/data_manager";
import Image from 'next/image';
import Link from 'next/link';
import {useRef} from 'react';

function FooterBasic3() {
  const ref_shell = useRef();


  return (
    <>
      {/* prettier-ignore */}
      <style jsx global>{`
        /* 전역 선언 */
        footer{ position:relative; z-index:999; }
        #FootMenuBar > .shell{ transform:translateY(0); transition:all 300ms cubic-bezier(0.33, 1, 0.68, 1); will-change:auto; }
        [data-scroll-diretion="down"] #FootMenuBar > .shell{ transform:translateY(var(--foot-menu-bar-shell-height)); }
      `}</style>
      <footer id={'MobileFooter'}>
        <div id={'FootMenuBar'}>
          <div
            ref={ref_shell}
            className={'shell fixed bottom-0 left-0 w-full border-t-[1px] border-t-[var(--color6)] bg-white'}>
            <div
              className={`pointer-events-none absolute bottom-[var(--foot-menu-bar-shell-height)] right-[0] z-10 grid w-full grid-cols-1 justify-items-end gap-[0] [&_*]:pointer-events-auto`}>
              <FloatUtil />
              <ConceptShop />
            </div>
            <div
              className={`grid h-[var(--foot-menu-bar-height)] grid-cols-[repeat(auto-fit,_minmax(0,_1fr))] items-center justify-center gap-[0] bg-white`}>
              {Data.footMenu.map((obj, idx) => {
                return (
                  <Link href={obj.link} key={idx} className={`flex h-full flex-row items-center justify-center`}>
                    <Image className={`inline-block h-[24px] w-[24px]`} src={obj.icon} width={30} height={30} alt='' />
                  </Link>
                );
              })}
            </div>
            <SafeAreaBottom />
          </div>
        </div>
      </footer>
    </>
  );
}

// FooterBasic3.Layout = LayoutEmpty;
export default FooterBasic3;
