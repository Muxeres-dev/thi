import React, { useEffect, useState } from "react"
import Layout from "../components/layout/Layout"
import CloseIcon from "../components/shared/CloseIcon"
import TextIlustration from "../components/shared/TextIlustration"

import Ilus8 from "../images/ilus8.png"

const Lupa = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="14.4961"
      cy="14.4954"
      r="8.7498"
      transform="rotate(45 14.4961 14.4954)"
      stroke="#CF9783"
      strokeWidth="3"
    />
    <line
      x1="22.2737"
      y1="21.9199"
      x2="27.1523"
      y2="26.7986"
      stroke="#CF9783"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
)

const Tag = ({ value, setActiveTags, activeTags }) => {
  const [active, setActive] = useState(false)
  useEffect(() => {
    if (activeTags.length === 0) {
      setActive(false)
    }
  }, [activeTags])
  const handleClick = () => {
    if (active) setActiveTags(activeTags.filter(tag => tag !== value))
    else setActiveTags([...activeTags, value])
    setActive(!active)
  }
  return (
    <div className="inline-flex items-center" onClick={handleClick}>
      <span
        className={`cursor-pointer text-beige1 ${
          active ? "font-semibold" : ""
        }`}
      >
        {value}
      </span>
      {active && <CloseIcon />}
    </div>
  )
}

const Directorio = () => {
  const tags = [
    "refugio",
    "asesoría legal",
    "atención psicológica",
    "interrupción legal del embarazo",
    "atención médica",
    "atienden infancias",
  ]
  const estados = [
    "Aguascalientes",
    "Baja California",
    "Baja California Sur",
    "Campeche",
    "Coahuila",
    "Colima",
    "Chiapas",
    "Ciudad de México",
    "Durango",
    "Estado de México",
    "Guanajuato",
    "Guerrero",
    "Hidalgo",
    "Jalisco",
    "Michoacán",
    "Morelos",
    "Nayarit",
    "Nuevo León",
    "Oaxaca",
    "Puebla",
    "Querétaro",
    "Quintana Roo",
    "San Luis Potosí",
    "Sinaloa",
    "Sonora",
    "Tabasco",
    "Tamaulipas",
    "Tlaxcala",
    "Veracruz",
    "Yucatán",
    "Zacatecas",
  ]
  const [activeTags, setActiveTags] = useState([])

  return (
    <Layout title="Directorio">
      <section>
        <div className="container mt-32 sm:mt-44">
          <TextIlustration ilus={Ilus8} title="Directorio">
            <p className="text-lg sm:text-3xl text-gray1 font-light mt-8">
              <span className="text-beige1 font-semibold">Conoce</span> las
              organizaciones que pueden ayudarte si has sufrido violencia
              sexual.
            </p>
          </TextIlustration>
        </div>
      </section>
      <section>
        <div className="container mt-20">
          <div className="flex items-center text-base sm:text-lg font-semibold">
            <Lupa />
            <p className="ml-4">
              Puedes filtrar tu búsqueda por tema o Estado.
            </p>
          </div>
          <p className="font-semibold my-6 text-lg sm:text-xl">Temática:</p>
          <div className="flex flex-col sm:flex-row justify-between">
            <div className="sm:pr-12">
              {tags.map((tag, i) => (
                <React.Fragment key={`${i}tagph`}>
                  <Tag
                    value={tag}
                    setActiveTags={setActiveTags}
                    activeTags={activeTags}
                  />
                  {i !== tags.length - 1 && (
                    <span className="text-beige1 mx-2">/</span>
                  )}
                </React.Fragment>
              ))}
            </div>
            <select className="w-full flex-0 sm:w-80 border-b border-beige1 p-4 text-center accent-beige1">
              <option>Filtrar por estado</option>
              {estados.map((estado, i) => (
                <option key={`${i}estado`} value={estado}>
                  {estado}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Directorio
