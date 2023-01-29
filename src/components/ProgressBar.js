import React from 'react';
import { motion } from 'framer-motion';

export default function ProgressBar({ pageYProgress }) {
  return (
    <motion.div
      className='progress'
      style={{
        scaleX: pageYProgress,
        background: 'red',
        height: 5,
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        originX: 0,
      }}
    />
  );
}
