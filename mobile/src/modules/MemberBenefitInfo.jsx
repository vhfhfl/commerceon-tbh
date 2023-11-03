import Image from 'next/image';
import {Fragment} from 'react';

function MemberBenefitInfo(props) {
  const { className = '' } = props;

  const benefit_data = [
    {
      icon: '/icons/icon_20_1.svg',
      title: '신규회원 가입',
      desc: '첫 방문을 환영합니다!<br/>10% 추가 할인 쿠폰 증정',
    },
  ];

  return (
    <>
      <div className={`MemberBenefitInfo ${className}`}>
        <div className={`border-t border-[var(--color6)] px-[20px] pt-[22px]`}>
          <div data-seq={`20230523101810564`}>
            <div className={`text-[18px] font-[400] leading-[24px] text-[var(--color1)]`}>
              TBH SHOP의 회원을 위한
              <br />
              특별한 혜택이 기다리고 있습니다.
            </div>
            <div className={`mt-[16px] text-right`}>
              <a href={`https://www.google.com`} target={`_blank`} className={`inline-flex flex-row items-center justify-end`}>
                <span className={`text-[12px] font-[400] text-[var(--color5)]`}>회원혜택 자세히 보기</span>
                <Image className={`Icon ml-[9px]`} src={`/icons/icon_19.svg`} width={6} height={10} alt='' />
              </a>
            </div>
          </div>
          <div className={`mt-[8px]`}>
            {benefit_data.map((obj, idx) => {
              const { icon, title, desc } = obj;

              return (
                <Fragment key={idx}>
                  <div
                    className={`grid grid-cols-[auto_1fr] items-center justify-start gap-[24px] border border-[var(--color6)] py-[15px] pl-[19px]`}>
                    <div className={`w-[48px]`}>
                      <Image src={icon} width={48} height={48} alt='' />
                    </div>
                    <div>
                      <div className={`text-[12px] font-[600] text-[var(--color1)]`}>{title}</div>
                      <div
                        className={`mt-[11px] text-[12px] font-[400] leading-[16px] text-[var(--color1)]`}
                        dangerouslySetInnerHTML={{ __html: desc }}></div>
                    </div>
                  </div>
                </Fragment>
              );
            })}
            <div
              className={`grid grid-cols-[auto_1fr] items-center justify-start gap-[24px] border border-t-0 border-[var(--color6)] py-[15px] pl-[19px]`}>
              <div className={`w-[48px]`}>
                <Image className={`Icon`} src={`/icons/icon_20_2.svg`} width={48} height={48} alt='' />
              </div>
              <div>
                <div className={`text-[12px] font-[600] text-[var(--color1)]`}>등급별 멤버십 혜택</div>
                <div className={`mt-[11px] text-[12px] font-[400] leading-[16px] text-[var(--color1)]`}>
                  등급별 최대 4% 추가 할인이 가능합니다.
                  <br />
                  &#40;멤버십 STAR등급 기준&#41;
                </div>
              </div>
            </div>
            <div
              className={`grid grid-cols-[auto_1fr] items-center justify-start gap-[24px] border border-t-0 border-[var(--color6)] py-[15px] pl-[19px]`}>
              <div className={`w-[48px]`}>
                <Image className={`Icon`} src={`/icons/icon_20_3.svg`} width={48} height={48} alt='' />
              </div>
              <div>
                <div className={`text-[12px] font-[600] text-[var(--color1)]`}>생일축하 쿠폰</div>
                <div className={`mt-[11px] text-[12px] font-[400] leading-[16px] text-[var(--color1)]`}>
                  HAPPY BIRTHDAY!
                  <br />
                  생일축하 10,000원 쿠폰 매년 증정!
                </div>
              </div>
            </div>
            <div
              className={`grid grid-cols-[auto_1fr] items-center justify-start gap-[24px] border border-t-0 border-[var(--color6)] py-[15px] pl-[19px]`}>
              <div className={`w-[48px]`}>
                <Image className={`Icon`} src={`/icons/icon_20_4.svg`} width={48} height={48} alt='' />
              </div>
              <div>
                <div className={`text-[12px] font-[600] text-[var(--color1)]`}>APP 다운로드 혜택</div>
                <div className={`mt-[11px] text-[12px] font-[400] leading-[16px] text-[var(--color1)]`}>
                  APP 다운받고, 15% 쿠폰 받기
                </div>
              </div>
            </div>
            <div
              className={`grid grid-cols-[auto_1fr] items-center justify-start gap-[24px] border border-t-0 border-[var(--color6)] py-[15px] pl-[19px]`}>
              <div className={`w-[48px]`}>
                <Image className={`Icon`} src={`/icons/icon_20_5.svg`} width={48} height={48} alt='' />
              </div>
              <div>
                <div className={`text-[12px] font-[600] text-[var(--color1)]`}>함께 TBH SHOP을 만들어가요</div>
                <div className={`mt-[11px] text-[12px] font-[400] leading-[16px] text-[var(--color1)]`}>
                  매월 리뷰 작성하고,
                  <br />
                  최대 30,000 마일리지 증정!
                </div>
              </div>
            </div>
            <div
              className={`grid grid-cols-[auto_1fr] items-center justify-start gap-[24px] border border-t-0 border-[var(--color6)] py-[15px] pl-[19px]`}>
              <div className={`w-[48px]`}>
                <Image className={`Icon`} src={`/icons/icon_20_6.svg`} width={48} height={48} alt='' />
              </div>
              <div>
                <div className={`text-[12px] font-[600] text-[var(--color1)]`}>카카오톡 친구 혜택</div>
                <div className={`mt-[11px] text-[12px] font-[400] leading-[16px] text-[var(--color1)]`}>
                  카카오톡 친구 맺고,
                  <br />
                  다양한 정보와 함께 10% 쿠폰 증정!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MemberBenefitInfo;
