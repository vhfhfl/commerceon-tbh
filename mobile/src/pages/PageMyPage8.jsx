import LayoutSub from '@/layouts/LayoutSub';
import ProductItem16 from '@/modules/ProductItem16';
import CheckBox1 from '@/components/form/CheckBox1';
import InfoTable4 from '@/modules/InfoTable4';
import InfoTable9 from '@/modules/InfoTable9';
import FormTable10 from '@/modules/FormTable10';
import FormTable12 from '@/modules/FormTable12';

function PageMyPage8() {
  return (
    <div className={`PageMyPage8`}>
      <section data-seq={`20230810141622`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div
              className={`bg-[var(--color7)] py-[16px] px-[21px] text-center text-[12px] font-[400] leading-[18px] text-[var(--color5)]`}>
              교환은 '동일상품' 내 컬러,사이즈만 교환 가능합니다.
              <br />
              타 상품으로의 교환이 필요한 경우 '반품' 후<br />
              재주문 하셔야 합니다.
            </div>
            <div className={`text-center text-[16px] font-[700] leading-[30px] text-[var(--color1)]`}>
              교환 신청이 완료되었습니다
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230810141624`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`Title-3`}>
              <div className={`Txt1`}>교환 신청 상품</div>
            </div>
            <div className={`border-t-2 border-solid border-t-[var(--color1)]`}>
              <div className={`pt-[30px]`}>
                <article className={`CenterBetween text-[14px] font-[600] text-[var(--color1)]`}>
                  <CheckBox1 />
                  <div>주문번호 230401920301</div>
                </article>
                <div className={`mt-[12px]`}>
                  <ProductItem16 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230810141640`} className={`mt-[40px]`}>
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
                상품을 이미 발송하신 경우 1:1 문의를 통해 접수해주시기 바랍니다.
                <br />
                상품을 아직 발송하지 않으신 경우, 수거지 정보를 정확하게 입력 후 다음 단계를 진행해주세요.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230810141643`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`Title-3`}>
              <div className={`Txt1`}>교환배송비 결제</div>
            </div>
            <div>
              <FormTable12 />
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230810141646`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`Title-3`}>
              <div className={`Txt1`}>교환 신청 상세 정보</div>
            </div>
            <div>
              <InfoTable4 />
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230810141650`} className={`mt-[40px]`}>
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
      <section data-seq={`20230810141653`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <article className={`grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] items-center justify-center gap-0`}>
              <button className={`ButtonStyle1 ButtonXl`}>취소</button>
              <button className={`ButtonStyle2 ButtonXl`}>교환신청 완료하기</button>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

PageMyPage8.Layout = LayoutSub;
export default PageMyPage8;
