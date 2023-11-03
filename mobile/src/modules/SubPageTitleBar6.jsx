import { useRouter } from 'next/router';

function SubPageTitleBar6(props) {
  const { children, className = '' } = props;

  const router = useRouter();

  return (
    <>
      <div className={`SubPageTitleBar6 ${className} bg-white`}>
        <div className={`grid h-[var(--sub-page-title-bar-hei)] grid-cols-1 items-end justify-center gap-[0]`}>
          <div className={`relative flex h-[46px] flex-row items-center justify-center`}>
            <div>
              <div id={`SubPageTitleBar6`} className={`text-[16px] font-[500] text-[var(--color1)]`}>
                서브페이지 타이틀
              </div>
            </div>
            <div className={`absolute top-[0] right-[20px] z-10 flex h-full flex-row items-center justify-center`}>
              <a href={`https://www.google.com`} target={`_blank`} className={`h-[40px] w-[40px] text-[0px]`}>
                <img className={`Icon`} src={`/icons/zco_28.svg`} width={40} height={40} alt='' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubPageTitleBar6;
