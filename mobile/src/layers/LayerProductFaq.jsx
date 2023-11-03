import { useRouter } from 'next/router';
import CheckBox1 from '@/components/form/CheckBox1';

function LayerProductFaq() {
  const router = useRouter();

  return (
    <div className={`LayerProductFaq w-[360px] bg-white`}>
      <article className={`grid h-[var(--sub-page-title-bar-hei)] grid-cols-1 items-end justify-center gap-0`}>
        <div className={`relative flex h-[46px] flex-row items-center justify-center`}>
          <div className={`absolute top-[0] left-[4px] z-10 flex h-full flex-row items-center justify-center`}>
            <button
              className={`flex h-[40px] w-[40px] flex-row items-center justify-center text-[0px]`}
              onClick={(evt) => {
                router.back();
              }}>
              <img className={`Icon`} src={`/icons/zco_3.svg`} alt={``} />
            </button>
          </div>
          <div>
            <div className={`text-[16px] font-[500] text-[var(--color1)]`}>상품 문의하기</div>
          </div>
          <div className={`absolute top-[0] right-[20px] z-10 flex h-full flex-row items-center justify-center`}>
            <a className={`h-[24px] w-[24px] text-[0px]`} href={`https://www.google.com`} target={`_blank`}>
              <img className={`Icon`} src={`/icons/icon_10_2_on.svg`} alt={``} />
            </a>
          </div>
        </div>
      </article>
      <div className={`H-Box`}>
        <div className={`Inner`}>
          <div className={`py-[20px]`}>
            <article className={`grid grid-cols-[58px_1fr] items-start gap-[20px]`}>
              <div>
                <img
                  className={`aspect-[58/77] w-full object-cover`}
                  src={`https://picsum.photos/58/77.jpg?random=1`}
                  alt={``}
                />
              </div>
              <div>
                <div className={`text-[14px] font-[400] leading-[20px] text-[var(--color1)]`}>
                  아쿠아스큐텀 여성 피마코튼스판 스트라이프 셔츠
                </div>
                <div className={`mt-[8px] text-[12px] font-[400] leading-[15px] text-[var(--color5)]`}>
                  별빛이 이름자 추억과 오는 쉬이 새겨지는 멀리 봅니다.
                </div>
              </div>
            </article>
            <div
              className={`mt-[20px] space-y-[20px] divide-y-[1px] divide-[var(--color6)] border-t-[1px] border-solid border-[var(--color6)] py-[20px]`}>
              <div>
                <div className={`text-[16px] font-[400] text-[var(--color1)]`}>문의유형</div>
                <input
                  className={`TextInput2 On mt-[15px] w-full`}
                  type={`text`}
                  defaultValue={`유형을 선택해주세요.`}
                />
              </div>
              <div className={`pt-[20px]`}>
                <div className={`text-[16px] font-[400] text-[var(--color1)]`}>답변 시 알림 받기</div>
                <input className={`TextInput2 mt-[15px] w-full`} type={`text`} placeholder={`010-0000-0000`} />
                <div className={`mt-[10px]`}>
                  <CheckBox1 size={'Sm'} className={`!items-start`}>
                    <div className={`leading-[20px]`}>
                      <div>SMS/카카오 알림톡 알림 받기</div>
                      <div className={`text-[12px] font-[400] leading-[14px] text-[var(--color5)]`}>
                        체크하실 경우 답변 완료시 SMS 또는
                        <br />
                        카카오 알림톡으로 알려드립니다.
                      </div>
                    </div>
                  </CheckBox1>
                </div>
              </div>
              <div className={`pt-[20px]`}>
                <div className={`text-[16px] font-[400] text-[var(--color1)]`}>메일 알림 받기</div>
                <input
                  className={`TextInput2 mt-[15px] w-full`}
                  type={`text`}
                  placeholder={`이메일 주소를 입력하세요.`}
                />
                <div className={`mt-[10px]`}>
                  <CheckBox1 size={'Sm'} className={`!items-start`}>
                    <div className={`leading-[20px]`}>
                      <div>메일 알림 받기</div>
                      <div className={`text-[12px] font-[400] leading-[14px] text-[var(--color5)]`}>
                        체크하실 경우 답변 완료시 문자로 알려드립니다.
                      </div>
                    </div>
                  </CheckBox1>
                </div>
              </div>
              <div className={`pt-[20px]`}>
                <div className={`text-[16px] font-[400] text-[var(--color1)]`}>제목</div>
                <article className={`mt-[15px] grid grid-cols-[1fr_auto] items-center gap-[10px]`}>
                  <input className={`TextInput2 w-full`} type={`text`} placeholder={`제목을 입력해주세요.`} />
                  <CheckBox1 size={'Sm'} className={`!items-start`}>
                    <div>비밀글</div>
                  </CheckBox1>
                </article>
                <article className={`mt-[10px] grid grid-cols-2 items-center gap-[10px]`}>
                  <input className={`TextInput2`} type={`text`} placeholder={`비밀번호 입력`} />
                  <input className={`TextInput2`} type={`text`} placeholder={`비밀번호 확인`} />
                </article>
              </div>
              <div className={`pt-[20px]`}>
                <div className={`text-[16px] font-[400] text-[var(--color1)]`}>내용</div>
                <div className={`mt-[15px]`}>
                  <textarea className={`TAREA-1`} placeholder={`내용을 입력하세요.`}></textarea>
                </div>
              </div>
              <div className={`pt-[20px]`}>
                <div className={`text-[16px] font-[400] text-[var(--color1)]`}>첨부파일</div>
                <div className={`mt-[15px]`}>
                  <div className={`text-[12px] font-[400] text-[var(--color1)]`}>첨부파일 1</div>
                  <div className={`mt-[10px]`}>
                    <input className={`TextInput2 w-[160px]`} type={`text`} />
                    <button className={`ButtonMd ButtonStyle1 Round ml-[5px]`}>파일 첨부</button>
                  </div>
                  <div className={`mt-[10px] text-[10px] font-[400] text-[var(--color5)]`}>
                    * &#40;jpeg, gif, png, avi, mp4&#41; 확장자를 사용하는 경우에만 등록 가능합니다.
                  </div>
                </div>
                <div className={`mt-[15px]`}>
                  <div className={`text-[12px] font-[400] text-[var(--color1)]`}>첨부파일 2</div>
                  <div className={`mt-[10px] flex flex-row items-center`}>
                    <input className={`TextInput2 w-[160px]`} type={`text`} />
                    <button className={`ButtonMd ButtonStyle1 Round ml-[5px]`}>파일 첨부</button>
                    <button className={`ButtonMd ButtonStyle2 Round ml-[5px]`}>삭제</button>
                  </div>
                  <div className={`mt-[10px] text-[10px] font-[400] text-[var(--color5)]`}>
                    * &#40;jpeg, gif, png, avi, mp4&#41; 확장자를 사용하는 경우에만 등록 가능합니다.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] items-center justify-center gap-0'>
          <button className='PopupButton3'>목록으로</button>
          <button className='PopupButton2'>저장</button>
        </div>
      </div>
    </div>
  );
}

export default LayerProductFaq;
