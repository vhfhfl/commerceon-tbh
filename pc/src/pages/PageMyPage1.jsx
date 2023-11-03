import LayoutBasic from '@/layouts/LayoutBasic';
import Desc1 from '@/modules/Desc1';
import GradeBox2 from '@/modules/GradeBox2';
import InfoTable6 from '@/modules/InfoTable6';
import MyPageAside from '@/modules/MyPageAside';
import OrderTable2 from '@/modules/OrderTable2';
import ProductItem6 from '@/modules/ProductItem6';
import ProductTable2 from '@/modules/ProductTable2';
import { Fragment } from 'react';

function PageMyPage1() {
  return (
    <div className={`PageMyPage1`}>
      <div className={`SubContainer mt-[120px]`}>
        <article className={`grid grid-cols-[290px_1fr] gap-[0]`}>
          <div data-seq='20230620164534434'>
            <MyPageAside />
          </div>
          <div data-seq='20230620164538119'>
            <section className={`relative flex flex-row items-center justify-between gap-[0]`}>
              <div>
                <div className={`text-[28px] font-[600] text-[var(--color1)]`}>
                  홍길동님의 05월 회원 등급은 <span className={`text-[#B82C4E]`}>STAR</span>입니다.
                </div>
              </div>
              <div>
                <button
                  className={`ButtonMd ButtonStyle4`}
                  onClick={(evt) => {
                    const el = document.querySelector(`#GradeLayer-ade543249411`);
                    el.classList.toggle('On');
                  }}>
                  등급혜택보기
                </button>
                <div
                  id={`GradeLayer-ade543249411`}
                  className={`absolute top-[51px] right-0 z-10 hidden bg-white [&.On]:block`}
                  style={{ filter: 'drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.10))' }}>
                  <div className={`w-[320px] p-[20px]`}>
                    <div className={`text-[18px] font-[600] text-[var(--color1)]`}>등급 혜택 안내</div>
                    <div className={`mt-[28px]`}>
                      <InfoTable6 />
                    </div>
                  </div>
                  <div className={`mt-[20px]`}>
                    <button className={`PopupButton2 w-full`}>닫기</button>
                  </div>
                </div>
              </div>
            </section>
            <section data-seq={`20230620171252095`} className={`mt-[25px]`}>
              <GradeBox2 />
            </section>
            <section data-seq={`20230621092117436`} className={`mt-[36px]`}>
              <div className={`Title-2 mb-[8px]`}>
                <div className={`Txt1`}>진행중인 주문</div>
                <div className={`Txt2`}>최근 30일 내에 진행중인 주문 정보입니다</div>
              </div>
              <OrderTable2 />
            </section>
            <section data-seq={`20230621092117436`} className={`mt-[92px]`}>
              <div className={`Title-2 mb-[8px]`}>
                <div className={`Txt1`}>최근 주문 정보</div>
                <div className={`Txt2`}>최근 30일 내에 진행중인 주문 정보입니다</div>
              </div>
              <div className={``}>
                <ProductTable2 />
              </div>
              <div className={`mt-[20px]`}>
                <Desc1 />
              </div>
            </section>
            <section data-seq={`20230621092117436`} className={`mt-[147px]`}>
              <div className={`Title-2 mb-[8px]`}>
                <div className={`Txt1`}>최근 본 상품</div>
                <div className={`Txt2`}>홍길동님께서 본 최근 상품입니다</div>
              </div>
              <div className={`border-t-[3px] border-solid border-t-[var(--color1)] pt-[32px]`}>
                <article className={`grid grid-cols-4 items-center justify-center gap-[10px]`}>
                  {Array.from(Array(4)).map((obj4, idx4) => {
                    return (
                      <Fragment key={idx4}>
                        <ProductItem6 idx={idx4} />
                      </Fragment>
                    );
                  })}
                </article>
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}

PageMyPage1.Layout = LayoutBasic;
export default PageMyPage1;
