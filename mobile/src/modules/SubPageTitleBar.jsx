import Image from 'next/image';
import {useRouter} from 'next/router';

function SubPageTitleBar(props) {
  const { children, className = '' } = props;

  const router = useRouter();

  return (
    <>
      <div className={`SubPageTitleBar ${className} bg-white`}>
        <div className={`grid h-[var(--sub-page-title-bar-hei)] grid-cols-1 items-end justify-center gap-[0]`}>
          <div className={`relative flex h-[46px] flex-row items-center justify-center`}>
            <div className={`absolute top-[0] left-[4px] z-10 flex h-full flex-row items-center justify-center`}>
              <button
                className={`flex h-[40px] w-[40px] flex-row items-center justify-center text-[0px]`}
                onClick={(evt) => {
                  router.back();
                }}>
                <Image src={`/icons/zco_3.svg`} width={17} height={17} alt='' />
              </button>
            </div>
            <div>
              <div id={`SubPageTitleBar`} className={`text-[16px] font-[500] text-[var(--color1)]`}>서브페이지 타이틀</div>
            </div>
            <div className={`absolute top-[0] right-[20px] z-10 flex h-full flex-row items-center justify-center`}>
              <a href={`https://www.google.com`} target={`_blank`} className={`h-[24px] w-[24px] text-[0px]`}>
                {/*<Image src={`/icons/icon_10_2.svg`} width={24} height={24} alt=""/>*/}
                <Image className={`Icon`} src={`/icons/icon_10_2_on.svg`} width={24} height={24} alt='' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubPageTitleBar;
