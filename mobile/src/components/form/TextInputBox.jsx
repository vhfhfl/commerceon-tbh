import {Children, useRef} from 'react';

function TextInputBox(props) {
  const { children, className = '' } = props;
  const children_cnt = Children.count(children);

  const ref_this = useRef();
  let slot_left, slot_right, slot_bottom;

  if (children.length > 0) {
    children.forEach((child, idx) => {
      const { slot } = child.props;
      if (slot == 'Left') slot_left = child.props.children;
      if (slot == 'Right') slot_right = child.props.children;
    });
  }

  return (
    <>
      <div ref={ref_this} className={`TextInputBox ${className} pt-[15px]`}>
        <div
          className={`grid h-[34px] grid-cols-[1fr_auto] items-center justify-center border-b-[1px] border-solid border-b-[var(--color6)] [&_>_div]:h-full [&_>_div_>_div]:h-full`}>
          {children.length > 0 ? (
            <>
              {slot_left && <div>{slot_left}</div>}
              {slot_right && (
                <div className={`ml-[5px] flex h-full flex-row items-center justify-center gap-[0]`}>
                  {slot_right}
                </div>
              )}
            </>
          ) : (
            <div>{children}</div>
          )}
        </div>
      </div>
    </>
  );
}

export default TextInputBox;
