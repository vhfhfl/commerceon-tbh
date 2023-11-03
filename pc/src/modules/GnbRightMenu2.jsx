import {Fragment, useRef} from 'react';

function GnbRightMenu2(props) {
  const { className = '' } = props;
  const ref_this = useRef();
  return (
    <>
      <div ref={ref_this} {...props} className={`GnbRightMenu2 ${className}`}>
        <ul className={`flex flex-row items-center justify-center gap-[20px]`}>
          {['베스트 리뷰', '이벤트', 'TBH 매거진'].map((obj1, idx1) => {
            return (
              <Fragment key={idx1}>
                <li className={`${obj1=='TBH 매거진' && `max-3xl:hidden`}`}>
                  <a href='https://www.google.com' className={`text-[16px] font-[400] text-[var(--color1)]`}>
                    {obj1}
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

export default GnbRightMenu2;
