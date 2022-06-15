import React, { useEffect, useState } from "react"
import Layout from "../components/layout/Layout"
import CloseIcon from "../components/shared/CloseIcon"
import TextIlustration from "../components/shared/TextIlustration"

import Ilus8 from "../images/ilus8.png"

import { directorio } from "../assets/directorio"

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

        <div className="sm:container mt-16">
          {directorio.map((dir, i) => (
            <React.Fragment key={`estado${i}`}>
              <h3 className="text-beige1 font-semibold text-xl sm:text-3xl px-16 sm:px-0">
                {dir.estado}
              </h3>
              <div className="accordion" id={`accordion${i}`}>
                {dir.orgs.map((org, j) => (
                  <div key={`org${i}${j}`} className="accordion-item">
                    <h2
                      className="accordion-header mb-0 block"
                      id={`heading${i}${j}`}
                    >
                      <button
                        className="accordion-button collapsed relative flex items-center w-full py-6 sm:py-4 pl-16 sm:pl-4 pr-16 sm:pr-4 !rounded-none text-lg !text-gray1 text-left bg-white border-b-2 border-beige1 transition focus:outline-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${i}${j}`}
                        aria-expanded="true"
                        aria-controls={`collapse${i}${j}`}
                      >
                        <div className="pr-4 flex flex-col">
                          <p className="font-light text-lg sm:text-xl">
                            {org.name}
                          </p>
                          <p className="text-beige1 text-base font-semibold">
                            {org.tipo}
                          </p>
                        </div>
                      </button>
                    </h2>
                    <div
                      id={`collapse${i}${j}`}
                      className="accordion-collapse collapse"
                      aria-labelledby={`heading${i}${j}`}
                    >
                      <div className="accordion-body bg-beige1 text-lg text-white pt-4 sm:pt-4 pb-4 sm:pb-4 px-16 sm:px-4">
                        <div className="w-full text-base font-semibold flex flex-col sm:flex-row">
                          <div className="sm:w-1/6">
                            {org.phones.map((phone, k) => (
                              <p key={`phone${i}${j}${k}`}>{phone}</p>
                            ))}
                          </div>
                          <div className="sm:w-3/6 sm:px-3">{org.addres}</div>
                          <div className="sm:w-1/6 sm:text-center">
                            {org.web && (
                              <a
                                className="text-purple1 underline"
                                href={org.web}
                                target="_blank"
                              >
                                {org.web}
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default Directorio
