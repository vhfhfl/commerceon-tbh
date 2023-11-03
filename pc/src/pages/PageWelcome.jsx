import Btn from '@/components/form/Btn';
import LayoutBasic from '@/layouts/LayoutBasic';
import MemberBenefitInfo from '@/modules/MemberBenefitInfo';
import Image from 'next/image';

function PageWelcome() {
  return (
    <div className={`PageWelcome`}>
      <div className={`SubPageTitle`}>TBH SHOP에 오신 것을 환영합니다.</div>
      <div className={`mx-auto grid w-[1310px] grid-cols-[repeat(auto-fit,minmax(0,1fr))] gap-[0]`}>
        <div data-title='Left' className={`pr-[85px]`}>
          <div>
            <div>
              <Image className={`mx-auto`} src={`/imgs/pmg_1.png`} width={426} height={410} alt='' />
            </div>
            <Btn theme={'Dark'} className={`!h-[100px] w-full`}>
              TBH SHOP 쇼핑하러 가기
            </Btn>
          </div>
        </div>
        <div data-title='Right' className={`border-l-[1px] border-solid border-l-[var(--color6)] pl-[85px]`}>
          <MemberBenefitInfo />
        </div>
      </div>
    </div>
  );
}

PageWelcome.Layout = LayoutBasic;
export default PageWelcome;
