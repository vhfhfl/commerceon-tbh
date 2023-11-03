import LayoutBasic from '@/layouts/LayoutBasic';
import DetailTitle1 from '@/modules/DetailTitle1';
import ReplyList1 from '@/modules/ReplyList1';

function PageEventView1() {
  return (
    <div className={`PageEventView1`}>
      <div className={`SubContainer mt-[110px]`}>
        <section data-seq={`20230702213353133`}>
          <div>
            <DetailTitle1 />
          </div>
          <div className={`mt-[40px]`}>
            <img src={`https://gifpng.com/1400x884/`} alt={``} />
          </div>
        </section>
        <section data-seq={`20230702214334574`} className={`mt-[80px]`}>
          <div>
            <ReplyList1 />
          </div>
        </section>
      </div>
    </div>
  );
}

PageEventView1.Layout = LayoutBasic;
export default PageEventView1;
