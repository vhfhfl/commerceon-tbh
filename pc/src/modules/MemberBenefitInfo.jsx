import Image from 'next/image';
import {useRef} from 'react';

function MemberBenefitInfo(props) {
  const { className = '' } = props;
  const ref_this = useRef();
  return (
    <>
      <div ref={ref_this} className={`MemberBenefitInfo ${className}`}>
        <div className={`text-[24px] font-[400] leading-[30px] text-[var(--color1)]`}>
          (ㅇㅇㅇ)님,
          <br/>
          TBH SHOP에서 제공하는
          <br />
          특별한 혜택이 안내드립니다.
        </div>
        <div className={`mt-[75px] text-right`}>
          <a
            href={`https://www.google.com`}
            target={`_blank`}
            className={`inline-flex flex-row items-center justify-center`}>
            <span className={`text-[12px] font-[400] text-[var(--color5)]`}>회원혜택 자세히 보기</span>
            <Image className={`ml-[9px] inline-block`} src={`/icons/icon_26.svg`} width={6} height={10} alt='' />
          </a>
        </div>
        <div className={`mt-[9px]`}>
          <div className={`grid grid-cols-[repeat(2,1fr)] items-center justify-center gap-[10px]`}>
            <div className={`h-[99px] border border-[var(--color6)] pt-[15px] pl-[21px] pb-[13px]`}>
              <div className={`text-[14px] font-[600] text-[var(--color1)]`}>신규회원 가입</div>
              <div className={`mt-[17px] text-[14px] font-[400] leading-[20px] text-[var(--color1)]`}>
                첫 방문을 환영합니다!
                <br />
                10% 추가 할인 쿠폰 증정
              </div>
            </div>
            <div className={`h-[99px] border border-[var(--color6)] pt-[15px] pl-[21px] pb-[13px]`}>
              <div className={`text-[14px] font-[600] text-[var(--color1)]`}>등급별 멤버십 혜택</div>
              <div className={`mt-[17px] text-[14px] font-[400] leading-[20px] text-[var(--color1)]`}>
                등급별 최대 4% 추가 할인이 가능합니다.
                <br />
                &#40;멤버십 STAR등급 기준&#41;
              </div>
            </div>
            <div className={`h-[99px] border border-[var(--color6)] pt-[15px] pl-[21px] pb-[13px]`}>
              <div className={`text-[14px] font-[600] text-[var(--color1)]`}>생일축하 쿠폰</div>
              <div className={`mt-[17px] text-[14px] font-[400] leading-[20px] text-[var(--color1)]`}>
                HAPPY BIRTHDAY!
                <br />
                생일축하 10,000원 쿠폰 매년 증정!
              </div>
            </div>
            <div className={`h-[99px] border border-[var(--color6)] pt-[15px] pl-[21px] pb-[13px]`}>
              <div className={`text-[14px] font-[600] text-[var(--color1)]`}>APP 다운로드 혜택</div>
              <div className={`mt-[17px] text-[14px] font-[400] leading-[20px] text-[var(--color1)]`}>
                APP 다운받고, 15% 쿠폰 받기
              </div>
            </div>
            <div className={`h-[99px] border border-[var(--color6)] pt-[15px] pl-[21px] pb-[13px]`}>
              <div className={`text-[14px] font-[600] text-[var(--color1)]`}>함께 TBH SHOP을 만들어가요</div>
              <div className={`mt-[17px] text-[14px] font-[400] leading-[20px] text-[var(--color1)]`}>
                매월 리뷰 작성하고,
                <br />
                최대 30,000 마일리지 증정!
              </div>
            </div>
            <div className={`h-[99px] border border-[var(--color6)] pt-[15px] pl-[21px] pb-[13px]`}>
              <div className={`text-[14px] font-[600] text-[var(--color1)]`}>카카오톡 친구 혜택</div>
              <div className={`mt-[17px] text-[14px] font-[400] leading-[20px] text-[var(--color1)]`}>
                카카오톡 친구 맺고,
                <br />
                다양한 정보와 함께 10% 쿠폰 증정!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MemberBenefitInfo;
