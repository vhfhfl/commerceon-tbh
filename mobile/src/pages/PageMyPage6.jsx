import LayoutSub from '@/layouts/LayoutSub';
import ProductItem15 from '@/modules/ProductItem15';
import CheckBox1 from '@/components/form/CheckBox1';
import PaymentTable4 from '@/modules/PaymentTable4';
import InfoTable4 from '@/modules/InfoTable4';
import InfoTable3 from '@/modules/InfoTable3';

function PageMyPage6() {
  return (
    <div className={`PageMyPage6`}>
      <section data-seq={`20230809121335`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div
              className={`bg-[var(--color7)] py-[16px] px-[21px] text-center text-[12px] font-[400] leading-[18px] text-[var(--color5)]`}>
              무통장 입금을 통한 입금 대기 상태에서만 취소 신청을 할 수 있습니다. 입금일자 기간 경과 시 자동 취소됩니다.
              환불 신청은 상품 준비되기 전 상태에서만 하실 수 있으며 준비 중 부터는 거부될 수 있습니다.
            </div>
            <div className={`text-center`}>
              <div className={`text-[16px] font-[700] leading-[30px] text-[var(--color1)]`}>
                취소/환불 처리가 완료되었습니다.
              </div>
              <div className={`mt-[7px]`}>
                <div className={`text-[12px] font-[400] leading-[18px] text-[var(--color1)]`}>
                  취소/환불 처리후에는 취소/환불 철회가 불가합니다.
                  <br />
                  다시 구매를 원하시면 재구매를 진행해주세요.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230809121339`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`Title-3`}>
              <div className={`Txt1`}>취소/환불 신청 상품</div>
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
      <section data-seq={`20230809151021`} className={`mt-[40px]`}>
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
      <section data-seq={`20230809153924`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`Title-3`}>
              <div className={`Txt1`}>취소/환불 신청 상세 정보</div>
            </div>
            <div>
              <InfoTable4 />
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230809151014`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`Title-3`}>
              <div className={`Txt1`}>신청사유</div>
            </div>
            <div>
              <InfoTable3 />
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230809144425`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <article className={`grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] items-center justify-center gap-0`}>
              <button className={`ButtonStyle1 ButtonXl`}>취소</button>
              <button className={`ButtonStyle2 ButtonXl`}>확인</button>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

PageMyPage6.Layout = LayoutSub;
export default PageMyPage6;
