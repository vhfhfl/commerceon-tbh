import LayoutBasic from '@/layouts/LayoutBasic';

function PageButton() {
  return (
    <div className={`PageButton p-[10px]`}>
      <div>버튼 가이드 벗어나는 버튼 모음</div>
      <br/>
      <article className={`grid grid-cols-5 items-center justify-center gap-[10px]`}>
        {Array.from(Array(100)).map((obj, idx) => {
          return <button className={`Btn_${idx + 1}`}>Btn_{idx + 1}</button>;
        })}
      </article>
    </div>
  );
}

PageButton.Layout = LayoutBasic;
export default PageButton;
