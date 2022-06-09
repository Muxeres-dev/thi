import React from "react"
import { motion } from "framer-motion"

import Layout from "../components/layout/Layout"
import Button from "../components/shared/Button"
import Close from "../components/shared/Close"
import Section from "../components/shared/Section"
import TextIlustration from "../components/shared/TextIlustration"
import { useAnimateOnInView } from "../hooks/useAnimateOnInView"
import TextHeader from "../components/shared/TextHeader"

import { visible } from "../constants/animations"
import Ilus1 from "../images/ilus6.png"
import { navigate } from "gatsby"

const Companamiento = ({
  summay,
  button,
  className,
  action,
}: {
  summay
  button
  className?
  action?
}) => {
  return (
    <div
      className={`relative md:w-1/3 pb-16 sm:pb-28 flex flex-col md:flex-row md:items-center ${className}`}
    >
      <p className="text-xl sm:text-2xl font-normal mb-8 md:mb-0">{summay}</p>

      <Button
        className="md:absolute md:bottom-0 md:left-0"
        variant="option"
        text={button}
        action={action}
      />
    </div>
  )
}

const Acompanamiento = () => {
  const { ref, controls: control } = useAnimateOnInView()

  return (
    <Layout title="Tu historia importa">
      <Section>
        <TextIlustration ilus={Ilus1}>
          <TextHeader className="text-beige1 font-medium sm:py-20 mb-0">
            Prevención y acompañamiento
          </TextHeader>
        </TextIlustration>

        <motion.div
          ref={ref}
          variants={visible}
          initial="hidden"
          animate={control}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="flex flex-col md:flex-row w-full justify-between mt-20">
            <Companamiento
              summay="Abuso sexual infantil"
              button="En construcción"
            />
            <Companamiento
              summay="¿Cómo apoyar a sobrevivientes o víctimas de violencia sexual después de que te han contado su historia?"
              button="Leer completo"
              className="md:mx-8"
              action={() => navigate("/acompanamiento/apoyar_sobrevivientes")}
            />
            <Companamiento
              summay="¿Qué puedo hacer en caso de ser una persona espectadora de violencia sexual?"
              button="Leer completo"
              action={() => navigate("/acompanamiento/que_puedo_hacer")}
            />
          </div>
        </motion.div>
      </Section>
    </Layout>
  )
}

export default Acompanamiento
