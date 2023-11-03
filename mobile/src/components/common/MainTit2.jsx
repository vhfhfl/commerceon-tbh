import Image from 'next/image';
import {useRef} from 'react';

function MainTit2(props) {
  const { children, className = '', href } = props;

  const ref_this = useRef();

  return (
    <>
      {/* prettier-ignore */}
      <style jsx global>{`
        /* 전역 선언 */
        /* .MainTit2{outline:1px dashed red;} */
        .MainTit2{text-align:left;white-space:nowrap;}
        .MainTit2{font-family:'Montserrat';font-weight:500;font-size:16px;letter-spacing:1px;color:var(--color1);}
        .MainTit2{display:flex;align-items:center;justify-content:flex-start;}
      `}</style>
      <div ref={ref_this} {...props} className={`MainTit2 ${className}`}>
        {children}
        {href && (
          <a href={href} className={`ml-[14px] flex flex-row items-center justify-center`}>
            <span className={`Montserrat text-[10px] font-[400] text-[var(--color1)]`}>VIEW ALL</span>
            <Image
              className={`Icon ml-[4px]`}
              src={`/icons/icon_18.svg`}
              width={24}
              height={24}
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
