import LayoutSub from '@/layouts/LayoutSub';
import { Fragment } from 'react';
import FormTable6 from '@/modules/FormTable6';
import { Util } from '@/scripts/util';
import FormTable7 from '@/modules/FormTable7';

function PageGroupPurchase() {
  const help_desc_data = [
    {
      num: '1',
      desc: '단체구매 신청서 작성',
    },
    {
      num: '2',
      desc: '신청서 확인 (상품/수량 취합)',
    },
    {
      num: '3',
      desc: '상품 준비 (2~7일 소요)',
    },
    {
      num: '4',
      desc: '결제/출고',
    },
  ];

  return (
    <div className={`PageGroupPurchase`}>
      <div className={`H-Box mt-[20px]`}>
        <div className={`Inner`}>
          <section data-seq={`20230702173649093`}>
            <div className={`Title-3`}>
              <div className={`Txt1`}>단체구매 진행안내</div>
            </div>
            <div
              className={`space-y-[4px] border-t-[2px] border-b-[1px] border-t-[var(--color1)] border-b-[var(--color6)] py-[14px]`}>
              {help_desc_data.map((obj, idx) => {
                const { num, desc } = obj;
                return (
                  <Fragment key={idx}>
                    <article className={`grid grid-cols-[60px_1fr] items-center gap-0 bg-[var(--color7)] py-[20px]`}>
                      <div className={`Montserrat CenterCenter text-[14px] font-[600] text-[var(--color1)]`}>{num}</div>
                      <div className={`ml-[10px] text-[14px] font-[600] text-[var(--color1)]`}>{desc}</div>
                    </article>
                  </Fragment>
                );
              })}
            </div>
          </section>
          <section data-seq={`20230720153533`} className={`mt-[40px]`}>
            <div className={`bg-[var(--color7)] pl-[16px] text-[12px] font-[600] leading-[40px] text-[var(--color1)]`}>
              상품 구매 안내
            </div>
            <div className={`mt-[15px]`}>
              <ul
                className={`Ul-f7c531377542 space-y-[5px] text-[12px] font-[400] leading-[18px] text-[var(--color1)]`}>
                <li>구매 수량은 50벌 이상부터 단체구매로 간주됩니다.</li>
                <li>문의 시, 진행 일정 및 구매상품/수량에 대해 전달주시면 더 빠른 응대가 가능합니다.</li>
                <li>단체구매시 판매가의 10% 할인 혜택을 드리나, 주문 수량에 따라 변동 가능합니다.</li>
              </ul>
            </div>
          </section>
          <section data-seq={`20230720154619`} className={`mt-[40px]`}>
            <div className={`bg-[var(--color7)] pl-[16px] text-[12px] font-[600] leading-[40px] text-[var(--color1)]`}>
              결제 및 출고
            </div>
            <div className={`mt-[15px]`}>
              <ul
                className={`Ul-f7c531377542 space-y-[5px] text-[12px] font-[400] leading-[18px] text-[var(--color1)]`}>
                <li>상품 준비는 물류 재고 상황에 따라 2~7일 소요될 수 있습니다.</li>
                <li>
                  상품이 모두 준비되면 결제 안내를 드리며, 결제 완료 후 상품이 출고됩니다. (결제방법 : 카드결제,
                  계좌이체, 무통장입금/현금영수증 발행)
                </li>
              </ul>
            </div>
          </section>
          <section data-seq={`20230720155028`} className={`mt-[40px]`}>
            <div className={`Title-3`}>
              <div className={`Txt1`}>신청서 작성</div>
              <div className={`Txt2 !text-[var(--color2)]`}>*필수 입력 항목입니다.</div>
            </div>
            <div>
              <FormTable6 />
            </div>
            <div className={`mt-[20px]`}>
              <article className={`CenterBetween !gap-[10px]`}>
                <div
                  className={`SelectBox1 grow`}
                  data-form-hei={`Lg`}
                  onClick={(evt) => {
                    const target = evt.target.closest('.SelectBox1');
                    Util.toggleClass(target, 'On');
                  }}>
                  <button>
                    <span className={`text-[var(--color2)]`}>*</span>
                    브랜드 선택
                  </button>
                  <div className={`Options`}>
                    <button>브랜드 선택</button>
                    <button>브랜드 선택</button>
                    <button>브랜드 선택</button>
                  </div>
                </div>
                <button className={`ButtonLg ButtonStyle2 Round grow !text-[14px]`}>
                  <span className={`text-[var(--color2)]`}>*</span>
                  상품선택
                </button>
              </article>
            </div>
          </section>
          <section data-seq={`20230721104645`} className={`mt-[20px]`}>
            <div className={`text-[12px] font-[400] text-[var(--color5)]`}>선택상품 수 00개</div>
            <div className={`mt-[14px]`}>
              <FormTable7 />
            </div>
            <div className={`mt-[40px]`}>
              <button className={`ButtonXl ButtonStyle2 w-full`}>접수완료</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

PageGroupPurchase.Layout = LayoutSub;
export default PageGroupPurchase;
