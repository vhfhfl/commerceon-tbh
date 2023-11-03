import TabBtnBox from "@/components/common/TabBtnBox";

function TabuiBar(props) {
  const {className = ""} = props;
  
  return (
    <>
      <div {...props} className={`TabuiBar ${className}`} id="TabuiBar">
        <div className={'Shell h-[var(--tabui-bar-height)] bg-white'}>
          <TabBtnBox theme={`3`} uuid={`74c81f27-eca4-4db4-b549-959fccf76897`}>
            <button className={`On`}>CATEGORIES</button>
            <button>BRAND</button>
          </TabBtnBox>
        </div>
      </div>
    </>
  );
}

export default TabuiBar;