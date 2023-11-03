import MainCover from '@/components/common/MainCover';

import HeaderSub from '@/layouts/HeaderSub';
import HeaderSub7 from "@/layouts/HeaderSub7";
import {PageTransition} from '@/layouts/layout_manager.js';

import {AnimatePresence, motion} from 'framer-motion';
import {useRouter} from 'next/router';

function LayoutSub8({ children }) {
  const router = useRouter();

  return (
    <>
      <div id='page'>
        <HeaderSub7 />
        <AnimatePresence mode='wait'>
          <motion.main
            className={'PAGE-TRANSITION-WRAP'}
            key={router.route}
            initial={PageTransition.initial}
            animate={PageTransition.animate}
            transition={PageTransition.transition}
            exit={PageTransition.exit}>
            {children}
            <MainCover />
          </motion.main>
        </AnimatePresence>
      </div>
    </>
  );
}

LayoutSub8.Name = 'LayoutSub8';
export default LayoutSub8;
