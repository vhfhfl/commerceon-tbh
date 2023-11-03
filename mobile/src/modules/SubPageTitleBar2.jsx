import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useRef } from 'react';

function SubPageTitleBar2(props) {
  const { children, className = '' } = props;

  const ref_menu = useRef();

  return (
    <>
      <div className={`SubPageTitleBar2 ${className} relative bg-white`}>
        <article className={`grid h-[var(--sub-page-title-bar-hei)] grid-cols-1 items-end justify-center gap-[0]`}>
          <div className={`relative h-[46px] border-b-[1px] border-solid border-b-[var(--color6)]`}>
            <article className={`flex h-full flex-row items-center`}>
              <article className={`flex h-full flex-row items-center justify-center`}>
                <button
                  className={`flex h-[40px] w-[40px] flex-row items-center justify-center text-[0px]`}
                  onClick={(evt) => {
                    router.back();
                  }}>
                  <Image src={`/icons/zco_3.svg`} width={17} height={17} alt='' />
                </button>
              </article>
              <div>
                <article
                  id={`SubPageTitleBar2`}
                  className={`flex flex-row items-center justify-center gap-[0] text-[16px] font-[500] text-[var(--color1)]`}>
                  <div className={`text-[var(--color3)]`}>남성</div>
                  <Image src={`/icons/zco_34_1.svg`} width={24} height={24} alt='' />
                  <div className={`text-[var(--color3)]`}>아우터</div>
                  <Image src={`/icons/zco_34_1.svg`} width={24} height={24} alt='' />
                  <button
                    className={`flex flex-row items-center justify-center gap-[0]`}
                    onClick={(evt) => {
                      const target = evt.target.closest('button');
                      const el_menu = ref_menu.current;
                      target.classList.toggle('On');
                      el_menu.classList.toggle('On');
                    }}>
                    <div>다운/패딩</div>
                    <Image
                      className={`[.On_>_&]:rotate-180`}
                      src={`/icons/zco_34_2.svg`}
                      width={24}
                      height={24}
                      alt=''
                    />
                  </button>
                </article>
              </div>
            </article>
            <article className={`absolute top-[0] right-[20px] z-10 flex h-full flex-row items-center justify-center`}>
              <Link href={`https://www.google.com`} target={`_blank`} className={`RR h-[24px] w-[24px] text-[0px]`}>
                {/*<Image src={`/icons/icon_10_2.svg`} width={24} height={24} alt=""/>*/}
                <Image className={`Icon`} src={`/icons/icon_10_2_on.svg`} width={24} height={24} alt='' />
              </Link>
            </article>
          </div>
        </article>
        <div ref={ref_menu} className={`absolute top-[60px] left-[0] z-10 hidden w-full bg-[white] [&.On]:block`}>
          <article className={`grid grid-cols-3 items-center justify-center gap-[0]`}>
            {Array.from(Array(6)).map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <button className={`h-[48px] border-[1px] border-l-0 border-t-0 border-solid border-[var(--color6)]`}>
                    타이틀 {idx + 1}
                  </button>
                </Fragment>
              );
            })}
          </article>
        </div>
      </div>
    </>
  );
}

export default SubPageTitleBar2;
