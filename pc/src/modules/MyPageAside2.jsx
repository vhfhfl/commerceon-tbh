import {Fragment, useRef} from 'react';

function MyPageAside2(props) {
  const { className = '' } = props;
  const ref_this = useRef();
  return (
    <>
      <div ref={ref_this} className={`MyPageAside2 ${className}`}>
        <div className={`text-[24px] font-[700] leading-[32px] text-[var(--color1)]`}>MENU</div>
        <div className={`mt-[44px]`}>
          <ul>
            {Array.from(Array(5)).map((obj2, idx2) => {
              return (
                <Fragment key={idx2}>
                  <li>
                    <a
                      href='https://www.google.com'
                      target='_blank'
                      className={`${
                        idx2 == 0 && `On`
                      } flex h-[35px] flex-row items-center gap-[0] text-[18px] font-[500] text-[var(--color5)] [&.On]:text-[var(--color1)] [&.On]:underline [&.On]:underline-offset-4`}>
                      MENU-{idx2 + 1}
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

export default MyPageAside2;
