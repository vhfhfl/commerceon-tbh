import LayoutBasic from '@/layouts/LayoutBasic';
import FormTable9 from '@/modules/FormTable9';
import InfoTable3 from '@/modules/InfoTable3';
import MyPageAside from '@/modules/MyPageAside';
import ProductTable9 from '@/modules/ProductTable9';

function PageMyPage7() {
  return (
    <div className={`PageMyPage7`}>
      <div className={`SubContainer mt-[120px]`}>
        <div className={`grid grid-cols-[290px_1fr] gap-[0]`}>
          <div data-seq='20230620164534434'>
            <MyPageAside />
          </div>
          <div data-seq='20230620164538119'>
            <section className={`flex flex-row items-center justify-between gap-[0]`}>
              <div>
                <div className={`text-[28px] font-[600] text-[var(--color1)]`}>교환 신청</div>
              </div>
              <div>{/**/}</div>
            </section>
            <section data-seq={`20230704094448918`} className={`mt-[15px]`}>
              <div className={`bg-[#f5f5f5] px-[20px] py-[15px] text-[14px] font-[400] leading-[20px] text-[#888]`}>
                교환은 '동일상품'내 컬러,사이즈만 교환 가능합니다.
                <br />타 상품으로의 교환이 필요한 경우 '반품'후 재주문 하셔야 합니다.
              </div>
            </section>
            <section data-seq={`20230621133015753`} className={`mt-[60px]`}>
              <div className={`Title-2`}>
                <div className={`Txt1`}>교환 신청 상품</div>
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
                    <div className={`Txt1`}>교환배송비 결제</div>
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
                <button className={`ButtonXl ButtonStyle2 w-[230px]`}>교환신청 완료하기</button>
              </article>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

PageMyPage7.Layout = LayoutBasic;
export default PageMyPage7;
