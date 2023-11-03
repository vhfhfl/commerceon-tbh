function TextInput(props) {
  const { children, theme = '', size = '' } = props;

  return (
    <>
      {/* prettier-ignore */}
      <style jsx global>{`
        /* 전역 선언 */
        /**/
        .INPUT-1{ --padding:8px; }
        .INPUT-1{ border:1px solid var(--form-border-color); border-radius:var(--form-border-radius); outline:none; }
        .INPUT-1{ height:var(--form-height); font-size:var(--form-font-size); }
        .INPUT-1{ padding-left:var(--padding); padding-right:var(--padding); }
        .INPUT-1:focus{ border-color:#86b7fe; box-shadow:0 0 0 0.25rem rgb(13 110 253 / 25%); }
        .INPUT-1.SM{ height:var(--form-height-sm); font-size:var(--form-font-size-sm); }
        .INPUT-1.LG{ height:var(--form-height-lg); font-size:var(--form-font-size-lg); }
      `}</style>
      <input {...props} className={`INPUT-1 ${size}`} type={`text`} />
    </>
  );
}

export default TextInput;
