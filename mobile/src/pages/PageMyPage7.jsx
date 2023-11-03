import LayoutSub from '@/layouts/LayoutSub';
import ProductItem15 from '@/modules/ProductItem15';
import CheckBox1 from '@/components/form/CheckBox1';
import PaymentTable4 from '@/modules/PaymentTable4';
import InfoTable4 from '@/modules/InfoTable4';
import InfoTable9 from '@/modules/InfoTable9';
import FormTable9 from '@/modules/FormTable9';
import FormTable10 from '@/modules/FormTable10';
import FormTable11 from '@/modules/FormTable11';

function PageMyPage7() {
  return (
    <div className={`PageMyPage7`}>
      <section data-seq={`20230809154142`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div
              className={`bg-[var(--color7)] py-[16px] px-[21px] text-center text-[12px] font-[400] leading-[18px] text-[var(--color5)]`}>
              무통장 입금을 통한 입금 대기 상태에서만 취소 신청을 할 수 있습니다. 입금일자 기간 경과 시 자동 취소됩니다.
              환불 신청은 상품 준비되기 전 상태에서만 하실 수 있으며 준비 중 부터는 거부될 수 있습니다.
            </div>
            <div className={`text-center text-[16px] font-[700] leading-[30px] text-[var(--color1)]`}>
              반품 신청이 완료되었습니다.
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230809154145`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`Title-3`}>
              <div className={`Txt1`}>반품 신청 상품</div>
            </div>
            <div className={`border-t-2 border-solid border-t-[var(--color1)]`}>
              <div className={`pt-[30px]`}>
                <article className={`CenterBetween text-[14px] font-[600] text-[var(--color1)]`}>
                  <CheckBox1 />
                  <div>주문번호 230401920301</div>
                </article>
                <div className={`mt-[12px]`}>
                  <ProductItem15 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230809154149`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`Title-3`}>
              <div className={`Txt1`}>취소/환불 예정 금액 확인</div>
            </div>
            <div>
              <PaymentTable4 />
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230809160840`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`Title-3`}>
              <div className={`Txt1`}>환불정보</div>
            </div>
            <div>
              <div>
                <FormTable9 />
              </div>
              <div className={`mt-[14px] text-[12px] font-[400] text-[var(--color5)]`}>
                실시간 계좌이체 결제수단을 통하여 결제하신 고객들만 해당됩니다.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230809160621`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`Title-3`}>
              <div className={`Txt1`}>수거지정보</div>
            </div>
            <div>
              <div>
                <FormTable10 />
              </div>
              <div className={`mt-[14px] text-[12px] font-[400] leading-[18px] text-[var(--color5)]`}>
                상품이 준비되기 전인 결제 완료 상태에서만 환불 신청을 하실 수 있습니다. 상품 준비 중 부터는 환불 신청이
                거부될 수 있습니다.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230809162100`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`Title-3`}>
              <div className={`Txt1`}>반품배송비 결제</div>
            </div>
            <div>
              <FormTable11 />
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230809154151`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`Title-3`}>
              <div className={`Txt1`}>반품 신청 상세 정보</div>
            </div>
            <div>
              <InfoTable4 />
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230809154155`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`Title-3`}>
              <div className={`Txt1`}>신청사유</div>
            </div>
            <div>
              <InfoTable9 />
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230809154158`} className={`mt-[55px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <article className={`grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] items-center justify-center gap-0`}>
              <button className={`ButtonStyle1 ButtonXl`}>취소</button>
              <button className={`ButtonStyle2 ButtonXl`}>반품신청 완료하기</button>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

PageMyPage7.Layout = LayoutSub;
export default PageMyPage7;
