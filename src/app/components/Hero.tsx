import { motion } from 'motion/react';

export function Hero() {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Logo/Title Animation */}
      <motion.div
        className="relative z-10"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.div className="overflow-hidden">
          <motion.h1
            className="text-7xl md:text-9xl font-bold tracking-wider text-white"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            {'SHIZUKI'.split('').map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.6, 0.05, 0.01, 0.9],
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>
        <motion.p
          className="text-2xl md:text-4xl text-center mt-4 text-white/60 tracking-widest font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          SERVICES
        </motion.p>

        {/* Animated underline */}
        <motion.div
          className="h-px bg-white mt-8"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '100%', opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        />
      </motion.div>

      {/* BMW M4 Image Animation */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.8, duration: 1.2, ease: [0.6, 0.05, 0.01, 0.9] }}
      >
        <motion.div
          className="relative w-full max-w-6xl px-4"
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            delay: 3,
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <motion.img
            src="https://images.unsplash.com/photo-1615884363252-983eed162938?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibXclMjBtNCUyMGJsYWNrJTIwbmlnaHQlMjBlbXB0eSUyMGRhcmslMjBzdHVkaW98ZW58MXx8fHwxNzcwNDk5OTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="BMW M4 Competition"
            className="w-full h-auto object-contain opacity-70"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.8, duration: 1.2, ease: 'easeOut' }}
          />
        </motion.div>
      </motion.div>

      {/* Minimal grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>
    </motion.div>
  );
}