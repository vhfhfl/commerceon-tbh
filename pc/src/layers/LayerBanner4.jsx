import Image from 'next/image';
import {useRef} from 'react';
import {Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

function LayerBanner4(props) {
  const { className = '' } = props;
  const ref_this = useRef();

  const pagination_fraction = {
    el: '.PageNationBox',
    type: 'fraction',
    clickable: true,
    renderFraction: function (currentClass, totalClass) {
      return `<span class="${currentClass}"></span><span class="sym">/</span><span class="${totalClass}"></span>`;
    },
  };

  return (
    <>
      {/*prettier-ignore*/}
      <style jsx global>{`
        // 전역 선언
        .LayerBanner4{}
        .LayerBanner4 .NaviGationBox{display:grid;grid-template-columns: auto auto;gap:0;justify-content:space-between;}
        .LayerBanner4 .NaviGationBox{pointer-events:none;z-index:10;position:absolute;top:0px;left:0px; width:100%; aspect-ratio:400/250; }
        .LayerBanner4 .NaviGationBox > .NaviBtn{pointer-events:auto;cursor:pointer;display:flex;align-items:center;justify-content:center;}
        /**/
        .LayerBanner4 .PageNationBox.swiper-pagination-fraction{top:auto;bottom:auto;left:auto;right:auto;font-size:0;height:auto;text-align:center;}
        .LayerBanner4 .PageNationBox.swiper-pagination-fraction{ z-index:10; position:absolute; top:20px; right:20px; width:auto; border-radius:30px; }
        .LayerBanner4 .PageNationBox.swiper-pagination-fraction{ display:inline-flex; align-items:center; justify-content:center; gap:2px; background-color:rgba(22,22,22,.3); padding-left:10px; padding-right:10px; }
        .LayerBanner4 .PageNationBox.swiper-pagination-fraction > span{display:inline-block;font-weight:500; font-size:14px; line-height:22px;}
        .LayerBanner4 .PageNationBox.swiper-pagination-fraction > .swiper-pagination-current{color:white;}
        .LayerBanner4 .PageNationBox.swiper-pagination-fraction > .sym{color:white;}
        .LayerBanner4 .PageNationBox.swiper-pagination-fraction > .swiper-pagination-total{color:white;}
      `}</style>
      <div ref={ref_this} {...props} className={`LayerBanner4 ${className}`}>
        <div className={`relative mx-auto w-[400px] overflow-hidden rounded-[20px] bg-white`}>
          <Swiper
            modules={[Navigation, Pagination]}
            pagination={pagination_fraction}
            navigation={{
              prevEl: '.NaviGationBox > .NaviBtn.Prev',
              nextEl: '.NaviGationBox > .NaviBtn.Next',
            }}
            loop={true}>
            {Array.from(Array(5)).map((obj, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <div className={`relative`}>
                    <div>
                      <Image
                        className={`aspect-[400/250] h-full w-full object-cover`}
                        src={`https://picsum.photos/400/250.jpg?random=${idx}`}
                        width={400}
                        height={250}
                        alt=''
                      />
                    </div>
                    <div className={`px-[27px] pt-[20px] pb-[18px]`}>
                      <div className={`text-center text-[18px] font-[600] text-[var(--color1)]`}>
                        주말특가 프로모션 50% OFF ({idx + 1})
                      </div>
                      <div
                        className={`mt-[12px] flex h-[52px] flex-row items-center justify-center rounded-[10px] bg-[var(--color1)] px-[80px] text-center text-[24px] font-[600] text-white`}>
                        1 : 10 : 45
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            <div className={`PageNationBox Montserrat`}></div>
            <div className={`NaviGationBox`}>
              <div className={`NaviBtn Prev`}>
                <Image
                  className={`Icon`}
                  src={`/icons/icon_23_1.svg`}
                  width={40}
                  height={40}
                  priority
                  alt='왼쪽 화살표'
                />
              </div>
              <div className={`NaviBtn Next`}>
                <Image
                  className={`Icon`}
                  src={`/icons/icon_23_2.svg`}
                  width={40}
                  height={40}
                  priority
                  alt='오른쪽 화살표'
                />
              </div>
            </div>
          </Swiper>
          <div>
            <div className={`border-t border-[var(--color3)]`}>
              <div className={`grid grid-cols-[1fr_auto_1fr] items-center justify-center text-center`}>
                <button className={`h-[56px] text-[16px] font-[400] text-[var(--color1)]`}>오늘 하루 보지않기</button>
                <span className={`h-[40px] w-[1px] bg-[var(--color3)]`}></span>
                <button
                  className={`h-[56px] text-[16px] font-[700] text-[var(--color1)]`}
                  onClick={(evt) => {
                    const el_this = ref_this.current;
                    el_this.classList.add('hidden');
                  }}>
                  닫기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LayerBanner4;
