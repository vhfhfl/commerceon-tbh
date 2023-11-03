import LayoutBasic from '@/layouts/LayoutBasic';
import Desc1 from '@/modules/Desc1';
import FormTable10 from "@/modules/FormTable10";
import FormTable9 from '@/modules/FormTable9';
import InfoTable3 from '@/modules/InfoTable3';
import MyPageAside from '@/modules/MyPageAside';
import PriceTable3 from '@/modules/PriceTable3';
import ProductTable9 from '@/modules/ProductTable9';

function PageMyPage6() {
  return (
    <div className={`PageMyPage6`}>
      <div className={`SubContainer mt-[120px]`}>
        <div className={`grid grid-cols-[290px_1fr] gap-[0]`}>
          <div data-seq='20230620164534434'>
            <MyPageAside />
          </div>
          <div data-seq='20230620164538119'>
            <section className={`flex flex-row items-center justify-between gap-[0]`}>
              <div>
                <div className={`text-[28px] font-[600] text-[var(--color1)]`}>반품 신청</div>
              </div>
              <div>{/**/}</div>
            </section>
            <section data-seq={`20230621133015753`} className={`mt-[60px]`}>
              <div className={`Title-2`}>
                <div className={`Txt1`}>반품 신청 상품</div>
                {/*<div className={`Txt2`}>홍길동님께서 본 최근 상품입니다</div>*/}
              </div>
              <article className={`mb-[8px] flex flex-row items-center justify-between gap-[0]`}>
                <div>
                  <div className={`Title-2`}>
                    <div className={`Txt1`}>주문/배송상세 <span className={`ml-[12px] Montserrat font-[600]`}>2305181545000344</span></div>
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
                    <div className={`Txt1`}>환불 예정 금액</div>
                    {/*<div className={`Txt2`}>*/}
                    {/*  상품이 준비되기 전인 결제 완료 상태에서만 환불 신청을 하실 수 있습니다. 상품 준비중부터는 환불*/}
                    {/*</div>*/}
                  </div>
                </div>
              </article>
              <div>
                <PriceTable3 />
              </div>
              <div className={`mt-[25px]`}>
                <Desc1 />
              </div>
            </section>
            <section data-seq={`20230704100819407`} className={`mt-[40px]`}>
              <article className={`mb-[8px] flex flex-row items-center justify-between gap-[0]`}>
                <div>
                  <div className={`Title-2`}>
                    <div className={`Txt1`}>환불 정보</div>
                    <div className={`Txt2`}>실시간 계좌이체 결제수단을 통하여 결제하신 고객들만 해당됩니다.</div>
                  </div>
                </div>
              </article>
              <div>
                <FormTable10 />
              </div>
            </section>
            <section data-seq={`20230704100819407`} className={`mt-[40px]`}>
              <article className={`mb-[8px] flex flex-row items-center justify-between gap-[0]`}>
                <div>
                  <div className={`Title-2`}>
                    <div className={`Txt1`}>수거지 정보</div>
                    <div className={`Txt2`}>
                      상품이 준비되기 전인 결제 완료 상태에서만 환불 신청을 하실 수 있습니다. 상품 준비중부터는 환불
                      신청이 거부될 수 있습니다.
                    </div>
                  </div>
                </div>
                <article className={`flex flex-row items-center gap-[0]`}>
                  <button className={`ButtonLg ButtonStyle2 ml-[25px] w-[134px]`}>배송지 목록</button>
                </article>
              </article>
              <div>
                <FormTable9 />
              </div>
            </section>
            <section data-seq={`20230704101026189`} className={`mt-[60px]`}>
              <article className={`mb-[8px] flex flex-row items-center justify-between gap-[0]`}>
                <div>
                  <div className={`Title-2`}>
                    <div className={`Txt1`}>반품배송비 결제</div>
                    {/*<div className={`Txt2`}>*/}
                    {/*  상품이 준비되기 전인 결제 완료 상태에서만 환불 신청을 하실 수 있습니다. 상품 준비중부터는 환불*/}
                    {/*  신청이 거부될 수 있습니다.*/}
                    {/*</div>*/}
                  </div>
                </div>
              </article>
              <div>
                <InfoTable3 />
              </div>
              <article className={`mt-[90px] flex flex-row items-center justify-center gap-[16px]`}>
                <button className={`ButtonXl ButtonStyle1 w-[230px]`}>취소</button>
                <button className={`ButtonXl ButtonStyle2 w-[230px]`}>반품접수 완료하기</button>
              </article>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

PageMyPage6.Layout = LayoutBasic;
export default PageMyPage6;
