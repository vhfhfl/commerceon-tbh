import Image from 'next/image';
import {useRef} from 'react';

function MainTit4(props) {
  const { children, className = '', href } = props;

  const ref_this = useRef();

  return (
    <>
      {/* prettier-ignore */}
      <style jsx global>{`
        /* 전역 선언 */
        .MainTit4{text-align:center;white-space:nowrap;}
        .MainTit4{font-family:'Montserrat';font-weight:700;font-size:16px;color:var(--color1);}
        .MainTit4{display:flex;align-items:center;justify-content:center;}
      `}</style>
      <div ref={ref_this} {...props} className={`MainTit4 ${className}`}>
        <div>{children}</div>
        {href && (
          <a href={href} className={`ml-[14px]`}>
            <Image
              className={`Icon h-[14px] w-[14px]`}
              src={`/icons/zco_4.svg`}
              width={14}
              height={14}
              priority
              alt='플러스 아이콘'
            />
          </a>
        )}
      </div>
    </>
  );
}

export default MainTit4;
