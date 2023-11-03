import {Layer} from '@/scripts/util';
import {Children, forwardRef, useRef} from 'react';

const LayerFrame = forwardRef(function LayerFrame(props, forwardedRef) {
  const { children, className = '', id = '', position = 'Center' } = props;
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
        {/*<div className={`pointer-events-none relative z-10 flex h-full flex-row items-${position} justify-center`}>*/}
        <div
          className={`${position} pointer-events-none absolute left-1/2 z-10 w-full -translate-x-1/2 [&.Bottom]:bottom-0 [&.Center]:top-1/2 [&.Center]:-translate-y-1/2`}>
          <div
            className={`pointer-events-auto relative max-w-full delay-300 duration-300 ease-out will-change-auto [&_>_*]:mx-auto [&_>_*]:overflow-auto
            ${position == 'end' && `translate-y-full [.LayerFrame.On_&]:translate-y-0`}`}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
});

export default LayerFrame;
