import { motion } from "framer-motion"
import React from "react"
import { fromTop, opacity, visible } from "../../constants/animations"
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
  const { ref: ref3, controls: controls3 } = useAnimateOnInView()
  return (
    <div className="flex w-full gap-4 flex-col md:flex-row mb-8">
      <div className="flex items-center justify-center md:w-2/5 md:order-2 mt-12 sm:mt-0">
        <motion.div
          ref={ref2}
          variants={visible}
          initial="hidden"
          animate={controls2}
          className="box"
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <img
            src={ilus}
            alt="Tu historia importa - ilustración"
            className={`max-w-il w-full sm:max-w-xs py-8 sm:py-0`}
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
            ref={ref3}
            variants={opacity}
            initial="hidden"
            animate={controls3}
            className="box"
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <div>{children}</div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default TextIlustration
