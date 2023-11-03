import Image from 'next/image';
import {Fragment, useRef} from 'react';

function Paging1(props) {
  const { className = '' } = props;
  const ref_this = useRef();
  return (
    <>
      <div ref={ref_this} className={`Paging1 ${className} flex flex-row items-center justify-center gap-[0]`}>
        <a href={`https://www.google.com`} target={`_blank`}>
          <Image src={`/icons/zco_55_1.svg`} width={19} height={23} alt='' />
        </a>
        <a href={`https://www.google.com`} target={`_blank`}>
          <Image className={`ml-[20px]`} src={`/icons/zco_55_2.svg`} width={12} height={23} alt='' />
        </a>
        <div className={`mx-[30px] flex flex-row items-center justify-center gap-[7px]`}>
          {Array.from(Array(5)).map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <a
                  href={`https://www.google.com`}
                  target={`_blank`}
                  className={`${
                    idx == 0 && `On`
                  } flex aspect-square w-[42px] flex-row items-center justify-center rounded-full border-[1px] border-solid border-[var(--color6)] text-[12px] font-[400] text-[black] [&.On]:bg-black [&.On]:text-white`}>
                  {idx + 1}
                </a>
              </Fragment>
            );
          })}
        </div>
        <a href={`https://www.google.com`} target={`_blank`}>
          <Image className={`rotate-180`} src={`/icons/zco_55_1.svg`} width={19} height={23} alt='' />
        </a>
        <a href={`https://www.google.com`} target={`_blank`}>
          <Image className={`ml-[20px] rotate-180`} src={`/icons/zco_55_2.svg`} width={12} height={23} alt='' />
        </a>
      </div>
    </>
  );
}

export default Paging1;
