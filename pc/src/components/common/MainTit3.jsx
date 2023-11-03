import Image from 'next/image';
import {useRef} from 'react';

function MainTit3(props) {
  const { children, className = '', href } = props;

  const ref_this = useRef();

  return (
    <>
      <div
        ref={ref_this}
        {...props}
        className={`MainTit3 ${className} Montserrat flex flex-row items-center justify-start text-[32px] font-[500] tracking-[2px] text-[var(--color1)]`}>
        {children}
        {href && (
          <a href={href} className={`ml-[22px]`}>
            <Image className={`Icon`} src={`/icons/zco_27.svg`} width={28} height={28} priority alt='플러스 아이콘' />
          </a>
        )}
      </div>
    </>
  );
}

export default MainTit3;
