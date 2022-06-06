import React from "react"
import { navigate } from "gatsby"
import Layout from "../components/layout/Layout"
import Button from "../components/shared/Button"
import Section from "../components/shared/Section"
import TextIlustration from "../components/shared/TextIlustration"

import Ilus3 from "../images/ilus3.png"
import { useAnimateOnInView } from "../hooks/useAnimateOnInView"
import { motion } from "framer-motion"
import { visible, fromTop } from "../constants/animations"

const InfoBox = ({
  title,
  subtitle,
  className,
  children,
  action,
}: {
  title
  subtitle
  className?
  children
  action
}) => {
  const { ref: refText, controls: controlText } = useAnimateOnInView()
  return (
    <div
      ref={refText}
      className={`sm:w-1/2 sm:pt-28 sm:pb-20 relative mb-16 ${
        className ? className : ""
      }`}
    >
      <motion.div
        variants={visible}
        initial="hidden"
        animate={controlText}
        transition={{ duration: 1 }}
      >
        <p className="sm:absolute sm:top-0 sm:left-0 mb-8 text-2xl sm:text-3xl text-beige1 font-medium ">
          {title}
        </p>
      </motion.div>
      <motion.div
        variants={visible}
        initial="hidden"
        animate={controlText}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="text-base sm:text-lg mb-8">
          <p className="text-beige1 font-semibold mb-4">{subtitle}</p>
          {children}
        </div>
        <Button
          className="sm:absolute sm:bottom-0 sm:left-0"
          variant="option"
          text="Leer completo"
          action={action}
        />
      </motion.div>
    </div>
  )
}

const Autocuidado = () => {
  return (
    <Layout title="Autocuidado">
      <Section>
        <TextIlustration ilus={Ilus3}>
          <p className="text-xl sm:text-4xl text-beige1 font-medium mb-8">
            Autocuidado
          </p>
          <p className="text-lg sm:text-4xl text-gray1 font-light">
            Aquí puedes encontrar información que te será útil en el proceso de
            sanación.
          </p>
        </TextIlustration>
      </Section>
      <section>
        <div className="container">
          <div className="w-full flex flex-col sm:flex-row">
            <InfoBox
              className="lg:mr-24 md:mr-16 sm:mr-12"
              title="Compartiendo nuestra historia"
              subtitle="Este artículo te ayudará a decidir a quién, cómo y si deberías contarle a alguien lo que está pasando o no."
              action={() =>
                navigate("/autocuidado/compartiendo_nuestra_historia")
              }
            >
              <p>
                <span className="font-semibold"> Descripción:</span> Decidir
                contarle a alguien lo que sucedió después de haber vivido una
                agresión es una decisión profundamente personal y en la que
                debemos tomarnos un tiempo para pensar. Elegir cómo, a quién y
                si revelar una agresión, es un paso importante en el proceso de
                sanación. Esta nota expondrá algunos de los factores a
                considerar para ayudarnos a tomar esta decisión.
              </p>
            </InfoBox>
            <InfoBox
              title="Cuidando nuestro cuerpo después de una agresión"
              subtitle="Este artículo describe lo que una persona puede sentir o puede estar atravesando,  mental y físicamente, después de ser agredida sexualmente."
              action={() => navigate("/autocuidado/cuidando_nuestro_cuerpo")}
            >
              <p>
                Hemos tomado en cuenta diferentes escenarios y hemos hecho todo
                lo posible para indicar algunos pros y contras para ayudarte en
                este proceso.
              </p>
              <p>
                Creemos que siempre hay algo que se puede rescatar de toda
                situación, eres suficiente y puedes sentirte mejor siguiendo los
                pasos y obteniendo apoyo adecuado.
              </p>
            </InfoBox>
          </div>
          <div className="w-full flex flex-col sm:flex-row">
            <InfoBox
              className="lg:mr-24 md:mr-16 sm:mr-12"
              title="Mi Pequeño Libro de Métodos de Afrontamiento"
              subtitle="The Peach Diaries trabajó junto con Roisin Ross, asesora de violencia sexual independiente en Solace Women’s Aid, para diseñar este libro, ayudando así a sobrevivientes de violencia sexual y doméstica a recuperarse de sus experiencias y trabajar la agresión."
              action={() => navigate("/autocuidado/mi_pequeno_libro")}
            >
              <p>
                El abuso nos impacta de muchas maneras diferentes; este libro se
                encuentra lleno de métodos de afrontamiento para que los pruebes
                en momentos de necesidad. Las técnicas de este libro se pueden
                utilizar como pequeños pasos cotidianos para ayudarte a
                recuperarte del abuso que viviste.
              </p>
              <p className="text-beige1 font-semibold my-4">
                Lo que te pasó no te define; es parte del pasado.
              </p>
              <p className="italic">
                "Recuperarte requiere valor, y todas
                <br />
                tenemos valor, incluso si tenemos que
                <br />
                cavar un poco para encontrarlo".
              </p>
              <p className="font-semibold mt-4 small">- Tori Amén</p>
            </InfoBox>
            <InfoBox
              title="Creando la línea del tiempo en tu bitácora"
              subtitle="Está herramienta de línea del tiempo ayuda a las sobrevivientes de violencia sexual a través de la creación de su bitácora."
              action={() => navigate("/autocuidado/creando_linea_tiempo")}
            >
              <p>
                Es posible que tengas dificultad para recordar lo que pasó. Esto
                es completamente natural. Cuando experimentamos algo traumático,
                puede ser difícil conectar los detalles de lo que sucedió y
                sentirnos cómodas al redactarlo.
              </p>
              <p className="mt-4">
                Queremos apoyarte con eso. Hemos creado este espacio para ti
                como guía para ayudarte a escribir tanta información como puedas
                recordar: el qué, el dónde y el quién. Entendemos que recordar
                algo traumático que nos ha sucedido puede no ocurrir de
                inmediato y menos aún recordar todo de principio a fin. Es
                posible que recuerdes cosas más adelante, y es por esto que te
                proponemos construir tu línea del tiempo.
              </p>
            </InfoBox>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Autocuidado
