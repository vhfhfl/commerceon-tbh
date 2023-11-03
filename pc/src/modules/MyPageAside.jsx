import {Fragment, useRef} from 'react';

function MyPageAside(props) {
  const { className = '' } = props;
  const ref_this = useRef();
  return (
    <>
      <div ref={ref_this} className={`MyPageAside ${className}`}>
        <div className={`text-[24px] font-[700] leading-[32px] text-[var(--color1)]`}>마이페이지</div>
        <div className={`mt-[13px]`}>
          <button className={`Button8-1`}>
            <div className={`mr-[3px] flex flex-row items-center justify-center gap-[0]`}>
              <img src={`/icons/zco_62_1.svg`} alt={``} />
            </div>
            <div className={`text-[10px] font-[400] text-[white]`}>라이브소식 받는중</div>
          </button>
          <button className={`Button8-2`}>
            <div className={`mr-[3px] flex flex-row items-center justify-center gap-[0]`}>
              <img src={`/icons/zco_62_2.svg`} alt={``} />
            </div>
            <div className={`text-[10px] font-[400] text-[#FE3839]`}>라이브 소식받기</div>
          </button>
        </div>
        <div className={`mt-[44px]`}>
          <ul className={`MyPageAsideMenu`}>
            {Array.from(Array(4)).map((obj1, idx1) => {
              return (
                <Fragment key={idx1}>
                  <li>
                    <div className={`D1`}>MENU-{idx1 + 1}</div>
                    <ul>
                      {Array.from(Array(5)).map((obj2, idx2) => {
                        return (
                          <Fragment key={idx2}>
                            <li className={`${idx2 == 0 && `On`}`}>
                              <a href='https://www.google.com' target='_blank'>
                                MENU-{idx1 + 1}-{idx2 + 1}
                              </a>
                            </li>
                          </Fragment>
                        );
                      })}
                    </ul>
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

export default MyPageAside;
