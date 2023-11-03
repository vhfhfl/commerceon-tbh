function Table(props) {
  const { children, className = '', theme = '' } = props;

  return (
    <>
      {/*prettier-ignore*/}
      <style jsx global>{`
        /* 전역 선언 */
        .TABLE-1{ table-layout:fixed; border-collapse:collapse; width:100%; }
        .TABLE-1 > * > *{ border:1px dashed #999999; }
        .TABLE-1 > thead{ }
        .TABLE-1 > thead > tr{ }
        .TABLE-1 > thead > tr > *{ background-color:#333333; }
        .TABLE-1 > thead > tr > *{ font-weight:600; font-size:16px; color:white; line-height:140%; }
        .TABLE-1 > tbody{  }
        .TABLE-1 > tbody > tr{  }
        .TABLE-1 > tbody > tr > td{ padding-left:10px; padding-right:10px; }
      `}</style>
      <table {...props} className={`TABLE-1 ${className} ${theme && `Theme-${theme}`}`}>
        {children}
      </table>
    </>
  );
}

export default Table;
