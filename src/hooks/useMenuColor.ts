import { useEffect, useState } from "react"

function useMenuColor(refsSection) {
  const [color, setColor] = useState("beige1")

  const handleNavigation = e => {
    const window = e.currentTarget
    let flag = true
    for (let index = 0; index < refsSection.length; index++) {
      const ref = refsSection[index]
      if (
        ref &&
        ref.current &&
        window.scrollY > ref.current.offsetTop - 45 &&
        window.scrollY < ref.current.offsetTop + ref.current.clientHeight
      ) {
        setColor("white")
        flag = false
        break
      }
    }
    if (flag) setColor("beige1")
  }

  useEffect(() => {
    window.addEventListener("scroll", e => handleNavigation(e))

    return () => {
      window.removeEventListener("scroll", e => handleNavigation(e))
    }
  }, [])

  return color
}

export default useMenuColor
