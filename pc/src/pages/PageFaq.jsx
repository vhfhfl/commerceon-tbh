import LayoutBasic from '@/layouts/LayoutBasic';
import FaqList1 from '@/modules/FaqList1';
import FilterBox1 from '@/modules/FilterBox1';
import MyPageAside2 from '@/modules/MyPageAside2';
import SearchBox1 from '@/modules/SearchBox1';

function PageFaq() {
  return (
    <div className={`PageFaq`}>
      <div className={`SubContainer mt-[120px]`}>
        <article className={`grid grid-cols-[290px_1fr] gap-[0]`}>
          <div>
            <MyPageAside2 />
          </div>
          <div>
            <section data-seq={`20230626153455060`} className={``}>
              <div>
                <SearchBox1 />
              </div>
              <div className={`mt-[50px] mb-[30px] text-center text-[28px] font-[600] text-[var(--color1)]`}>
                <span className={`text-[var(--color2)]`}>“교환”</span> FAQ 검색결과
              </div>
            </section>
            <section data-seq={`20230626160608650`} className={`mt-[36px]`}>
              <div className={`Title-2`}>
                <div className={`Txt1`}>FAQ</div>
                <div className={`Txt2`}>각 항목별로 더 많은 궁금증을 해결하실 수 있습니다.</div>
              </div>
              <div>
                <FilterBox1 />
              </div>
            </section>
            <section data-seq={`20230626160608650`} className={`mt-[36px]`}>
              <div className={`Title-2`}>
                <div className={`Txt1`}>질문 카테고리</div>
                {/*<div className={`Txt2`}>각 항목별로 더 많은 궁금증을 해결하실 수 있습니다.</div>*/}
              </div>
              <div>
                <FaqList1 />
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}

PageFaq.Layout = LayoutBasic;
export default PageFaq;
