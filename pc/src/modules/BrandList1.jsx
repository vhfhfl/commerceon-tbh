import { Fragment } from 'react';

function BrandList1() {
  return (
    <>
      <div className={`BrandList1`}>
        <ul
          className={`grid grid-cols-4 items-center justify-center gap-[90px_10px] bg-[var(--color7)] px-[134px] py-[80px]`}>
          {Array.from(Array(10)).map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <li>
                  <div>
                    <div className={`Montserrat text-[28px] font-[600] text-[var(--color1)]`}>BRAND NAME</div>
                    <div className={`mt-[16px] text-[22px] font-[600] text-[var(--color5)]`}>브랜드 이름</div>
                  </div>
                </li>
              </Fragment>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default BrandList1;
