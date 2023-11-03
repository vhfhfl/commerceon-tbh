import Image from 'next/image';
import {Fragment} from 'react';

function SnsLogin(props) {
  const { className = '' } = props;

  return (
    <>
      <div className={`SnsLogin ${className}`}>
        <ul className={`flex flex-row items-center justify-center gap-[25px]`}>
          {['페이코', '카카오', '네이버', '애플'].map((obj2, idx2) => {
            return (
              <Fragment key={idx2}>
                <li>
                  <a href={`#`} target={`_blank`}>
                    <Image className={`Icon`} src={`/icons/icon_22_${idx2 + 1}.svg`} width={45} height={45} alt='' />
                  </a>
                </li>
              </Fragment>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default SnsLogin;
