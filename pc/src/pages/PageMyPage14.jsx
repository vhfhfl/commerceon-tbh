import LayoutBasic from '@/layouts/LayoutBasic';
import DateFilter2 from '@/modules/DateFilter2';
import GradeBox2 from '@/modules/GradeBox2';
import InfoTable6 from '@/modules/InfoTable6';
import MyPageAside from '@/modules/MyPageAside';
import Paging1 from '@/modules/Paging1';
import ProductTable14 from '@/modules/ProductTable14';

function PageMyPage12() {
  return (
    <div className={`PageMyPage12`}>
      <div className={`SubContainer mt-[120px]`}>
        <div className={`grid grid-cols-[290px_1fr] gap-[0]`}>
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
                  <div className={`p-[20px] w-[320px]`}>
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

            <section data-seq={`20230621124610190`} className={`mt-[40px]`}>
              <div className={`Title-2 mb-[8px]`}>
                <div className={`Txt1`}>마일리지</div>
                {/*<div className={`Txt2`}>최근 30일 내에 진행중인 주문 정보입니다</div>*/}
              </div>
              <div>
                <DateFilter2 />
              </div>
            </section>
            <section data-seq={`20230710122907577`} className={`mt-[58px]`}>
              <article className={`mb-[8px] flex flex-row items-center justify-between gap-[0]`}>
                <div>
                  <div className={`Title-2`}>
                    <div className={`Txt1`}>2023-05-04~2023-05019까지의 마일리지 내역 총 00건</div>
                    {/*<div className={`Txt2`}>최근 30일 내에 진행중인 주문 정보입니다</div>*/}
                  </div>
                </div>
                <div>
                  <div className={`text-[16px] font-[400] text-[var(--color2)]`}>사용가능 마일리지: 000원</div>
                </div>
              </article>
              <div>
                <ProductTable14 />
              </div>
              <div className={`mt-[50px]`}>
                <Paging1 />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

PageMyPage12.Layout = LayoutBasic;
export default PageMyPage12;
