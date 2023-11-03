import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';

function LoginBar(props) {
  const { className = '' } = props;

  const router = useRouter();

  return (
    <>
      <div {...props} className={`LoginBar ${className}`} id='LoginBar'>
        <div className={'Shell bg-white'}>
          <div className={`H-Box`}>
            <div className={`Inner`}>
              <div
                className={`grid h-full grid-cols-[auto,1fr] items-center justify-center gap-[0] pt-[calc(14px+3px)] pb-[3px]`}>
                <div className={`h-full`}>
                  <button
                    className={`flex h-[40px] w-[40px] flex-row items-center justify-center`}
                    onClick={(evt) => {
                      router.back();
                    }}>
                    <Image src={`/icons/zco_16.svg`} width={18} height={17} alt='' />
                  </button>
                </div>
                <div className={`h-full`}>
                  <ul
                    className={`flex h-full flex-row items-center justify-end gap-[22px] text-[12px] font-[400] text-[var(--color1)]`}>
                    <li className={`h-full`}>
                      <Link href={`/PageLogin`} className={`flex h-full items-center`}>
                        로그인
                      </Link>
                    </li>
                    <li className={`h-full`}>
                      <Link href={`/PageLogin`} className={`flex h-full items-center`}>
                        로그아웃
                      </Link>
                    </li>
                    <li className={`h-full`}>
                      <Link href={`/PageJoin`} className={`flex h-full items-center`}>
                        회원가입
                      </Link>
                    </li>
                    <li className={`h-full`}>
                      <Link href={`/PageLogin`} className={`flex h-full items-center`}>
                        설정
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginBar;
