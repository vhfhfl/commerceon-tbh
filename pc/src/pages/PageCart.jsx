import LayoutBasic from '@/layouts/LayoutBasic';
import PriceBox1 from '@/modules/PriceBox1';
import ProductTable3 from '@/modules/ProductTable3';
import ProductTable4 from '@/modules/ProductTable4';
import CheckBox1 from '@/components/form/CheckBox1';

function PageCart() {
  return (
    <div className={`PageCart`}>
      <section data-seq={`20230619174519159`} className={`mt-[120px]`}>
        <div className={`SubContainer`}>
          <div className={`text-[28px] font-[600] text-[var(--color1)]`}>장바구니(0)</div>
          <div className={`mt-[26px] text-[18px] font-[600] text-[var(--color1)]`}>(주)티비에이치글로벌</div>
          <div className={`mt-[20px]`}>
            <ProductTable3 />
          </div>
        </div>
      </section>
      <section data-seq={`20230619154551168`} className={`mt-[100px]`}>
        <div className={`SubContainer`}>
          <div className={`flex flex-row items-center gap-[0]`}>
            <div>
              <CheckBox1 />
            </div>
            <div className={`ml-[14px] text-[28px] font-[600] text-[var(--color1)]`}>장바구니(3)</div>
          </div>
          <div className={`mt-[26px] text-[18px] font-[600] text-[var(--color1)]`}>(주)티비에이치글로벌</div>
          <div className={`mt-[20px]`}>
            <ProductTable4 />
          </div>
          <div className={`mt-[14px]`}>
            <PriceBox1 />
          </div>
          <div className={`mt-[40px]`}>
            <article className={`flex flex-row items-center justify-between gap-[0]`}>
              <article className={`flex flex-row items-center justify-center gap-[16px]`}>
                <button className={`ButtonMd ButtonStyle4`}>선택상품 삭제</button>
                <button className={`ButtonMd ButtonStyle4`}>선택 위시리스트</button>
                <button className={`ButtonMd ButtonStyle4`}>
                  <img src={`/icons/zco_61.svg`} alt={``} />
                  쇼핑 계속하기
                </button>
              </article>
              <article className={`flex flex-row items-center justify-center gap-[30px]`}>
                <article className={`flex flex-row items-center justify-center gap-[0]`}>
                  <article className={`flex aspect-square w-[24px] flex-row items-center justify-center gap-[0]`}>
                    <img src={`/icons/zco_60.svg`} alt={``} />
                  </article>
                  <div className={`ml-[4px] text-[14px] font-[400] text-[var(--color5)]`}>
                    구매하신 상품이 2개 이상일 경우, 상품박스는 개별배송 될 수 있습니다.
                  </div>
                </article>
                <button className={`ButtonMd ButtonStyle4`}>품절상품 전체 삭제</button>
              </article>
            </article>
          </div>
          <div className={`mt-[50px] border-[1px] border-solid border-[var(--color3)] bg-white py-[44px]`}>
            <article className={`flex flex-row items-center justify-center gap-[30px]`}>
              <div>
                <div className={`text-[16px] font-[400] leading-[26px] text-[var(--color1)]`}>총 2개의 상품금액</div>
                <div className={`Montserrat mt-[5px] text-[20px] font-[700] leading-[26px] text-[var(--color1)]`}>
                  115,600원
                </div>
              </div>
              <div>
                <article
                  className={`flex aspect-square w-[32px] flex-row items-center justify-center gap-[0] rounded-full bg-[var(--color6)]`}>
                  <img src={`/icons/zco_57_2.svg`} alt={``} />
                </article>
              </div>
              <div>
                <div className={`text-[16px] font-[400] leading-[26px] text-[var(--color1)]`}>상품 할인</div>
                <div className={`Montserrat mt-[5px] text-[20px] font-[700] leading-[26px] text-[var(--color1)]`}>
                  57,800원
                </div>
              </div>
              <div>
                <article
                  className={`flex aspect-square w-[32px] flex-row items-center justify-center gap-[0] rounded-full bg-[var(--color6)]`}>
                  <img src={`/icons/zco_57_1.svg`} alt={``} />
                </article>
              </div>
              <div>
                <div className={`text-[16px] font-[400] leading-[26px] text-[var(--color1)]`}>배송비</div>
                <div className={`Montserrat mt-[5px] text-[20px] font-[700] leading-[26px] text-[var(--color1)]`}>
                  0원
                </div>
              </div>
              <div>
                <article
                  className={`flex aspect-square w-[32px] flex-row items-center justify-center gap-[0] rounded-full bg-[var(--color1)]`}>
                  <img src={`/icons/zco_57_3.svg`} alt={``} />
                </article>
              </div>
              <div>
                <div className={`text-[16px] font-[400] leading-[26px] text-[var(--color1)]`}>결제 예정금액</div>
                <div className={`Montserrat mt-[5px] text-[20px] font-[700] leading-[26px] text-[var(--color1)]`}>
                  57,800원
                </div>
              </div>
              <div>
                <div
                  className={`border-[1px] border-solid border-[var(--color6)] bg-[var(--color7)] px-[20px] py-[8px]`}>
                  <div className={`text-[14px] font-[400] leading-[20px] text-[var(--color1)]`}>
                    적립 예상 마일리지 4,818원
                  </div>
                  <div className={`text-[12px] font-[400] leading-[20px] text-[var(--color5)]`}>
                    상품 1,870원+회원등급 추가 2,120원
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className={`mt-[24px]`}>
            <div
              className={`bg-[var(--color7)] py-[32px] text-center text-[16px] font-[400] leading-[26px] text-[var(--color1)]`}>
              주문서 작성단계에서 할인 / 마일리지 적용을 하실 수 있습니다.
            </div>
          </div>
          <article className={`mt-[60px] flex flex-row items-center justify-center gap-[16px]`}>
            <button className={`ButtonXl ButtonStyle1 w-[230px]`}>선택상품 주문</button>
            <button className={`ButtonXl ButtonStyle2 w-[230px]`}>전체상품 주문</button>
            <button>
              <img className={`h-[58px]`} src={`/imgs/npay.jpg`} alt={`네이버 페이 구매하기`} />
            </button>
          </article>
        </div>
      </section>
    </div>
  );
}

PageCart.Layout = LayoutBasic;
export default PageCart;
