
import HeaderCategory from '@/layouts/HeaderCategory';
import {PageTransition} from '@/layouts/layout_manager.js';

import {AnimatePresence, motion} from 'framer-motion';
import {useRouter} from 'next/router';

function LayoutCategory({ children }) {
  const router = useRouter();

  return (
    <>
      <div id='page'>
        <HeaderCategory />
        <AnimatePresence mode='wait'>
          <motion.main
            className={'PAGE-TRANSITION-WRAP'}
            key={router.route}
            initial={PageTransition.initial}
            animate={PageTransition.animate}
            transition={PageTransition.transition}
            exit={PageTransition.exit}>
            {children}
          </motion.main>
        </AnimatePresence>
      </div>
    </>
  );
}

LayoutCategory.Name = 'LayoutCategory';
export default LayoutCategory;
