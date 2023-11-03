import {Fragment, useRef, useState} from 'react';

function NowPickBestMenu(props) {
  const { className = '' } = props;
  const ref_this = useRef();

  const [selected_idx, setSelectedIdx] = useState(0);

  return (
    <>
      <div ref={ref_this} {...props} className={`NowPickBestMenu ${className}`}>
        <div className={`text-[var(--color1) text-right text-[28px] font-[600] leading-[34px]`}>
          실시간
          <br />
          급상승 아이템
        </div>
        <div className={`mt-[74px]`}>
          <ul className={`space-y-[10px]`}>
            {['ALL', 'MAN', 'WOMEN'].map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <li className={`${selected_idx == idx && `On`} w-full`}>
                    <button
                      href={`#`}
                      target={`_blank`}
                      className={`Montserrat block flex h-[50px] w-full flex-row items-center justify-end border-b-[1px] border-solid border-b-[var(--color7)] text-[18px] font-[500] leading-[30px] text-[var(--color1)] [li.On_>_&]:border-b-[2px] [li.On_>_&]:border-b-[var(--color1)] [li.On_>_&]:font-[700]`}
                      onClick={(evt) => {
                        setSelectedIdx(idx);
                      }}>
                      {obj}
                    </button>
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

export default NowPickBestMenu;
