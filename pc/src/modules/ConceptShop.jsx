import Image from 'next/image';
import {Fragment, useRef} from 'react';

function ConceptShop(props) {
  const { className = '' } = props;
  const ref_this = useRef();
  return (
    <>
      <div ref={ref_this} {...props} className={`ConceptShop On ${className} AccordionWrap`}>
        <div className={`w-full bg-[var(--color7)] py-[18px]`}>
          <div className={`H-Box`}>
            <div className={`Inner relative`}>
              <button
                className={`absolute top-[0] right-[0] z-10`}
                onClick={(evt) => {
                  const el_this = ref_this.current;
                  el_this.classList.remove('On');
                }}>
                <Image src={`/icons/zco_30.svg`} width={23} height={22} alt='' />
              </button>
            </div>
          </div>
          <ul className={`flex flex-row items-center justify-center gap-[40px]`}>
            {Array.from(Array(6)).map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <li>
                    <a href={`#`} target={`_blank`}>
                      <div className={`mx-auto w-[80px] overflow-hidden rounded-full`}>
                        <Image
                          className={`aspect-[80/80] h-full w-full object-cover`}
                          src={`https://picsum.photos/80/80.jpg?random=${idx}`}
                          width={80}
                          height={80}
                          alt=''
                        />
                      </div>
                      <div
                        className={`Montserrat mt-[12px] text-center text-[12px] font-[600] leading-[26px] text-[var(--color1)]`}>
                        SPRING JACKET ({idx + 1})
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
