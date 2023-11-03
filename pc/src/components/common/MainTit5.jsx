import Image from 'next/image';
import {useRef} from 'react';

function MainTit5(props) {
  const { children, className = '', href } = props;

  const ref_this = useRef();

  return (
    <>
      <div
        ref={ref_this}
        {...props}
        className={`MainTit5 ${className} Montserrat flex flex-row items-center justify-between text-[36px] font-[500] text-[var(--color1)]`}>
        {children}
        {href && (
          <a href={href} className={`flex flex-row items-center justify-center border-solid border-b-[2px] border-b-[var(--color1)] h-[26px]`}>
            <div className={`font-[600] text-[20px] text-[var(--color1)]`}>MORE</div>
            <Image className={`ml-[14px] w-[13px]`} src={`/icons/zcom_1.svg`} width={11} height={11} priority alt='' />
          </a>
        )}
      </div>
    </>
  );
}

export default MainTit5;
