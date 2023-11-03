function Menu1(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`Menu1 ${className}`}>
        <div className={`TabUi-1`}>
          <article
            className={`mx-auto grid w-[1120px] grid-cols-[repeat(auto-fit,minmax(0,1fr))] items-center justify-center gap-[21px]`}>
            <button className={`On`}>ALL</button>
            <button>
              MIND BRIDGE <br />
              MAN
            </button>
            <button>
              MIND BRIDGE <br />
              WOMEN
            </button>
            <button>JUCY JUDY</button>
            <button>BASIC HOUSE</button>
            <button>AQUASCUTUM</button>
            <button>OUTLET</button>
          </article>
        </div>
      </div>
    </>
  );
}

export default Menu1;
