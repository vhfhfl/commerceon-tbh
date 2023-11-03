import LoginBar from '@/modules/LoginBar';

function HeaderCategory() {
  // 어떤게 필요하지?
  // 자식의 포지션이 공중에 뜨더라도 부모의 너비가 유지되도록 하는 방법이 필요함

  return (
    <>
      <header className={`FixedBox`}>
        <div className={'Shell SyncHeight top-[0]'}>
          <LoginBar />
        </div>
      </header>
    </>
  );
}

export default HeaderCategory;
