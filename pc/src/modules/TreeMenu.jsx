import Image from 'next/image';
import { Fragment, useRef } from 'react';

function TreeMenu(props) {
  const { children, className = '', theme = '1', data } = props;

  const ref_this = useRef();

  const ref_1D_list = useRef([]);

  return (
    <>
      {/*prettier-ignore*/}
      <style jsx global>{`
        /* 전역 선언 */
        .TreeMenu{ --side-padding:36px; }
        .TreeMenu > ul{ }
        .TreeMenu > ul > li{ }
        .TreeMenu > ul > li > .Label{ cursor:pointer; padding:12px var(--side-padding); }
        .TreeMenu > ul > li > .Label{ font-weight:600; font-size:20px; color:black; line-height:120%; }
        .TreeMenu > ul > li > .Label{ display:grid; grid-template-columns:1fr auto; gap:0; }
        .TreeMenu > ul > li > .Label .ArrowIcon{ transition:all 300ms cubic-bezier(0.215, 0.610, 0.355, 1.000); }
        .TreeMenu > ul > li.On > .Label .ArrowIcon{ transform:rotate(180deg); }
        .TreeMenu > ul > li > .List{ max-height:0; overflow:hidden; }
        .TreeMenu > ul > li > .List{ transition:all 150ms ease-out; }
        .TreeMenu > ul > li.On > .List{ max-height:100vh; transition:all 250ms ease-in; }
        .TreeMenu > ul > li > .List > ul{ background-color:#f9f9f9; padding:26px var(--side-padding); }
        .TreeMenu > ul > li > .List > ul{ display:grid; grid-template-columns:repeat(2, minmax(0, 1fr)); gap:16px; }
        .TreeMenu > ul > li > .List > ul > li{ }
        .TreeMenu > ul > li > .List > ul > li > .Label{ display:flex; align-items:center; min-height:26px; }
        .TreeMenu > ul > li > .List > ul > li > .Label > .Arrow{ margin-left:8px; transform:rotate(-90deg); }
      `}</style>
      <div ref={ref_this} {...props} className={`TreeMenu ${className} ${theme && `Theme-${theme}`}`}>
        <ul>
          {data.map((obj_1, idx_1) => {
            const { name, link, children } = obj_1;

            return (
              <Fragment key={idx_1}>
                <li
                  ref={(item) => {
                    ref_1D_list.current[idx_1] = item;
                  }}>
                  <div
                    className={`Label`}
                    onClick={(evt) => {
                      // 1뎁스 접기 / 펴기
                      ref_1D_list.current.forEach((el_list, idx) => {
                        if (idx == idx_1) {
                          el_list.classList.toggle('On');
                        } else {
                          el_list.classList.remove('On');
                        }
                      });
                    }}>
                    <div className={`Label`}>{name}</div>
                    <div>
                      <div className={`flex aspect-square h-full flex-row items-center justify-center`}>
                        <Image className={`ArrowIcon h-full`} src={`/icons/zco_18.svg`} width={15} height={9} alt='' />
                      </div>
                    </div>
                  </div>
                  {children && children.length > 0 && (
                    <div className={`List`}>
                      <ul>
                        {children.map((obj_2, idx_2) => {
                          const { name } = obj_2;

                          return (
                            <Fragment key={idx_2}>
                              <li>
                                <div className={`Label`}>
                                  {name}
                                  <Image className={`Arrow`} src={`/icons/zco_18.svg`} width={15} height={9} alt='' />
                                </div>
                              </li>
                            </Fragment>
                          );
                        })}
                      </ul>
                    </div>
                  )}
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
