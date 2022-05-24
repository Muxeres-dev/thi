import React, { useContext, useState, useEffect } from "react"

import { AppContext } from "../../context/AppContext"

const HamburgerMenu = () => {
  const { menuOpen, setMenuOpen } = useContext(AppContext)
  const [y, setY] = useState(0)
  const [goingDown, setGoingDown] = useState(false)

  const handleNavigation = e => {
    const window = e.currentTarget

    if (y > window.scrollY) {
      setGoingDown(false)
    } else if (y < window.scrollY) {
      setGoingDown(true)
    }
    setY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener("scroll", e => handleNavigation(e))

    return () => {
      window.removeEventListener("scroll", e => handleNavigation(e))
    }
  }, [y])

  useEffect(() => {
    setY(window.scrollY)
  }, [])

  return (
    <button
      className={`absolute sm:fixed right-6 top-6 z-40 w-10 h-10 focus:outline-none bg-transparent transition duration-200 ease-in-out ${
        menuOpen ? "text-white" : "text-black"
      } ${!menuOpen && goingDown ? "opacity-0" : "opacity-1"}`}
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <span className="sr-only">Menu</span>
      <div className="block w-10 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <span
          aria-hidden="true"
          className={`block absolute h-1 w-10 bg-current transform transition-all duration-500 ease-in-out bg-beige1 ${
            menuOpen ? "rotate-45 bg-white" : "-translate-y-4"
          }`}
        ></span>
        <span
          aria-hidden="true"
          className={`block absolute h-1 w-10 bg-current transform transition-all duration-500 ease-in-out bg-beige1 ${
            menuOpen && "opacity-0 bg-white"
          }`}
        ></span>
        <span
          aria-hidden="true"
          className={`block absolute h-1 w-10 bg-current transform transition-all duration-500 ease-in-out bg-beige1 ${
            menuOpen ? "-rotate-45 bg-white" : "translate-y-4"
          }`}
        ></span>
      </div>
    </button>
  )
}

export default HamburgerMenu
