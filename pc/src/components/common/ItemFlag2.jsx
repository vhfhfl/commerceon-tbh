import {Children, forwardRef, useRef} from 'react';

const ItemFlag2 = forwardRef(function ItemFlag2(props, forwardedRef) {
  const { children, className = '', theme = '1' } = props;
  const children_cnt = Children.count(children);

  const ref_this = useRef();

  return (
    <>
      {/*prettier-ignore*/}
      <style jsx global>{`
        /* 전역 선언 */
        .ItemFlag2{background-color:var(--color5);}
        .ItemFlag2.Theme1{background-color:var(--color1);}
        .ItemFlag2.Theme2{background-color:var(--color8);}
        .ItemFlag2.Theme3{background-color:var(--color9);}
      `}</style>
      <div
        {...props}
        className={`${
          theme && `Theme${theme}`
        } ${className} ItemFlag2 Montserrat flex h-[46px] min-w-[46px] flex-row items-center justify-center px-[5px] text-center text-[16px] font-[600] text-[white]`}
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
