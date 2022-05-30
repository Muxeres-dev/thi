import React, { useState, useEffect, useContext, useRef } from "react"
import { navigate } from "gatsby"
import { scroller } from "react-scroll"

import { AppContext } from "../context/AppContext"
import Footer from "../components/layout/Footer"
import Layout from "../components/layout/Layout"
import Button from "../components/shared/Button"
import Close from "../components/shared/Close"
import Section from "../components/shared/Section"
import TextIlustration from "../components/shared/TextIlustration"
import useMenuColor from "../hooks/useMenuColor"

import Ilus1 from "../images/ilus1.png"

const InfoDetail = ({ title, children, closeAction }) => (
  <div className="md:w-2/3 relative pb-12">
    <Close
      action={() => closeAction()}
      color="beige1"
      className="absolute right-0 md:-right-16 top-6"
    />
    <p className="text-2xl md:text-4xl font-medium text-beige1 pr-12 mb-8">
      {title}
    </p>
    {children}
  </div>
)

const NeedOption = ({ title, resume, action }) => (
  <div className="sm:w-72 text-white">
    <Button className="!w-auto" text={title} variant="option-white" action={action} />
    <div className="mt-8">
      <p>{resume}</p>
    </div>
  </div>
)

const IndexPage = () => {
  const { setMenuColor } = useContext(AppContext)
  const [option, setOption] = useState<number | null>(null)
  const refSection = useRef(null)
  const menuColor = useMenuColor([refSection])

  useEffect(() => {
    setMenuColor(menuColor)
  }, [menuColor])

  const selectInfo = opt => {
    setOption(opt)
    scroller.scrollTo("ref-info", {
      duration: 800,
      delay: 100,
      smooth: "easeInOutQuart",
    })
  }

  return (
    <Layout title="Tu historia importa">
      <Section>
        <TextIlustration ilus={Ilus1}>
          <p className="text-2xl md:text-4xl font-extralight">
            <span className="font-medium text-beige1">
              Brindamos información útil y pertinente
            </span>{" "}
            para todas aquellas personas que han vivido violencia sexual,
            tomando en cuenta su proceso de sanación y recuperación.
          </p>
        </TextIlustration>
        <div className="flex flex-col sm:flex-row w-full justify-between gap-4 mt-16">
          <Button
            variant="option"
            text="¿La agresión sexual acaba de ocurrir?"
            action={() => selectInfo(0)}
            active={option === 0}
          />
          <Button
            variant="option"
            text="¿La agresión sexual ocurrió recientemente?"
            action={() => selectInfo(1)}
            active={option === 1}
          />
          <Button
            variant="option"
            text="¿La agresión sexual ocurrió hace tiempo?"
            action={() => selectInfo(2)}
            active={option === 2}
          />
        </div>
        <div className="ref-info mt-16">
          {option === 0 && (
            <InfoDetail
              title="Si la agresión sexual acaba de ocurrir:"
              closeAction={() => setOption(null)}
            >
              <ul className="mt-4 list-disc text-base pl-4">
                <li className="mb-4">Puedes pedir auxilio al 911</li>
                <li className="mb-4">
                  De ser posible procura no bañarte o limpiarte, ya que todo
                  sirve como evidencia para la denuncia.
                </li>
                <li className="mb-4">
                  Cuando llegue la policía, pide que te lleven a una institución
                  en caso de estar lastimada o estar en crisis psicológica.
                </li>
                <li className="mb-4">
                  Como víctima, no tienes la obligación de dar detalles de la
                  agresión a los policías, sobre todo si no te sientes cómoda.
                  Basta con una explicación general.
                </li>
                <li className="mb-4">
                  Hay más probabilidad de recuperar evidencia genética si
                  denuncias al Ministerio Público antes de las primeras 72 horas
                  de pasada la agresión.
                </li>
                <li className="mb-4 font-semibold">
                  Recuerda que siempre puedes decidir no denunciar o hacerlo en
                  otro momento.
                </li>
              </ul>
            </InfoDetail>
          )}
          {option === 1 && (
            <InfoDetail
              title="Si la agresión sexual ocurrió recientemente:"
              closeAction={() => setOption(null)}
            >
              <ul className="mt-4 list-disc text-base pl-4">
                <li className="mb-4">
                  Trata de ponerte a salvo y recibir atención médica (en caso de
                  ser necesario) antes de tomar acciones legales contra la
                  persona agresora.
                </li>
                <li className="mb-4">
                  Es normal si sientes{" "}
                  <span className="font-semibold">
                    enojo, impotencia, miedo o angustia.
                  </span>
                </li>
                <li className="mb-4">
                  Aunque no estés segura de denunciar, conserva todas las{" "}
                  <span className="font-semibold">pruebas o evidencias</span>{" "}
                  relacionadas con la agresión (no borres mensajes, fotos o
                  videos ni te deshagas de objetos con los que te agredieron o
                  de la ropa que quedó maltratada o sucia por la agresión, sobre
                  todo si en ésta pudo caer saliva, sudor, sangre o semen de la
                  persona agresora; guarda las cosas en una{" "}
                  <span className="font-semibold">
                    caja de cartón o en bolsas de papel
                  </span>{" "}
                  -las evidencias genéticas podrían perderse si usas bolsas de
                  plástico-).
                </li>
                <li className="mb-4">
                  Sólo{" "}
                  <span className="font-semibold">
                    TÚ decides si denuncias o no
                  </span>{" "}
                  (y se vale que cambies de opinión en cualquier momento).
                </li>
                <li className="mb-4">
                  Si quieres <span className="font-semibold">denunciar</span> a
                  la persona agresora acércate a la Procuraduría de Protección
                  de Niños, Niñas y Adolescentes (si eres menor de edad), el
                  Instituto de la Mujer, el Centro de Justicia para las Mujeres
                  o la Comisión Ejecutiva de Atención a Víctimas de tu Estado
                  para recibir{" "}
                  <span className="font-semibold">
                    asesoría jurídica y apoyo psicológico.
                  </span>
                </li>
                <li className="mb-4">
                  Te recomendamos revisar el apartado de{" "}
                  <span className="font-semibold">autocuidado</span> en caso de
                  que desees{" "}
                  <span className="font-semibold">
                    herramientas de sanación.
                  </span>
                </li>
              </ul>
            </InfoDetail>
          )}
          {option === 2 && (
            <InfoDetail
              title="Si la agresión sexual ocurrió hace tiempo:"
              closeAction={() => setOption(null)}
            >
              <ul className="mt-4 list-disc text-base pl-4">
                <li className="mb-4">
                  Si tienes interés de denunciar verifica si en tu estado
                  todavía es posible hacerlo por el tiempo que ha pasado, ya que
                  los delitos sexuales pueden prescribir o caducar después de
                  ciertos años, es decir, la ley establece un periodo de tiempo
                  para que estos delitos sean investigados.{" "}
                  <span className="font-semibold">
                    Si no denuncias en ese lapso,
                  </span>{" "}
                  las autoridades no tendrán la obligación de investigar y
                  enjuiciar a la persona agresora.
                </li>
                <li className="mb-4 font-semibold">
                  Nunca es tarde para comenzar un proceso de sanación y aliviar
                  el malestar emocional que te ha provocado la agresión.
                </li>
              </ul>
            </InfoDetail>
          )}
        </div>
      </Section>
      <section ref={refSection}>
        <div className="min-h-screen w-screen flex flex-col">
          <div className="bg-beige1 text-white flex grow">
            <div className="container">
              <p className="text-2xl sm:text-4xl mt-16 sm:mb-24 md:mb-32">
                ¿Qué información necesitas?
              </p>
              <div className="flex flex-col sm:flex-row w-full justify-between gap-4 my-8">
                <NeedOption
                  title="Sistema de Salud"
                  resume="Aquí puedes encontrar información útil sobre los servicios que puede brindarte el sistema de salud en caso de haber vivido una situación de abuso sexual o violación."
                  action={() => navigate("/sistema_de_salud")}
                />
                <NeedOption
                  title="Sistema de Justicia"
                  resume="Aquí puedes encontrar información útil sobre qué es una denuncia, cómo hacer una denuncia y qué pasa después de hacer una denuncia."
                  action={() => navigate("/sistema_de_justicia")}
                />
                <NeedOption
                  title="Autocuidado"
                  resume="Aquí puedes encontrar información útil sobre cómo cuidar tu cuerpo y cómo cuidarte emocionalmente después de una situación de violencia sexual."
                  action={() => navigate("/autocuidado")}
                />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
