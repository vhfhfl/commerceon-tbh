import ShortUniqueId from 'short-unique-id';

const Util = {};
/* 2023-04-11 :: START ::  KSM : Util */

/**
 * target_el 만 On 클래스 추가, 나머지 형제들 On 클래스 제거
 * @param target_el
 */
Util.turnOn = (target_el) => {
  const el_siblings = Util.getSiblings(target_el);
  Util.removeClass(el_siblings, 'On');
  Util.addClass(target_el, `On`);
};

Util.addClass = (target, class_str) => {
  if (typeof target === 'object') {
    // object mode
    if (target.length > 0) {
      // 복수
      target.forEach((el, idx) => {
        el.classList.add(class_str);
      });
    } else {
      // 단수
      target.classList.add(class_str);
    }
  } else {
    // selector string mode
    const el_list = document.querySelectorAll(target);
    el_list.forEach((el, idx) => {
      el.classList.add(class_str);
    });
  }
};

Util.removeClass = (target, class_str) => {
  if (typeof target === 'object') {
    // object mode
    if (target.length > 0) {
      // 복수
      target.forEach((el, idx) => {
        el.classList.remove(class_str);
      });
    } else {
      // 단수
      target.classList.remove(class_str);
    }
  } else {
    // selector string mode
    const el_list = document.querySelectorAll(target);
    el_list.forEach((el, idx) => {
      el.classList.remove(class_str);
    });
  }
};

Util.toggleClass = (target, class_str) => {
  if (typeof target === 'object') {
    // object mode
    if (target.length > 0) {
      // 복수
      target.forEach((el, idx) => {
        el.classList.toggle(class_str);
      });
    } else {
      // 단수
      target.classList.toggle(class_str);
    }
  } else {
    // selector string mode
    const el_list = document.querySelectorAll(target);
    el_list.forEach((el, idx) => {
      el.classList.toggle(class_str);
    });
  }
};

/**
 * 형제 엘리먼트 반환
 * @param target
 * @returns {*[]}
 */
Util.getSiblings = (target) => {
  const siblings = [];
  // if no parent, return no sibling
  if (!target.parentNode) {
    return siblings;
  }
  // first child of the parent node
  let sibling = target.parentNode.firstChild;
  // collecting siblings
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== target) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  return siblings;
};

/**
 * :root 에 할당된 CSS 변수 값을 반환해줌
 * @param var_name
 * @returns {string}
 */
Util.getCssVar = (var_name) => {
  const el_html = document.documentElement;
  const html_style = getComputedStyle(el_html);
  return html_style.getPropertyValue(var_name);
};

/**
 * :root 에 할당된 CSS 변수 값을 바꿔줌
 * @param var_name
 * @param va_value
 */
Util.setCssVar = (var_name, va_value) => {
  const el_html = document.documentElement;
  el_html.style.setProperty(var_name, va_value);
};

/**
 *
 * @param property
 * @param value
 */
Util.getCss = (element, property) => {
  const style = getComputedStyle(element);
  const result = style[property];
  return result;
};

/**
 *
 * @param element
 * @param property
 * @param value
 */
Util.setCss = (element, property, value) => {
  element.style.setProperty(property, value);
};

/**
 * 오늘날짜 문자열반환
 */
Util.getToday = function (betweenStr) {
  if (typeof betweenStr === 'undefined') betweenStr = '';
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;
  today = yyyy + betweenStr + mm + betweenStr + dd;
  return today;
};

/**
 * URL 에서 onid 파라미터를 읽어와서 On 클래스 추가
 */
Util.addOnClassByUrlParam = function (router) {
  const id_list = router.state.query.onid;
  if (typeof id_list == 'string') {
    // 단수
    console.log('id_list == ', id_list);
    const target = document.getElementById(id_list);
    if (target) target.classList.add('On');
  } else if (typeof id_list == 'object') {
    // 복수
    id_list.forEach((id, idx) => {
      const target = document.getElementById(id);
      if (target) target.classList.add('On');
    });
  }
};

/**
 * viewport_min_width 이하 Viewport 에서 360 으로 보이게끔 처리
 */
Util.viewportSync = () => {
  const viewport_min_width = 360;

  const el_html = document.documentElement;
  const device_type = el_html.getAttribute(`data-device-type`);
  if (!device_type == 'mobile') return;

  const handlerResize = (evt) => {
    setViewport();
  };
  window.addEventListener('resize', handlerResize);

  setViewport();

  return handlerResize;

  /**
   * 참고
   * javascript 에서 중첩 함수의 성능저하는 2000년대 초반 이야기 이다.
   * 2023년 현재 기술이 많이 발전하여 브라우저는 이에 대한 충분한 고려와 내부 최적화를 거쳐서 성능 이슈를 없앴다.
   */
  function setViewport() {
    const v_wid = window.outerWidth;
    const el_viewport = document.querySelector('meta[name="viewport"]');

    if (v_wid <= viewport_min_width) {
      el_viewport.setAttribute('content', `width=${viewport_min_width},user-scalable=no`);
    } else {
      el_viewport.setAttribute(
        'content',
        'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no',
      );
    }
  }
};

Util.uid = () => {
  const uid = new ShortUniqueId({ length: 10 });
  return uid();
};

/**
 * unmount 시에 이벤트 날려버리기 위해 window 에 callback 을 담아둠
 * @param target
 * @param event
 * @param callback
 */
Util.on = (target, event, callback) => {
  if (!target.handler) target.handler = {};
  const seq = Util.uid();
  if (!target.handler[seq]) target.handler[seq] = callback;
  target.addEventListener(event, target.handler[seq]);
};

/**
 * unmount 시에 이벤트 중복방지 위해 걸어두자
 * @param target
 * @param event
 * @param callback
 */
Util.off = (target, event, callback) => {
  target.removeEventListener(event, callback);
  const data = window.handler;
  if (data) {
    for (const key in data) {
      const handler = data[key];
      if (handler == callback) {
        delete data[key];
      }
    }
  }
};

/**
 * 새로고침 하면 스크롤 유지
 */
Util.checkPrevScrollTop = () => {
  const el_html = document.documentElement;
  const path = el_html.getAttribute(`data-path`);

  const prev_st = window.sessionStorage.getItem(`__scroll_top${path}`);
  if (prev_st && prev_st > 0) {
    let ti;

    const el_page = document.querySelector('#page');

    const observer = new ResizeObserver((entries) => {
      // 관찰 중인 배열 형식의 객체 리스트
      entries.forEach((entry) => {
        window.scrollTo({ top: prev_st });
        clearInterval(ti);
        ti = setTimeout(ti_cb, 100);
      });
    });
    // 크기변화를 관찰할 요소지정
    observer.observe(el_page);

    const ti_cb = () => {
      clearInterval(ti);
      // observer.unobserver(el_page);
      observer.disconnect();
    };
  }

  window.addEventListener('beforeunload', (evt) => {
    const st = el_html.getAttribute(`data-scroll-top`);
    const path = el_html.getAttribute(`data-path`);
    window.sessionStorage.setItem(`__scroll_top${path}`, st);
  });
};

/**
 * CSS로 아코디언 UI를 컨트롤 하기 위한 최소한의 준비
 * 아코디언 UI를 하고 싶은 컨테이너에 .AccordionWrap 를 추가하고
 * On 클래스로 컨트롤 하면된다.
 **/
Util.initAccordion = () => {
  (function repeat_callback() {
    // 애니메이션 실행 코드
    const el_ab_list = document.querySelectorAll('.AccordionWrap');
    el_ab_list.forEach((el, idx) => {
      init(el);
    });

    function init(target) {
      if (!target) return;
      const sh = target.scrollHeight;
      if (target.classList.contains('On')) {
        target.style.maxHeight = `${sh}px`;
      } else {
        target.style.maxHeight = `0px`;
      }
    }

    requestAnimationFrame(repeat_callback);
  })();
};

/**
 * 공용 이미지 404 에러 콜백 등록
 * @param target_img
 */
Util.readyNoImage = (target_img) => {
  target_img.onerror = (evt) => {
    const target = evt.target;
    target.src = '/icons/basic/noimage.svg';
    target.style.outline = '1px dashed #999';
  };
};

/**
 * Image 컴포넌트 이미지 사이즈 원본 사이즈로 조정
 * @param image
 */
Util.setImageNaturalSize = (image) => {
  image.setAttribute(`width`, image.naturalWidth);
  image.setAttribute(`height`, image.naturalHeight);
};

/**
 * 입력되는 컬러와 대비되어 잘 보이는 색상 반환
 * @param color_hex
 * @returns {string}
 * ex)
 * Util.getGoodColor('#ff0000');
 */
Util.getGoodColor = (color_hex) => {
  const c = color_hex.substring(1); // 색상 앞의 # 제거
  const rgb = parseInt(c, 16); // rrggbb를 10진수로 변환
  const r = (rgb >> 16) & 0xff; // red 추출
  const g = (rgb >> 8) & 0xff; // green 추출
  const b = (rgb >> 0) & 0xff; // blue 추출
  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  // 색상 선택
  return luma < 127.5 ? 'white' : 'black';
};

/* // 2023-04-11 :: END :: KSM : Util */

/* 2023-05-06 :: START ::  KSM : UiControl */
const UiControl = {};
UiControl.brandMenu = false;
UiControl.brandMenuOn = () => {
  UiControl.brandMenu = true;
  const el = document.querySelector(`#BrandMenu`);
  if (el) el.classList.add('On');
  UiControl.coverOn();
};

UiControl.brandMenuOff = () => {
  UiControl.brandMenu = false;
  const el = document.querySelector(`#BrandMenu`);
  if (el) el.classList.remove('On');
  UiControl.coverOff();
};

UiControl.coverOn = () => {
  console.log('UiControl.coverOn');
  const el_html = document.documentElement;
  el_html.classList.add('CoverOn');
};

UiControl.coverOff = () => {
  console.log('UiControl.coverOff');
  const el_html = document.documentElement;
  el_html.classList.remove('CoverOn');
};
/* // 2023-05-06 :: END :: KSM : UiControl */

/* 2023-05-24 :: START ::  KSM : EnterFrame */
const EnterFrame = {};
/**
 * CSS로 아코디언 UI를 컨트롤 하기 위한 최소한의 준비
 * 아코디언 UI를 하고 싶은 컨테이너에 .AccordionWrap 를 추가하고
 * On 클래스로 컨트롤 하면된다.
 **/
EnterFrame.initAccordion = () => {
  (function repeat_callback() {
    // 애니메이션 실행 코드
    const el_ab_list = document.querySelectorAll('.AccordionWrap');
    el_ab_list.forEach((el, idx) => {
      init(el);
    });

    function init(target) {
      if (!target) return;
      const sh = target.scrollHeight;
      if (target.classList.contains('On')) {
        target.style.maxHeight = `${sh}px`;
      } else {
        target.style.maxHeight = `0px`;
      }
    }

    requestAnimationFrame(repeat_callback);
  })();
};

/**
 * 자식이 1개일때 SyncHeight 클래스를 주면
 * 자식의 포지션이 공중에 뜨더라도 부모의 너비가 유지되도록 유지
 */
EnterFrame.SyncHeight = () => {
  (function repeat_callback() {
    // 애니메이션 실행 코드
    loop();
    requestAnimationFrame(repeat_callback);
  })();
  loop();

  function loop() {
    const el_sh_list = document.querySelectorAll('.SyncHeight');
    if (!el_sh_list) return;
    el_sh_list.forEach((el, idx) => {
      const s_hei = el.offsetHeight;
      const el_parent = el.parentElement;
      Util.setCss(el_parent, `height`, `${s_hei}px`);
    });
  }
};
/* // 2023-05-24 :: END :: KSM : EnterFrame */

export { Util, UiControl, EnterFrame };
