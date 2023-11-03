import LayoutSub4 from '@/layouts/LayoutSub4';
import { Fragment } from 'react';
import { Util } from '@/scripts/util';
import CheckBox1 from '@/components/form/CheckBox1';

function PageEventView1() {
  return (
    <div className={`PageEventView1`}>
      <section data-seq={`20230726141703`} className={`mt-[20px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <article className={`relative flex flex-row items-center justify-between gap-0`}>
              <div>
                <article
                  className={`Montserrat inline-flex flex-row items-center justify-center gap-0 bg-[var(--color8)] px-[12px] py-[8px] text-[10px] font-[500] text-white`}>
                  TBH SHOP
                </article>
                <div className={`mt-[8px] text-[16px] font-[600] text-[var(--color1)]`}>TBH SHOP 신규회원 혜택</div>
              </div>
              <button data-title={`공유하기 버튼`} className={`aspect-square w-[35px]`}>
                <img
                  className={`Icon`}
                  src={`/icons/icon_35.svg`}
                  width={35}
                  height={35}
                  alt={``}
                  onClick={(evt) => {
                    const el = document.querySelector(`#SNSLayer-3ca1ca661244`);
                    el.classList.toggle('On');
                  }}
                />
              </button>
              <div
                id={`SNSLayer-3ca1ca661244`}
                data-title={`SNS 레이어`}
                className={`absolute top-0 right-[35px] z-10 hidden rounded-[100px] border-solid border-[var(--color6)] bg-white [&.On]:block`}
                style={{ filter: 'drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.10))' }}>
                <ul className={`flex flex-row items-center gap-[10px] p-[10px_14px] text-[0px]`}>
                  <li>
                    <button>
                      <img className={`Icon`} src={`/icons/icon_36_1.svg`} alt={``} />
                    </button>
                  </li>
                  <li>
                    <button>
                      <img className={`Icon`} src={`/icons/icon_36_2.svg`} alt={``} />
                    </button>
                  </li>
                  <li>
                    <button>
                      <img className={`Icon`} src={`/icons/icon_36_3.svg`} alt={``} />
                    </button>
                  </li>
                  <li>
                    <button>
                      <img className={`Icon`} src={`/icons/icon_36_4.svg`} alt={``} />
                    </button>
                  </li>
                  <li>
                    <button>
                      <img className={`Icon`} src={`/icons/icon_36_5.svg`} alt={``} />
                    </button>
                  </li>
                </ul>
              </div>
            </article>
            <div className={`mt-[12px]`}>
              <article
                className={`Montserrat flex flex-row items-center justify-between gap-0 border-t-[1px] border-solid border-t-[var(--color6)] text-[12px] leading-[38px] text-[var(--color5)]`}>
                <div className={`font-[500]`}>2023.06.01 ~ 2023.06.31</div>
                <div className={`font-[400]`}>조회수 : 12,584</div>
              </article>
              <div>
                <img className={`aspect-[320/400] w-full object-cover`} src={`https://gifpng.com/320x400`} alt={``} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230726141703`} className={`mt-[20px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`border-t-[3px] border-t-[var(--color1)]`}>
              <div className={`text-[14px] font-[500] leading-[58px] text-[var(--color1)]`}>전체 댓글 수 (234)</div>
              <div className={`space-y-[10px]`}>
                <div className={`InputUi InputLg w-full`} data-form-hei={`Md`}>
                  <input type={`text`} placeholder={`댓글 내용을 입력하세요.`} />
                </div>
                <div className={`border-[1px] border-[var(--color6)] p-[20px]`}>
                  <article className={`flex flex-row items-center gap-[16px]`}>
                    <div className={`text-[14px] font-[600] text-[var(--color1)]`}>김철수</div>
                    <CheckBox1 size={`Sm`}>비밀댓글 달기</CheckBox1>
                  </article>
                  <div className={`mt-[12px]`}>
                    <div className={`Montserrat text-[12px] font-[400] text-[var(--color5)]`}>2023.05.31 15:55:34</div>
                    <div className={`text-[12px] font-[400] text-[var(--color5)]`}>작성자명은 비공개로 등록됩니다.</div>
                  </div>
                  <div className={`mt-[10px] space-y-[12px]`}>
                    <div className={`InputUi InputLg w-full`} data-form-hei={`Md`}>
                      <input type={`text`} placeholder={`비밀번호 입력`} />
                    </div>
                    <div>
                      <article className={`flex flex-row items-center gap-[16px]`}>
                        <div className={`InputUi InputSm RR w-[150px]`} data-form-hei={`Md`}>
                          <input type={`text`} placeholder={`작성자명 입력`} />
                        </div>
                        <CheckBox1 size={`Sm`}>비밀댓글 달기</CheckBox1>
                      </article>
                      <div className={`InputUi InputLg mt-[10px] w-full`} data-form-hei={`Md`}>
                        <input type={`text`} placeholder={`비밀번호 입력`} />
                      </div>
                    </div>
                  </div>
                  <div className={`mt-[14px]`}>
                    <textarea className={`TAREA-1`} placeholder={`댓글 내용을 입력하세요.`}></textarea>
                    <div className={`mt-[8px]`}>
                      <article
                        className={`flex flex-row items-center justify-end gap-0 text-[14px] font-[400] text-[var(--color3)]`}>
                        <div className={`text-[var(--color1)]`}>70</div>
                        <div>/</div>
                        <div>300</div>
                      </article>
                    </div>
                  </div>
                  <div className={`mt-[14px]`}>
                    <textarea
                      className={`TAREA-1`}
                      placeholder={`로그인 후 댓글을 등록해 주세요.`}
                      disabled={true}></textarea>
                  </div>
                  <div className={`mt-[6px]`}>
                    <button className={`ButtonLg ButtonStyle2 Round w-full`}>댓글 등록</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230726161719`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`mt-[20px]`}>
              <article className={`flex flex-row items-center gap-[16px] text-[14px] font-[600] text-[var(--color3)]`}>
                <button className={`text-[var(--color1)]`}>등록순</button>
                <div className={`h-[14px] w-[1px] bg-[var(--color3)] text-[0px]`}>Bar</div>
                <button>추천순</button>
              </article>
              <div className={`mt-[20px]`}>
                <ul
                  className={`divide-y-[1px] divide-solid divide-[var(--color6)] border-y-[1px] border-solid border-y-[var(--color6)]`}>
                  {Array.from(Array(2)).map((obj, idx) => {
                    return (
                      <Fragment key={idx}>
                        <li className={`py-[16px]`}>
                          <article className={`flex flex-row items-center justify-between gap-0`}>
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
                            <div>
                              {idx == 0 ? (
                                <article className={`flex flex-row items-center gap-[6px]`}>
                                  <button className={`ButtonMd ButtonStyle4 Round`}>숨김</button>
                                  <button className={`ButtonMd ButtonStyle4 Round`}>
                                    <span className={`text-[var(--color13)]`}>신고</span>
                                  </button>
                                </article>
                              ) : (
                                <article className={`flex flex-row items-center gap-[6px]`}>
                                  <button className={`ButtonMd ButtonStyle4 Round`}>수정</button>
                                  <button className={`ButtonMd ButtonStyle4 Round !text-[var(--color13)]`}>
                                    <span className={`text-[var(--color13)]`}>삭제</span>
                                  </button>
                                </article>
                              )}
                            </div>
                          </article>
                          <div className={`mt-[20px] text-[12px] font-[400] leading-[22px] text-[var(--color5)]`}>
                            평소 너무 좋아하는 브랜드입니다. 이벤트 응모합니다.
                            <br />
                            평소 너무 좋아하는 브랜드입니다. 이벤트 응모합니다.
                            <br />
                            3줄 고정 입니다.
                          </div>
                          <article className={`mt-[10px] flex flex-row items-center justify-between gap-0`}>
                            <div className={`flex flex-row items-center gap-[5px]`}>
                              <button className={`h-[21px] text-[12px] font-[600] text-[var(--color1)]`}>
                                댓글 더보기
                              </button>
                              <button
                                className={`h-[21px] text-[12px] font-[600] text-[var(--color1)] underline underline-offset-2`}>
                                댓글 확인하기
                              </button>
                              <button className={`h-[21px] text-[12px] font-[600] text-[var(--color1)]`}>
                                댓글 닫기
                              </button>
                            </div>
                            <div>
                              <button className={`ButtonMd ButtonStyle4 Round w-[60px]`}>
                                <img
                                  className={`Icon duration-300 ease-out will-change-auto [button.On_&]:hidden`}
                                  src={`/icons/icon_64_1.svg`}
                                  alt={``}
                                  onClick={(evt) => {
                                    const target = evt.target.closest('button');
                                    Util.toggleClass(target, 'On');
                                  }}
                                />
                                <img
                                  className={`Icon hidden duration-300 ease-out will-change-auto [button.On_&]:block`}
                                  src={`/icons/icon_64_2.svg`}
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

PageEventView1.Layout = LayoutSub4;
export default PageEventView1;
