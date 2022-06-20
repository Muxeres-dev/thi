import React, { useRef, useContext, useEffect } from "react"
import { motion } from "framer-motion"

import { AppContext } from "../context/AppContext"
import Layout from "../components/layout/Layout"
import Section from "../components/shared/Section"
import TextHeader from "../components/shared/TextHeader"
import TextIlustration from "../components/shared/TextIlustration"
import TitleText from "../components/shared/TitleText"

import useMenuColor from "../hooks/useMenuColor"
import { useAnimateOnInView } from "../hooks/useAnimateOnInView"
import { visible } from "../constants/animations"

import Ilus1 from "../images/ilus2.png"
import { Link } from "gatsby"

const ViviViolencia = () => {
  const { setMenuColor } = useContext(AppContext)
  const refSection1 = useRef(null)
  const refSection2 = useRef(null)

  const { ref, controls } = useAnimateOnInView()
  const { ref: refText, controls: controlText } = useAnimateOnInView()

  const menuColor = useMenuColor([refSection1, refSection2])

  useEffect(() => {
    setMenuColor(menuColor)
  }, [menuColor])

  return (
    <Layout title="¿Viví violencia sexual?">
      <Section>
        <TextIlustration ilus={Ilus1} title="¿Viví violencia sexual?">
          <div className="text-lg mt-4 sm:mt-12">
            <p className="font-semibold mb-4">¿Qué es violencia sexual?</p>
            <p className="mb-4">
              Para poder sanar, primero debemos entender qué fue lo que nos
              ocurrió, y para eso tenemos que comprender lo que es la violencia
              sexual.
            </p>
            <p className="mb-4">
              La violencia sexual es cuando una persona agrede sexualmente a
              otra, la toca, la obliga a ver contenido sexual, a exhibirse o a
              hacer algo sin su consentimiento, es decir, la obliga a hacer, ver
              o escuchar algo que no quiere. Puede ser desde un comentario que
              nos haga sentir incómodas, que se nos insinúen sin que lo
              deseemos, hagan uso de su fuerza física para obligarnos a hacer
              algo que quieran o nos amenacen, extorsionen e intimiden
              psicológicamente para forzarnos a hacer un acto sexual.
            </p>
            <p className="mb-4">
              También dentro de la violencia sexual se incluye la mutilación
              genital femenina, la trata de personas con fines de explotación
              sexual y los matrimonios forzados.
            </p>
          </div>
        </TextIlustration>
      </Section>
      <section ref={refSection1}>
        <div className="bg-beige1 text-white font-light text-lg py-12">
          <div className="container">
            <div className="sm:w-3/4">
              <TextHeader>Tipos de violencia sexual</TextHeader>
              <p className="mb-4">
                Para que podamos entender qué fue lo que nos pasó, tenemos que
                identificar primero los diferentes tipos de violencia sexual que
                existen y como se llaman:
              </p>
              <TitleText>Abuso sexual</TitleText>
              <p className="mb-4">
                Se nos obliga a participar en un acto sexual que no involucra
                introducir el pene en la vagina, boca o ano. Este acto puede
                incluir el ser forzadas a observar pornografía o cualquier
                contenido sexual, el ser tocadas en contra de nuestra voluntad o
                ser presionadas a tocar a la otra persona.
              </p>
              <TitleText>Violación</TitleText>
              <p className="mb-4">
                Ocurre cuando hubo penetración, es decir, se introdujo en
                nuestra vagina boca o ano, un pene o cualquier otra parte del
                cuerpo (dedos, manos, etc.) o un objeto en contra de nuestra
                voluntad. También, si estamos teniendo relaciones sexuales y le
                pedimos a la persona que se detenga y la persona no deja de
                hacerlo se considera como violación.
              </p>
              <TitleText>Hostigamiento sexual</TitleText>
              <p className="mb-4">
                Este tipo de violencia se presenta en una relación jerárquica.
                Esto quiere decir que quien nos solicita el favor sexual es
                nuestro superior, como bien podría ser nuestro(a) jefe(a) en el
                trabajo, un(a) maestro(a) o cualquiera persona que represente
                una autoridad. Estos actos ponen en riesgo nuestro bienestar
                emocional y afectan nuestra dignidad física y emocional.
              </p>
              <TitleText>Acoso sexual</TitleText>
              <p className="mb-4">
                Ocurre cuando una persona de nuestro mismo nivel jerárquico,
                como lo puede ser un amigo(a), primo(a), vecino(a), compañero(a)
                de trabajo, alguien en el transporte público, o simplemente
                un(a) extraño(a) que viva en la comunidad, se nos insinúa, o nos
                propone y/o exige tener contacto sexual contra de nuestra
                voluntad.
              </p>
              <TitleText>Estupro</TitleText>
              <p className="mb-4">
                Se da en el caso de que tengamos entre 13 y 17 años de edad y
                alguien nos engaña o manipula para tener relaciones sexuales con
                nosotras.
              </p>
              <TitleText>Violencia familiar</TitleText>
              <p className="mb-4">
                Ocurre cuando somos violentadas por un integrante de nuestra
                familia (consanguínea o adoptiva) o por nuestra pareja o
                expareja, de manera sexual o en contra de nuestros derechos
                reproductivos.
              </p>
              <TitleText>Tortura sexual</TitleText>
              <p className="mb-4">
                Ocurre cuando quieren obligarnos a decir o hacer algo en contra
                de nuestra voluntad, para lo cual se llevan a cabo conductas
                sexuales que nos generan sufrimiento o dolor, y somos
                intimidadas o castigadas con la intención de disminuir nuestra
                capacidad física o psicológica.
              </p>
              <TitleText>Contra la intimidad sexual (“Ley Olimpia”)</TitleText>
              <p className="mb-4">
                Se refiere a cuando alguien nos graba, fotografía, elabora o
                comparte por cualquier medio imágenes, audios o videos con
                contenido sexual íntimo de nosotras sin consultarnos, sin
                nuestra aprobación o mediante la manipulación y engaños.
              </p>
              <p className="mb-4">
                Estos actos nos pueden impactar de distintas formas a cada una
                de nosotras. A algunas nos pone en una situación vulnerable,
                humillante e intimidante. Para otras, estos atentan en contra de
                nuestra libertad y nos pone en conflicto con nuestra propia
                sexualidad.
              </p>
              <p className="mb-4">
                Todas estas conductas sexuales aparecen en los Códigos Penales,
                por lo que son consideradas delitos y son castigadas por la ley.
                Para saber más acerca de los delitos sexuales, como ejemplos
                específicos y datos legales del Código Penal puedes acceder
                dando{" "}
                <Link
                  to="/sistema_de_justicia#accordionJusticia"
                  className="text-marron underline font-semibold"
                >
                  click aquí
                </Link>
                .
              </p>
              <p className="mb-4 font-semibold">
                Cualquier conducta que intervenga con tu sexualidad puede ser
                considerada violencia sexual cuando no hubo consentimiento. Así
                es, el consentimiento lo cambia todo.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="font-light text-lg py-12">
          <div className="container">
            <div className="sm:w-3/4">
              <p className="text-2xl sm:text-4xl text-beige1 mb-4 sm:mb-12">
                Mitos sobre la violencia sexual
              </p>
              <p className="mb-8 sm:mb-16">
                Cuando nos encontramos con situaciones desconocidas, solemos
                tener mucha confusión y fácilmente nos guiamos por lo que
                escuchamos que se dice comúnmente acerca del tema. Sin embargo,
                esto no es lo más recomendable ya que, en ocasiones solo nos
                lleva a caer en conclusiones falsas. Los mitos son creencias
                erróneas o distorsionadas que se suelen pensar acerca de algo.
                Nos gustaría mostrarte algunos de los más comunes relacionados a
                la violencia sexual y explicarte por qué son mentira.
              </p>
            </div>
          </div>
          <div className="sm:container">
            <div className="sm:w-3/4">
              <div className="accordion" id="accordionViolencia">
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
                        1. “Si no decimos no quiero o detente, no es violación."
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading1"
                  >
                    <div className="accordion-body bg-beige1 text-lg text-white pt-6 sm:pt-12 pb-8 sm:pb-16 sm:px-20 px-16">
                      Muchas mujeres no somos capaces de decir “basta” o “no
                      quiero”, mientras sufrimos violencia sexual. Esto se debe
                      a diversas razones que se relacionan con miedos y
                      creencias que impiden que podamos hablar, así como también
                      puede ser que por haber estado ebrias o incapacitadas no
                      hayamos comprendido en su totalidad lo que nos estaba
                      ocurriendo. Es por eso que la parte del consentimiento es
                      muy importante, debemos saber diferenciar cuando hay
                      consentimiento de cuando no hay. Recordemos que si nos
                      sentimos inseguras y con dudas entonces no hubo
                      consentimiento total.
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
                        2. "Nuestra pareja o ex no puede agredirnos."
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapse2"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading2"
                  >
                    <div className="accordion-body bg-beige1 text-lg text-white pt-6 sm:pt-12 pb-8 sm:pb-16 sm:px-20 px-12">
                      Siempre tenemos derecho a decir "no". No importa si ya
                      hemos tenido previamente relaciones sexuales con esa
                      persona, si no queremos tenerlas en ese momento, no
                      debemos de llevarlas a cabo y la persona debe respetar esa
                      decisión.
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
                        3. "Debemos haber hecho algo para pedirlo."
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapse3"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading3"
                  >
                    <div className="accordion-body bg-beige1 text-lg text-white pt-6 sm:pt-12 pb-8 sm:pb-16 sm:px-20 px-12">
                      Absolutamente nadie merece ser victimizada, agredida o
                      violada. No importa donde estuvimos, cómo nos hayamos
                      comportado, vestido o qué haya sucedido en el período
                      previo a la agresión. Si no dimos nuestro consentimiento,
                      entonces está mal.
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
                      <span className="pr-4">
                        4. “Los agresores sexuales siempre usan la fuerza física
                        para obligar a su víctima.”
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapse4"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading4"
                  >
                    <div className="accordion-body bg-beige1 text-lg text-white pt-6 sm:pt-12 pb-8 sm:pb-16 sm:px-20 px-12">
                      Muchas veces la persona agresora no hace uso de la fuerza
                      física, sino que es a través de la manipulación y chantaje
                      que lleva a cabo la agresión, así como también suelen
                      aprovecharse del abuso de alcohol y/o drogas de la
                      víctima. No importa el cómo, siempre será violencia sexual
                      si no hay consentimiento.
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
                      <span className="pr-4">
                        5. “Solo podemos ser violentadas sexualmente por
                        extraños.”
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapse5"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading5"
                  >
                    <div className="accordion-body bg-beige1 text-lg text-white pt-6 sm:pt-12 pb-8 sm:pb-16 sm:px-20 px-12">
                      Es común que la imagen de la violación en los medios sea
                      la de un violador extraño, pero en realidad las
                      estadísticas apuntan que, en muchos casos, la agresión es
                      llevada a cabo por un miembro cercano que se encuentra
                      dentro del circulo social de la mujer. Cualquiera que sea
                      nuestra relación con el agresor, no tiene derecho a tener
                      relaciones sexuales sin nuestro consentimiento.
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
                        6. “Haber sufrido de violencia sexual nos hace propensa
                        a ser gay o bisexual.”
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapse6"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading6"
                  >
                    <div className="accordion-body bg-beige1 text-lg text-white pt-6 sm:pt-12 pb-8 sm:pb-16 sm:px-20 px-12">
                      No hay evidencia que sugiera que el haber sufrido de
                      violencia sexual cambie la orientación sexual de una
                      persona. Cada quien tiene derecho a elegir sus propias
                      parejas sexuales y la preferencia sexual de una persona no
                      se debe a los posibles traumas que haya vivido.
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
                      <span className="pr-4">
                        7. "Sentirnos excitadas debe significar que lo
                        disfrutamos / aceptamos."
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapse7"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading7"
                  >
                    <div className="accordion-body bg-beige1 text-lg text-white pt-6 sm:pt-12 pb-8 sm:pb-16 sm:px-20 px-12">
                      El cuerpo por naturaleza está programado para reaccionar
                      de ciertas formas ante la estimulación sexual, lo queramos
                      o no. Por lo que sentirnos excitadas e incluso tener un
                      orgasmo no significa que una lo haya disfrutado o haya
                      dado su consentimiento. Algunos agresores usan estas
                      respuestas fisiológicas para causarnos confusión y hacer
                      que nos sintamos más impotentes.
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
                      <span className="pr-4">8. “Nadie me va a creer”</span>
                    </button>
                  </h2>
                  <div
                    id="collapse8"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading8"
                  >
                    <div className="accordion-body bg-beige1 text-lg text-white pt-6 sm:pt-12 pb-8 sm:pb-16 sm:px-20 px-12">
                      No importa lo que hayamos escuchado de otros casos
                      similares, lo que nos haya dicho nuestro agresor o lo que
                      otra persona nos haya dicho. Siempre hay personas que al
                      escucharnos nos creerán y quienes pondrán en duda lo que
                      decimos. Por eso es importante que decidamos cómo decirlo
                      y a quién.
                      <p className="font-semibold">
                        Si deseas tener más información sobre esto, puedes
                        consultar la guía{" "}
                        <Link
                          to="/autocuidado/cuidando_nuestro_cuerpo"
                          className="text-marron underline font-semibold"
                        >
                          Contarle a alguien por lo que estás pasando”.
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section ref={refSection2}>
        <div className="bg-beige1 text-white font-light text-lg py-12">
          <div className="container">
            <div className="sm:w-3/4">
              <p className="text-2xl sm:text-4xl mb-4">
                ¿Qué es el consentimiento?
              </p>

              <p className="mb-4">
                El consentimiento es un acuerdo entre dos o más personas en
                donde aceptan a hacer algo, en este caso un acto sexual. Es muy
                importante dar nuestro consentimiento y tener el de la otra
                persona para poder crear un entorno sexual seguro. Solo hay
                consentimiento cuando las personas involucradas están de acuerdo
                por voluntad propia en llevar a cabo el acto sexual y tienen la
                capacidad de tomar esa decisión.
              </p>
              <TitleText className="mb-4 text-marron">
                Elementos del consentimiento:
              </TitleText>
              <p className="mb-4">
                <span className="font-semibold">Libre:</span> Consentir es una
                decisión que debemos tomar sin presión y estando conscientes,
                sin ser manipuladas o amenazadas, y sin estar bajo la influencia
                de alguna sustancia. Esto quiere decir que si nos encontramos
                bajo los efectos de alguna sustancia, dormidas o inconscientes,
                no podemos consentir y en caso de que se lleve a cabo el acto
                sexual, este puede pasar a ser denominado violencia sexual.
              </p>
              <p className="mb-4">
                <span className="font-semibold">Informado:</span> Para poder dar
                nuestro consentimiento debemos contar con toda la información,
                conocer todos los hechos y posibles consecuencias de lo que
                haremos. Para poder decidir debemos informarnos previamente.
              </p>
              <p className="mb-4">
                <span className="font-semibold">Reversible:</span> Recuerda que
                no por haber dicho que sí, significa que no podamos cambiar de
                opinión después. Tenemos derecho a cambiar de parecer sobre lo
                que deseamos hacer en cualquier momento. Incluso si se trata de
                nuestra pareja, la cual conocemos desde hace mucho y ya lo hemos
                hecho varias veces, si esta vez preferimos no hacerlo, nuestra
                pareja debe respetarlo y concluir el acto sexual.
              </p>
              <p className="mb-4">
                <span className="font-semibold">Convincente:</span> El
                consentimiento surge de la motivación por hacer algo. Al
                tratarse de sexo, debemos hacer lo que realmente deseamos, no lo
                que creemos que espera la otra persona de nosotras. Debemos
                buscar un “sí” activo y evitar llevar a cabo el acto si
                percibimos preocupación o inseguridad por alguna de las partes
                involucradas para asegurarnos que hay consentimiento.
              </p>
              <p className="mb-4">
                <span className="font-semibold">Específico:</span> Para
                consentir debemos hablar de situaciones específicas, tenemos
                derecho a consentir una cosa y no otra. No porque accedimos a
                hacer algo significa que ya aceptamos hacer otras cosas, siempre
                es mejor preguntar y verificar si se dio el consentimiento para
                todos los actos sexuales y no solo para algunos.
              </p>
              <TitleText className="mb-4 text-marron">
                ¿Cómo sé que tengo el consentimiento de la(s) otra(s)
                persona(s)?
              </TitleText>
              <p className="mb-4">
                Para saber si tenemos el consentimiento de la otra(s)
                persona(s), es muy importante considerar su libertad y capacidad
                para tomar decisiones. Para esto es necesario evaluar su edad,
                madurez y comprensión de la situación; el tipo de relación que
                tengamos con esa persona, la cercanía afectiva, tiempo de
                conocerle, entre otros; su estado físico y emocional, si es que
                se encuentra bajo el efecto de alguna sustancia, su estado de
                ánimo actual, entre otras. Recuerda que, al tener interacción
                sexual con otra persona lo correcto es preguntar y no asumir. De
                esta forma promovemos un ambiente sexual libre y seguro para las
                personas involucradas.
              </p>
              <p className="mb-4 font-semibold">
                Aclarando los mitos y estereotipos alrededor del consentimiento:
              </p>
              <ul className="list-disc pl-4">
                <li className="mb-4">
                  “Nunca dijo que no quería.” El silencio no es consentimiento,
                  no se puede simplemente asumir, lo mejor es siempre preguntar.
                </li>
                <li className="mb-4">
                  “El llevar una falda corta o un escote significa que estemos
                  pidiendo ser tocadas.” Nadie puede asumir nuestro
                  consentimiento basándose en nuestro comportamiento, vestimenta
                  o lugar en el que estemos.
                </li>
                <li className="mb-4">
                  “Si realmente estaba sufriendo hubiera puesto resistencia.” La
                  mayoría de las víctimas no peleamos. En situaciones como estas
                  la resistencia y estrategias de autoprotección o mecanismos de
                  defensa pueden ser a través de la disociación, congelación o
                  tratando de hacernos amigas del acusado. La resistencia puede
                  ser cualquier esfuerzo para prevenir, detener o limitar el
                  evento.
                </li>
              </ul>
              <TitleText className="mb-4 text-marron">
                Consecuencias de la violencia sexual
              </TitleText>
              <p className="mb-4">
                Cada vivencia y cada persona somos únicas y por lo mismo, no
                debemos de compararnos con nadie más. Al hablar de consecuencias
                por haber sufrido violencia sexual, nos encontramos con un
                abanico muy amplio de posibilidades. Estas pueden ser diversas
                en cuanto al nivel de gravedad. No todos los casos presentan los
                mismos efectos, habrá quienes podamos seguir con nuestra vida y
                olvidar el acontecimiento, así como también habrá a quienes nos
                tome más tiempo recuperarnos.
              </p>
              <p className="mb-4">
                <span className="font-semibold">Consecuencias físicas.</span>{" "}
                Estas pueden ir desde tener problemas para dormir como insomnio
                o pesadillas, cansancio, dolor muscular, problemas de espalda,
                dificultad para concentrarnos, dolores de cabeza, poca
                motivación, sudoración, problemas para respirar, cambios en el
                apetito o sentirnos enfermas. También se puede llegar a tener
                infecciones de transmisión sexual (ITS), o contraer el Virus de
                la Inmunodeficiencia Humana (VIH), al igual que estar
                embarazadas, tener lesiones genitales y extragenitales.
                Asimismo, podrían haber hemorragias, fibrosis vaginal,
                infecciones vaginales y urinarias. Pueden surgir trastornos
                menstruales y disfunciones sexuales como: dispareunia, dolor
                pélvico, vaginismo, entre otras.
              </p>
              <p className="mb-4">
                <span className="font-semibold">
                  Consecuencias psicológicas y emocionales
                </span>{" "}
                se asocian con la forma en cómo hemos interpretado lo ocurrido,
                puede ser que nos hayan despertado miedos, inseguridades o que
                nos sintamos constantemente enojadas, irritadas o tristes. Así
                como puede que sintamos desconfianza, vergüenza, culpa, tengamos
                una baja autoestima y mucho estrés. También podría ser que
                estemos presentando problemas de ansiedad, depresión o nos venga
                constantemente un sentimiento de estar en crisis. En casos más
                delicados, podemos encontrarnos con trastornos de la conducta
                alimentaria, ideación e intentos suicidas, trastorno de estrés
                postraumático, adicción al alcohol y drogas, incluyendo
                psicofármacos, y trastornos psicopatológicos.
              </p>
              <p className="mb-4">
                <span className="font-semibold">Consecuencias sociales</span>{" "}
                interfieren en cómo nos relacionamos con los demás, con nosotras
                mismas y con el medio ambiente. Estas pueden afectar nuestro
                desempeño en diversos contextos tal como el laboral o escolar.
                Se reflejan específicamente en nuestra conducta y están
                relacionadas con nuestro estado físico, mental y emocional.
                Estas pueden variar dependiendo de factores como el lugar en
                donde ocurrió la violencia sexual y el tipo de agresor. Es
                diferente que este sea un miembro dentro de nuestro círculo
                social a que sea un completo desconocido. Tras haber sufrido o
                estar en una situación de violencia sexual, es común que
                tratemos de evitar todo lo que nos recuerde a ello y que la
                relación con nuestro propio cuerpo quede afectada. Algunos
                ejemplos de consecuencias sociales son presentar dificultad para
                tener relaciones sexuales, tener el nuevo hábito de evitar
                lugares y/o personas que nos recuerden a lo ocurrido, aislarnos
                socialmente, mostrar resistencia a no querer hacer las cosas que
                antes solíamos disfrutar y estar constantemente preocupadas.
                También podría ser que comencemos a tener un uso problemático
                del alcohol y/o drogas, a fumar tabaco en exceso, lastimarnos a
                nosotras mismas haciéndonos cortes, o a utilizar cualquier cosa
                como intento para distraer nuestra mente con el fin de evitar
                pensar en el suceso traumático.
              </p>
              <TitleText className="mb-4 text-marron">
                ¿Es normal que sienta culpa después de vivir violencia sexual?
              </TitleText>
              <p className="mb-4">
                Al vivir una experiencia traumática es común sentirnos
                traicionadas hasta por nosotras mismas. Podemos dudar de lo que
                sentimos y percibimos, e irrumpen en nuestro pensamiento muchas
                preguntas que tratan de comprender qué pasó y por qué. Estamos
                tan vulnerables que nuestro poder para actuar y decidir se ve
                debilitado, sobre todo si la persona agresora intenta
                convencernos y manipularnos de que el acto sexual, que fue en
                contra de nuestra voluntad, fue en realidad un acto de amor o
                una muestra de cariño. Esto lo hace con el fin de normalizar lo
                que nos hizo.
              </p>
              <p className="mb-4">
                En ocasiones podemos sentir que no hicimos nada por impedirlo.
                Esto se conoce como{" "}
                <span className="font-semibold">“indefensión aprendida”</span>.
                Esta es una respuesta humana que ocurre cuando nos violentan y
                creemos que no es posible escapar o evitar la situación. Se
                presenta cuando pensamos que no podemos huir, a causa de esto,
                ser sumisa es nuestra reacción. Es un mecanismo de defensa, que
                como estrategia, no pone ninguna resistencia hacia la agresión
                para sobrevivir al peligro. No hay que sentirnos culpables por
                no haber reaccionado ni habernos defendido, lo que ocurrió es
                que sentíamos tan amenazante la situación, que esa fue la
                respuesta más adaptativa y lógica que encontramos para poder
                sobrevivir.
              </p>
              <p className="mb-4">
                Necesitamos saber que{" "}
                <span className="font-semibold">
                  es perfectamente normal sentir culpa.
                </span>{" "}
                La mayoría de nosotras nos sentimos responsables por lo
                ocurrido, nos suelen llegar pensamientos como: “Si tan solo no
                hubiera…” o “Me lo merezco porque…” Este tipo de ideas nos hacen
                dudar sobre nosotras mismas y evitan que busquemos ayuda por
                dudar si la merecemos o no. Pero es esencial que entiendas que
                no hicimos nada mal, la única persona culpable culpable es la
                persona agresora, no nosotras.
              </p>
              <TitleText className="mb-4 text-marron">
                ¿Cuándo necesitamos atención psicoterapéutica?
              </TitleText>
              <p className="mb-4">
                Hay ocasiones en las que se nos dificulta poder expresar y
                verbalizar lo que sentimos. La psicología es la ciencia que se
                encarga de estudiar nuestros procesos mentales, incluyendo
                nuestras sensaciones, percepciones y conducta; en relación con
                el medio ambiente físico y social que nos rodea.{" "}
                <span className="font-semibold">
                  La terapia nos permite explorar el cómo nos relacionamos con
                  nuestro entorno y cómo lo asimilamos, buscando siempre nuestro
                  bienestar personal. Nos invita a trabajar en nuestras
                  emociones, reflexionar sobre nuestros pensamientos, creencias
                  y conductas con el fin de sanar.
                </span>
              </p>
              <p className="mb-4">
                En México, la salud mental es comúnmente malinterpretada.
                Tenemos la falsa creencia de que solo aquellas personas con
                temas graves de salud mental son quienes deben acudir a estos
                especialistas. Mientras que, en realidad, estos nos brindan un
                <span className="font-semibold">
                  espacio de confianza y libre de prejuicios para que podamos
                  abordar cualquier tema.
                </span>
              </p>
              <p className="mb-4">
                Las personas especialistas (psicólogos y psicólogas) que se
                dedican a esta área de la salud cuentan con toda una preparación
                para poder devolvernos herramientas que nos guíen hacia nuestro
                bienestar. Debemos de saber que todo lo que les contemos es
                confidencial, esto quiere decir que no puede contárselo a nadie
                más. Deberán tratarnos con respeto y evitar comentarios que nos
                puedan hacer sentir juzgadas o revictimizadas, así como tampoco
                pueden obligarnos a hablar de cosas que no deseamos.
              </p>
              <TitleText className="mb-4 text-marron">
                Se recomienda que busquemos atención psicoterapéutica cuando
                tengamos dificultad para desempeñar nuestras actividades del día
                a día y cuando nos sentimos emocionalmente abrumadas.
              </TitleText>
              <p className="mb-4 font-semibold">
                Recordemos que la salud no es solo la ausencia de enfermedad,
                sino que es la ausencia de funcionamiento y capacidad para
                disfrutar la vida.
              </p>
              <p className="mb-4">
                Para saber más sobre cómo obtener un apoyo psicológico y
                emocional, te recomendamos que revises el{" "}
                <Link
                  to="/directoriox"
                  className="underline text-marron font-semibold"
                >
                  directorio
                </Link>
                ,{" "}
                <span className="font-semibold">
                  donde puedes encontrar una lista de centros que brindan
                  atención psicológica gratuita.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ViviViolencia
