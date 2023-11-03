function TextArea(props) {
  const { children, className = '', theme = '' } = props;

  return (
    <>
      {/* prettier-ignore */}
      <style jsx global>{`
        /* 전역 선언 */
        .TAREA-1{ --padding:8px; }
        .TAREA-1{ overflow-y:scroll; height:150px; border:1px solid var(--form-border-color); border-radius:var(--form-border-radius); outline:none; }
        .TAREA-1{ font-size:var(--form-font-size); line-height:140%; }
        .TAREA-1{ padding:var(--padding); display:block; width:100%; }
        .TAREA-1:focus{ border-color:#86b7fe; box-shadow:0 0 0 0.25rem rgb(13 110 253 / 25%); }
      `}</style>

      <div {...props} className={`TextArea TAREA-1 ${className} ${theme && `Theme-${theme}`}`}>
        {children}
      </div>
    </>
  );
}

export default TextArea;
