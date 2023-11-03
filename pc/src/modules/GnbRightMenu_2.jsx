import {Fragment, useRef} from 'react';

function GnbRightMenu_2(props) {
  const { className = '' } = props;
  const ref_this = useRef();
  return (
    <>
      <div ref={ref_this} {...props} className={`GnbRightMenu_2 ${className}`}>
        <ul className={`flex flex-row items-center justify-center gap-[20px]`}>
          {['1+1 more', '+Set', 'N+Sale', 'Big size'].map((obj2, idx2) => {
            return (
              <Fragment key={idx2}>
                <li>
                  <a href='#' className={`text-[16px] font-[500] italic text-white [.ChangeBgWrap.On_&]:text-[var(--color1)]`}>
                    {obj2}
                  </a>
                </li>
              </Fragment>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default GnbRightMenu_2;
