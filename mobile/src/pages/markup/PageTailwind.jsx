import LayoutMarkup from "@/layouts/LayoutMarkup";
import {Fragment} from "react";
import H1 from "@/components/common/H1";
function PageTailwind() {
  return (
    <div className={`PageTailwind`}>
      <section data-seq="20230331090101465">
        <H1>Breakpoint</H1>
        <div>
          <div className={`hidden text-center text-white p-[10px] max-sm:block max-sm:bg-[red]`}>XS</div>
          <div className={`hidden text-center text-white p-[10px] sm:max-md:block sm:max-md:bg-[green]`}>SM</div>
          <div className={`hidden text-center text-white p-[10px] md:max-lg:block md:max-lg:bg-[blue]`}>MD</div>
          <div className={`hidden text-center text-white p-[10px] lg:max-xl:block lg:max-xl:bg-[deeppink]`}>LG</div>
          <div className={`hidden text-center text-white p-[10px] xl:max-2xl:block xl:max-2xl:bg-[gold]`}>XL</div>
          <div className={`hidden text-center text-white p-[10px] 2xl:block 2xl:bg-[pink]`}>2XL</div>
        </div>
      </section>
      <br/><br/><br/>
    </div>
  );
}

PageTailwind.Layout = LayoutMarkup;
export default PageTailwind;