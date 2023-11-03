import {Children, useRef} from 'react';

function InfoBox1(props) {
  const { children, className = '' } = props;
  const children_cnt = Children.count(children);

  const ref_this = useRef();

  return (
    <>
      <div ref={ref_this} className={`InfoBox1 ${className} pt-[16px]`}>
        <div
          className={`flex h-[55px] flex-row items-center justify-between border-b border-[var(--color6)] text-[18px] font-[500] text-[var(--color5)]`}>
          {children}
        </div>
      </div>
    </>
  );
}

export default InfoBox1;
