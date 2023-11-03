import { Util } from '@/scripts/util';
import { Fragment } from 'react';
import ProductItem9 from '@/modules/ProductItem9';

function LayerProductSelect() {
  return (
    <>
      <div className={`LayerProductSelect relative h-[100vh] !max-h-[100vh] w-[330px] bg-white`}>
        <div className={`h-[100vh] overflow-auto p-[15px] pb-[90px]`}>
          <div className={`text-[22px] font-[600] text-[var(--color1)]`}>상품 선택</div>
          <div className={`RR`}>
            <section data-seq={`20230721163553`} className={`mt-[15px]`}>
              <article className={`CenterBetween border-b-2 border-b-[var(--color1)] text-[var(--color1)]`}>
                <div className={`Title-fc63826d`}>카테고리 선택</div>
                <button>
                  <img
                    className={`Icon duration-300 ease-out [.On_>_&]:rotate-180`}
                    src={`/icons/icon_52.svg`}
                    alt={``}
                    onClick={(evt) => {
                      const target = evt.target.closest('button');
                      Util.toggleClass(target, 'On');

                      const el = document.querySelector(`#CategoryTable`);
                      el.classList.toggle('On');
                    }}
                  />
                </button>
              </article>
              <div id={`CategoryTable`} className={`pt-[20px] duration-300 ease-out [&.On]:hidden`}>
                <div className={`space-y-[10px] `}>
                  {Array.from(Array(4)).map((obj, idx) => {
                    return (
                      <Fragment key={idx}>
                        <div
                          className={`SelectBox1 w-full`}
                          onClick={(evt) => {
                            const target = evt.target.closest('.SelectBox1');
                            Util.toggleClass(target, 'On');
                          }}>
                          <button>
                            <div>전체 카테고리</div>
                          </button>
                          <div className={`Options`}>
                            <button>전체 카테고리</button>
                            <button>전체 카테고리</button>
                            <button>전체 카테고리</button>
                          </div>
                        </div>
                      </Fragment>
                    );
                  })}
                </div>
              </div>
            </section>
          </div>
          <section data-seq={`20230721163632`} className={`mt-[20px]`}>
            <div className={`text-[14px] font-[700] text-[var(--color1)]`}>상품검색</div>
            <div className={`mt-[12px]`}>
              <div
                className={`SelectBox1 w-full`}
                onClick={(evt) => {
                  const target = evt.target.closest('.SelectBox1');
                  Util.toggleClass(target, 'On');
                }}>
                <button>
                  <div>상품명</div>
                </button>
                <div className={`Options`}>
                  <button>상품명</button>
                  <button>상품명</button>
                  <button>상품명</button>
                </div>
              </div>
              <div className={`InputUi InputSm mt-[10px] w-full`} data-form-hei={`Md`}>
                <input type={`text`} placeholder={`상품명을 입력해주세요`} />
              </div>
            </div>
            <div className={`mt-[30px]`}>
              <article className={`grid grid-cols-2 items-center justify-between`}>
                <button className={`ButtonLg ButtonStyle1`}>초기화</button>
                <button className={`ButtonLg ButtonStyle2`}>조회</button>
              </article>
            </div>
          </section>
          <section data-seq={`20230721164215`} className={`mt-[36px]`}>
            <div className={`text-[12px] font-[400] leading-[40px] text-[var(--color1)]`}>상품 10건</div>
            <div className={`border-t-2 border-t-[var(--color1)]`}>
              <div
                className={`border-b-[1px] border-b-[var(--color6)] py-[60px] text-center text-[12px] font-[400] text-[var(--color1)]`}>
                등록된 상품이 없습니다.
              </div>
              <div>
                <ProductItem9 />
              </div>
            </div>
          </section>
          <article
            className={`absolute bottom-0 left-0 z-10 grid w-full grid-cols-2 items-center justify-between bg-white px-[15px] py-[10px] shadow-[0_-10px_20px_0px_rgba(0_0_0/0.1)]`}>
            <button className={`PopupButton1`}>닫기</button>
            <button className={`PopupButton2`}>상품추가</button>
          </article>
        </div>
      </div>
    </>
  );
}

export default LayerProductSelect;
