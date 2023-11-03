import ItemFlag1 from '@/components/common/ItemFlag1';
import CheckBox1 from '@/components/form/CheckBox1';
import LayoutSub4 from '@/layouts/LayoutSub4';
import { Fragment } from 'react';
import ProductItem4 from '@/modules/ProductItem4';

function PageCart() {
  return (
    <div className={`PageCart`}>
      <section data-seq={`20230702170053948`} className={` mt-[20px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div
              className={`border-t-[3px] border-b border-t-[var(--color1)] border-b-[var(--color6)] py-[60px] text-center text-[14px] font-[600] text-[var(--color1)]`}>
              장바구니에 담겨있는 상품이 없습니다.
            </div>
            <button className={`ButtonLg ButtonStyle4 mt-[40px] w-full`}>
              <img className={`Icon`} src={`/icons/icon_48.svg`} alt={``} />
              <div className={`ml-[4px]`}>쇼핑 계속하기</div>
            </button>
          </div>
        </div>
      </section>
      <section data-seq={`20230721112520`} className={`mt-[20px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div
              className={`flex flex-row items-center justify-between border-y-[1px] border-y-[var(--color6)] py-[12px]`}>
              <CheckBox1 />
              <div>
                <button className={`Btn_1 w-[84px]`}>선택상품 삭제</button>
                <button className={`Btn_1 ml-[5px] w-[64px]`}>모두 삭제</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          {Array.from(Array(2)).map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <ProductItem4 idx={idx} />
              </Fragment>
            );
          })}
        </div>
      </section>
      <section data-seq={`20230721112520`} className={`mt-[20px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <article className={`mt-[12px] flex flex-row items-center justify-between`}>
              <CheckBox1 />
              <div>
                <button className={`Btn_1 w-[84px]`}>선택상품 삭제</button>
                <button className={`Btn_1 ml-[5px] w-[114px]`}>품절상품 모두삭제</button>
              </div>
            </article>
            <div
              className={`mt-[40px] divide-y-[1px] divide-solid divide-[var(--color6)] border-t-[3px] border-b border-t-[var(--color1)] border-b-[var(--color6)]`}>
              <article
                className={`flex flex-row items-center justify-between py-[18px] text-[14px] text-[var(--color1)]`}>
                <div className={`font-[400]`}>총 2개의 상품금액</div>
                <div className={`Montserrat font-[500]`}>79,800원</div>
              </article>
              <article className={`flex flex-row items-center justify-between py-[18px] text-[14px]`}>
                <div className={`font-[400] text-[var(--color1)]`}>상품 할인</div>
                <div className={`Montserrat font-[500] text-[var(--color2)]`}>- 39,900원</div>
              </article>
              <article
                className={`flex flex-row items-center justify-between py-[18px] text-[14px] text-[var(--color1)]`}>
                <div className={`font-[400]`}>배송비</div>
                <div className={`Montserrat font-[500]`}>2,500원</div>
              </article>
              <article
                className={`flex flex-row items-center justify-between py-[18px] font-[600] text-[var(--color1)]`}>
                <div className={`text-[16px]`}>결제 예정금액</div>
                <div className={`Montserrat text-[18px]`}>22,850원</div>
              </article>
            </div>
            <button className={`Montserrat ButtonXl ButtonStyle2 mt-[40px] w-full text-[16px] font-[600] text-white`}>
              주문하기
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

PageCart.Layout = LayoutSub4;
export default PageCart;
