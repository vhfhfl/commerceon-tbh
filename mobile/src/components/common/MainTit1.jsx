import Image from 'next/image';
import {useRef} from 'react';

function MainTit1(props) {
  const { children, className = '', href } = props;

  const ref_this = useRef();

  return (
    <>
      {/* prettier-ignore */}
      <style jsx global>{`
        /* 전역 선언 */
        .MainTit1{text-align:center;white-space:nowrap;}
        .MainTit1{font-family:'Montserrat';font-weight:700;font-size:16px;letter-spacing:2px;color:var(--color1);}
        .MainTit1{display:flex;align-items:center;justify-content:center;}
      `}</style>
      <div ref={ref_this} {...props} className={`MainTit1 ${className}`}>
        {children}
        {href && (
          <a href={href} className={`ml-[6px]`}>
            <Image
              className={`Icon w-[16px]`}
              src={`/icons/icon_5.svg`}
              width={18}
              height={18}
              priority
              alt='플러스 아이콘'
            />
          </a>
        )}
      </div>
    </>
  );
}

export default MainTit1;
