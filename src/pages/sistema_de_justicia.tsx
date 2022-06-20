import React, { useContext, useEffect, useRef, useState } from "react"
import { Link } from "gatsby"
import { Carousel } from "react-responsive-carousel"

import { AppContext } from "../context/AppContext"
import Layout from "../components/layout/Layout"
import Section from "../components/shared/Section"
import TextHeader from "../components/shared/TextHeader"
import TextIlustration from "../components/shared/TextIlustration"
import Button from "../components/shared/Button"
import { useAnimateOnInView } from "../hooks/useAnimateOnInView"

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
import PregFreq from "../images/pregfreq.svg"

import useMenuColor from "../hooks/useMenuColor"

import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import TitleText from "../components/shared/TitleText"
import { visible } from "../constants/animations"
import { motion } from "framer-motion"

const ProgressBar = ({ index }) => (
  <div className="relative mt-32">
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
  const refSection2 = useRef(null)

  const menuColor = useMenuColor([refSection1, refSection2])

  useEffect(() => {
    setMenuColor(menuColor)
  }, [menuColor])

  const carouselChange = e => {
    console.log(e)
    setcarIndex(e)
  }
  const { ref: ref0, controls: controls0 } = useAnimateOnInView()
  const { ref: ref3, controls: controls3 } = useAnimateOnInView()
  const { ref: ref6, controls: controls6 } = useAnimateOnInView()
  const { ref: ref9, controls: controls9 } = useAnimateOnInView()

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
        <div className="bg-beige1 text-white pt-24 pb-24 sm:pb-48 sm:py-12 sm:min-h-screen flex">
          <div className="container">
            <TextHeader className="mb-12 !text-4xl">
              Tips para tomar en cuenta si decides denunciar:
            </TextHeader>
            <div className="hidden sm:grid w-full grid-cols-3 sm:gap-12 md:gap-x-20 lg:gap-x-24">
              {tips.map((tip, i) => (
                <div key={`tipDesk${i}`} className="">
                  <div className="bg-white flex justify-center items-center rounded-full w-32 m-auto mb-4">
                    <img src={tip.img} alt="Tip" className="" />
                  </div>

                  <p className="text-white font-medium">{tip.text}</p>
                </div>
              ))}
            </div>
            <div className="sm:hidden mt-12 flex flex-col">
              <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                showThumbs={false}
                onChange={carouselChange}
              >
                {tips.map((tip, i) => (
                  <div className={`px-12`} key={`tipMob${i}`}>
                    <div className="bg-white flex justify-center items-center rounded-full w-40 m-auto">
                      <img src={tip.img} alt="Tip" className="" />
                    </div>
                  </div>
                ))}
              </Carousel>
              <p className="text-white text-base pt-8 grow">
                {tips[carIndex].text}
              </p>
              <ProgressBar index={carIndex} />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="min-h-screen bg-white text-gray1 font-light text-base py-12">
          <div className="container">
            <div className="sm:w-3/4 relative">
              <TextHeader className="text-beige1 mb-8">
                Derechos de las víctimas
              </TextHeader>

              <TitleText className="text-marron mb-4">
                Como víctima de violencia sexual tienes derechos, si bien estos
                no siempre son respetados por las autoridades, consideramos
                importante que los conozcas:
              </TitleText>
              <ul className="list-disc pl-6">
                <li className="mb-4 font-semibold">
                  Una investigación que te sirva.
                </li>
                <li className="mb-4">
                  <span className="font-semibold">
                    Ser tratada con respeto y sin discriminación
                  </span>{" "}
                  por las autoridades, los servidores públicos y cualquier
                  profesional que intervenga en tu atención (médico, psicólogo,
                  trabajador social, abogado, etc.).
                </li>
                <li className="mb-4">
                  <span className="font-semibold">
                    Recibir información clara y precisa para que puedas tomar
                    decisiones
                  </span>{" "}
                  sobre la atención médica, psicológica, jurídica o cualquier
                  otra que necesites.
                </li>
                <li className="mb-4">
                  <span className="font-semibold">
                    Expresar libremente tus opiniones y preocupaciones a las
                    autoridades
                  </span>{" "}
                  para que las consideren antes de que tomen una decisión o
                  lleven a cabo una acción que pueda afectarte de cualquier
                  forma.
                </li>
                <li className="mb-4">
                  <span className="font-semibold">
                    Mantenerte separada o alejada de la persona agresora;
                  </span>{" "}
                  de hecho, está prohibido que tú y la persona agresora sean
                  atendidos por la misma persona y en el mismo lugar.
                </li>
                <li className="mb-4">
                  <span className="font-semibold">
                    Ser canalizada a un refugio
                  </span>{" "}
                  (junto con tus hijas e hijos) si la persona agresora puede
                  tomar represalias y poner tu vida o bienestar en peligro.
                </li>
                <li className="mb-4">
                  <span className="font-semibold">
                    Recibir el apoyo de un intérprete o traductor
                  </span>{" "}
                  de forma gratuita si no hablas español o tienes una
                  discapacidad auditiva, verbal o visual.
                </li>
                <li className="mb-4">
                  <span className="font-semibold">
                    Ninguna autoridad debe obligarte o presionarte para que
                    perdones
                  </span>{" "}
                  o te reconcilies con la persona agresora.
                </li>
                <li className="mb-4">
                  <span className="font-semibold">
                    Nadie tiene permitido difundir tus datos personales
                  </span>{" "}
                  (nombre, dirección, teléfono, etc.) y lo que te pasó.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section ref={refSection2}>
        <div className="bg-beige1 py-8 sm:py-12">
          <div className="container text-white">
            <div className="flex flex-col sm:flex-row items-center sm:gap-4">
              <img src={PregFreq} className="sm:order-2" />
              <p className="text-3xl sm:text-6xl sm:order-1">
                Preguntas frecuentes
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="min-h-screen bg-white text-gray1 font-light text-base pt-6 pb-12">
          <div className="sm:container">
            <div className="sm:w-3/4 relative">
              <div className="accordion" id="accordionJusticia">
                <div className="accordion-item">
                  <h2 className="accordion-header mb-0" id="heading1">
                    <button
                      className="accordion-button collapsed relative flex items-center w-full py-6 sm:py-4 pl-16 sm:pl-8 pr-16 sm:pr-16 !rounded-none text-lg !text-gray1 font-medium text-left bg-white border-b-2 border-beige1 transition focus:outline-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse1"
                      aria-expanded="true"
                      aria-controls="collapse1"
                    >
                      <span className="pr-4">
                        1. ¿Cómo puedo saber si soy víctima de un delito sexual?
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading1"
                  >
                    <div className="accordion-body bg-beige1 text-lg text-white pt-6 sm:pt-12 pb-8 sm:pb-16 sm:px-20 px-16">
                      <p className="mb-4">
                        El nombre de los delitos sexuales puede variar
                        dependiendo de los Códigos Penales de cada Estado de la
                        República; sin embargo, es frecuente que estas leyes los
                        llamen y describan de la siguiente manera:
                      </p>
                      <TitleText className="mb-4">Acoso sexual</TitleText>
                      <p>Ocurre cuando alguien: </p>
                      <ul className="list-disc pl-6 mb-4">
                        <li>
                          Nos pide realizar actos sexuales para él o para otra
                          persona que van en contra de nuestra voluntad,
                          dignidad y bienestar emocional;
                        </li>
                        <li>
                          Realiza una conducta sexual hacia nosotras que no
                          queremos; o
                        </li>
                        <li>
                          Usa el teléfono, correo electrónico, redes sociales o
                          cualquier otro medio para enviarnos imágenes, audios o
                          videos realizando actividades sexuales o para pedirnos
                          que tengamos relaciones sexuales con él.
                        </li>
                      </ul>
                      <p>Ejemplos: </p>

                      <ul className="list-disc pl-6 mb-4">
                        <li>
                          Una mujer que camina por la calle recibe comentarios
                          sexuales indeseados por parte de un grupo de
                          desconocidos.
                        </li>
                        <li>
                          Un hombre saca su pene enfrente de una joven que está
                          haciendo ejercicio en el parque.
                        </li>
                        <li>
                          A través de Facebook y Twitter, un desconocido envía
                          su “pack” y pide “nudes” a una joven.
                        </li>
                      </ul>
                      <TitleText className="mb-4">
                        Hostigamiento sexual
                      </TitleText>
                      <p>Ocurre cuando alguien: </p>
                      <ul className="list-disc pl-6 mb-4">
                        <li>
                          Nos obliga a realizar actos sexuales o nos molesta con
                          insinuaciones, comentarios y comportamientos sexuales
                          aprovechándose de la relación de jerarquía laboral,
                          escolar, familiar o cualquier otra que mantiene con
                          nosotras (por ejemplo, es servidor público o nuestro
                          patrón, padre, profesor, etc.).
                        </li>
                      </ul>
                      <p>Ejemplos:</p>
                      <ul className="list-disc pl-6 mb-4">
                        <li>
                          Un profesor contacta a una de sus alumnas a través de
                          Instagram y le envía mensajes privados contándole sus
                          fantasías sexuales, ella lo bloquea y él continúa
                          mandándole mensajes e imágenes sexuales por otras
                          redes sociales.
                        </li>
                        <li>
                          En una empresa, el jefe amenaza a su empleada con
                          despedirla si no tiene relaciones sexuales con él.
                        </li>
                      </ul>
                      <TitleText className="mb-4">Abuso sexual </TitleText>
                      <p>Ocurre cuando alguien: </p>
                      <ul className="list-disc pl-6 mb-4">
                        <li>
                          Nos obliga a participar en un acto sexual (sin
                          introducir el pene en la vagina, el ano o la boca), ya
                          sea que tenga contacto con nuestro cuerpo o haga que
                          observemos o realicemos este tipo de acciones.
                        </li>
                      </ul>
                      <p>Ejemplos: </p>
                      <ul className="list-disc pl-6 mb-4">
                        <li>
                          Un hombre obliga a una mujer a que se desnude y le
                          toque el pene.{" "}
                        </li>
                        <li>
                          Un hombre toca los senos y las nalgas de su sobrina
                          cuando sus padres la dejan bajo su cuidado.{" "}
                        </li>
                        <li>
                          Un hombre invita a una vecina a su casa, la encierra y
                          la obliga a ver pornografía con él.{" "}
                        </li>
                      </ul>
                      <TitleText className="mb-4">Violación</TitleText>
                      <p>Ocurre cuando alguien: </p>
                      <ul className="list-disc pl-6 mb-4">
                        <li>
                          Introduce el pene, cualquier otra parte de su cuerpo
                          (dedos, manos, lengua, etc.) o un objeto en nuestra
                          vagina, ano o boca en contra de nuestra voluntad.
                        </li>
                      </ul>
                      <p>Ejemplos:</p>
                      <ul className="list-disc pl-6 mb-4">
                        <li>
                          Un hombre discute con su esposa, la empuja contra la
                          pared y, una vez que la inmoviliza, la obliga a
                          practicarle sexo oral.
                        </li>
                        <li>
                          Un hombre penetra a una joven que se quedó dormida
                          tras ingerir alcohol.
                        </li>
                        <li>
                          Un hombre introduce sus dedos en la vagina de una niña
                          de 10 años.
                        </li>
                      </ul>
                      <TitleText className="mb-4">Estupro</TitleText>
                      <p>
                        Ocurre cuando tenemos entre 13 y 17 años de edad y
                        alguien:{" "}
                      </p>
                      <ul className="list-disc pl-6 mb-4">
                        <li>
                          Tiene relaciones sexuales con nosotras utilizando
                          engaños de cualquier tipo para que aceptemos esto.{" "}
                        </li>
                      </ul>
                      <p>Ejemplos:</p>
                      <ul className="list-disc pl-6 mb-4">
                        <li>
                          Una adolescente de 13 años sostiene relaciones
                          sexuales con su “novio” de 36 años.{" "}
                        </li>
                        <li>
                          Una joven de 16 años tiene relaciones sexuales con un
                          hombre de 48 porque le prometió ser su representante y
                          ayudarla a ser una gran modelo e “influencer”.
                        </li>
                      </ul>
                      <TitleText className="mb-4">
                        Contra la intimidad sexual (“Ley Olimpia”)
                      </TitleText>
                      <p>Ocurre cuando alguien: </p>
                      <ul className="list-disc pl-6 mb-4">
                        <li>
                          Fotografía, graba o elabora imágenes, audios o videos
                          con contenido sexual íntimo (real o simulado) de
                          nosotras sin que estemos de acuerdo con esto o
                          aceptándolo mediante engaños;
                        </li>
                        <li>
                          Muestra, comparte, difunde, reproduce, comercializa,
                          ofrece o intercambia imágenes, audios o videos con
                          contenido sexual íntimo de nosotras sin nuestro
                          consentimiento (ya sea por teléfono, correo
                          electrónico, redes sociales o cualquier otro medio).
                        </li>
                      </ul>
                      <p>Ejemplos:</p>
                      <ul className="list-disc pl-6 mb-4">
                        <li>
                          Una joven permite que su pareja la grabe mientras
                          tienen relaciones sexuales y, cuando termina su
                          noviazgo, él publica ese video en internet.
                        </li>
                        <li>
                          Un estudiante toma fotografías de los senos y nalgas
                          de sus compañeras y las comparte con sus amigos a
                          través de WhatsApp.
                        </li>
                      </ul>
                      <TitleText className="mb-4">Violencia familiar</TitleText>
                      <p>Es un delito sexual cuando: </p>
                      <ul className="list-disc pl-6 mb-4">
                        <li>
                          Recibimos violencia sexual o contra nuestros derechos
                          reproductivos por parte de un integrante de nuestra
                          familia consanguínea o adoptiva o por alguien con
                          quien tenemos o tuvimos una relación de pareja.
                        </li>
                      </ul>
                      <p>Ejemplos:</p>
                      <ul className="list-disc pl-6 mb-4">
                        <li>
                          Un hombre prohíbe a su pareja que utilice métodos
                          anticonceptivos.
                        </li>
                        <li>
                          Un hombre amenaza a su exesposa con quitarle a sus
                          hijos si tiene un bebé con su nueva pareja.
                        </li>
                      </ul>
                      <TitleText className="mb-4">Tortura sexual</TitleText>

                      <ul className="list-disc pl-6 mb-4">
                        <li>
                          Ocurre cuando un servidor público (policía, militar,
                          agente del ministerio público, etc.) o cualquier otra
                          persona CON o SIN el permiso, ayuda o autorización de
                          un servidor público:
                        </li>
                        <li>
                          Lleva a cabo conductas sexuales que nos causan dolor o
                          sufrimiento o disminuyen nuestra capacidad física o
                          psicológica con la intención de intimidarnos,
                          castigarnos u obligarnos a decir o hacer algo en
                          contra de nuestra voluntad.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header mb-0" id="heading2">
                    <button
                      className="accordion-button collapsed relative flex items-center w-full py-6 sm:py-4 pl-16 sm:pl-8 pr-16 sm:pr-16 !rounded-none text-lg !text-gray1 font-medium text-left bg-white border-b-2 border-beige1 transition focus:outline-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse2"
                      aria-expanded="true"
                      aria-controls="collapse2"
                    >
                      <span className="pr-4">
                        2. ¿Por qué es importante que un abogado o abogada me
                        asesore y represente si fui víctima de un delito sexual?
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapse2"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading2"
                  >
                    <div className="accordion-body bg-beige1 text-lg text-white pt-6 sm:pt-12 pb-8 sm:pb-16 sm:px-20 px-16">
                      <p className="mb-4">Puede brindarte:</p>

                      <ul className="list-disc pl-6 mb-4">
                        <li>
                          <span className="font-semibold">
                            Asesoría jurídica:
                          </span>{" "}
                          te orientará sobre las acciones legales que puedes
                          llevar a cabo para que la persona agresora sea
                          sancionada y tú cuentes con la protección de las
                          autoridades; con la información especializada que te
                          proporcione podrás resolver tus dudas, tomar
                          decisiones y estar preparada para enfrentar distintas
                          situaciones en las instituciones de justicia.
                        </li>
                        <li>
                          <span className="font-semibold">
                            Representación legal:
                          </span>{" "}
                          si tú lo autorizas, podrá realizar trámites y acciones
                          legales a tu favor, de tal manera que se cumplan y
                          respeten tus derechos y tu caso sea atendido
                          adecuadamente por las autoridades.
                        </li>
                      </ul>
                      <p className="mb-4">
                        Si cuentas con recursos económicos, lo más sencillo es
                        contratar a un abogado recomendado por alguien de tu
                        confianza (el precio de sus servicios puede variar
                        porque cada abogado tiene la libertad de cobrar lo que
                        quiera por su trabajo).
                      </p>

                      <p className="mb-4">
                        También, puedes solicitar que un “asesor jurídico
                        victimal” te asesore y represente de forma gratuita (sin
                        costo) en las siguientes instituciones:
                      </p>

                      <ul className="list-disc pl-6 mb-4 font-semibold">
                        <li>Comisiones Ejecutivas de Atención a Víctimas</li>
                        <li>Centros de Justicia para las Mujeres</li>
                        <li>Institutos de las Mujeres </li>
                      </ul>

                      <p className="mb-4">
                        Para conocer los teléfonos, direcciones y horarios de
                        atención que actualmente tienen estas instituciones
                        llama a Locatel o busca estos datos en internet. Además,
                        hay organizaciones de la sociedad civil con abogados y
                        abogadas que asesoran, acompañan y representan de forma
                        gratuita o por un precio bajo (para conocerlas haz{" "}
                        <Link
                          to="/directorio"
                          className="font-semibold text-marron underline"
                        >
                          click aquí
                        </Link>
                        ).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header mb-0" id="heading3">
                    <button
                      className="accordion-button collapsed relative flex items-center w-full py-6 sm:py-4 pl-16 sm:pl-8 pr-16 sm:pr-16 !rounded-none text-lg !text-gray1 font-medium text-left bg-white border-b-2 border-beige1 transition focus:outline-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse3"
                      aria-expanded="true"
                      aria-controls="collapse3"
                    >
                      <span className="pr-4">
                        3. ¿Qué puedo hacer si fui víctima de un delito sexual y
                        la persona agresora sigue siendo un peligro para mí?
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapse3"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading3"
                  >
                    <div className="accordion-body bg-beige1 text-lg text-white pt-6 sm:pt-12 pb-8 sm:pb-16 sm:px-20 px-16">
                      <p className="mb-4">
                        Si la persona agresora te conoce (porque es tu familiar,
                        pareja, jefe, vecino, compañero de trabajo o escuela,
                        etc.) y podría ser violenta contigo otra vez puedes
                        solicitar “órdenes de protección” en la Fiscalía o
                        Ministerio Público o en los juzgados. Las autoridades de
                        estas instituciones pueden ordenar acciones para evitar
                        que vivas situaciones de violencia física, emocional o
                        sexual, algunas de estas acciones son:
                      </p>
                      <ul className="list-disc pl-6 mb-4">
                        <li>
                          Proporcionar{" "}
                          <span className="font-semibold">
                            auxilio policíaco
                          </span>{" "}
                          de manera inmediata ingresando al domicilio donde te
                          encuentres.
                        </li>
                        <li>
                          Sacar a la persona{" "}
                          <span className="font-semibold">agresora</span> de tu
                          domicilio inmediatamente (sin importar quién es el
                          dueño de la casa).
                        </li>
                        <li>
                          Prohibir a la persona agresora que se acerque a tu{" "}
                          <span className="font-semibold">
                            casa, trabajo, escuela o cualquier otro lugar
                          </span>{" "}
                          que frecuentes.
                        </li>
                        <li>
                          Recuperar tus{" "}
                          <span className="font-semibold">
                            documentos y objetos personales
                          </span>{" "}
                          (y los de tus hijos e hijas) si están en manos de la
                          persona agresora.
                        </li>
                      </ul>
                      <p className="mb-4">
                        <span className="font-semibold">IMPORTANTE:</span> NO es
                        necesario que presentes una denuncia para que haya una
                        orden de protección, sólo debes explicar a las
                        autoridades, de manera oral o por escrito, qué te ha
                        pasado y qué te preocupa o causa temor. Las autoridades
                        tienen{" "}
                        <span className="font-semibold">
                          máximo 8 horas para otorgar estas órdenes de
                          protección
                        </span>{" "}
                        y aunque no siempre es así, ese es el plazo que tienen
                        las autoridades para actuar.
                      </p>
                      <p className="mb-4">
                        También puedes ser canalizada a un refugio, los cuales
                        son espacios seguros que aplican distintas medidas para
                        evitar que la persona agresora pueda localizarte.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header mb-0" id="heading4">
                    <button
                      className="accordion-button collapsed relative flex items-center w-full py-6 sm:py-4 pl-16 sm:pl-8 pr-16 sm:pr-16 !rounded-none text-lg !text-gray1 font-medium text-left bg-white border-b-2 border-beige1 transition focus:outline-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse4"
                      aria-expanded="true"
                      aria-controls="collapse4"
                    >
                      <span className="pr-4">4. ¿Qué es denunciar?</span>
                    </button>
                  </h2>
                  <div
                    id="collapse4"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading4"
                  >
                    <div className="accordion-body bg-beige1 text-lg text-white pt-6 sm:pt-12 pb-8 sm:pb-16 sm:px-20 px-16">
                      <p className="">
                        Denunciar es comunicarle a las autoridades un suceso que
                        afecta nuestros derechos o bienestar y que probablemente
                        sea un delito. Específicamente, un “fiscal” o “agente
                        del Ministerio Público” es la autoridad que recibe la
                        denuncia, se encarga de averiguar qué ocurrió y presenta
                        los resultados de su investigación a un juez o jueza que
                        va a determinar si la persona acusada de agredirte
                        sexualmente es o no responsable de cometer un delito, la
                        sanción que recibirá si es “culpable” y las medidas para
                        reparar los daños que te causó la agresión.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header mb-0" id="heading5">
                    <button
                      className="accordion-button collapsed relative flex items-center w-full py-6 sm:py-4 pl-16 sm:pl-8 pr-16 sm:pr-16 !rounded-none text-lg !text-gray1 font-medium text-left bg-white border-b-2 border-beige1 transition focus:outline-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse5"
                      aria-expanded="true"
                      aria-controls="collapse5"
                    >
                      <span className="pr-4">5. ¿Quién puede denunciar?</span>
                    </button>
                  </h2>
                  <div
                    id="collapse5"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading5"
                  >
                    <div className="accordion-body bg-beige1 text-lg text-white pt-6 sm:pt-12 pb-8 sm:pb-16 sm:px-20 px-16">
                      <p className="mb-4">
                        Hay delitos sexuales que{" "}
                        <span className="font-semibold">cualquier persona</span>{" "}
                        puede denunciar, por ejemplo, cualquiera puede pedirle a
                        un agente del Ministerio Público que investigue un caso
                        de
                        <span className="font-semibold">
                          violación o tortura sexual
                        </span>
                        , ya sea porque es la víctima o porque se enteró o
                        estuvo presente cuando alguien fue agredido de esta
                        manera. Estos delitos deben investigarse “de oficio”, es
                        decir, las autoridades tienen la obligación de
                        investigarlos en cuanto se enteran de que alguien pudo
                        haberlos cometido. Lamentablemente, aunque las leyes
                        mexicanas establecen esta obligación, las autoridades no
                        siempre la cumplen.
                      </p>
                      <p className="mb-4">
                        Otros delitos únicamente pueden ser investigados cuando
                        la <span className="font-semibold">víctima</span> lo
                        solicita directamente presentando una queja (conocida
                        formalmente como{" "}
                        <span className="font-semibold">"querella"</span>) ante
                        un agente del ministerio público. Éste es el caso de los
                        delitos de{" "}
                        <span className="font-semibold">
                          acoso sexual, hostigamiento sexual, contra la
                          intimidad sexual, estupro o violación entre personas
                          que viven en matrimonio o unión libre.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header mb-0" id="heading6">
                    <button
                      className="accordion-button collapsed relative flex items-center w-full py-6 sm:py-4 pl-16 sm:pl-8 pr-16 sm:pr-16 !rounded-none text-lg !text-gray1 font-medium text-left bg-white border-b-2 border-beige1 transition focus:outline-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse6"
                      aria-expanded="true"
                      aria-controls="collapse6"
                    >
                      <span className="pr-4">
                        6. ¿Cuánto tiempo tengo para denunciar?
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapse6"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading6"
                  >
                    <div className="accordion-body bg-beige1 text-lg text-white pt-6 sm:pt-12 pb-8 sm:pb-16 sm:px-20 px-16">
                      <p className="mb-4">
                        Puedes denunciar un delito sexual en cuanto tengas la
                        fuerza física y emocional para hacerlo.{" "}
                        <span className="font-semibold">
                          Denunciar es tu derecho y tu decisión
                        </span>
                        , nadie te puede obligar a que lo hagas.
                      </p>
                      <p className="mb-4">
                        Denunciar de inmediato o lo más pronto posible puede ser
                        muy favorable para la investigación del delito, sobre
                        todo cuando temes olvidar detalles de la agresión o de
                        la persona agresora, o si consideras que en tu cuerpo o
                        en el lugar donde ocurrió el delito pueden encontrarse
                        pruebas que tal vez se pierdan con el paso del tiempo.
                      </p>
                      <p className="mb-4">
                        También, es posible presentar una denuncia{" "}
                        <span className="font-semibold">
                          varios años después
                        </span>{" "}
                        de que ocurrió la agresión, sin embargo, los delitos
                        sexuales pueden prescribir o “caducar” después de
                        ciertos años, es decir, la Ley establece un periodo de
                        tiempo para que estos delitos sean investigados, si no
                        denuncias en ese lapso, las autoridades no tendrán la
                        obligación de investigar y enjuiciar al agresor después.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header mb-0" id="heading7">
                    <button
                      className="accordion-button collapsed relative flex items-center w-full py-6 sm:py-4 pl-16 sm:pl-8 pr-16 sm:pr-16 !rounded-none text-lg !text-gray1 font-medium text-left bg-white border-b-2 border-beige1 transition focus:outline-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse7"
                      aria-expanded="true"
                      aria-controls="collapse7"
                    >
                      <span className="pr-4">7. ¿Dónde puedo denunciar?</span>
                    </button>
                  </h2>
                  <div
                    id="collapse7"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading7"
                  >
                    <div className="accordion-body bg-beige1 text-lg text-white pt-6 sm:pt-12 pb-8 sm:pb-16 sm:px-20 px-16">
                      <p className="mb-4">
                        Para denunciar un delito sexual acude a la{" "}
                        <span className="font-semibold">
                          fiscalía o agencia del Ministerio Público (“MP”)
                        </span>
                        , de preferencia a la que esté más cerca del lugar donde
                        ocurrió la agresión.{" "}
                        <a
                          href="https://denuncia.org/localizador-de-ministerios-publicos/"
                          className="font-semibold text-marron underline"
                          target="_blank"
                        >
                          Aquí
                        </a>{" "}
                        puedes localizar a cuál puedes acudir.
                      </p>
                      <p className="mb-4">
                        Es recomendable denunciar en las instituciones dedicadas
                        a la atención de estos delitos como son las{" "}
                        <span className="font-semibold">
                          Fiscalías Especializadas en Delitos Sexuales, los
                          Centros de Justicia para las Mujeres o las Fiscalías
                          Especializadas para la Atención de Delitos de
                          Violencia de Género.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header mb-0" id="heading8">
                    <button
                      className="accordion-button collapsed relative flex items-center w-full py-6 sm:py-4 pl-16 sm:pl-8 pr-16 sm:pr-16 !rounded-none text-lg !text-gray1 font-medium text-left bg-white border-b-2 border-beige1 transition focus:outline-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse8"
                      aria-expanded="true"
                      aria-controls="collapse8"
                    >
                      <span className="pr-4">
                        8. ¿Debo seguir un procedimiento especial para denunciar
                        un delito sexual?
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapse8"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading8"
                  >
                    <div className="accordion-body bg-beige1 text-lg text-white pt-6 sm:pt-12 pb-8 sm:pb-16 sm:px-20 px-16">
                      <p className="mb-4">
                        No, pero es importante que tengas en cuenta que según
                        los testimonios de muchas mujeres víctimas de delitos
                        sexuales las autoridades del ministerio público suelen
                        comportarse de forma poco ética y profesional al culpar
                        a las mujeres de lo ocurrido, no brindar información
                        clara, negarse a recibir la denuncia o tratar de
                        convencer a las víctimas para que no denuncien. Si esto
                        sucede, es recomendable que te acerques a alguna{" "}
                        <Link
                          to="/directorio"
                          className="font-semibold text-marron underline"
                        >
                          organización de la sociedad civil
                        </Link>{" "}
                        que pueda brindarte acompañamiento y asesoría.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header mb-0" id="heading9">
                    <button
                      className="accordion-button collapsed relative flex items-center w-full py-6 sm:py-4 pl-16 sm:pl-8 pr-16 sm:pr-16 !rounded-none text-lg !text-gray1 font-medium text-left bg-white border-b-2 border-beige1 transition focus:outline-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse9"
                      aria-expanded="true"
                      aria-controls="collapse9"
                    >
                      <span className="pr-4">
                        9. ¿Qué debo decir al momento de denunciar?
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapse9"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading9"
                  >
                    <div className="accordion-body bg-beige1 text-lg text-white pt-6 sm:pt-12 pb-8 sm:pb-16 sm:px-20 px-16">
                      <p className="mb-4">
                        Cuando el agente del Ministerio Público te pida explicar
                        lo que sucedió para redactar tu denuncia, trata de
                        contarle{" "}
                        <span className="font-semibold">
                          todo lo que pasó antes, durante y después de la
                          agresión sexual
                        </span>
                        , esto puede resultar muy duro y difícil para ti, pero
                        decir{" "}
                        <span className="font-semibold">
                          cada detalle que recuerdes
                        </span>{" "}
                        (aún si se trata de algo que no parece importante) es
                        muy útil para que las autoridades obtengan de tu
                        denuncia la mayor cantidad de{" "}
                        <span className="font-semibold">pistas o datos</span>{" "}
                        para comenzar a investigar el delito que se cometió en
                        tu contra.
                      </p>{" "}
                      <p className="mb-4">
                        Las siguientes preguntas pueden orientarte sobre lo que
                        es importante decir al momento denunciar:
                      </p>
                      <ul className="list-disc pl-6 font-semibold mb-4">
                        <li>¿Cómo te agredieron?</li>
                        <li> ¿Cuándo te agredieron?</li>
                        <li> ¿Dónde te agredieron?</li>
                        <li> ¿Quién te agredió?</li>
                        <li>
                          ¿Tienes algo que pueda servir para comprobar la
                          agresión?
                        </li>
                      </ul>
                      <p className="mb-4">
                        Esto{" "}
                        <span className="font-semibold">
                          NO es indispensable
                        </span>{" "}
                        para poder denunciar, pues las autoridades tienen la
                        obligación de obtener pruebas o evidencias mediante
                        distintos procedimientos, pero puede ser muy útil que le
                        digas al agente del Ministerio Público si has
                        identificado algo que puede demostrar la agresión (por
                        ejemplo, si había cámaras de seguridad o testigos que
                        directa o indirectamente pudieron darse cuenta de lo que
                        pasó).
                      </p>{" "}
                      <p className="mb-4">
                        Recuerda: El agente del Ministerio Público podría
                        hacerte algunas{" "}
                        <span className="font-semibold">preguntas</span> para
                        entender lo que ocurrió, por ejemplo, si denuncias una
                        violación podrían preguntarte ¿la penetración fue
                        vaginal, anal u oral?, ¿el agresor eyaculó? Estas
                        preguntas no son para incomodarte o poner en duda la
                        verdad de lo que dices, sirven para que haya claridad y
                        precisión en tu denuncia.
                      </p>
                      <p className="mb-4">
                        Cuando las autoridades terminen de redactar tu{" "}
                        <span className="font-semibold">denuncia</span>, pídeles
                        que te dejen{" "}
                        <span className="font-semibold">leerla</span> y diles si
                        malinterpretaron o escribieron mal algo (tienen la
                        obligación de hacer las correcciones que sean necesarias
                        para que estés
                        <span className="font-semibold">
                          totalmente de acuerdo
                        </span>{" "}
                        con lo que hayan escrito).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header mb-0" id="heading10">
                    <button
                      className="accordion-button collapsed relative flex items-center w-full py-6 sm:py-4 pl-16 sm:pl-8 pr-16 sm:pr-16 !rounded-none text-lg !text-gray1 font-medium text-left bg-white border-b-2 border-beige1 transition focus:outline-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse10"
                      aria-expanded="true"
                      aria-controls="collapse10"
                    >
                      <span className="pr-4">
                        10. ¿Cuáles son mis derechos al denunciar?
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapse10"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading10"
                  >
                    <div className="accordion-body bg-beige1 text-lg text-white pt-6 sm:pt-12 pb-8 sm:pb-16 sm:px-20 px-16">
                      <p className="mb-4 font-semibold">
                        Al momento de denunciar un delito sexual, tienes derecho
                        a:
                      </p>
                      <ul className="list-disc pl-6">
                        <li className="mb-4">
                          Comunicarte con una persona de confianza (amiga,
                          familiar, abogada, etc.) para informarle dónde estás,
                          lo qué harás, si necesitas algo, pedirle que te
                          acompañe o pase por ti, etc.;
                        </li>
                        <li className="mb-4">
                          Ser tratada con respeto y sin discriminación por las
                          autoridades, los servidores públicos y los
                          profesionales que te atiendan (médicos, abogados,
                          trabajadores sociales, etc.);
                        </li>
                        <li className="mb-4">
                          Contar con el apoyo de un abogado o asesor jurídico;
                        </li>
                        <li className="mb-4">
                          Ser atendida de forma gratuita (sin que te cobren),
                          neutral (sin que se pongan del lado de la persona
                          agresora) y lo más rápido posible;
                        </li>
                        <li className="mb-4">
                          Negarte a participar en actividades de investigación
                          (“diligencias”), las autoridades no pueden obligarte
                          ni exigirte que las aceptes como condición para
                          recibir tu denuncia;
                        </li>
                        <li className="mb-4">
                          No ser “revictimizada”, es decir, las autoridades, las
                          y los servidores públicos y los profesionales que te
                          atiendan deben evitar en todo momento que sus palabras
                          o acciones te hagan sentir culpable de la agresión y
                          revivir experiencias traumáticas, tampoco deben
                          justificar o minimizar la violencia que viviste;
                        </li>
                        <li className="mb-4">
                          Apoyarte de un intérprete o traductor si no hablas
                          español o tienes una discapacidad auditiva, verbal o
                          visual.
                        </li>
                      </ul>
                      <p className="mb-4 font-semibold">
                        Además, si eres un niño, niña o adolescente (menor de 18
                        años):
                      </p>

                      <ul className="list-disc pl-6">
                        <li className="mb-4">
                          Nadie puede difundir la imagen de tu cara ni tus datos
                          personales (nombre, dirección, teléfono, redes
                          sociales, etc.);
                        </li>
                        <li className="mb-4">
                          Una persona adulta de tu confianza (mamá, papá, tía,
                          abuela, etc.) puede acompañarte en todo momento;
                        </li>
                        <li className="mb-4">
                          Las autoridades tienen la obligación de recibir tu
                          denuncia (incluso, si tu mamá, papá o la persona que
                          se encarga de cuidarte no está contigo en ese
                          momento);
                        </li>
                        <li className="mb-4">
                          Una psicóloga o psicólogo puede estar a tu lado cuando
                          denuncies o participes en actividades de
                          investigación;
                        </li>
                        <li className="mb-4">
                          Personal de la Procuraduría de Protección de Niñas,
                          Niños y Adolescentes puede brindarte distintos
                          servicios para que se cumplan todos tus derechos;
                        </li>
                        <li className="mb-4">
                          Ninguna autoridad puede obligarte a que enfrentes de
                          alguna manera a la persona que te agredió (no pueden
                          hacer que hables con él o estés cerca suyo).
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header mb-0" id="heading11">
                    <button
                      className="accordion-button collapsed relative flex items-center w-full py-6 sm:py-4 pl-16 sm:pl-8 pr-16 sm:pr-16 !rounded-none text-lg !text-gray1 font-medium text-left bg-white border-b-2 border-beige1 transition focus:outline-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse11"
                      aria-expanded="true"
                      aria-controls="collapse11"
                    >
                      <span className="pr-4">
                        11. ¿Qué pasa si no estoy segura de denunciar?
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapse11"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading11"
                  >
                    <div className="accordion-body bg-beige1 text-lg text-white pt-6 sm:pt-12 pb-8 sm:pb-16 sm:px-20 px-16">
                      <p className="mb-4">
                        Es normal si tienes dudas o miedo. Recuerda que tu
                        bienestar siempre será lo más importante. Si necesitas
                        atención médica o psicológica de urgencia ésta debe ser
                        una prioridad y, en tal caso, puedes indicar a los
                        médicos o al personal de la clínica u hospital que
                        fuiste agredida sexualmente y que deseas que registren y
                        conserven la información que obtengan al atenderte para
                        entregarla después al Ministerio Público.
                      </p>
                      <p className="mb-4">
                        Si temes olvidar detalles de la agresión (o por simple
                        precaución) toma notas de lo que vas recordando, esto
                        puede ser muy útil si decides denunciar después y
                        también para tu proceso de sanación.
                      </p>
                      <p className="mb-8">
                        Además de presentar una denuncia penal contra la persona
                        agresora considera que hay otras alternativas que
                        podrías tomar como son:
                      </p>
                      <p className="mb-4">
                        <span className="font-semibold">
                          Procesos laborales:
                        </span>{" "}
                        Si trabajas en una empresa y has sido víctima de
                        hostigamiento o acoso sexual, puedes exigir a los
                        patrones que cumplan con su obligación de aplicar
                        protocolos para atender este tipo de casos tal como lo
                        establece la Ley Federal del Trabajo.
                      </p>
                      <p className="mb-4">
                        <span className="font-semibold">
                          Procedimientos civiles:
                        </span>{" "}
                        Puedes presentar una “demanda civil” contra el la
                        persona agresora para que repare los daños que te
                        ocasionó, si eliges esto, tú tendrás que cubrir el costo
                        de un abogado y de los procedimientos que se necesiten
                        para obtener pruebas que sirvan para ganar la demanda.
                      </p>
                      <p className="mb-4">
                        <span className="font-semibold">
                          Procedimientos de queja ante las Universidades:
                        </span>{" "}
                        Esta es una opción si has vivido una situación de
                        hostigamiento o acoso sexual en una universidad pública
                        (UNAM, UAM, UACM, etc.) o privada (Ibero, Tec, Claustro
                        de Sor Juana, etc.) que cuenta con un protocolo o
                        procedimiento para atender estos casos.
                      </p>
                      <p className="mb-4">
                        <span className="font-semibold">
                          Procedimientos de queja ante las Comisiones de
                          Derechos Humanos:
                        </span>{" "}
                        Si un{" "}
                        <span className="font-semibold">servidor público</span>{" "}
                        te agredió sexualmente, no atendió tu caso de violencia
                        sexual, lo hizo mal o no cumplió las obligaciones que
                        hubieran evitado que esto te pasará, puedes presentar
                        una queja en su contra en la Comisión de Derechos
                        Humanos.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header mb-0" id="heading12">
                    <button
                      className="accordion-button collapsed relative flex items-center w-full py-6 sm:py-4 pl-16 sm:pl-8 pr-16 sm:pr-16 !rounded-none text-lg !text-gray1 font-medium text-left bg-white border-b-2 border-beige1 transition focus:outline-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse12"
                      aria-expanded="true"
                      aria-controls="collapse12"
                    >
                      <span className="pr-4">
                        12. Ya denuncié, ¿ahora qué sigue?
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapse12"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading12"
                  >
                    <div className="accordion-body bg-beige1 text-lg text-white pt-6 sm:pt-12 pb-8 sm:pb-16 sm:px-20 px-16">
                      <p className="mb-4">
                        Denunciar es el primer paso para que las autoridades
                        comiencen a investigar el delito que viviste.
                        Específicamente, el{" "}
                        <span className="font-semibold">
                          fiscal o agente del Ministerio Público
                        </span>{" "}
                        es responsable de realizar (con el apoyo de la policía)
                        las{" "}
                        <span className="font-semibold">
                          actividades de investigación
                        </span>{" "}
                        (“diligencias”) que se necesiten para obtener
                        informaciones, pruebas o evidencias que sirvan para
                        demostrar el delito e identificar al agresor.
                      </p>
                      <p className="mb-4">
                        En esta etapa, las autoridades podrían comunicarse
                        contigo -por teléfono, correo electrónico o con un aviso
                        por escrito (“citatorio”) que llegue a tu casa o a la
                        oficina de tu abogado- y pedirte que acudas a una cita
                        para que:
                      </p>

                      <ul className="list-disc pl-6">
                        <li className="mb-4">
                          "Amplíes tu declaración", es decir, des más
                          información sobre algo que dijiste al denunciar, de
                          esta manera las autoridades podrán aclarar sus dudas y
                          saber detalladamente todo lo que pasó;
                        </li>
                        <li className="mb-4">
                          Des tu permiso y participes en una actividad de
                          investigación o “diligencia” (recuerda que puedes
                          negarte a participar, las autoridades no podrán
                          obligarte ni poner esto como excusa para dejar de
                          investigar);
                        </li>
                        <li className="mb-4">
                          Te informen cómo han avanzado con la investigación y
                          qué actividades llevarán a cabo.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header mb-0" id="heading13">
                    <button
                      className="accordion-button collapsed relative flex items-center w-full py-6 sm:py-4 pl-16 sm:pl-8 pr-16 sm:pr-16 !rounded-none text-lg !text-gray1 font-medium text-left bg-white border-b-2 border-beige1 transition focus:outline-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse13"
                      aria-expanded="true"
                      aria-controls="collapse13"
                    >
                      <span className="pr-4">
                        13. ¿Cómo seguir de cerca la investigación de tu caso?
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapse13"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading13"
                  >
                    <div className="accordion-body bg-beige1 text-lg text-white pt-6 sm:pt-12 pb-8 sm:pb-16 sm:px-20 px-16">
                      <p className="mb-4">
                        Para que las autoridades sigan investigando el delito y
                        lo hagan correctamente, es muy importante que lleves a
                        cabo las siguientes acciones{" "}
                        <span className="font-semibold">
                          con el apoyo de tu abogado o asesor jurídico victimal:
                        </span>
                      </p>
                      <ul className="list-disc pl-6">
                        <li className="mb-4">
                          Si tienes alguna prueba o evidencia de la agresión
                          sexual entrégala al agente del Ministerio Público.
                        </li>
                        <li className="mb-4">
                          Si tienes información sobre la agresión sexual que no
                          mencionaste al momento de denunciar (porque es algo
                          que recién recordaste, descubriste o te enteraste) ve
                          a la Fiscalía o “MP” para “ampliar tu declaración”.
                        </li>
                        <li className="mb-4">
                          Si encontraste a alguien que fue testigo de lo que
                          pasó antes, durante o después de la agresión, puedes
                          pedirle al fiscal o agente del Ministerio Público que
                          cite a esa persona para que diga lo que sabe.
                        </li>
                        <li className="mb-4">
                          Solicita el “plan de investigación” diseñado por el
                          fiscal o agente del Ministerio Público (es su
                          obligación incluir en este documento: los objetivos de
                          la investigación, las estrategias que seguirá y las
                          actividades o “diligencias” que realizará para
                          demostrar el delito e identificar a la persona
                          agresora, aclarando qué tareas llevará a cabo él y
                          cuáles la policía).
                        </li>
                        <li className="mb-4">
                          Reúnete con el fiscal o agente del Ministerio Público
                          para que te informe los avances de la investigación,
                          es decir, para que te explique qué acciones ha
                          realizado, cuáles le faltan, qué ha comprobado y qué
                          tiene pendiente demostrar.
                        </li>
                        <li className="mb-4">
                          Pide una copia de la “carpeta de investigación”. En
                          ésta encontrarás un registro de las actividades más
                          importantes que ha realizado el fiscal o agente del
                          Ministerio Público para investigar tu caso (el tamaño
                          de la carpeta no refleja la calidad de su trabajo,
                          éste es deficiente si no sigue un “plan de
                          investigación” o se enfoca en actividades inútiles o
                          sin sentido). Haz esta petición por escrito señalando
                          claramente que quieres una copia gratuita de todo lo
                          que aparece en esta carpeta.
                        </li>
                        <li className="mb-4">
                          Si no te dan una copia de la carpeta de investigación
                          o cualquier información que necesites, solicita (con
                          ayuda de tu abogado o asesor jurídico victimal) una
                          “audiencia de impugnación” a un “juez de control”,
                          esta autoridad puede ordenarles que te entreguen la
                          copia o la información que te han negado.
                        </li>
                        <li className="mb-4">
                          Si presentaste una denuncia hace tiempo y, por
                          cualquier razón, no le diste seguimiento, lo mejor es
                          que vayas a la Fiscalía o “MP” donde denunciaste –de
                          ser posible, con tu abogado o asesor jurídico victimal
                          y el número de “carpeta de investigación” o
                          “averiguación previa”– para:
                        </li>
                        <li className="font-semibold">
                          preguntar el nombre completo y el teléfono del fiscal
                          o agente del Ministerio Público encargado de tu caso;
                        </li>
                        <li className="font-semibold">
                          pedir que actualicen el estado de la investigación; y
                        </li>
                        <li className="font-semibold">
                          “ampliar tu declaración” si recordaste o conseguiste
                          más información sobre el delito que se cometió contra
                          ti.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header mb-0" id="heading14">
                    <button
                      className="accordion-button collapsed relative flex items-center w-full py-6 sm:py-4 pl-16 sm:pl-8 pr-16 sm:pr-16 !rounded-none text-lg !text-gray1 font-medium text-left bg-white border-b-2 border-beige1 transition focus:outline-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse14"
                      aria-expanded="true"
                      aria-controls="collapse14"
                    >
                      <span className="pr-4">
                        14. ¿Cómo solicitar "diligencias" y "peritajes" para
                        demostrar la agresión?
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapse14"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading14"
                  >
                    <div className="accordion-body bg-beige1 text-lg text-white pt-6 sm:pt-12 pb-8 sm:pb-16 sm:px-20 px-16">
                      <p className="mb-4">
                        Las “diligencias” son las acciones que realiza el fiscal
                        o agente del Ministerio Público –solo o con la ayuda de
                        policías o especialistas (“peritos”)– para obtener
                        pruebas o evidencias del delito.
                      </p>
                      <p className="mb-4">
                        Las siguientes diligencias pueden ser muy útiles en la
                        investigación de delitos sexuales:
                      </p>
                      <ul className="list-disc pl-6 font-semibold">
                        <li className="mb-4">Inspección ocular</li>
                        <li className="mb-4">Reconstrucción de hechos</li>
                        <li className="mb-4">
                          Desahogo de testimoniales (entrevistas)
                        </li>
                        <li className="mb-4">
                          Solicitud de vídeos de vigilancia
                        </li>
                        <li className="mb-4">Cateo</li>
                      </ul>

                      <p className="mb-4">
                        Además de estas diligencias, puedes pedir al fiscal o
                        agente del Ministerio Público que se lleven a cabo
                        “peritajes”, es decir, que una persona especialista o
                        experta (“perito”) realice acciones y análisis
                        científicos para obtener información o pruebas del
                        delito. Esto es muy recomendable si consideras que no se
                        ha investigado tu caso adecuadamente o crees que un
                        peritaje puede complementar el trabajo hecho por las
                        autoridades.
                      </p>

                      <p className="mb-4">
                        Algunos peritajes que puedes solicitar para comprobar
                        delitos sexuales son:
                      </p>

                      <ul className="list-disc pl-6 font-semibold">
                        <li className="mb-4">Peritaje en medicina forense</li>
                        <li className="mb-4">Peritaje en criminología</li>
                        <li className="mb-4">
                          Peritaje en biología o química forense
                        </li>
                        <li className="mb-4">Peritaje en psicología forense</li>
                        <li className="mb-4">Peritaje en criminalística</li>
                        <li className="mb-4">
                          Peritaje en práctica de Protocolo de Estambul
                        </li>
                        <li className="mb-4">
                          Peritajes sociales con perspectiva de género
                        </li>
                        <li className="mb-4">Peritaje informático</li>
                      </ul>
                      <p className="mb-4">
                        <span className="font-semibold"> Recuerda:</span> Tienes
                        derecho a saber qué diligencias se realizan y qué
                        resultados arrojan, el fiscal o agente del Ministerio
                        Público tiene la obligación de mantenerte informada
                        sobre esto). Con la ayuda de tu abogado o abogada puedes
                        solicitar que se lleven a cabo otras diligencias (si la
                        autoridad ignora o rechaza tu petición, puedes presentar
                        una queja en la Comisión de Derechos Humanos o en el
                        “órgano interno de control” de la Fiscalía).
                      </p>

                      <p className="mb-4 font-semibold">
                        Si deseas conocer con mayor detalle a qué se refieren
                        las diligencias y peritajes aquí mencionados{" "}
                        <a
                          href="https://docs.google.com/document/d/1TTTLNSx7FkVpj_81xRlozfYr31b80vSdMOe04Ym1wtI/"
                          target="_blank"
                          className="text-marron font-semibold underline"
                        >
                          revisa este documento.
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header mb-0" id="heading15">
                    <button
                      className="accordion-button collapsed relative flex items-center w-full py-6 sm:py-4 pl-16 sm:pl-8 pr-16 sm:pr-16 !rounded-none text-lg !text-gray1 font-medium text-left bg-white border-b-2 border-beige1 transition focus:outline-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse15"
                      aria-expanded="true"
                      aria-controls="collapse15"
                    >
                      <span className="pr-4">
                        15. ¿Qué puedo hacer si ya no quiero que se investigue
                        el delito?
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapse15"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading15"
                  >
                    <div className="accordion-body bg-beige1 text-lg text-white pt-6 sm:pt-12 pb-8 sm:pb-16 sm:px-20 px-16">
                      <p className="mb-4">
                        Si fuiste víctima de un delito que se investiga por
                        querella (estupro, hostigamiento sexual, acoso sexual,
                        abuso sexual, contra la intimidad sexual o violencia
                        familiar), puedes pedir que ya no continúe la
                        investigación ni el juicio mediante las siguientes
                        acciones:
                      </p>
                      <p className="mb-4 text-2xl">Perdón de la víctima</p>
                      <ul className="list-disc font-semibold pl-6">
                        <li>¿Qué es?</li>
                      </ul>
                      <p className="mb-4">
                        Es “perdonar legalmente” a la persona agresora para que
                        ya no sea investigado ni juzgado.
                      </p>
                      <ul className="list-disc font-semibold pl-6">
                        <li>¿Cuándo se puede?</li>
                      </ul>
                      <p className="">
                        En cualquier momento (puedes otorgar el perdón acudiendo
                        con el fiscal o agente del Ministerio Público durante la
                        investigación y con el juez desde que inicia el proceso
                        para que la persona agresora sea juzgado hasta poco
                        antes de que termine de cumplir su sentencia).
                      </p>
                      <p className="mb-4">
                        Únicamente aplica en delitos que se investigan por
                        “querella” (acoso sexual, hostigamiento sexual, contra
                        la intimidad sexual, estupro, violación entre personas
                        que viven en matrimonio o unión libre, etc.).
                      </p>
                      <ul className="list-disc font-semibold pl-6">
                        <li>¿Qué implica?</li>
                      </ul>
                      <p className="">
                        Una vez que otorgues el perdón, no podrás pedir que el
                        delito se investigue de nuevo ni que la persona agresora
                        sea llevada a juicio por lo que te hizo.
                      </p>
                      <p className="mb-4">
                        Difícilmente se tomarán medidas para reparar los daños
                        físicos, emocionales, morales, económicos, educativos,
                        laborales, etc. que te causó la agresión.
                      </p>
                      <p className="mb-4 text-2xl">Acuerdos reparatorios</p>
                      <ul className="list-disc font-semibold pl-6">
                        <li>¿Qué es?</li>
                      </ul>
                      <p className="mb-4">
                        Son medidas que puedes acordar con la persona agresora
                        para que repare los daños físicos, emocionales, morales,
                        económicos, educativos, laborales, etc. que te causó el
                        delito y ya no se le investigue y sancione.
                      </p>
                      <ul className="list-disc font-semibold pl-6">
                        <li>¿Cuándo se puede?</li>
                      </ul>
                      <p className="mb-4">
                        Desde que inicia la investigación y antes de que haya
                        una resolución judicial que confirme que se realizará el
                        juicio oral.
                      </p>
                      <p className="mb-4">
                        Únicamente aplica en delitos que se investigan por
                        “querella” (acoso sexual, hostigamiento sexual, contra
                        la intimidad sexual, estupro, violación entre personas
                        que viven en matrimonio o unión libre, etc.).
                      </p>
                      <ul className="list-disc font-semibold pl-6">
                        <li>¿Qué implica?</li>
                      </ul>
                      <p className="mb-8">
                        La persona agresora tiene que reparar los daños que te
                        causó, si no cumple con lo acordado, seguirá siendo
                        investigado o juzgado.
                      </p>
                      <p className="mb-4">
                        En los casos de{" "}
                        <span className="font-semibold">
                          violación o tortura sexual
                        </span>
                        , las autoridades tienen la obligación de seguir
                        investigando, aunque tú no quieras. Si deseas abandonar
                        este proceso, aquí te decimos qué puedes hacer y qué
                        podría pasar:
                      </p>
                      <p className="mb-4 text-2xl">
                        Ya no le prestes atención a la investigación
                      </p>
                      <ul className="list-disc pl-6 mb-4">
                        <li>
                          Si te decides por esto, es probable que las
                          autoridades no investiguen más, porque es difícil
                          llegar a juicio si la víctima no participa ni sigue de
                          cerca la investigación, aún así podrían citarte:
                        </li>
                      </ul>
                      <p className="mb-4">
                        Si es un fiscal o agente del Ministerio Público y tu
                        citatorio no dice que te pondrán una multa o sanción si
                        faltas: no tienes que ir;
                      </p>
                      <p className="mb-4">
                        Si es un juez: tienes la obligación de presentarte, pero
                        no te pueden exigir que digas algo más sobre el delito.
                      </p>
                      <ul className="list-disc pl-6 mb-4">
                        <li>
                          Es muy posible que las autoridades archiven tu caso o
                          lo cierren diciendo que no se cometió un delito.
                        </li>
                      </ul>
                      <p className="mb-4 font-semibold">
                        Acude con las autoridades y proponles la “suspensión
                        condicional del proceso”
                      </p>
                      <ul className="list-disc pl-6">
                        <li className="mb-4">
                          Si eliges esta opción, el proceso jurídico contra la
                          persona agresora se pondrá en pausa (mínimo 6 meses y
                          máximo 3 años) y él estará en libertad con la
                          condición de que use ese tiempo para reparar los daños
                          que te causó y obedecer otras exigencias que le haga
                          el juez.
                        </li>
                        <li className="mb-4">
                          Cuando la persona agresora repare los daños y cumpla
                          las demás órdenes del juez, se terminará este asunto;
                          si desobedece, el proceso en su contra se retomará
                          desde donde se dejó.
                        </li>
                        <li className="mb-4">
                          Aunque solicitar la “suspensión condicional del
                          proceso” es un derecho de la a persona agresora y no
                          de la víctima, tú puedes decirle al fiscal o agente
                          del Ministerio Público que esto te interesa, de tal
                          forma que dicha autoridad sugiera esta alternativa al
                          abogado de la persona agresora.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header mb-0" id="heading16">
                    <button
                      className="accordion-button collapsed relative flex items-center w-full py-6 sm:py-4 pl-16 sm:pl-8 pr-16 sm:pr-16 !rounded-none text-lg !text-gray1 font-medium text-left bg-white border-b-2 border-beige1 transition focus:outline-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse16"
                      aria-expanded="true"
                      aria-controls="collapse16"
                    >
                      <span className="pr-4">
                        16. ¿Qué pasará después de que se investigue el delito?
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapse16"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading16"
                  >
                    <div className="accordion-body bg-beige1 text-lg text-white pt-6 sm:pt-12 pb-8 sm:pb-16 sm:px-20 px-16">
                      <p className="mb-4 text-marron">
                        Es importante que sepas que en México menos del 10% de
                        los delitos denunciados llegan a un juicio.
                      </p>
                      <p className="mb-4">
                        Es imposible saber cuánto tiempo durará la investigación
                        del delito, podría terminar después de meses o años, su
                        duración depende del trabajo que se necesita para
                        conseguir las pruebas que demuestren cómo fuiste
                        agredida y quién lo hizo. Por esta razón, nunca se
                        justifica que una investigación tarde mucho tiempo
                        simplemente porque las autoridades han dejado de
                        trabajar en la misma.
                      </p>
                      <p className="mb-4">
                        El fiscal o agente del Ministerio Público debe avisarte
                        que terminó de investigar, para lo cual hablará por
                        teléfono contigo o con tu abogado o asesor jurídico
                        victimal y después enviará un escrito al domicilio que
                        hayas dado.
                      </p>
                      <p className="mb-4">
                        Después de investigar el delito, el fiscal o agente del
                        Ministerio Público puede tomar las siguientes
                        decisiones:
                      </p>
                      <p className="mb-4">
                        <span className="font-semibold">
                          Presentar una acusación contra la persona agresora
                          (“formular la imputación”):
                        </span>{" "}
                        El fiscal o agente del Ministerio Público le pedirá a un
                        juez que la persona agresora sea llevado a juicio y le
                        presentará una acusación (“imputación”) donde explique
                        los detalles del delito que investigó y la manera en que
                        comprobó la agresión. A partir de este momento, el
                        fiscal o agente del Ministerio Público tendrá máximo 6
                        meses para obtener las pruebas que hagan falta.
                      </p>
                      <p className="mb-4">
                        <span className="font-semibold">
                          Descartar el delito y no seguir el proceso contra la
                          persona agresora (“no ejercer la acción penal”):
                        </span>{" "}
                        Cuando el fiscal o agente del Ministerio Público
                        concluye que no se cometió un delito, ya no presenta al
                        juez una acusación contra la persona agresora y el caso
                        se cierra.
                      </p>
                      <p className="mb-4">
                        <span className="font-semibold">
                          Archivar la investigación:
                        </span>{" "}
                        La investigación se suspende o “archiva” temporalmente
                        si el fiscal o agente del Ministerio Público considera
                        que ya investigó todo lo posible, no encuentra más
                        pruebas y las que tiene no alcanzan para demostrar el
                        delito. La investigación se retomará cuando aparezcan o
                        puedan obtenerse nuevas pruebas.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header mb-0" id="heading17">
                    <button
                      className="accordion-button collapsed relative flex items-center w-full py-6 sm:py-4 pl-16 sm:pl-8 pr-16 sm:pr-16 !rounded-none text-lg !text-gray1 font-medium text-left bg-white border-b-2 border-beige1 transition focus:outline-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse17"
                      aria-expanded="true"
                      aria-controls="collapse17"
                    >
                      <span className="pr-4">
                        17. ¿Qué pasará con la persona agresora?
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapse17"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading17"
                  >
                    <div className="accordion-body bg-beige1 text-lg text-white pt-6 sm:pt-12 pb-8 sm:pb-16 sm:px-20 px-16">
                      <p className="mb-4">
                        Cuando el fiscal o agente del Ministerio Público haya
                        obtenido suficientes pruebas para demostrar que el la
                        persona agresora cometió un delito contra ti, podrá
                        solicitar una reunión (“audiencia inicial”) con un “juez
                        de control” y la persona agresora será citado o, si no
                        fue detenido al momento de cometer el delito, se
                        ordenará que sea presentado o arrestado para que conozca
                        la investigación en su contra. Una vez que el la persona
                        agresora se presente voluntariamente o sea capturado, se
                        realizará la audiencia inicial, en la cual:
                      </p>
                      <ul className="list-disc pl-6">
                        <li className="mb-4">
                          El juez de control revisará que el arresto se haya
                          realizado siguiendo las reglas que establece la Ley;
                        </li>
                        <li className="mb-4">
                          La persona agresora será informado sobre la
                          investigación que hay en su contra;
                        </li>
                        <li className="mb-4">
                          El fiscal o agente del Ministerio Público pedirá que
                          la persona agresora sea llevada a juicio;
                        </li>
                        <li className="mb-4">
                          El juez de control evaluará si hay pruebas suficientes
                          para que la persona agresora sea llevada a juicio:
                        </li>
                      </ul>
                      <p className="mb-4">
                        <span className="font-semibold">
                          Si considera que las pruebas son insuficientes:
                        </span>{" "}
                        le pedirá al fiscal o agente del Ministerio Público que
                        siga investigando.
                      </p>
                      <p className="mb-4">
                        <span className="font-semibold">
                          Si confirma que hay pruebas suficientes:
                        </span>{" "}
                        el fiscal o agente del Ministerio Público tendrá máximo
                        6 meses para perfeccionar su investigación y cuando esté
                        lista podrá presentarla a otro juez en el juicio contra
                        la persona agresora.
                      </p>
                      <ul className="list-disc pl-6">
                        <li className="mb-4">
                          El juez de control ordenará “medidas cautelares”, es
                          decir, acciones para evitar que la persona agresora
                          escape, te cause más daños o destruya evidencias, por
                          ejemplo, puede prohibirle que se vaya de la ciudad,
                          hacer que use un brazalete electrónico para que las
                          autoridades sepan dónde está en todo momento o
                          mandarlo a la cárcel hasta que sea sentenciado
                          (“prisión preventiva”).
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header mb-0" id="heading18">
                    <button
                      className="accordion-button collapsed relative flex items-center w-full py-6 sm:py-4 pl-16 sm:pl-8 pr-16 sm:pr-16 !rounded-none text-lg !text-gray1 font-medium text-left bg-white border-b-2 border-beige1 transition focus:outline-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse18"
                      aria-expanded="true"
                      aria-controls="collapse18"
                    >
                      <span className="pr-4">18. ¿Cómo terminará mi caso?</span>
                    </button>
                  </h2>
                  <div
                    id="collapse18"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading18"
                  >
                    <div className="accordion-body bg-beige1 text-lg text-white pt-6 sm:pt-12 pb-8 sm:pb-16 sm:px-20 px-16">
                      <p className="mb-4">
                        El proceso jurídico contra la persona agresora que
                        comienza cuando le denuncias (“proceso penal”) puede
                        acabar en:
                      </p>
                      <p className="mb-4 text-marron font-semibold">
                        Acuerdos reparatorios
                      </p>

                      <ul className="list-disc pl-6">
                        <li className="mb-4">
                          Como víctima puedes ponerte de acuerdo con la persona
                          agresora para que repare los daños físicos,
                          emocionales, morales, económicos, educativos,
                          laborales, etc. que te causó el delito a cambio de que
                          ya no se le investigue ni sancione. Es muy importante
                          que tú estés satisfecha con la propuesta de reparación
                          que haga la persona agresora (puedes rechazarla si no
                          cumple con lo que quieres y necesitas).
                        </li>
                        <li className="mb-4">
                          Estos acuerdos tienen que ser aprobados por el “juez
                          de control” o por el fiscal o agente del Ministerio
                          Público.
                        </li>
                        <li className="mb-4">
                          La persona agresora tiene que reparar los daños que te
                          causó, si no cumple con lo acordado, seguirá siendo
                          investigada o juzgada.
                        </li>
                        <li className="mb-4">
                          Puedes tomar esta alternativa desde que inicia la
                          investigación y antes de que haya una resolución
                          judicial que confirme que se realizará el juicio oral.
                        </li>
                        <li className="mb-4">
                          Sólo aplica en los delitos que se investigan por
                          “querella” y permiten el perdón de la víctima (los
                          casos de violencia familiar no pueden resolverse de
                          esta manera).
                        </li>
                      </ul>
                      <p className="mb-4 text-marron font-semibold">
                        Suspensión condicional del proceso
                      </p>

                      <p className="mb-4 font-semibold">¿Qué implica?</p>

                      <ul className="list-disc pl-6">
                        <li className="mb-4">
                          El proceso jurídico contra la persona agresora se
                          pondrá en pausa (mínimo 6 meses y máximo 3 años) antes
                          de que llegue el juicio y él estará en libertad con la
                          condición de que use ese tiempo para reparar los daños
                          físicos, emocionales, morales, económicos, educativos,
                          laborales, etc. que te causó y obedecer otras
                          exigencias que le haga el juez como no tener armas,
                          estar vigilado, tomar terapia psicológica, aprender un
                          oficio, trabajar sin paga a favor de la comunidad,
                          etc.
                        </li>
                        <li className="mb-4">
                          Cuando la persona agresora repare los daños y cumpla
                          las demás órdenes del juez, se terminará este asunto;
                          si desobedece, el proceso en su contra se retomará
                          desde donde se dejó.
                        </li>
                        <li className="mb-4">
                          No aplica en todos los casos (para saber si tu caso
                          puede resolverse de esta manera consulta a tu abogado
                          o asesor jurídico victimal o al fiscal o agente del
                          Ministerio Público).
                        </li>
                      </ul>
                      <p className="mb-4 text-marron font-semibold">
                        Procedimiento abreviado
                      </p>

                      <p className="mb-4 font-semibold">¿Qué implica?</p>

                      <ul className="list-disc pl-6">
                        <li className="mb-4">
                          La persona agresora renuncia a su derecho a un juicio
                          a cambio de una sanción menor.
                        </li>
                        <li className="mb-4">
                          La persona agresora acepta que cometió el delito y es
                          sentenciado con las pruebas que se hayan obtenido
                          hasta ese momento.
                        </li>
                        <li className="mb-4">
                          Puede aplicarse a cualquier delito.
                        </li>
                        <li className="mb-4">
                          Como víctima sólo puedes oponerte a este procedimiento
                          si no te aseguran medidas adecuadas para reparar los
                          daños físicos, emocionales, morales, económicos,
                          educativos, laborales, etc. que te causó el delito o
                          no se ha cumplido tu “derecho a la verdad” (es decir,
                          que las autoridades reconozcan todo lo que te hizo la
                          persona agresora).
                        </li>
                      </ul>
                      <p className="mb-4 text-marron font-semibold">Juicio</p>

                      <p className="mb-4 font-semibold">¿Qué implica?</p>

                      <ul className="list-disc pl-6">
                        <li className="mb-4">
                          Para que haya un juicio es necesario que antes un
                          “juez de control” apruebe la investigación del delito
                          que realizó el fiscal o agente del Ministerio Público
                          y confirme que hay pruebas suficientes para que la
                          persona agresora sea llevado a juicio.
                        </li>
                        <li className="mb-4">
                          Durante el juicio, un juez diferente valorará lo que
                          han dicho los testigos, lo que encontraron los
                          especialistas (“peritos”) y las demás pruebas o
                          evidencias que presente tu abogado o asesor jurídico
                          victimal, el fiscal o agente del Ministerio Público y
                          el abogado que defiende a la persona agresora.
                        </li>
                        <li className="mb-4">
                          Como víctima tienes derecho a estar presente en todo
                          el juicio y es probable que en algún momento te pidan
                          que respondas las preguntas de tu abogado o asesor
                          jurídico victimal, del fiscal o agente del Ministerio
                          Público y del abogado que defiende a la persona
                          agresora.
                        </li>
                        <li className="mb-4">
                          Si la persona agresora te hace sentir incómoda,
                          amenazada o con miedo, puedes estar en otra sala y
                          contar con una videoconferencia para observar y
                          participar en el juicio.
                        </li>
                        <li className="mb-4">
                          Al final del juicio, el juez decidirá si la persona
                          agresora es responsable del delito y en otro momento
                          fijará su sanción.
                        </li>
                        <li className="mb-4">
                          Todas las decisiones que tome el juez respecto a tu
                          caso aparecerán en un documento llamado “sentencia”.
                        </li>
                        <li className="mb-4">
                          Si la sentencia dice que la persona agresora es
                          “inocente”, el fiscal o agente del Ministerio Público
                          y tu abogado o asesor jurídico victimal pueden
                          oponerse a la decisión del juez presentando un
                          “recurso de apelación” o, más adelante, un “juicio de
                          amparo”, los cuales serán revisados por otras
                          autoridades (mientras tanto la persona agresora podrá
                          estar en libertad).
                        </li>
                        <li className="mb-4">
                          Si la persona agresora es encontrada “culpable” podría
                          ir a la cárcel, pero es probable que trate de evitar
                          esto tramitando una “apelación” o un “amparo directo”
                          (él seguirá en la cárcel mientras las autoridades
                          revisan estos recursos y deciden si cambian o no la
                          sentencia). Como víctima tienes derecho a que las
                          autoridades te informen si la persona agresora
                          presenta estos recursos y con la ayuda de tu abogado o
                          asesor jurídico victimal puedes presentar argumentos
                          jurídicos para que la sentencia no sea modificada.
                        </li>
                        <li className="mb-4">
                          La sentencia señalará las medidas para reparar los
                          daños que te causó el delito y las autoridades que se
                          harán cargo de supervisar que esas medidas se lleven a
                          cabo.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <p className="text-xl mt-16">
                Si deseas descargar las preguntas y respuestas que se presentan
                en esta página, hazlo{" "}
                <a
                  href="https://drive.google.com/file/d/1Jh7Sbn5jsleAxVjnCV-OuWLPYzoY7eVW/view?usp=sharing"
                  className="font-semibold text-marron"
                  target="_blank"
                >
                  aquí
                </a>
                .
              </p>
              <p className="text-xl sm:text-3xl py-8">
                Si requieres acompañamiento legal conoce las organizaciones que
                pueden apoyarte.
              </p>
              <Button text={"Directorio"} variant={"beige"} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default SistemaJusticia
