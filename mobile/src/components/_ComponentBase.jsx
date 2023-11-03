import {Children, useRef} from 'react';

function ComponentBase(props) {
  const { children, className = '' } = props;
  const children_cnt = Children.count(children);

  const ref_this = useRef();

  return (
    <>
      <div ref={ref_this} className={`ComponentBase ${className}`}>
        {children}
      </div>
    </>
  );
}

export default ComponentBase;
