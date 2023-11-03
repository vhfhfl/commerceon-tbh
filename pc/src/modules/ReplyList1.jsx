import CheckBox1 from '@/components/form/CheckBox1';
import { Fragment } from 'react';
import { Util } from '@/scripts/util';

function ReplyList1(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`ReplyList1 ${className}`}>
        <div className={`border-t-[3px] border-t-[var(--color1)] pt-[20px]`}>
          <article className={`flex flex-row items-center justify-between gap-[0]`}>
            <div>
              <div className={`text-[16px] font-[500] text-[var(--color1)]`}>전체 댓글 수 (234)</div>
            </div>
            <div>
              <article
                className={`flex flex-row items-center justify-center gap-[16px] text-[14px] font-[600] text-[var(--color3)]`}>
                <button className={`text-[var(--color1)]`}>등록순</button>
                <div className={`h-[14px] w-[1px] bg-[var(--color3)] text-[0px]`}>Bar</div>
                <button>추천순</button>
              </article>
            </div>
          </article>
          <div className={`mt-[17px]`}>
            <article className={`flex flex-row items-center gap-[16px]`}>
              <div className={`text-[14px] font-[600] text-[var(--color1)]`}>김철수</div>
              <CheckBox1 size={`Sm`}>비밀댓글 달기</CheckBox1>
              <input className={`TextInput2 w-[180px]`} type={`text`} placeholder={`비밀번호 입력`} />
            </article>
            <div className={`Montserrat text-[12px] font-[400] text-[var(--color5)]`}>2023.05.31 15:55:34</div>
            <div className={`text-[12px] font-[400] text-[var(--color5)]`}>작성자명은 비공개로 등록됩니다.</div>
            <div className={`mt-[14px]`}>
            <article className={`flex flex-row items-center gap-[16px]`}>
              <input className={`TextInput2 w-[150px]`} type={`text`} placeholder={`작성자명 입력`} />
              <CheckBox1 size={`Sm`}>비밀댓글 달기</CheckBox1>
              <input className={`TextInput2 w-[180px]`} type={`text`} placeholder={`비밀번호 입력`} />
            </article>
            </div>
            <div className={`relative`}>
              <textarea className={`TAREA-1 mt-[14px]`} placeholder={`댓글 내용을 입력하세요.`}></textarea>
              <article
                className={`absolute bottom-[6px] right-[10px] z-10 flex flex-row items-center justify-center gap-[0] text-[14px] font-[400] text-[var(--color3)]`}>
                <div className={`text-[var(--color1)]`}>70</div>
                <div>/</div>
                <div>300</div>
              </article>
            </div>
            <div>
              <textarea
                className={`TAREA-1 mt-[14px]`}
                placeholder={`로그인 후 댓글을 등록해 주세요.`}
                disabled={true}></textarea>
            </div>
            <article className={`mt-[14px] flex flex-row items-center gap-[10px]`}>
              <button className={`ButtonLg ButtonStyle2 w-[175px]`}>댓글 등록</button>
              <button className={`ButtonLg ButtonStyle2 w-[175px]`}>댓글 저장</button>
            </article>
          </div>
        </div>
        <ul className={`mt-[20px] divide-y-[1px] divide-solid divide-[var(--color6)] border-y-[1px] border-y-[var(--color6)]`}>
          {Array.from(Array(10)).map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <li className={`pt-[30px] pb-[20px]`}>
                  <article className={`flex flex-row items-center justify-between gap-[0]`}>
                    <div>
                      <div
                        className={`flex flex-row items-center gap-[6px] text-[14px] font-[600] leading-[24px] text-[var(--color1)]`}>
                        <div>비공개</div>
                        <div className={`text-[var(--color5)]`}>김철수</div>
                      </div>
                      <div className={`Montserrat text-[12px] font-[400] leading-[22px] text-[var(--color5)]`}>
                        2023.05.31 15:55:34
                      </div>
                    </div>
                    <article className={`flex flex-row items-center justify-center gap-[8px]`}>
                      <button className={`ButtonMd ButtonStyle4 Round`}>숨김</button>
                      <button className={`ButtonMd ButtonStyle4 Round`}>수정</button>
                      <button className={`ButtonMd ButtonStyle4 Round`}>
                        <span className={`text-[var(--color13)]`}>신고</span>
                      </button>
                      <button className={`ButtonMd ButtonStyle4 Round`}>
                        <span className={`text-[var(--color13)]`}>삭제</span>
                      </button>
                    </article>
                  </article>
                  <div className={`text-[14px] font-[400] leading-[22px] text-[var(--color5)]`}>
                    평소 너무 좋아하는 브랜드입니다. 이벤트 응모합니다.
                    <br />
                    평소 너무 좋아하는 브랜드입니다. 이벤트 응모합니다.
                    <br />
                    3줄 고정 입니다.
                  </div>
                  <article className={`mt-[10px] flex flex-row items-center justify-between gap-[0]`}>
                    <div className={`flex flex-row items-center gap-[5px]`}>
                      <button className={`h-[21px] text-[12px] font-[600] text-[var(--color1)]`}>댓글 더보기</button>
                      <button
                        className={`h-[21px] text-[12px] font-[600] text-[var(--color1)] underline underline-offset-2`}>
                        댓글 확인하기
                      </button>
                      <button className={`h-[21px] text-[12px] font-[600] text-[var(--color1)]`}>댓글 닫기</button>
                    </div>
                    <div>
                      <button className={`ButtonMd ButtonStyle4 Round`}>
                        <img
                          className={`Icon [button.On_&]:hidden`}
                          src={`/icons/zco_76_1.svg`}
                          alt={``}
                          onClick={(evt) => {
                            const target = evt.target.closest('button');
                            Util.toggleClass(target, 'On');
                          }}
                        />
                        <img
                          className={`Icon hidden [button.On_&]:block`}
                          src={`/icons/zco_76_2.svg`}
                          alt={``}
                          onClick={(evt) => {
                            const target = evt.target.closest('button');
                            Util.toggleClass(target, 'On');
                          }}
                        />
                        25
                      </button>
                    </div>
                  </article>
                </li>
              </Fragment>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default ReplyList1;
