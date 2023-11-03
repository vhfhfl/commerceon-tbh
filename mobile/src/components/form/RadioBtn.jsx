import Image from 'next/image';
import {useRef} from 'react';

function RadioBtn(props) {
  const { children, className = '', name, checked, size } = props;

  let icon_size = 24;
  let font_size = 14;

  if (size == 'Lg') {
    icon_size = 28;
    font_size = 16;
  }

  if (size == 'Sm') {
    icon_size = 18;
    font_size = 12;
  }

  const ref_this = useRef();

  return (
    <>
      <label ref={ref_this} className={`RadioBtn ${className} relative inline-flex flex-row items-center`}>
        <input
          type={`radio`}
          className={`absolute top-[0] left-[0] z-10 h-full w-full cursor-pointer appearance-none`}
          defaultChecked={checked}
          name={'KSM'}
        />
        <Image
          className={`[input:checked_~_&]:hidden`}
          src={`/icons/basic/rdo_1.svg`}
          width={icon_size}
          height={icon_size}
          alt=''
        />
        <Image
          className={`hidden [input:checked_~_&]:block`}
          src={`/icons/basic/rdo_1_On.svg`}
          width={icon_size}
          height={icon_size}
          alt=''
        />
        {children && <div className={`ml-[7px] text-[${font_size}px] font-[400] text-[var(--color1)]`}>{children}</div>}
      </label>
    </>
  );
}

export default RadioBtn;
