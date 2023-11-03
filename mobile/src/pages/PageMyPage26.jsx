import LayoutSub from '@/layouts/LayoutSub';
import FormTable16 from '@/modules/FormTable16';
import FormTable17 from '@/modules/FormTable17';

function PageMyPage26() {
  return (
    <div className={`PageMyPage26`}>
      <section data-seq={`20230814171511`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`Title-3`}>
              <div className={`Txt1`}>기본정보</div>
            </div>
            <div>
              <FormTable16 />
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230816101432`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`Title-3`}>
              <div className={`Txt1`}>부가정보</div>
            </div>
            <div>
              <FormTable17 />
            </div>
            <div className={`mt-[40px]`}>
              <button className={`ButtonStyle2 ButtonXl w-full`}>확인</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

PageMyPage26.Layout = LayoutSub;
export default PageMyPage26;
