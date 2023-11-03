import { Fragment } from 'react';

function BrandList2() {
  return (
    <>
      <div className={`BrandList2`}>
        <div className={`space-y-[90px] bg-[var(--color7)] px-[134px] py-[80px]`}>
          {['A', 'B', 'C', 'D', 'E', 'F'].map((obj, idx) => {
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
                                <div className={`Montserrat text-[28px] font-[600] text-[var(--color1)]`}>
                                  BRAND NAME
                                </div>
                                <div className={`mt-[16px] text-[22px] font-[600] text-[var(--color5)]`}>
                                  브랜드 이름
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

export default BrandList2;
