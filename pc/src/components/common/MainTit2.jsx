import Image from 'next/image';
import {useRef} from 'react';

function MainTit2(props) {
  const { children, className = '', href } = props;

  const ref_this = useRef();

  return (
    <>
      <div
        ref={ref_this}
        {...props}
        className={`MainTit2 ${className} Montserrat text-[36px] font-[500] tracking-[2px] text-[var(--color1)] flex flex-row items-center justify-start`}>
        {children}
        {href && (
          <a href={href} className={`ml-[14px] flex flex-row items-center justify-center`}>
            <Image
              className={`Icon ml-[4px]`}
              src={`/icons/zco_6.svg`}
              width={130}
              height={16}
              priority
              alt='VIEW ALL'
            />
          </a>
        )}
      </div>
    </>
  );
}

export default MainTit2;
