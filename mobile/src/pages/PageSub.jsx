import { Fragment } from 'react';
import LayoutCategory from '@/layouts/LayoutCategory';
function PageSub() {
  return (
    <div className={`PageSub`}>
      PageSub
      {Array.from(Array(30)).map((obj, idx) => {
        return (
          <Fragment key={idx}>
            <div>
              {idx}&nbsp; 봄이 벌써 불러 가을로 까닭입니다. 걱정도 불러 계절이 이국 패, 없이 듯합니다. 하나에 별이 써
              피어나듯이 마디씩 밤을 너무나 그리고 계십니다. 별 겨울이 나의 별 가난한 버리었습니다. 언덕 헤는 무덤
              있습니다. 위에도 나의 노루, 별 나는 밤이 잔디가 속의 거외다. 별이 토끼, 오는 멀듯이, 아스라히 위에도
              아이들의 때 이름과, 봅니다. 차 이름을 나의 하늘에는 이웃 다하지 사랑과 봅니다. 잔디가 차 걱정도 토끼,
              아름다운 이국 있습니다. 이름과, 둘 덮어 하나 까닭입니다. 슬퍼하는 하나에 프랑시스 듯합니다. 내린 동경과
              슬퍼하는 흙으로 비둘기, 별이 이제 않은 봅니다. 쉬이 없이 소학교 이름과, 둘 이네들은 같이 별을 다하지
              있습니다. 별 하나에 이름과, 있습니다. 이름을 벌레는 그리워 듯합니다. 별 겨울이 그러나 남은 가슴속에 토끼,
              릴케 아무 하늘에는 계십니다. 잠, 내 위에 헤는 된 이름을 나는 다 봅니다. 다하지 별들을 써 오면 부끄러운
              나는 별에도 이네들은 봅니다.
            </div>
            <br />
          </Fragment>
        );
      })}
    </div>
  );
}

PageSub.Layout = LayoutCategory;
export default PageSub;
