import CheckBox1 from '@/components/form/CheckBox1';
import LayoutBasic from '@/layouts/LayoutBasic';
import FormTable1 from '@/modules/FormTable1';
import FormTable2 from '@/modules/FormTable2';
import FormTable3 from '@/modules/FormTable3';
import FormTable11 from '@/modules/FormTable11';
import PaymentTable from '@/modules/PaymentTable';
import ProductList5 from '@/modules/ProductList5';
import ProductList6 from '@/modules/ProductList6';
import ProductList7 from '@/modules/ProductList7';
import ProductTable6 from '@/modules/ProductTable6';

function PageOrder() {
  return (
    <div className={`PageOrder`}>
      <section data-seq={`20230619174519159`} className={`mt-[120px]`}>
        <div className={`SubContainer`}>
          <div className={`text-[28px] font-[600] text-[var(--color1)]`}>주문서작성 / 결제</div>
          <div className={`mt-[26px] text-[18px] font-[600] text-[var(--color1)]`}>주문 상세 내역</div>
          <div className={`mt-[20px]`}>
            <ProductTable6 />
          </div>
          <article className={`mt-[40px] flex flex-row items-center gap-[16px]`}>
            <button className={`ButtonMd ButtonStyle4`}>
              <img src={`/icons/zco_61.svg`} alt={``} />
              장바구니 돌아가기
            </button>
            <button className={`ButtonMd ButtonStyle4`}>견적서 출력</button>
          </article>
        </div>
      </section>
      <section data-seq={`20230626091500725`} className={`mt-[30px]`}>
        <div className={`SubContainer`}>
          <article
            className={`flex flex-row items-center gap-[0] text-[18px] font-[700] leading-[60px] text-[var(--color1)]`}>
            사은품 선택 (<span className={`mr-[4px] text-[var(--color2)]`}>총 4개 선택 가능</span>: 무료 3개 / 유료 1개
            )
          </article>
          <article className={`grid grid-flow-col grid-cols-[1fr_auto] gap-[42px]`}>
            <div className={`border-t-[3px] border-t-[var(--color1)]`}>
              <article className={`mt-[20px] flex flex-row items-center gap-[0]`}>
                <div className={`text-[14px] font-[400] text-[var(--color5)]`}>
                  주문하시는 상품의 브랜드, 이벤트 등에 따라 지급되는 사은품이 달라집니다.
                </div>
              </article>
              <div className={`mt-[50px] text-[18px] font-[600] text-[var(--color1)]`}>무료 사은품 선택</div>
              <div className={`mt-[30px]`}>
                <ProductList5 />
              </div>
              <div className={`mt-[50px] text-[18px] font-[600] text-[var(--color1)]`}>
                선택한 무료 사은품 <span className={`text-[var(--color2)]`}>(총 3개)</span>
              </div>
              <div className={`mt-[30px]`}>
                <ProductList6 />
              </div>
              <div className={`mt-[50px] text-[18px] font-[600] text-[var(--color1)]`}>유료 사은품 선택</div>
              <div className={`mt-[30px]`}>
                <ProductList5 />
              </div>
              <div className={`mt-[50px] text-[18px] font-[600] text-[var(--color1)]`}>
                선택한 유료 사은품 <span className={`text-[var(--color2)]`}>(총 3개)</span>
              </div>
              <div className={`mt-[30px]`}>
                <ProductList7 />
              </div>
            </div>
            <div>
              <div className={`sticky top-[100px] z-[100] w-[432px]`}>
                <PaymentTable />
              </div>
            </div>
          </article>
        </div>
      </section>
      <section data-seq={`20230706103734234`} className={`mt-[40px]`}>
        <div className={`SubContainer`}>
          <div className={`Title-fc63826d`}>주문자 정보</div>
          <div>
            <FormTable11 />
          </div>
        </div>
      </section>
      <section data-seq={`20230626102029587`} className={`mt-[40px]`}>
        <div className={`SubContainer`}>
          <article className={`flex flex-row items-center justify-between gap-[0]`}>
            <div>
              <div className={`Title-fc63826d`}>배송지 정보</div>
            </div>
            <article className={`flex flex-row items-center gap-[16px]`}>
              <button className={`ButtonMd ButtonStyle2`}>배송지 목록</button>
              <button className={`ButtonMd ButtonStyle1`}>주문고객 정보와 동일</button>
            </article>
          </article>
          <div>
            <FormTable1 />
          </div>
        </div>
      </section>
      <section data-seq={`20230626102029587`} className={`mt-[40px]`}>
        <div className={`SubContainer`}>
          <article className={`flex flex-row items-center justify-between gap-[0]`}>
            <div className={`flex flex-row items-center gap-[20px]`}>
              <div className={`Title-fc63826d`}>할인 혜택</div>
              <div className={`Montserrat flex flex-row items-center text-[14px] font-[700]`}>
                <div className={`Montserrat text-[var(--color2)]`}>39,900원</div>
                <div className={`ml-[4px]`}>할인</div>
              </div>
            </div>
          </article>
          <div>
            <FormTable2 />
          </div>
        </div>
      </section>
      <section data-seq={`20230626102029587`} className={`mt-[40px]`}>
        <div className={`SubContainer`}>
          <article className={`flex flex-row items-center justify-between gap-[0]`}>
            <div>
              <article className={`flex flex-row items-center gap-[20px]`}>
                <div className={`Title-fc63826d`}>결제수단 선택</div>
                <CheckBox1>다음에도 이 결제수단 사용하기</CheckBox1>
              </article>
            </div>
          </article>
          <div>
            <FormTable3 />
          </div>
        </div>
      </section>
    </div>
  );
}

PageOrder.Layout = LayoutBasic;
export default PageOrder;
