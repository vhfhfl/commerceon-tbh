import CheckBox1 from '@/components/form/CheckBox1';
import LayoutSub from '@/layouts/LayoutSub';
import ProductItem17 from '@/modules/ProductItem17';

function PageMyPage10() {
  return (
    <div className={`PageMyPage10`}>
      <section data-seq={`20230810163530`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div>
              <div className={`text-[0]`}>
                <CheckBox1 />
              </div>
              <div className={`mt-[10px]`}>
                <ProductItem17 />
              </div>
            </div>
            <div className={`mt-[30px]`}>
              <button className={`ButtonStyle1 ButtonLg w-[124px]`}>선택상품 삭제</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

PageMyPage10.Layout = LayoutSub;
export default PageMyPage10;
