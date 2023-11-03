import Image from 'next/image';
import Link from 'next/link';
import {Children, Fragment, useRef} from 'react';

function TreeMenu(props) {
  const { children, className = '' } = props;
  const children_cnt = Children.count(children);

  const ref_this = useRef();

  return (
    <>
      <div ref={ref_this} className={`TreeMenu ${className} p-[20px]`}>
        <ul className={`Depth1`}>
          {Array.from(Array(3)).map((obj1, idx1) => {
            return (
              <Fragment key={idx1}>
                <li>
                  <button
                    className={`flex h-[54px] w-full flex-row items-center justify-between`}
                    onClick={(evt) => {
                      const el_btn = evt.target.closest('button');
                      const el_li = el_btn.closest('li');
                      const el_aw = el_btn.nextElementSibling;

                      const other_depth1_lis = el_btn.closest('.Depth1').querySelectorAll(`:scope > li`);
                      if (other_depth1_lis) {
                        other_depth1_lis.forEach((el, idx) => {
                          el.classList.remove('On');

                          const other_aw = el.querySelector(`:scope > .AccordionWrap`);
                          if (other_aw && el_aw != other_aw) other_aw.classList.remove('On');
                        });
                      }
                      
                      el_li.classList.toggle('On');
                      if (el_aw) el_aw.classList.toggle('On');
                    }}>
                    <div
                      className={`Montserrat relative text-[16px] font-[500] text-[var(--color1)] [&.Bold]:font-[700]
                      ${idx1 == 0 && `Bold`}
                      `}>
                      <div>CATEGORY ({idx1 + 1})</div>
                      {idx1 == 0 && (
                        <div
                          className={`absolute top-[-2px] right-[-4px] z-10 h-[4px] w-[4px] rounded-full bg-[var(--color13)]`}></div>
                      )}
                    </div>
                    <Image
                      className={`duration-300 ease-out will-change-auto [li.On_>_button_>_&]:rotate-180`}
                      src={`/icons/zco_17.svg`}
                      width={24}
                      height={24}
                      alt=''
                    />
                  </button>
                  <div className={`AccordionWrap mx-[-20px]`}>
                    <ul className={`grid grid-cols-2 items-center justify-center bg-[var(--color7)] py-[20px]`}>
                      {Array.from(Array(3)).map((obj2, idx2) => {
                        return (
                          <Fragment key={idx2}>
                            <li>
                              <button className={`flex h-[36px] w-full flex-row items-center justify-start pl-[20px]`}>
                                2DEPTH ({idx2 + 1})
                                <div
                                  className={`ml-[10px] flex h-[20px] w-[20px] flex-row items-center justify-center`}>
                                  <Image src={`/icons/zco_19.svg`} width={6} height={10} alt='' />
                                </div>
                              </button>
                            </li>
                          </Fragment>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              </Fragment>
            );
          })}
          {['1+1 more', '+Set', 'N+Sale', 'Big size'].map((obj1_1, idx1_1) => {
            return (
              <Fragment key={idx1_1}>
                <li>
                  <Link
                    href={`https://www.google.com`}
                    target={`_blank`}
                    className={`flex h-[54px] w-full flex-row items-center justify-between`}>
                    <div className={`Montserrat text-[16px] font-[500] text-[var(--color1)]`}>LINK ({idx1_1 + 1})</div>
                    <Image src={`/icons/zco_18.svg`} width={24} height={24} alt='' />
                  </Link>
                </li>
              </Fragment>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default TreeMenu;
