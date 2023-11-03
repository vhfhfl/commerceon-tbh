import H1 from '@/components/common/H1';
import LayoutMarkup from '@/layouts/LayoutMarkup';

function PageTailwind() {
  return (
    <div className={`PageTailwind`}>
      <section data-seq='20230331090101465'>
        <H1>Breakpoint</H1>
        <div>
          <div className={`RR p-[10px]`}>
            <div>
              <div className={`hidden xs:max-sm:block`}>XS</div>
              <div className={`hidden sm:max-md:block`}>SM</div>
              <div className={`hidden md:max-lg:block`}>MD</div>
              <div className={`hidden lg:max-xl:block`}>LG</div>
              <div className={`hidden xl:max-2xl:block`}>XL</div>
              <div className={`hidden 2xl:max-3xl:block`}>2XL</div>
              <div className={`hidden 3xl:block`}>3XL</div>
            </div>
          </div>
          <br />
          <div className={`RR p-[10px]`}>
            <div>
              <div className={`hidden xs:block`}>XS</div>
              <div className={`hidden sm:block`}>SM</div>
              <div className={`hidden md:block`}>MD</div>
              <div className={`hidden lg:block`}>LG</div>
              <div className={`hidden xl:block`}>XL</div>
              <div className={`hidden 2xl:block`}>2XL</div>
              <div className={`hidden 3xl:block`}>3XL</div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
    </div>
  );
}

PageTailwind.Layout = LayoutMarkup;
export default PageTailwind;
