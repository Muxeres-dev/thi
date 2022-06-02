import React, { useContext } from "react"
import { Link } from "gatsby"

import { AppContext } from "../../context/AppContext"

const Option = ({
  text,
  onClick,
  link,
}: {
  text: string
  onClick: React.Dispatch<React.SetStateAction<boolean>>
  link?: string
}) =>
  link ? (
    <li className="mb-4">
      <Link
        to={link}
        onClick={() => onClick(false)}
        className="cursor-pointer text-3xl font-light text-white hover:font-medium"
      >
        {text}
      </Link>
    </li>
  ) : (
    <li className="">{text}</li>
  )

const Menu = () => {
  const { menuOpen, setMenuOpen } = useContext(AppContext)
  return (
    <>
      <nav
        className={`w-screen h-screen fixed top-0 left-0 z-30 transition duration-500 ease-in-out bg-blue1 ${
          menuOpen ? "visible opacity-1" : "invisible opacity-0"
        }`}
      >
        <div className="flex justify-center text-center overflow-auto h-full">
          <ul className="flex flex-col mt-20">
            <Option
              text="Inicio"
              onClick={() => setMenuOpen(false)}
              link="/#inicio"
            />
            <Option
              text="¿Viví violencia sexual?"
              link="/vivi_violencia_sexual"
              onClick={() => setMenuOpen(false)}
            />
            <Option
              text="Sistema de Salud"
              onClick={() => setMenuOpen(false)}
              link="/sistema_de_salud"
            />
            <Option
              text="Sistema de Justicia"
              link="/sistema_de_justicia"
              onClick={() => setMenuOpen(false)}
            />
            <Option
              text="Autocuidado"
              link="/reflexiones"
              onClick={() => setMenuOpen(false)}
            />
            <Option
              text="Acompañamiento"
              link="/reflexiones"
              onClick={() => setMenuOpen(false)}
            />
            <Option
              text="Historias"
              link="/reflexiones"
              onClick={() => setMenuOpen(false)}
            />
            <Option
              text="Nosotras"
              link="/nosotras"
              onClick={() => setMenuOpen(false)}
            />
            <Option
              text="Directorio"
              link="/reflexiones"
              onClick={() => setMenuOpen(false)}
            />
            <Option
              text="Contacto"
              onClick={() => setMenuOpen(false)}
              link="/contacto"
            />
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Menu
