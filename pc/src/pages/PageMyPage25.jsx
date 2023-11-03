import LayoutBasic from '@/layouts/LayoutBasic';
import MyPageAside from '@/modules/MyPageAside';
import Paging1 from '@/modules/Paging1';
import { Fragment } from 'react';
import ReviewItem2 from '@/modules/ReviewItem2';

function PageMyPage25() {
  return (
    <div className={`PageMyPage25`}>
      <div className={`SubContainer mt-[120px]`}>
        <article className={`grid grid-cols-[290px_1fr] gap-[0]`}>
          <div>
            <MyPageAside />
          </div>
          <div>
            <section data-seq={`20230710133111456`} className={``}>
              <div className={`Title-1`}>
                <div className={`Txt1`}>나의 리뷰</div>
                {/*<div className={`Txt2`}>각 항목별로 더 많은 궁금증을 해결하실 수 있습니다.</div>*/}
              </div>
              <div className={`TabUi2 mt-[88px]`}>
                {['작성 가능한 리뷰 (4)', '내가 작성한 리뷰 (126)'].map((obj, idx) => {
                  return (
                    <Fragment key={idx}>
                      <button className={`${idx == 1 && `On`}`}>{obj}</button>
                    </Fragment>
                  );
                })}
              </div>
              <div className={`mt-[20px] text-[18px] font-[400] leading-[28px] text-[var(--color5)]`}>
                4개의 리뷰를 작성하시면, 최대 2,000원의 적립금을 받을 수 있습니다.
                <br />
                배송이 완료된 상품만 목록에 노출됩니다.
              </div>
              <div className={`mt-[21px]`}>
                <ReviewItem2 />
              </div>
              <div className={`mt-[50px]`}>
                <Paging1 />
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}

PageMyPage25.Layout = LayoutBasic;
export default PageMyPage25;
