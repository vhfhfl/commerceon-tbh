import Image from 'next/image';
import {useRef} from 'react';

function MainTit1(props) {
  const { children, className = '', href } = props;

  const ref_this = useRef();

  return (
    <>
      <div
        ref={ref_this}
        {...props}
        className={`MainTit1 ${className} Montserrat flex flex-row items-center justify-center text-[36px] font-[700] leading-[122%] tracking-[2px] text-[var(--color1)]`}>
        {children}
        {href && (
          <a href={href} className={`ml-[27px]`}>
            <Image className={`Icon`} src={`/icons/zco_3.svg`} width={30} height={30} priority alt='플러스 아이콘' />
          </a>
        )}
      </div>
    </>
  );
}

export default MainTit1;
