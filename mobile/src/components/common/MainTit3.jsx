import Image from 'next/image';
import {useRef} from 'react';

function MainTit3(props) {
  const { children, className = '', href } = props;

  const ref_this = useRef();

  return (
    <>
      {/* prettier-ignore */}
      <style jsx global>{`
        /* 전역 선언 */
        .MainTit3{text-align:center;white-space:nowrap;}
        .MainTit3{font-family:'Montserrat';font-weight:500;font-size:16px;letter-spacing:2px;color:var(--color1);}
        .MainTit3{display:flex;align-items:center;justify-content:start;}
      `}</style>
      <div ref={ref_this} {...props} className={`MainTit3 ${className}`}>
        {children}
        {href && (
          <a href={href} className={`ml-[14px]`}>
            <Image
              className={`Icon w-[14px]`}
              src={`/icons/zco_1.svg`}
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

export default MainTit3;
