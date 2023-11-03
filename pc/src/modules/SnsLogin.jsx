import Image from 'next/image';
import {Fragment} from 'react';

function SnsLogin(props) {
  const { className = '' } = props;

  return (
    <>
      <div className={`SnsLogin ${className} grid grid-cols-[repeat(2,1fr)] items-center justify-center gap-[10px]`}>
        {['페이코', '카카오톡', '네이버', '애플'].map((obj, idx) => {
          return (
            <Fragment key={idx}>
              <a
                href={`#`}
                target={`_blank`}
                className={`flex h-[45px] flex-row items-center justify-center rounded-[5px] border border-[var(--color6)] py-[10px] px-[102px]`}>
                <Image src={`/icons/icon_25_${idx + 1}.svg`} width={24} height={24} priority alt='' />
                <span className={`ml-[10px] text-[12px] font-[400] text-[var(--color1)]`}>{obj}</span>
              </a>
            </Fragment>
          );
        })}
      </div>
    </>
  );
}

export default SnsLogin;
