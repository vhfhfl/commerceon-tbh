import LayoutBasic from '@/layouts/LayoutBasic';
import FormTable4 from '@/modules/FormTable4';
import ProductTable7 from '@/modules/ProductTable7';
import ProductTable8 from '@/modules/ProductTable8';

function PageOrder2() {
  return (
    <div className={`PageOrder2`}>
      <section data-seq={`20230619174519159`} className={`mt-[120px]`}>
        <div className={`SubContainer`}>
          <div className={`text-[28px] font-[600] text-[var(--color1)]`}>주문 완료</div>
          <div
            className={`mt-[36px] text-center text-[30px] font-[400] leading-[42px] tracking-[-0.15px] text-[var(--color1)]`}>
            고객님의 주문이
            <br />
            <strong className={`font-[700]`}>정상적으로 완료</strong>되었습니다.
          </div>
          <div className={`mt-[10px] text-[18px] font-[600] text-[var(--color1)]`}>주문 정보</div>
          <div className={`mt-[20px]`}>
            <FormTable4 />
          </div>
          <div className={`mt-[30px] border-[1px] border-solid border-[var(--color6)] p-[22px] text-center`}>
            <div className={`Montserrat text-[20px] font-[600] text-[var(--color1)]`}>
              무통장 입금 계좌 : 국민은행 000000-000000 티비에이치
            </div>
            <div className={`mt-[10px] text-[14px] font-[400] leading-[24px] text-[var(--color5)]`}>
              고객님의 소중한 주문정보를{' '}
              <span className={`border-b-[1px] border-b-[var(--color2)] text-[var(--color2)]`}>TBHSHOP@gmail.com</span>
              으로 발송해드렸습니다.
              <br />
              (비회원으로 주문하신 경우 주문 확인 시 주문번호가 필요하오니 꼭 메모해두세요.)
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230626133948897`} className={`mt-[40px]`}>
        <div className={`SubContainer`}>
          <div className={`text-[18px] font-[600] leading-[60px] text-[var(--color1)]`}>주문 상품 2개</div>
          <div>
            <ProductTable7 />
          </div>
        </div>
      </section>
      <section data-seq={`20230626133948897`} className={`mt-[40px]`}>
        <div className={`SubContainer`}>
          <div className={`text-[18px] font-[600] leading-[60px] text-[var(--color1)]`}>무료 사은품 2개</div>
          <div>
            <ProductTable8 />
          </div>
        </div>
      </section>
      <section data-seq={`20230626133948897`} className={`mt-[40px]`}>
        <div className={`SubContainer`}>
          <div className={`text-[18px] font-[600] leading-[60px] text-[var(--color1)]`}>유료 사은품 2개</div>
          <div>
            <ProductTable8 />
          </div>
        </div>
      </section>
      <section data-seq={`20230626133948897`} className={`mt-[40px]`}>
        <div className={`SubContainer`}>
          <div className={`mt-[60px] flex flex-row items-center justify-center gap-[16px]`}>
            <button className={`ButtonXl ButtonStyle1 w-[230px]`}>쇼핑 계속하기</button>
            <button className={`ButtonXl ButtonStyle2 w-[230px]`}>주문 확인하기</button>
          </div>
        </div>
      </section>
    </div>
  );
}

PageOrder2.Layout = LayoutBasic;
export default PageOrder2;
