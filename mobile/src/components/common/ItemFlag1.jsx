import {Children, forwardRef, useRef} from 'react';

const ItemFlag1 = forwardRef(function ItemFlag1(props, forwardedRef) {
  const { children, className = '', theme = '1' } = props;
  const children_cnt = Children.count(children);

  const ref_this = useRef();

  return (
    <>
      {/* prettier-ignore */}
      <style jsx global>{`
        /* 전역 선언 */
        .ItemFlag1{font-family:'Montserrat', Pretendard, sans-serif;font-style:normal;font-weight:600;font-size:10px;min-width:24px;height:24px;text-align:center;color:white;display:flex;align-items:center;justify-content:center;padding-left:5px;padding-right:5px;}
        .ItemFlag1{background-color:var(--color5);}
        .ItemFlag1.Theme1{background-color:var(--color1);}
        .ItemFlag1.Theme2{background-color:var(--color8);}
        .ItemFlag1.Theme3{background-color:var(--color9);}
      `}</style>
      <div
        {...props}
        className={`ItemFlag1 ${className} ${theme && `Theme${theme}`}`}
        ref={(el) => {
          ref_this.current = el;
          if (forwardedRef) forwardedRef.current = el;
        }}>
        {children}
      </div>
    </>
  );
});

export default ItemFlag1;
