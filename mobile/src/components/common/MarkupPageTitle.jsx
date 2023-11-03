function MarkupPageTitle({ children }) {
  return (
    <div className={`MarkupPageTitle`}>
      <div
        className={`mb-[20px] flex flex-row items-center justify-center rounded-[5px] border-[2px] border-black bg-white p-[10px] text-[24px] font-[600] text-black`}>
        {children}
      </div>
    </div>
  );
}

export default MarkupPageTitle;
