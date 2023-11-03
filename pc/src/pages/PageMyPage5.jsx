import LayoutBasic from '@/layouts/LayoutBasic';
import MyPageAside from '@/modules/MyPageAside';
import PriceTable3 from '@/modules/PriceTable3';
import ProductTable9 from '@/modules/ProductTable9';

function PageMyPage5() {
  return (
    <div className={`PageMyPage5`}>
      <div className={`SubContainer mt-[120px]`}>
        <div className={`grid grid-cols-[290px_1fr] gap-[0]`}>
          <div data-seq='20230620164534434'>
            <MyPageAside />
          </div>
          <div data-seq='20230620164538119'>
            <section className={`flex flex-row items-center justify-between gap-[0]`}>
              <div>
                <div className={`text-[28px] font-[600] text-[var(--color1)]`}>취소/환불 신청</div>
              </div>
              <div>{/**/}</div>
            </section>
            <section data-seq={`20230704094448918`} className={`mt-[15px]`}>
              <div className={`bg-[#f5f5f5] px-[20px] py-[15px] text-[14px] font-[400] leading-[20px] text-[#888]`}>
                무통장 입금을 통한 입금 대기 상태에서만 취소 신청을 할 수 있습니다.
                <br />
                입금일자 기간 경과 시 자동 취소됩니다. 환불 신청은 상품 준비되기 전 상태에서만 하실 수 있으며
                준비중부터는 거부될 수 있습니다.
              </div>
            </section>
            <section data-seq={`20230621133015753`} className={`mt-[60px]`}>
              <div className={`Title-2`}>
                <div className={`Txt1`}>취소/환불 신청 상품</div>
                {/*<div className={`Txt2`}>홍길동님께서 본 최근 상품입니다</div>*/}
              </div>
              <article className={`mb-[8px] flex flex-row items-center justify-between gap-[0]`}>
                <div>
                  <div className={`Title-2`}>
                    <div className={`Txt1`}>
                      주문/배송상세 <span className={`Montserrat ml-[12px] font-[600]`}>2305181545000344</span>
                    </div>
                    {/*<div className={`Txt2`}>홍길동님께서 본 최근 상품입니다</div>*/}
                  </div>
                </div>
                <article className={`flex flex-row items-center gap-[0]`}>
                  <div className={`text-[14px] font-[400] text-[var(--color2)]`}>* 필수 입력 항목입니다.</div>
                </article>
              </article>
              <div>
                <ProductTable9 />
              </div>
            </section>
            <section data-seq={`20230704100819407`} className={`mt-[40px]`}>
              <article className={`mb-[8px] flex flex-row items-center justify-between gap-[0]`}>
                <div>
                  <div className={`Title-2`}>
                    <div className={`Txt1`}>취소/환불 예정 금액 확인</div>
                    {/*<div className={`Txt2`}>*/}
                    {/*  상품이 준비되기 전인 결제 완료 상태에서만 환불 신청을 하실 수 있습니다. 상품 준비중부터는 환불*/}
                    {/*  신청이 거부될 수 있습니다.*/}
                    {/*</div>*/}
                  </div>
                </div>
              </article>
              <div>
                <PriceTable3 />
              </div>
              <article className={`mt-[90px] flex flex-row items-center justify-center gap-[16px]`}>
                <button className={`ButtonXl ButtonStyle1 w-[230px]`}>취소</button>
                <button className={`ButtonXl ButtonStyle2 w-[230px]`}>확인</button>
              </article>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

PageMyPage5.Layout = LayoutBasic;
export default PageMyPage5;
