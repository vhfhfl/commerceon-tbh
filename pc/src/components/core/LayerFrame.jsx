import {Children, forwardRef, useRef} from 'react';

const LayerFrame = forwardRef(function LayerFrame(props, forwardedRef) {
  const { children, className = '', id = '', position = 'center' } = props;
  const children_cnt = Children.count(children);

  const ref_this = useRef();

  return (
    <>
      <div
        id={id}
        className={`RR LayerFrame -top-[-200%] -left-[-200%]  ${className} fixed z-[999] h-full w-full [&.On]:top-0 [&.On]:left-0`}
        ref={(el) => {
          ref_this.current = el;
          if (forwardedRef) forwardedRef.current = el;
        }}>
        <div
          className={`absolute top-[0] left-[0] z-0 h-full w-full bg-[rgba(0,0,0,.9)] text-[0px]`}
          >
          BG
        </div>
        <div
          className={`pointer-events-none relative z-10 flex h-full flex-row items-${position} justify-center`}>
          <div className={`relative pointer-events-auto`}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
});

export default LayerFrame;
