function Btn(props) {
  const { children, className = '', theme = '', size = '' } = props;

  return (
    <>
      {/* prettier-ignore */}
      <style jsx global>{`
        /* 전역 선언 */
        .Btn{ display:inline-flex; align-items:center; justify-content:center; cursor:pointer; }
        .Btn{ padding-left:12px; padding-right:12px; border:1px solid var(--color6); border-radius:var(--form-border-radius); }
        .Btn{ background-color:white; color:var(--color1); }
        .Btn{ height:var(--form-height); font-size:var(--form-font-size); }
        .Btn.SizeSm{ height:var(--form-height-sm); font-size:var(--form-font-size-sm); }
        .Btn.SizeLg{ height:var(--form-height-lg); font-size:var(--form-font-size-lg); }
        .Btn:hover{ background-color:#d3d4d5; border-color:#c6c7c8; }
        .Btn:active{ background-color:#c6c7c8; border-color:#babbbc; }
        .Btn.ThemeDark{ background-color:var(--color1); color:#ffffff; border-color:var(--color1); }
        .Btn.ThemeDark:hover{ background-color:#424649; border-color:#373b3e; }
        .Btn.ThemeDark:active{ background-color:#4d5154; border-color:#373b3e; }
        .Btn.Theme1{ background-color:var(--color2); color:#ffffff; border-color:var(--color2); }
        //.Btn.Theme1:hover{ background-color:var(--color2); border-color:var(--color2); }
        //.Btn.Theme1:active{ background-color:var(--color2); border-color:#0a53be; }
        .Btn.Theme2{ background-color:white; color:var(--color1); border-color:var(--color1); }
        //.Btn.Theme2:hover{ background-color:#5c636a; border-color:#565e64; }
        //.Btn.Theme2:active{ background-color:#565e64; border-color:#51585e; }
        .Btn.Theme3{ background-color:#198754; color:#ffffff; border-color:#198754; }
        .Btn.Theme3:hover{ background-color:#157347; border-color:#146c43; }
        .Btn.Theme3:active{ background-color:#146c43; border-color:#13653f; }
        .Btn.Theme4{ background-color:#dc3545; color:#ffffff; border-color:#dc3545; }
        .Btn.Theme4:hover{ background-color:#bb2d3b; border-color:#b02a37; }
        .Btn.Theme4:active{ background-color:#b02a37; border-color:#a52834; }
        .Btn.Theme5{ background-color:#ffc107; color:#000000; border-color:#ffc107; }
        .Btn.Theme5:hover{ background-color:#ffca2c; border-color:#ffc720; }
        .Btn.Theme5:active{ background-color:#ffcd39; border-color:#ffc720; }
        .Btn.Theme6{ background-color:#0dcaf0; color:#000000; border-color:#0dcaf0; }
        .Btn.Theme6:hover{ background-color:#31d2f2; border-color:#25cff2; }
        .Btn.Theme6:active{ background-color:#3dd5f3; border-color:#25cff2; }
      `}</style>
      <button className={`Btn ${className} ${theme && `Theme${theme}`} ${size && `Size${size}`}`}>{children}</button>
    </>
  );
}

export default Btn;
