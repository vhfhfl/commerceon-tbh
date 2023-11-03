import Btn from '@/components/form/Btn';
import LayoutSub from '@/layouts/LayoutSub';
import MemberBenefitInfo from '@/modules/MemberBenefitInfo';
import Image from 'next/image';

function PageWelcome() {
  return (
    <div className={`PageWelcome`}>
      <section data-seq={`20230523152130`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`mt-[27px]`}>
              <div className={`text-center text-[22px] font-[600] leading-[30px] text-[var(--color1)]`}>
                TBH SHOP에
                <br />
                오신 것을 환영합니다.
              </div>
              <div className={`mt-[9px]`}>
                <div className={`mx-auto w-[272px]`}>
                  <Image
                    className={`aspect-[272/258] w-full object-cover`}
                    src={`/imgs/mmg_1.png`}
                    width={272}
                    height={258}
                    priority
                    alt=''
                  />
                </div>
                <div>
                  <Btn theme={'Dark'} className={`w-full`}>
                    TBH SHOP 쇼핑하러 가기
                  </Btn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230523101511355`} className={`mt-[56px]`}>
        <div className={`mt-[20px]`}>
          <MemberBenefitInfo />
        </div>
      </section>
    </div>
  );
}

PageWelcome.Layout = LayoutSub;
export default PageWelcome;
