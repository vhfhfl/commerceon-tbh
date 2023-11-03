import { Fragment } from 'react';

function BrandList3() {
  return (
    <>
      <div className={`BrandList3`}>
        <div className={`space-y-[90px] bg-[var(--color7)] px-[134px] py-[80px]`}>
          {['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ'].map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <div>
                  <div className={`Montserrat text-[36px] font-[400] text-[var(--color3)]`}>{obj}</div>
                  <div className={`mt-[50px]`}>
                    <ul className={`grid grid-cols-4 items-center justify-center gap-[90px_10px]`}>
                      {Array.from(Array(7)).map((obj, idx) => {
                        return (
                          <Fragment key={idx}>
                            <li>
                              <div>
                                <div className={`text-[28px] font-[600] text-[var(--color1)]`}>브랜드 이름</div>
                                <div className={`Montserrat mt-[16px] text-[22px] font-[600] text-[var(--color5)]`}>
                                  BRAND NAME
                                </div>
                              </div>
                            </li>
                          </Fragment>
                        );
                      })}
                    </ul>
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

export default BrandList3;
