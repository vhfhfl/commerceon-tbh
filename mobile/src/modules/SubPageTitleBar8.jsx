import Image from 'next/image';
import {Fragment, useRef} from 'react';

function SubPageTitleBar8(props) {
  const { children, className = '' } = props;

  const ref_menu = useRef();

  return (
    <>
      <div className={`SubPageTitleBar8 ${className} bg-white`}>
        <div className={`grid h-[var(--sub-page-title-bar-hei)] grid-cols-1 items-end justify-center gap-0`}>
          <div className={`relative h-[46px] border-b-[1px] border-solid border-b-[var(--color6)]`}>
            <div className={`flex h-full flex-row items-center`}>
              <div className={`flex h-full flex-row items-center justify-center`}>
                <button className={`flex h-[40px] w-[40px] flex-row items-center justify-center text-[0px]`}>
                  <Image src={`/icons/zco_3.svg`} width={17} height={17} alt='' />
                </button>
              </div>
              <div>
                <div
                  id={`SubPageTitleBar8`}
                  className={`flex flex-row items-center justify-center gap-0 text-[16px] font-[500] text-[var(--color1)]`}>
                  <div className={`text-[var(--color1)]`}>PAGE TITLE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubPageTitleBar8;