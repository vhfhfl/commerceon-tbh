import Image from 'next/image';
import {useRouter} from 'next/router';

function SubPageTitleBar7(props) {
  const {children, className = ''} = props;
  
  const router = useRouter();
  
  return (
    <>
      <div className={`SubPageTitleBar7 ${className} bg-white`}>
        <div className={`grid h-[var(--sub-page-title-bar-hei)] grid-cols-1 items-end justify-center gap-[0]`}>
          <article className={`CenterBetween h-[46px] pl-[9px] pr-[20px]`}>
            <div>
              <article className={`CenterLeft `}>
                <button className={`RR flex h-[40px] w-[40px] flex-row items-center justify-center text-[0px]`}>
                  <img src="/icons/zco_3.svg" alt=""/>
                </button>
                <div id={`SubPageTitleBar7`} className={`RR ml-[4px] text-[16px] font-[500] text-[var(--color1)]`}>TITLE</div>
              </article>
            </div>
            <div>
              <article className={`RRR CenterRight !gap-[6px]`}>
                <button>
                  <img src="/icons/2308101705.svg" alt=""/>
                </button>
                <button>
                  <img src="/icons/icon_10_2_on.svg" alt=""/>
                </button>
                <button>
                  <img src="/icons/2308101506.svg" alt=""/>
                </button>
              </article>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default SubPageTitleBar7;
