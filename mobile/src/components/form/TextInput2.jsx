import {Children, useRef} from 'react';

function TextInput2(props, forwardedRef) {
  const { children, className = '', placeholder } = props;
  const children_cnt = Children.count(children);

  const ref_this = useRef();

  return (
    <>
      <div
        ref={ref_this}
        className={`TextInput2 ${className} h-[30px] border-b-[1px] border-solid border-b-[var(--color6)] text-[12px] font-[400] text-[var(--color1)]`}>
        <div className={`grid h-full grid-cols-[1fr_auto] items-center justify-center gap-[0] [&_>_div]:h-full`}>
          <div>
            <input
              className={`h-full w-full outline-0 placeholder:italic placeholder:text-[var(--color3)]`}
              type={`text`}
              placeholder={placeholder}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default TextInput2;
