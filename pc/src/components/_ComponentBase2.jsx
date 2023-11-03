import {Children, forwardRef, useRef} from 'react';

const ComponentBase = forwardRef(function ComponentBase(props, forwardedRef) {
  const { children, className = '', theme = '1' } = props;
  const children_cnt = Children.count(children);

  const ref_this = useRef();

  return (
    <>
      <div
        className={`ComponentBase ${className} ${theme && `Theme${theme}`}`}
        ref={(el) => {
          ref_this.current = el;
          if (forwardedRef) forwardedRef.current = el;
        }}>
        {children}
      </div>
    </>
  );
});

export default ComponentBase;
