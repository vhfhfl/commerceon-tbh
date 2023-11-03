import LayoutSub from '@/layouts/LayoutSub';
import FilterBox1 from '@/modules/FilterBox1';
import FaqList1 from '@/modules/FaqList1';

function PageFaq() {
  return (
    <div className={`PageFaq`}>
      <div className={`H-Box mt-[20px]`}>
        <div className={`Inner`}>
          <section data-seq={`20230702173649093`}>
            <article className={`TabUi-1`}>
              <button className={`On`}>FAQ</button>
              <button>공지사항</button>
              <button>1:1 문의하기</button>
              <button>매장안내</button>
            </article>
          </section>
          <section data-seq={`20230717162700`} className={`mt-[20px]`}>
            <div className={`rounded-[25px] bg-[var(--color15)] py-[15px] px-[17px]`}>
              <div className={`text-[14px] font-[600] leading-[20px] text-white`}>고객센터 이용안내</div>
              <article className={`CenterLeft`}>
                <div>
                  <img className={`Icon`} src={`/icons/icon_58.svg`} alt={``} />
                </div>
                <div className={`Montserrat text-[18px] text-[var(--color2)]`}>1666-7963</div>
              </article>
              <div className={`mt-[10px] text-[12px] font-[400] leading-[17px] text-white`}>
                운영시간 : 평일 10:00~17:00
                <br />
                금요일 10:00 ~ 16:00
                <br />
                점심시간 12:00 ~ 13:00
              </div>
            </div>
          </section>
          <section data-seq={`20230717174802`} className={`mt-[40px]`}>
            <div className={`Montserrat text-[14px] font-[600] text-[var(--color1)]`}>FAQ SEARCH</div>
            <div className={`mt-[14px]`}>
              <div className={`InputUi InputLg w-full`} data-form-hei={`Lg`}>
                <input type={`text`} placeholder={`검색어를 입력하세요.`} />
                <button>
                  <img className={`Icon !w-[24px]`} src={`/icons/icon_59.svg`} alt={``} />
                </button>
              </div>
            </div>
            <div className={`my-[20px] text-center text-[14px] font-[700] text-[var(--color1)]`}>
              <span className={`text-[var(--color2)]`}>“교환”</span> FAQ 검색결과
            </div>
          </section>
          <section data-seq={`20230717181250`}>
            <div className={`Title-3`}>
              <div className={`Txt1`}>FAQ</div>
              <div className={`Txt2`}>각 항목별로 더 많은 궁금증을 해결하실 수 있습니다.</div>
            </div>
            <div>
              <FilterBox1 />
            </div>
          </section>
          <section data-seq={`20230717183836`} className={`mt-[40px]`}>
            <div className={`Title-3`}>
              <div className={`Txt1`}>회원가입/정보</div>
            </div>
            <div>
              <FaqList1 />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

PageFaq.Layout = LayoutSub;
export default PageFaq;
