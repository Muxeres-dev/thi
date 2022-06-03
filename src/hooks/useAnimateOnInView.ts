import { useAnimation } from "framer-motion"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

export const useAnimateOnInView = () => {
  const controls = useAnimation()
  const { ref, inView } = useInView()
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    if (!animated && inView) {
      controls.start("visible")
      setAnimated(true)
    }
    if (!animated && !inView) {
      controls.start("hidden")
    }
  }, [controls, inView])

  return { ref, controls }
}
