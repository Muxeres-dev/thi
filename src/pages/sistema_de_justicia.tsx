import React, { useContext, useEffect, useRef, useState } from "react"
import { Carousel } from "react-responsive-carousel"

import { AppContext } from "../context/AppContext"
import Layout from "../components/layout/Layout"
import Section from "../components/shared/Section"
import TextHeader from "../components/shared/TextHeader"
import TextIlustration from "../components/shared/TextIlustration"

import Ilus4 from "../images/ilus4.png"

import IlusJust1 from "../images/justicia/just1.svg"
import IlusJust2 from "../images/justicia/just2.svg"
import IlusJust3 from "../images/justicia/just3.svg"
import IlusJust4 from "../images/justicia/just4.svg"
import IlusJust5 from "../images/justicia/just5.svg"
import IlusJust6 from "../images/justicia/just6.svg"
import IlusJust7 from "../images/justicia/just7.svg"
import IlusJust8 from "../images/justicia/just8.svg"
import IlusJust9 from "../images/justicia/just9.svg"
import IlusJust10 from "../images/justicia/just10.svg"
import IlusJust11 from "../images/justicia/just11.svg"
import IlusJust12 from "../images/justicia/just12.svg"

import useMenuColor from "../hooks/useMenuColor"

import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader

const ProgressBar = ({ index }) => (
  <div className="relative">
    <div className="w-full h-1 opacity-25 bg-white"></div>
    <div
      className={`absolute top-0 left-0 h-1 bg-white z-10`}
      style={{ width: `${((index + 1) * 100) / 12}%` }}
    ></div>
    <p className="mt-4 text-white font-semibold text-xl text-center">
      {(index + 1).toString()}/12
    </p>
  </div>
)
const SistemaJusticia = () => {
  const { setMenuColor } = useContext(AppContext)
  const tips: { text: string; img }[] = [
    {
      text: "1. Denunciar es un trámite gratuito.",
      img: IlusJust1,
    },
    {
      text: "2.  El proceso para denunciar en la Fiscalía o Ministerio Público (“MP”) puede durar hasta 8 horas o más.",
      img: IlusJust2,
    },
    {
      text: "3.  Lleva el cargador de tu celular y algo que puedas comer y beber fácilmente mientras estás esperando.",
      img: IlusJust3,
    },
    {
      text: "4.  Procura llevar algún tipo de identificación oficial (INE, pasaporte, licencia de conducir, cédula profesional).",
      img: IlusJust4,
    },
    {
      text: "5. De ser posible ve acompañada a la Fiscalía o “MP” de una persona de tu confianza.",
      img: IlusJust5,
    },
    {
      text: "6. Intenta avisar a personas de tu confianza dónde estarás.",
      img: IlusJust6,
    },
    {
      text: "7. Si no cuentas con un abogado o abogada, solicita que te asignen un asesor o asesora jurídica victimal.",
      img: IlusJust7,
    },
    {
      text: "8. Puedes grabar en audio tu declaración.",
      img: IlusJust8,
    },
    {
      text: "9. Si tienes alguna prueba que pueda respaldar tu historia entrégala al fiscal o agente del Ministerio Público (mensajes, fotos, objetos que se usaron para agredirte, ropa sobre la que cayó sangre, sudor, saliva o semen, etc.",
      img: IlusJust9,
    },
    {
      text: "10. Si te sientes en peligro dilo al fiscal o agente del Ministerio Público para que tome medidas para tu protección.",
      img: IlusJust10,
    },
    {
      text: "11. Si eres una persona extranjera tienes derecho a la asistencia consular, es decir, puedes exigir a las autoridades de la Fiscalía o “MP” que se comuniquen con el Consulado de tu país.",
      img: IlusJust11,
    },
    {
      text: "12. En caso de que denuncies recuerda pedir una copia de la denuncia (debe ser gratuita), preguntar el nombre completo del agente del MP responsable de tu caso y preguntar por el número de carpeta de investigación.",
      img: IlusJust12,
    },
  ]
  const [carIndex, setcarIndex] = useState(0)
  const refSection1 = useRef(null)

  const menuColor = useMenuColor([refSection1])

  useEffect(() => {
    setMenuColor(menuColor)
  }, [menuColor])

  const carouselChange = e => {
    console.log(e)
    setcarIndex(e)
  }

  return (
    <Layout title="Sistema de Justicia">
      <Section>
        <TextIlustration ilus={Ilus4}>
          <p className="text-xl sm:text-4xl text-beige1 font-medium mb-8">
            Sistema de Justicia
          </p>
          <p className="text-lg sm:text-4xl text-gray1 font-light">
            Aquí puedes encontrar información para resolver tus dudas sobre el
            proceso de denuncia y cómo acercarte a las autoridades, en caso de
            que lo estés considerando como una opción. Recuerda, no es
            obligatorio denunciar, es una decisión que te corresponde únicamente
            a ti.
          </p>
        </TextIlustration>
      </Section>
      <section ref={refSection1}>
        <div className="bg-beige1 text-white pt-24 pb-48 sm:py-24 min-h-screen flex">
          <div className="container">
            <TextHeader className="mb-12 !text-4xl">
              Tips para tomar en cuenta si decides denunciar:
            </TextHeader>
            <div className="hidden sm:grid w-full grid-cols-3 sm:gap-8 md:gap-20 lg:gap-24">
              {tips.map((tip, i) => (
                <div key={`tipDesk${i}`} className="mb-8">
                  <div className="bg-white flex justify-center items-center rounded-full w-24 m-auto mb-4">
                    <img src={tip.img} alt="Tip" className="" />
                  </div>

                  <p className="text-white font-medium">{tip.text}</p>
                </div>
              ))}
            </div>
            <div className="sm:hidden mt-12 flex flex-col h-full">
              <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                showThumbs={false}
                onChange={carouselChange}
              >
                {tips.map((tip, i) => (
                  <div className={`px-12`} key={`tipMob${i}`}>
                    <div className="bg-white flex justify-center items-center rounded-full h-full w-40 m-auto">
                      <img src={tip.img} alt="Tip" className="" />
                    </div>
                  </div>
                ))}
              </Carousel>
              <p className="text-white text-base pt-8 grow">{tips[carIndex].text}</p>
              <ProgressBar index={carIndex} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default SistemaJusticia
