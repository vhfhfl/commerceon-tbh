import Image from 'next/image';
import {Fragment, useRef} from 'react';

function BenefitSubMenu(props) {
  const { className = '' } = props;
  const ref_this = useRef();

  const benfits_data = [
    {
      name: 'BENEFITS',
      bg: '#f5f5f5',
      child_list: [
        {
          text0: '4월 구매고객 쿠폰혜택',
        },
        {
          text0: '신규 회원 가입 혜택',
        },
        {
          text0: '카카오톡 채널추가 10%쿠폰',
        },
        {
          text0: 'APP다운로드 15%쿠폰',
        },
        {
          text0: '회원 등급혜택',
        },
      ],
    },
    {
      name: 'PROMOTION',
      bg: 'white',
      child_list: [
        {
          text0: '블랙데이',
          text1: '최대 2만원 쿠폰',
        },
        {
          text0: '쥬시쥬디',
          text1: '세트 30% 추가할인',
        },
        {
          text0: '마인드브릿지',
          text1: '봄신상 46%OFF',
        },
        {
          text0: '베이직하우스',
          text1: '셋업 모음전',
        },
      ],
    },
  ];

  return (
    <>
      <div ref={ref_this} {...props} className={`BenefitSubMenu ${className}`}>
        <div data-seq='20230515184923438' className={`flex flex-row`}>
          {benfits_data.map((obj, idx) => {
            const { name, child_list, bg } = obj;

            return (
              <Fragment key={idx}>
                <div
                  className={`BenefitsList flex flex-col justify-between pt-[20px] pb-[66px]`}
                  style={{ backgroundColor: bg }}>
                  <div>
                    <div
                      className={`Title flex h-[34px] flex-row items-center px-[30px] text-[14px] font-[600] text-[var(--color1)]`}>
                      {name}
                    </div>
                    <ul>
                      {child_list.map((obj2, idx2) => {
                        const { text0, text1 } = obj2;

                        return (
                          <Fragment key={idx2}>
                            <li>
                              <a
                                href='https://www.google.com'
                                className={`flex h-[34px] flex-row items-center px-[30px] text-[14px] text-[var(--color1)]`}>
                                <div className={`font-[700]`}>{text0}</div>
                                &nbsp;
                                <div className={`font-[500]`}>{text1}</div>
                              </a>
                            </li>
                          </Fragment>
                        );
                      })}
                    </ul>
                  </div>
                  <div className={`mt-[34px]`}>
                    <a href='https://www.google.com' className={`flex h-[34px] flex-row items-center justify-center`}>
                      <div>더 많은 기획전 모아보기</div>
                      <div className={`ml-[10px] flex h-[20px] w-[20px] flex-row items-center justify-center`}>
                        <Image src={`/icons/zco_19.svg`} width={8} height={13} alt='' />
                      </div>
                    </a>
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default BenefitSubMenu;
