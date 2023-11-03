import CheckBox1 from '@/components/form/CheckBox1';
import LayoutSub from '@/layouts/LayoutSub';
import ProductItem18 from '@/modules/ProductItem18';

function PageMyPage13() {
  return (
    <div className={`PageMyPage13`}>
      <section data-seq={`20230810163532`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div>
              <div className={`text-[0]`}>
                <CheckBox1 />
              </div>
              <div className={`mt-[10px]`}>
                <ProductItem18 />
              </div>
            </div>
            <div className={`mt-[30px]`}>
              <button className={`ButtonStyle1 ButtonLg`}>선택상품 삭제</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

PageMyPage13.Layout = LayoutSub;
export default PageMyPage13;
