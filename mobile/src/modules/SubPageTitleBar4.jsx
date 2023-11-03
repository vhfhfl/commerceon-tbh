import Image from 'next/image';
import {Fragment, useRef} from 'react';

function SubPageTitleBar4(props) {
  const { children, className = '' } = props;

  const ref_menu = useRef();

  return (
    <>
      <div className={`SubPageTitleBar4 ${className} relative bg-white`}>
        <div className={`grid h-[var(--sub-page-title-bar-hei)] grid-cols-1 items-end justify-center gap-[0]`}>
          <div className={`relative h-[46px] border-b-[1px] border-solid border-b-[var(--color6)]`}>
            <div className={`flex h-full flex-row items-center`}>
              <div className={`flex h-full flex-row items-center justify-center`}>
                <button className={`flex h-[40px] w-[40px] flex-row items-center justify-center text-[0px]`}>
                  <Image src={`/icons/zco_3.svg`} width={17} height={17} alt='' />
                </button>
              </div>
              <div>
                <div
                  id={`SubPageTitleBar4`}
                  className={`flex flex-row items-center justify-center gap-[0] text-[16px] font-[500] text-[var(--color1)]`}>
                  <div className={`text-[var(--color1)]`}>PAGE TITLE</div>
                </div>
              </div>
            </div>
            <div className={`absolute top-[0] right-[20px] z-10 flex h-full flex-row items-center justify-center`}>
              <a href={`https://www.google.com`} target={`_blank`} className={`RR h-[24px] w-[24px] text-[0px]`}>
                <img src={`/icons/zco_55.svg`} alt={``}/>
              </a>
            </div>
          </div>
        </div>
        <div ref={ref_menu} className={`absolute top-[60px] left-[0] z-10 hidden w-full bg-[white] [&.On]:block`}>
          <div className={`grid grid-cols-3 items-center justify-center gap-[0]`}>
            {Array.from(Array(6)).map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <button className={`h-[48px] border-[1px] border-l-0 border-t-0 border-solid border-[var(--color6)]`}>
                    다운/패딩
                  </button>
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default SubPageTitleBar4;
