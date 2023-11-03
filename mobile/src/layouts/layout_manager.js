const PageTransition = {
  transition : {
    type : 'tween',
    /*
    "linear"
    "easeIn", "easeOut", "easeInOut"
    "circIn", "circOut", "circInOut"
    "backIn", "backOut", "backInOut"
    "anticipate"
     */
    ease : 'anticipate',
    // ease : [0.215, 0.610, 0.355, 1.000],
    duration : 0.5
  },
  initial : {
    // transform으로 위치를 옮긴 요소의 자식은 position: fixed를 써도 고정되지 않습니다.
    // position fixed 위치 못잡는 문제 때문에 사용X
    // transform : `translateY(50px)`,;
    opacity : 0,
  },
  animate : {
    // transform : `translateY(0px)`,
    opacity : 1,
  },
  exit : {
    // transform : `translateY(50px)`,
    opacity : 0,
  }
};

export {
  PageTransition,
}