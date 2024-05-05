import { motion } from 'framer-motion';

const AnimatedButton = ({onClick, children, shouldRotate}) => {
  return (
    <motion.button
      className="flex items-center h-12 px-2 rounded-lg text-gray-600 focus:outline-none"
      whileHover={{scale: 1.025, rotate: shouldRotate ? 90 : 0}}
      whileTap={{scale: 0.9, rotate: shouldRotate ? -90 : 0, borderRadius: shouldRotate ? "100%" : "0.5rem"}}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;
