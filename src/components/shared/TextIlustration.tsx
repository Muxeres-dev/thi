import { motion } from "framer-motion"
import React from "react"
import { fromTop, fromLeft, visible } from "../../constants/animations"
import { useAnimateOnInView } from "../../hooks/useAnimateOnInView"

const TextIlustration = ({
  ilus,
  title,
  small,
  children,
}: {
  ilus
  title?
  small?
  children
}) => {
  const { ref, controls } = useAnimateOnInView()
  const { ref: ref2, controls: controls2 } = useAnimateOnInView()
  return (
    <div className="flex w-full gap-4 flex-col md:flex-row mb-8">
      <div className="flex items-center justify-center md:w-2/5 md:order-2 mt-12 sm:mt-0">
        <motion.div
          ref={ref}
          variants={visible}
          initial="hidden"
          animate={controls}
          className="box"
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <img
            src={ilus}
            alt="Tu historia importa - ilustración"
            className={`w-full max-w-xs ${small ? "max-w-il" : ""}`}
          />
        </motion.div>
      </div>
      <div className="flex md:w-3/5 md:pr-24 md:order-1">
        <div className="w-full">
          {title && (
            <motion.div
              ref={ref}
              variants={fromTop}
              initial="hidden"
              animate={controls}
              className="box"
              transition={{ duration: 1 }}
            >
              <p className="text-beige1 font-medium text-2xl sm:text-4xl">
                {title}
              </p>
            </motion.div>
          )}
          <motion.div
            ref={ref}
            variants={fromLeft}
            initial="hidden"
            animate={controls}
            className="box"
            transition={{ duration: 1.25 }}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default TextIlustration
