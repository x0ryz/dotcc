import { motion } from 'motion/react';
import { itemVariants } from '../../utils/animations';

const Card = ({ children, className = "", noShadow = false, ...props }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ scale: 1.02, rotate: 0.5, zIndex: 10 }}
    whileTap={{ scale: 0.98 }}
    drag
    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
    dragElastic={0.1}
    className={`bg-white border-2 border-black ${!noShadow ? 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : ''} p-4 ${className} cursor-grab active:cursor-grabbing`}
    {...props}
  >
    {children}
  </motion.div>
);

export default Card;