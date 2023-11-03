import CheckBox1 from '@/components/form/CheckBox1';
import {Fragment} from 'react';

function BrandTable1() {
  return (
    <>
      <div className={`BrandTable1 BTop3`}>
        <article className={`flex flex-row items-center justify-between gap-[0] py-[18px]`}>
          <div className={`pl-[16px]`}>
            <CheckBox1 />
          </div>
          <div>
            <button className={`ButtonLg ButtonStyle4 w-[138px]`}>선택 브랜드 삭제</button>
          </div>
        </article>
        <ul className={`grid grid-cols-2 items-center justify-center gap-[40px_30px]`}>
          {Array.from(Array(5)).map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <li>
                  <div className={`relative`}>
                    <div>
                      <img src={`https://picsum.photos/540/296.jpg?random=${idx}`} alt={``} />
                    </div>
                    <input type="checkbox" className={`ChkUi-1 z-10 absolute top-[0] left-[0] w-full h-full`}/>
                  </div>
                  <div>
                    <article className={`mt-[6px] flex flex-row items-center justify-between gap-[0]`}>
                      <div>
                        <div className={`Montserrat text-[16px] font-[600] text-[#161616]`}>BRAND NAME</div>
                      </div>
                      <div>
                        <article className={`flex w-[100px] flex-row items-center gap-[0]`}>
                          <img src={`/icons/zco_79.svg`} alt={``} />
                          <div className={`text-[16px] font-[500] text-[#161616]`}>10</div>
                        </article>
                      </div>
                    </article>
                    <div className={`Montserrat text-[14px] font-[400] text-[#888]`}>상품수 : 1,000</div>
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

export default BrandTable1;
