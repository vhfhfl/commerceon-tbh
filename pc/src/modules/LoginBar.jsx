import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";

function LoginBar(props) {
  const {className = ""} = props;
  
  const router = useRouter();
  
  return (
    <>
      <div {...props} className={`LoginBar ${className}`} id="LoginBar">
        <div className={'Shell h-[var(--login-bar-height)] bg-white border-b-[1px] border-b-[red]'}>
          
          <div className={`H-Box h-full`}>
            <div className={`Inner`}>
              <div className={`grid grid-cols-[auto,1fr] gap-[0]  items-center justify-center h-full`}>
                <div className={`h-full`}>
                  <button className={`flex flex-row items-center justify-center`}
                          onClick={(evt) => {
                            router.back();
                          }}>
                    <Image src={`/icons/icon_1.svg`} width={24} height={24} alt=""/>
                  </button>
                </div>
                <div className={`h-full`}>
                  <ul className={`h-full flex flex-row items-center justify-end gap-[16px] font-[700] text-[13px] text-black`}>
                    <li className={`h-full`}>
                      <Link href={`/PageLogin`} className={`flex items-center h-full`}>로그인</Link>
                    </li>
                    <li className={`h-full`}>
                      <Link href={`/PageJoin`} className={`flex items-center h-full`}>회원가입</Link>
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