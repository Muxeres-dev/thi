import React from "react"
import { Link } from "gatsby"

import Menu from "./Menu"

import logo from "../../images/LOGO_THI.svg"
import HamburgerMenu from "./HamburgerMenu"

interface IProps {}

const Header = (props: IProps) => {
  return (
    <header className="w-screen absolute top-4 sm:top-6 left-0 pl-4 sm:pl-6">
      <div className="z-10">
        <Link className="inline-flex" to="/">
          <img src={logo} alt="Tu historia importa" className="w-full" />
        </Link>
        <HamburgerMenu />
      </div>
      <Menu />
    </header>
  )
}

export default Header
