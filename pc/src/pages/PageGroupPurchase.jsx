import LayoutBasic from '@/layouts/LayoutBasic';
import FormTable6 from '@/modules/FormTable6';
import FormTable7 from '@/modules/FormTable7';
import ItemList1 from '@/modules/ItemList1';
import ItemList4 from '@/modules/ItemList4';

function PageGroupPurchase() {
  return (
    <div className={`PageGroupPurchase`}>
      <section data-seq={`20230619174519159`} className={`mt-[120px]`}>
        <div className={`SubContainer2`}>
          <div className={`text-[28px] font-[600] text-[var(--color1)]`}>단체구매</div>
          <div className={`Title-2 mt-[30px]`}>
            <div className={`Txt1`}>단체구매 진행안내</div>
          </div>
          <article
            className={`border-t-[3px] border-b-[1px] border-t-[var(--color1)] border-b-[var(--color6)] py-[20px]`}>
            <div className={`flex h-[148px] flex-row items-center justify-center gap-[0]`}>
              <div
                className={`flex h-full grow flex-row items-center justify-center gap-[0] rounded-[25px] bg-[var(--color7)]`}>
                <div className={`text-center text-[18px] font-[600] leading-[24px] text-[var(--color1)]`}>
                  단체구매
                  <br />
                  신청서 작성
                </div>
              </div>
              <div className={`flex min-w-[56px] flex-row items-center justify-center gap-[0] last:hidden`}>
                <img src={`/icons/zco_71.svg`} alt={``} />
              </div>
              <div
                className={`flex h-full grow flex-row items-center justify-center gap-[0] rounded-[25px] bg-[var(--color7)]`}>
                <div className={`text-center text-[18px] font-[600] leading-[24px] text-[var(--color1)]`}>
                  신청서 확인
                  <br />
                  (상품/수량 취합)
                </div>
              </div>
              <div className={`flex min-w-[56px] flex-row items-center justify-center gap-[0] last:hidden`}>
                <img src={`/icons/zco_71.svg`} alt={``} />
              </div>
              <div
                className={`flex h-full grow flex-row items-center justify-center gap-[0] rounded-[25px] bg-[var(--color7)]`}>
                <div className={`text-center text-[18px] font-[600] leading-[24px] text-[var(--color1)]`}>
                  상품 준비
                  <br />
                  (2~7일 소요)
                </div>
              </div>
              <div className={`flex min-w-[56px] flex-row items-center justify-center gap-[0] last:hidden`}>
                <img src={`/icons/zco_71.svg`} alt={``} />
              </div>
              <div
                className={`flex h-full grow flex-row items-center justify-center gap-[0] rounded-[25px] bg-[var(--color7)]`}>
                <div className={`text-center text-[18px] font-[600] leading-[24px] text-[var(--color1)]`}>
                  결제/출고
                </div>
              </div>
            </div>
          </article>
          <div className={`mt-[38px]`}>
            <div className={`bg-[var(--color7)] p-[22px_20px] text-[16px] font-[600] text-[var(--color1)]`}>
              상품 구매 안내
            </div>
            <ul className={`Ul-a0b830fa`}>
              <li>구매 수량은 50벌 이상부터 단체구매로 간주됩니다.</li>
              <li>문의 시, 진행 일정 및 구매상품/수량에 대해 전달주시면 더 빠른 응대가 가능합니다.</li>
              <li>단체구매시 판매가의 10% 할인 혜택을 드리나, 주문 수량에 따라 변동 가능합니다.</li>
            </ul>
          </div>
          <div className={`mt-[24px]`}>
            <div className={`bg-[var(--color7)] p-[22px_20px] text-[16px] font-[600] text-[var(--color1)]`}>
              결제 및 출고
            </div>
            <ul className={`Ul-a0b830fa`}>
              <li>상품 준비는 물류 재고 상황에 따라 2~7일 소요될 수 있습니다.</li>
              <li>
                상품이 모두 준비되면 결제 안내를 드리며, 결제 완료 후 상품이 출고됩니다. (결제방법 : 카드결제, 계좌이체,
                무통장입금/현금영수증 발행)
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section data-seq={`20230619174519159`} className={`mt-[70px]`}>
        <div className={`SubContainer2`}>
          <div className={`Title-2`}>
            <div className={`Txt1`}>신청서 작성</div>
            <div className={`Txt2`}>
              <span className={`text-[var(--color2)]`}>* 필수 입력 항목입니다.</span>
            </div>
          </div>
          <FormTable6 />
        </div>
      </section>
      <section data-seq={`20230629082939040`} className={`mt-[60px]`}>
        <div className={`SubContainer2`}>
          <div>
            <div className={`text-[16px] font-[400] text-[var(--color5)]`}>선택상품 수 00개</div>
            <div className={`mt-[15px]`}>
              <div>
                <ItemList1 />
              </div>
              <div>
                <ItemList4 />
                <div className={`my-[40px]`}>
                  <button className={`ButtonLg ButtonStyle4`}>선택상품 삭제</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <FormTable7 />
          </div>
          <article className={`CenterCenter mt-[90px]`}>
            <button className={`ButtonXl ButtonStyle2 w-[230px]`}>접수완료</button>
          </article>
        </div>
      </section>
    </div>
  );
}

PageGroupPurchase.Layout = LayoutBasic;
export default PageGroupPurchase;
