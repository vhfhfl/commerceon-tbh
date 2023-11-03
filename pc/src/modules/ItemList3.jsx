import {Fragment} from 'react';

function ItemList3(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`ItemList3 ${className}`}>
        <article className={`grid grid-cols-4 gap-[80px_20px]`}>
          {Array.from(Array(16)).map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <div>
                  <div className={`relative`}>
                    <img src={`https://picsum.photos/435/506.jpg?random=${idx}`} alt={``} />
                    {/*<div*/}
                    {/*  className={`absolute top-[0] right-[0] z-10 flex h-[40px] flex-row items-center justify-center gap-[0] bg-[var(--color1)] px-[10px] text-[16px] font-[500] text-[white]`}>*/}
                    {/*  이벤트 종료*/}
                    {/*</div>*/}
                  </div>
                  <div className={`mt-[26px]`}>
                    {/*<div*/}
                    {/*  className={`Montserrat inline-block bg-[#2C3A94] p-[10px_14px] text-[12px] font-[600] text-[white]`}>*/}
                    {/*  BRAND NAME*/}
                    {/*</div>*/}
                    <div
                      className={`Montserrat inline-block bg-[#161616] p-[10px_14px] text-[12px] font-[600] text-[white]`}>
                      BRAND NAME
                    </div>
                    <div
                      className={`mt-[22px] text-[20px] font-[600] leading-[26px] text-[var(--color1)] line-clamp-2`}>
                      마인드브릿지 맨 썸머 컬렉션, 마인드브릿지 맨 썸머 컬렉션, 마인드브릿지 맨 썸머 컬렉션 마인드브릿지
                      맨 썸머 컬렉션, 마인드브릿지 맨 썸머 컬렉션, 마인드브릿지 맨 썸머 컬렉션
                    </div>
                    <div className={`mt-[12px] text-[16px] font-[500] text-[#888]`}>
                      단 7일간, UP TO 83% OFF3만원 쿠폰팩 증정
                    </div>
                  </div>
                </div>
              </Fragment>
            );
          })}
        </article>
        <article className={`mt-[113px] flex flex-row items-center justify-center gap-[0]`}>
          <button className={`ButtonXl ButtonStyle4 w-[257px]`}>
            기획전 더보기
            <img className={`Icon`} src={`/icons/zco_74.svg`} alt={``} />
          </button>
        </article>
      </div>
    </>
  );
}

export default ItemList3;
