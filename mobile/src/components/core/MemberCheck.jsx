import { useEffect } from 'react';
import { Util } from '@/scripts/util';
import { useRouter } from 'next/router';

const MemberCheck = function MemberCheck(props, forwardedRef) {
  const { children, className = '' } = props;
  const router = useRouter();

  useEffect(() => {
    // mount
    const today = Util.getToday();
    const is_commerceon = window.localStorage.getItem('is_commerceon');
    const path = router.route;
    if (path == '/PageMemeberCheck') return;
    if (today != is_commerceon) {
      window.location.href = '/PageMemeberCheck';
    } else {
      const c_label = 'MemberCheck';
      const c_label_style =
        'border:1px solid black; background:#333; color:yellow; padding:0.25em 0.5em; font-size:16px; font-weight:bold;';
      const c_value = 'SUCCESS';
      const c_value_style =
        'border:1px solid black; background:#ffffd4; color:#333; padding:0.25em 0.5em; font-size:16px; border-left:none;';
      console.log(`%c${c_label}%c${c_value}`, c_label_style, c_value_style);
    }
  }, []);
};

export default MemberCheck;
