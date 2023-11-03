function TabChildBox(props) {
  const { children, className = '', uuid } = props;
  return (
    <>
      {/*prettier-ignore*/}
      <style jsx global>{`
        /* 전역 선언 */
        .TabChildBox{}
        .TabChildBox > div{ display:none; }
        .TabChildBox > div.On{ display:block; }
      `}</style>
      <div {...props} className={`TabChildBox ${className}`}>
        {children}
      </div>
    </>
  );
}

export default TabChildBox;
