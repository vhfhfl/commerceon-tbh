import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';

function BnenefitsList(props) {
  const { className = '' } = props;

  return (
    <>
      <div className={`BnenefitsList ${className}`}>
        <div className={`Montserrat px-[20px] text-[16px] text-[var(--color1)]`}>
          <ul>
            <li>
              <div className={`py-[20px] font-[700] `}>BENEFITS</div>
            </li>
            {Array.from(Array(5)).map((obj1, idx1) => {
              return (
                <Fragment key={idx1}>
                  <li>
                    <Link href={`https://www.google.com`} target={`_blank`} className={`block py-[12px] font-[500]`}>
                      카카오톡 채널추가 10%쿠폰 ({idx1 + 1})
                    </Link>
                  </li>
                </Fragment>
              );
            })}
            <li>
              <Link
                href={`https://www.google.com`}
                target={`_blank`}
                className={`flex flex-row items-center py-[25px] text-[16px] font-[400] text-[var(--color5)]`}>
                더 많은 이벤트 모아보기
                <Image className={`ml-[16px]`} src={`/icons/zco_20.svg`} width={6} height={10} alt='' />
              </Link>
            </li>
          </ul>
          <ul className={`mt-[10px]`}>
            <li>
              <div className={`py-[20px] font-[700]`}>PROMOTION</div>
            </li>
            {Array.from(Array(5)).map((obj2, idx2) => {
              return (
                <Fragment key={idx2}>
                  <li>
                    <Link href={`https://www.google.com`} target={`_blank`} className={`block py-[12px] font-[500]`}>
                      마인드브릿지 봄신상 46%OFF ({idx2 + 1})
                    </Link>
                  </li>
                </Fragment>
              );
            })}
            <li>
              <Link
                href={`https://www.google.com`}
                target={`_blank`}
                className={`flex flex-row items-center py-[25px] text-[16px] font-[400] text-[var(--color5)]`}>
                더 많은 이벤트 모아보기
                <Image className={`ml-[16px]`} src={`/icons/zco_20.svg`} width={6} height={10} alt='' />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default BnenefitsList;
