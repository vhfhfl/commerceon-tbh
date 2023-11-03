import {motion, AnimatePresence} from "framer-motion";
import {useRouter} from "next/router";
import {PageTransition} from "@/layouts/layout_manager.js";

function LayoutEmpty({children}) {
  const router = useRouter();
  
  return (
    <>
      <div id="page">
        <AnimatePresence mode='wait'>
          <motion.main className={'PAGE-TRANSITION-WRAP'}
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

LayoutEmpty.Name = 'LayoutEmpty';
export default LayoutEmpty;