import LayoutSub4 from '@/layouts/LayoutSub4';
import InfoTable5 from '@/modules/InfoTable5';
import { Fragment } from 'react';
import ProductItem7 from '@/modules/ProductItem7';
import ProductItem8 from '@/modules/ProductItem8';

function PageOrder2() {
  return (
    <div className={`PageOrder2`}>
      <section data-seq={`20230702172241446`} className={`mt-[20px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`text-center text-[20px] font-[400] leading-[28px] text-[var(--color1)]`}>
              고객님의 주문이
              <br />
              <strong>정상적으로 완료</strong>되었습니다.
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230714145137384`} className={`mt-[20px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`Title-fc63826d`}>주문 정보</div>
            <div>
              <InfoTable5 />
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230714150408292`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`border-[1px] border-solid border-[var(--color6)] p-[20px_30px] text-center`}>
              <div className={`Montserrat break-keep text-[14px] font-[600] leading-[20px] text-[var(--color1)]`}>
                무통장 입금 계좌 : <br />
                국민은행 000000-000000 티비에이치
              </div>
              <div className={`mt-[10px] text-[12px] font-[400] leading-[18px] text-[var(--color5)]`}>
                고객님의 소중한 주문정보를
                <br />
                <span className={`border-b-[1px] border-b-[var(--color2)] text-[var(--color2)]`}>
                  TBHSHOP@gmail.com
                </span>
                으로 발송해드렸습니다.
                <br />
                (비회원으로 주문하신 경우
                <br />
                주문 확인 시 주문번호가 필요하오니 꼭 메모해두세요.)
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230714155831392`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <article className={`flex flex-row items-center gap-0 text-[14px] font-[700] text-[var(--color1)]`}>
              <div>주문 상품</div>
              <div className={`mx-[14px] h-[14px] w-[1px] bg-[var(--color3)] text-[0px]`}>Bar</div>
              <div>3개</div>
            </article>
            <div className={`mt-[10px] border-t-2 border-t-[var(--color1)]`}>
              <Fragment>
                <ProductItem7 />
              </Fragment>
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230714155831392`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <article className={`flex flex-row items-start gap-[4px] text-[14px] font-[700] text-[var(--color1)]`}>
              선택한 무료 사은품 ( <span className={`text-[var(--color2)]`}>총 3개</span> )
            </article>
            <div className={`mt-[20px]`}>
              <ProductItem8 />
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230714162304859`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner border-t-[1px] border-t-[var(--color6)]`}>
            <article
              className={`mt-[20px] flex flex-row items-start gap-[4px] text-[14px] font-[700] text-[var(--color1)]`}>
              선택한 유료 사은품 ( <span className={`text-[var(--color2)]`}>총 3개</span> )
            </article>
            <div className={`mt-[20px]`}>
              <ProductItem8 />
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230714172715199`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner border-t-[1px] border-t-[var(--color6)] pt-[40px]`}>
            <div
              className={`flex flex-row items-center justify-between gap-0 border-t-[1px] border-t-[var(--color6)]`}>
              <button className={`ButtonXl ButtonStyle1 grow`}>쇼핑 계속하기</button>
              <button className={`ButtonXl ButtonStyle2 grow`}>주문 확인하기</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

PageOrder2.Layout = LayoutSub4;
export default PageOrder2;
