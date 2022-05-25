import React from "react"
import { Link } from "gatsby"

import Menu from "./Menu"

import logo from "../../images/LOGO_THI.svg"

interface IProps {}

const Header = (props: IProps) => {
  return (
    <header>
      <div className="sm:p-4 absolute top-0 left-0 w-screen z-10">
        <Link className="inline-flex" to="/">
          <img src={logo} alt="Tu historia importa" className="w-full" />
        </Link>
      </div>
      <Menu />
    </header>
  )
}

export default Header
