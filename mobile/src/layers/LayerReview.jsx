import {Layer} from '@/scripts/util';
import Image from 'next/image';
import {Fragment} from 'react';

function LayerReview() {
  return (
    <div className={`LayerReview relative w-[320px] bg-white`}>
      <div>
        <Image
          className={`aspect-[320/240] w-full object-cover`}
          src={`https://picsum.photos/320/240.jpg`}
          width={320}
          height={240}
          priority
          alt=''
        />
      </div>
      <button
        className={`absolute top-0 right-0 z-10`}
        >
        <Image className={`Icon`} src={`/icons/icon_24.svg`} width={40} height={40} priority alt='' />
      </button>
      <div className={`grid grid-cols-[auto,1fr] items-center justify-start gap-[20px] py-[13px] pl-[20px]`}>
        <div className={`w-[50px]`}>
          <Image
            className={`aspect-square w-full object-cover`}
            src={`https://picsum.photos/50/50.jpg`}
            width={50}
            height={50}
            priority
            alt=''
          />
        </div>
        <div>
          <div className={`Montserrat text-[12px] font-[600] text-[var(--color1)]`}>MIND BRIDG</div>
          <div className={`mt-[6px] text-[12px] font-[400] text-[var(--color1)]`}>오버핏 싱글자켓 셋업</div>
        </div>
      </div>
      <div className={`border-t border-[var(--color3)]`}>
        <div className={`px-[20px] pt-[14px] pb-[17px]`}>
          <div className={`flex flex-row items-center justify-between`}>
            <div className={`flex flex-row items-center justify-start`}>
              <div
                className={`h-[28px] rounded-[6px] bg-[var(--color6)] px-[5px] text-[12px] font-[600] leading-[28px] text-[var(--color1)]`}>
                4.8
              </div>
              <div className={`ml-[10px] flex flex-row items-center justify-center`}>
                {Array.from(Array(5)).map((obj, idx) => {
                  let src;
                  if (idx == 4) {
                    src = '/icons/icon_25_2.svg';
                  } else {
                    src = '/icons/icon_25_1.svg';
                  }
                  return (
                    <Fragment key={idx}>
                      <Image className={`Icon`} src={src} width={14} height={14} priority alt='별' />
                    </Fragment>
                  );
                })}
              </div>
            </div>
            <div
              className={`flex flex-row items-center justify-center gap-[8px] text-[10px] font-[400] text-[var(--color1)]`}>
              <span>김**</span>
              <span>님의 리뷰</span>
              <span className={`inline-block h-[10px] w-[1px] bg-[var(--color3)]`}></span>
              <span className={`text-[var(--color5)]`}>23.04.20</span>
            </div>
          </div>
          <div
            className={`mt-[16px] h-[148px] overflow-y-auto text-[12px] font-[400] leading-[16px] text-[var(--color1)]`}>
            별빛이 이름자 추억과 오는 쉬이 새겨지는 멀리 봅니다. 그리고 아름다운 별 어머님, 아직 소녀들의 나의 가을
            까닭입니다. 파란 속의 하나에 나의 아스라히 너무나 청춘이 이름자를 다 있습니다. 노루, 무덤 이름을 까닭입니다.
            경, 자랑처럼 추억과 강아지, 내일 하나 하나에 밤이 봅니다. 슬퍼하는 시와 별 멀듯이, 걱정도 오면 파란 별
            다하지 있습니다. 까닭이요, 그러나 것은 파란 소녀들의 둘 까닭입니다. 위에도 없이 하나에 까닭입니다. 하나에
            딴은 이웃 듯합니다. 것은 계집애들의 무엇인지 이네들은 멀리 잔디가 나는 무덤 까닭입니다. 하나 릴케 다
            새겨지는 어머니, 말 내린 별에도 쉬이 있습니다. 별빛이 이름자 추억과 오는 쉬이 새겨지는 멀리 봅니다. 그리고
            아름다운 별 어머님, 아직 소녀들의 나의 가을 까닭입니다. 파란 속의 하나에 나의 아스라히 너무나 청춘이
            이름자를 다 있습니다. 노루, 무덤 이름을 까닭입니다. 경, 자랑처럼 추억과 강아지, 내일 하나 하나에 밤이
            봅니다. 슬퍼하는 시와 별 멀듯이, 걱정도 오면 파란 별 다하지 있습니다. 까닭이요, 그러나 것은 파란 소녀들의 둘
            까닭입니다. 위에도 없이 하나에 까닭입니다. 하나에 딴은 이웃 듯합니다. 것은 계집애들의 무엇인지 이네들은 멀리
            잔디가 나는 무덤 까닭입니다. 하나 릴케 다 새겨지는 어머니, 말 내린 별에도 쉬이 있습니다. 별빛이 이름자
            추억과 오는 쉬이 새겨지는 멀리 봅니다. 그리고 아름다운 별 어머님, 아직 소녀들의 나의 가을 까닭입니다. 파란
            속의 하나에 나의 아스라히 너무나 청춘이 이름자를 다 있습니다. 노루, 무덤 이름을 까닭입니다. 경, 자랑처럼
            추억과 강아지, 내일 하나 하나에 밤이 봅니다. 슬퍼하는 시와 별 멀듯이, 걱정도 오면 파란 별 다하지 있습니다.
            까닭이요, 그러나 것은 파란 소녀들의 둘 까닭입니다. 위에도 없이 하나에 까닭입니다. 하나에 딴은 이웃 듯합니다.
            것은 계집애들의 무엇인지 이네들은 멀리 잔디가 나는 무덤 까닭입니다. 하나 릴케 다 새겨지는 어머니, 말 내린
            별에도 쉬이 있습니다.
          </div>
          <div className={`mt-[24px] grid grid-cols-4 items-center justify-center gap-[6px]`}>
            {Array.from(Array(4)).map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <a href={`https://www.google.com`} className={`block w-full cursor-pointer`}>
                    <Image
                      className={`aspect-square w-full object-cover`}
                      src={`https://picsum.photos/65/65.jpg?random=${idx}`}
                      width={65}
                      height={65}
                      priority
                      alt=''
                    />
                  </a>
                </Fragment>
              );
            })}
          </div>
        </div>
        <div className={`border-t border-[var(--color3)]`}>
          <div className={`flex flex-row items-center justify-between px-[20px] pt-[13px] pb-[16px]`}>
            <div className={`text-[12px] font-[400] text-[var(--color1)]`}>리뷰가 도움이 되었나요?</div>
            <div
              className={`flex h-[42px] flex-row items-center justify-between rounded-[50px] border border-[var(--color3)] px-[18px]`}>
              <button className={`w-[25px]`}>
                <Image className={`Icon`} src={`/icons/icon_26.svg`} width={25} height={25} priority alt='좋아요' />
              </button>
              <span className={`ml-[5px] text-[12px] font-[600] text-[var(--color1)]`}>24</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LayerReview;
