import Image from 'next/image';
import {Fragment, useRef} from 'react';

function ConceptShop(props) {
  const { className = '' } = props;

  const ref_this = useRef();

  return (
    <>
      {/* prettier-ignore */}
      <style jsx global>{`
        /* 전역 선언 */
        //[data-scroll-top] .ConceptShop{ height:0; overflow:hidden; }
        //[data-scroll-top="0"] .ConceptShop{ height:auto; }
        #ConceptShop{ transition:all 500ms cubic-bezier(0.33, 1, 0.68, 1); will-change:auto; }
        #ConceptShop{ max-height:200px; overflow:hidden; }
        #ConceptShop.Off{ max-height:0; }
        [data-scroll-diretion="down"] #ConceptShop{ max-height:0; }
      `}</style>
      <div
        ref={ref_this}
        id={`ConceptShop`}
        {...props}
        className={`ConceptShop ${className} w-full bg-[var(--color7)]`}>
        <div className={`pt-[4px] pb-[16px]`}>
          <button
            className={`RR flex w-full flex-row items-center justify-center`}
            onClick={(evt) => {
              // const target = evt.target.closest('button');
              // console.log(target);
              const el_this = ref_this.current;
              el_this.classList.add('Off');
            }}>
            <Image src={`/icons/zco_2.svg`} width={38} height={24} alt='' />
          </button>
          <ul
            className={`RR HideScroll text-center mt-[6px] inline-block w-full space-x-[8px] overflow-x-auto whitespace-nowrap px-[25px] text-[0px]`}>
            {Array.from(Array(10)).map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <li className={`inline-block`}>
                    <a href='#' className={`RR block`}>
                      <Image
                        className={`w-[54px] overflow-hidden rounded-full object-cover`}
                        src={`https://picsum.photos/108/108.jpg?random=${idx}`}
                        width={108}
                        height={108}
                        alt=''
                      />
                      <div className={`Montserrat mt-[8px] text-center text-[10px] font-[600] text-[var(--color1)]`}>
                        MAB
                        <br />
                        PROJECT
                      </div>
                    </a>
                  </li>
                </Fragment>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ConceptShop;
