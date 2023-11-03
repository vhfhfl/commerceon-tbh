import TabBtnBox from '@/components/common/TabBtnBox';
import TabChildBox from '@/components/common/TabChildBox';
import LayoutCategory from '@/layouts/LayoutCategory';
import BnenefitsList from '@/modules/BnenefitsList';
import BrandMenu2 from '@/modules/BrandMenu2';
import TreeMenu from '@/modules/TreeMenu';
import {Data} from '@/scripts/data_manager';

function PageCategory() {
  return (
    <div className={`PageCategory`}>
      <div className={`RR FixedBox`}>
        <div className={'Shell SyncHeight bg-white'}>
          <TabBtnBox theme={`3`} uuid={`74c81f27-eca4-4db4-b549-959fccf76897`}>
            <button className={`On`}>Brand +</button>
            <button>Categories</button>
            <button>Benefits</button>
          </TabBtnBox>
        </div>
      </div>
      <div className={`mt-[10px]`}>
        <TabChildBox uuid='74c81f27-eca4-4db4-b549-959fccf76897'>
          <div data-seq={`Brand`} className={`On`}>
            <BrandMenu2 />
          </div>
          <div data-seq={`Categories`}>
            <TreeMenu data={Data.category}></TreeMenu>
          </div>
          <div data-seq={`Benefits`}>
            <BnenefitsList />
          </div>
        </TabChildBox>
      </div>
    </div>
  );
}

PageCategory.Layout = LayoutCategory;
export default PageCategory;
