import H1 from "@/components/common/H1";
import LayoutBasic from '@/layouts/LayoutBasic';
import {Fragment} from "react";

function PageButton() {
  return (
    <div className={`PageButton p-[10px]`}>
      <H1>버튼 가이드 벗어나는 버튼 모음</H1>
      <br />
      <article className={`grid grid-cols-5 items-center justify-center gap-[10px]`}>
        {Array.from(Array(100)).map((obj, idx) => {
          return (
            <Fragment key={idx}>
              <button className={`Btn_${idx + 1}`}>Btn_{idx + 1}</button>
            </Fragment>
          );
        })}
      </article>
    </div>
  );
}

PageButton.Layout = LayoutBasic;
export default PageButton;
