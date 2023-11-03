import {Util} from '@/scripts/util';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import {UAParser} from 'ua-parser-js';

function infoDeviceOS() {
  const ua = UAParser(window.navigator.userAgent);
  const device = ua.device;
  const cpu = ua.cpu;
  const os = ua.os;
  const browser = ua.browser;
  const engine = ua.engine;

  const el_html = document.documentElement;

  el_html.setAttribute(`data-device-model`, device.model);
  el_html.setAttribute(`data-device-type`, device.type);
  el_html.setAttribute(`data-device-vendor`, device.vendor);

  el_html.setAttribute(`data-cpu`, cpu.architecture);

  el_html.setAttribute(`data-os-name`, os.name);
  el_html.setAttribute(`data-os-version`, os.version);

  el_html.setAttribute(`data-browser-model`, browser.major);
  el_html.setAttribute(`data-browser-name`, browser.name);
  el_html.setAttribute(`data-browser-version`, browser.version);

  el_html.setAttribute(`data-engine-name`, engine.name);
  el_html.setAttribute(`data-engine-version`, engine.version);
}

function infoScrollTop() {
  const el_html = document.querySelector('html');
  const st = window.pageYOffset || document.documentElement.scrollTop;
  el_html.setAttribute('data-scroll-top', st);
}

function infoOnTouch() {
  const el_html = document.querySelector('html');

  document.addEventListener('touchstart', (evt) => {
    el_html.setAttribute('data-is-touch', true);
  });

  document.addEventListener('touchend', (evt) => {
    el_html.setAttribute('data-is-touch', false);
  });
}

function infoScrollDirection() {
  const el_html = document.querySelector('html');

  let prevSt = 0;
  let prevDir;
  let distance = 0;

  (function repeat_callback() {
    // 애니메이션 실행 코드
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st <= 0) st = 0;
    const limit_y = el_html.scrollHeight - el_html.clientHeight;
    if (limit_y <= st) st = limit_y;

    if (st > 0 && limit_y > st) {
      let dir;
      if (prevSt - st > 0) {
        dir = 'up';
      } else {
        dir = 'down';
      }

      distance += prevSt - st;

      if (prevDir != dir) {
        // console.log('dir change!');
        distance = 0;
      }

      const distance_k = 0;
      if (Math.abs(distance) > distance_k) {
        el_html.setAttribute('data-scroll-diretion', dir);
      }

      prevDir = dir;
      prevSt = st;
    }

    requestAnimationFrame(repeat_callback);
  })();
}

/**
 * 페이지 로딩 상태
 */
function infoReadyState() {
  document.addEventListener('readystatechange', () => {
    const el_html = document.querySelector('html');
    el_html.setAttribute(`data-ready-state`, document.readyState);
    if (document.readyState === 'complete') {
      el_html.setAttribute(`data-is-loading`, false);
    } else {
      el_html.setAttribute(`data-is-loading`, true);
    }
  });
}

function AppInfo({ layoutName }) {
  const router = useRouter();
  const asPath = router.asPath;

  const us_wid = useState(0);
  const wid = us_wid[0];
  const setWid = us_wid[1];

  const us_hei = useState(0);
  const hei = us_hei[0];
  const setHei = us_hei[1];

  const us_prefix = useState('');
  const prefix = us_prefix[0];
  const setPrefix = us_prefix[1];

  const us_page_key = useState(null);
  const page_key = us_page_key[0];
  const setPageKey = us_page_key[1];

  useEffect(() => {
    // mount
    const el_html = document.querySelector('html');

    window.addEventListener('resize', (evt) => {
      realTime();
    });

    window.addEventListener(
      'scroll',
      (evt) => {
        realTime();
      },
      false,
    );

    initScrollEndTrigger();

    init();

    /* 2023-04-18 :: START ::  KSM : Router 가 지정한 Page Key 값 View */
    const handleStart = (url) => {
      // console.log('handleStart');
      resetInfo();
    };

    function resetInfo() {
      el_html.removeAttribute(`data-wheel-direction`);
      el_html.removeAttribute(`data-scroll-diretion`);
    }

    const handleStop = () => {
      // console.log('handleStop');
      infoPageKey();
    };
    infoPageKey();

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);
    /* // 2023-04-18 :: END :: KSM : Router 가 지정한 Page Key 값 View */

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, []);

  useEffect(() => {
    // update
    infoPath();
    infoEnv();
  });

  function init() {
    infoEnv();

    infoReadyState();

    realTime();

    infoDeviceOS();

    infoOnTouch();

    infoScrollDirection();

    infoiOSSafeArea();

    infoWhellDirection();
  }

  function realTime() {
    infoBreakPoint();
    infoScrollTop();
  }

  /**
   * 개발 환경 값
   */
  function infoEnv() {
    const el_html = document.querySelector('html');
    el_html.setAttribute(`data-env-node-env`, process.env.NODE_ENV);
    el_html.setAttribute(`data-layout`, layoutName);
  }

  /**
   * 페이지 path
   */
  function infoPath() {
    const el_html = document.querySelector('html');
    let path = asPath.replaceAll('/', '|');
    el_html.setAttribute(`data-path`, path);
  }

  /**
   * 브레이트 포인트 실시간 값
   */
  function infoBreakPoint() {
    const el_html = document.querySelector('html');
    const wid = window.innerWidth;
    let prefix = '';
    if (wid < 640) prefix = 'xs';
    if (640 <= wid && wid < 768) prefix = 'sm';
    if (768 <= wid && wid < 1024) prefix = 'md';
    if (1024 <= wid && wid < 1280) prefix = 'lg';
    // if (1280 <= wid) prefix = 'xl';
    if (1280 <= wid && wid < 1536) prefix = 'xl';
    if (1536 <= wid) prefix = '2xl';
    el_html.setAttribute(`data-app-breakpoint`, prefix);

    setPrefix(prefix);

    const ua = UAParser(window.navigator.userAgent);
    if (ua.device.type == 'mobile') {
      setWid(window.outerWidth);
      setHei(window.outerHeight);
    } else {
      setWid(window.innerWidth);
      setHei(window.innerHeight);
    }
  }

  function infoPageKey() {
    const key = window.history.state.key;
    setPageKey(key);

    const el_html = document.querySelector('html');
    el_html.setAttribute(`data-page-key`, key);
  }

  function infoiOSSafeArea() {
    const el_html = document.querySelector('html');
    const sab = Util.getCssVar('--sab');
    el_html.setAttribute(`data-safe-area-bottom`, sab);
  }

  function initScrollEndTrigger() {
    let isScrolling;
    window.addEventListener(
      'scroll',
      (e) => {
        clearTimeout(isScrolling);
        isScrolling = setTimeout(
          () => {
            const event = new Event('scroll_end');
            window.dispatchEvent(event);
          },
          150,
          false,
        );
      },
      false,
    );
  }

  function infoWhellDirection() {
    const el_html = document.querySelector('html');

    window.addEventListener('wheel', function (event) {
      if (event.deltaY < 0) {
        el_html.setAttribute(`data-wheel-direction`, 'up');
      } else if (event.deltaY > 0) {
        el_html.setAttribute(`data-wheel-direction`, 'down');
      }
    });
  }

  return (
    <>
      {/* prettier-ignore */}
      <div className={`AppInfo`}>
        <Link
          href={`/markup/PageSitemap`}
          className={`fixed top-[0] left-[50%] z-[9999] translate-x-[-50%] cursor-pointer whitespace-nowrap bg-black/70 p-1 text-[12px] text-[yellow] duration-300 ease-out will-change-auto translate-y-[-100%] [[data-wheel-direction='down']_&]:translate-y-[0]`}>
          {prefix} | {wid} x {hei} | {layoutName} | {page_key}
        </Link>
      </div>
    </>
  );
}

export default AppInfo;
