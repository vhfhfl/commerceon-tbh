import {Children, forwardRef, useRef} from 'react';

const ItemFlag2 = forwardRef(function ItemFlag2(props, forwardedRef) {
  const { children, className = '', theme = '1' } = props;
  const children_cnt = Children.count(children);

  const ref_this = useRef();

  return (
    <>
      {/* prettier-ignore */}
      <style jsx global>{`
        /* 전역 선언 */
        .ItemFlag2{font-family:'Montserrat', Pretendard, sans-serif;font-style:normal;font-weight:600;font-size:16px;min-width:46px;height:46px;text-align:center;color:white;display:flex;align-items:center;justify-content:center;padding-left:5px;padding-right:5px;}
        .ItemFlag2{background-color:var(--color5);}
        .ItemFlag2.Theme1{background-color:var(--color1);}
        .ItemFlag2.Theme2{background-color:var(--color8);}
        .ItemFlag2.Theme3{background-color:var(--color9);}
      `}</style>
      <div
        {...props}
        className={`ItemFlag2 ${className} ${theme && `Theme${theme}`}`}
        ref={(el) => {
          ref_this.current = el;
          if (forwardedRef) forwardedRef.current = el;
        }}>
        {children}
      </div>
    </>
  );
});

export default ItemFlag2;
