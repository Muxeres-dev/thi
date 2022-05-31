import React, { useEffect, useRef, useState, useContext } from "react"
import { navigate } from "gatsby"
import { scroller } from "react-scroll"

import { AppContext } from "../context/AppContext"
import Footer from "../components/layout/Footer"
import Layout from "../components/layout/Layout"
import Button from "../components/shared/Button"
import Close from "../components/shared/Close"
import Section from "../components/shared/Section"
import TextHeader from "../components/shared/TextHeader"
import TextIlustration from "../components/shared/TextIlustration"
import TitleText from "../components/shared/TitleText"

import useMenuColor from "../hooks/useMenuColor"

import Ilus3 from "../images/ilus3.png"

const SistemaSalud = () => {
  const { setMenuColor } = useContext(AppContext)

  const refSection = useRef(null)
  const [sistema, setSistema] = useState<{
    si: boolean
    menos: null | boolean
  }>({ si: false, menos: null })
  const menuColor = useMenuColor([refSection])

  useEffect(() => {
    setMenuColor(menuColor)
  }, [menuColor])

  const handleSistema = (state: { si: boolean; menos: null | boolean }) => {
    setSistema(state)
    scroller.scrollTo("ref-info", {
      duration: 800,
      delay: 200,
      smooth: "easeInOutQuart",
    })
  }

  const handleClose = (state: { si: boolean; menos: null | boolean }) => {
    window.scrollTo(0, 0)
    setSistema(state), 0
  }

  return (
    <Layout title="Sistema de Salud">
      <Section>
        <TextIlustration ilus={Ilus3}>
          <p className="text-xl sm:text-4xl text-beige1 font-medium mb-8">
            Sistema de Salud
          </p>
          <p className="text-lg sm:text-4xl text-gray1 font-light">
            ¿Viviste una violación o abuso sexual?
          </p>
          <div className="w-full">
            <div className="flex flex-col sm:flex-row gap-4 md:gap-12 mt-8">
              <Button
                variant="option"
                text="Si"
                active={sistema.si}
                action={() => setSistema({ ...sistema, si: true })}
              />
              <Button
                variant="option"
                text="No sé"
                action={() => navigate("/vivi_violencia_sexual")}
              />
            </div>
            {sistema.si && (
              <div className="flex flex-col sm:flex-row gap-4 md:gap-12 mt-8 mb-8">
                <Button
                  variant="option"
                  text="Menos de 5 días"
                  active={sistema.menos === true}
                  action={() => handleSistema({ ...sistema, menos: true })}
                />
                <Button
                  variant="option"
                  text="6 días o más"
                  active={sistema.menos === false}
                  action={() => handleSistema({ ...sistema, menos: false })}
                />
              </div>
            )}
          </div>
        </TextIlustration>
      </Section>
      <section className="ref-info" ref={refSection}>
        {sistema.menos !== null && (
          <div className="bg-beige1 text-white font-light text-lg py-24">
            <div className="container">
              <div className="sm:w-3/4 relative">
                <Close
                  action={() => handleClose({ ...sistema, menos: null })}
                  color="white"
                  className="absolute -right-8 sm:-right-32 -top-12 sm:top-6"
                />
                {sistema.menos && (
                  <>
                    <p className="mb-4">
                      Si te han agredido sexualmente puedes acudir a cualquier
                      clínica u hospital del Sistema Nacional de Salud para
                      recibir atención médica y psicológica gratuita (sin
                      costo). No es necesario que antes o después presentes una
                      denuncia contra la persona agresora, es tu derecho decidir
                      si denuncias o no y en qué momento; el personal de los
                      centros de salud no te puede obligar a denunciar y tiene
                      la obligación de brindarte los servicios que necesites
                      para recuperar tu salud física y emocional.
                    </p>
                    <TextHeader>
                      ¿Qué debes tener en cuenta en este momento?
                    </TextHeader>
                    <TitleText className="mb-4">
                      Anticoncepción de emergencia
                    </TitleText>
                    <p className="">
                      Te recomendamos considerar el uso de la pastilla de
                      emergencia. Ésta se te puede brindar en un centro de salud
                      o la puedes conseguir en una farmacia.
                    </p>
                    <p className="mb-6">
                      Recuerda que la anticoncepción de emergencia no es un
                      método abortivo, por lo tanto no interrumpe un embarazo en
                      progreso.
                    </p>
                    <TitleText className="mb-4">
                      Exámenes de laboratorio
                    </TitleText>
                    <p className="mb-4">Qué exámenes se recomienda hacer:</p>
                    <ul className="list-disc pl-4 mb-4">
                      <li className="font-semibold">
                        Prueba de embarazo (esto es para determinar si había un
                        embarazo previo a la violación o si hay un embarazo
                        derivado de la violación).
                      </li>
                    </ul>
                    <p className="mb-4">
                      Un resultado negativo de la prueba no necesariamente
                      significa que se puede descartar un embarazo. Te
                      recomendamos repetir la prueba de embarazo tres o cuatro
                      semanas después de la violación. Si después de este
                      periodo la prueba es negativa, es altamente probable que
                      no haya un embarazo.
                    </p>
                    <p className="mb-4">
                      Si la prueba es positiva recuerda que todas las mujeres en
                      nuestro país tienen derecho a interrumpir el embarazo
                      cuando es producto de una violación, aunque no siempre se
                      respeta este derecho. Te recomendamos acercarte a algunas
                      de las organizaciones que vienen en directorio y que
                      acompañan casos de aborto.
                    </p>
                    <ul className="list-disc pl-4 mb-4">
                      <li className="font-semibold">
                        Pruebas serológicas para detectar infecciones de
                        transmisión sexual: gonorrea e infección por Chlamydia,
                        trachomatis, Sífilis y Hepatitis B.
                      </li>
                    </ul>
                    <p className="mb-4">
                      Para prevenir las Infecciones de Transmisión Sexual (ITS)
                      el personal médico puede prescribir algunos medicamentos
                      en pastillas. Las ITS más comunes y las que se buscan
                      prevenir con los medicamentos son: Chlamydia trachomatis,
                      la gonorrea y la sífilis. También es recomendable ponerse
                      la vacuna de hepatitis B.
                    </p>
                    <p className="mb-4">
                      Respecto a la prevención de VIH puedes buscar que te
                      administren antirretrovirales. El tipo de dosis que te
                      administren dependerá en gran medida de una evaluación de
                      riesgo realizada por el personal de salud.
                    </p>
                    <TextHeader>
                      ¿Cómo es la revisión médica que deben realizarte para
                      brindarte tratamiento y recabar evidencia?
                    </TextHeader>
                    <ul className="list-disc pl-4">
                      <li className="mb-4">
                        Buscan marcas, mordidas, golpes, huellas de sujeción,
                        entre otras
                      </li>
                      <li className="mb-4">
                        Toman muestras de material extraño en ropa o piel
                        (protocolo legal de recolección de evidencias*)
                      </li>
                      <li className="mb-4">
                        Realizan examen del área vaginal: el médico o médica
                        buscará lesiones o evidencia útil posiblemente con la
                        ayuda de un espejo y un hisopo para recolectar
                        evidencia.
                      </li>
                      <li className="mb-4">
                        En caso de que en tu relato lo comentes, también se
                        revisará el ano y el recto y si es necesario se tomarán
                        muestras con un hisopo.
                      </li>
                      <li className="mb-4">
                        Es posible que la persona que te revise vaya tomando
                        notas.
                      </li>
                    </ul>
                    <TitleText className="text-marron mb-4">
                      Recuerda: Aunque la ley establece cómo se deben atender
                      estas situaciones por parte del personal médico, la
                      realidad es que no siempre saben cómo hacerlo
                    </TitleText>
                    <TitleText>
                      IMPORTANTE: el personal médico siempre debe ser
                      respetuoso, cuidadoso y pedir tu consentimiento en cada
                      momento de la revisión.
                    </TitleText>
                  </>
                )}
                {!sistema.menos && (
                  <>
                    <TextHeader>
                      ¿Qué debes tener en cuenta en este momento?
                    </TextHeader>
                    <TitleText className="mb-4">
                      Exámenes de laboratorio
                    </TitleText>
                    <p className="mb-4">Qué exámenes se recomienda hacer:</p>
                    <ul className="list-disc pl-4">
                      <li className="mb-4 font-semibold">
                        Prueba de embarazo (esto es para determinar si había un
                        embarazo previo a la violación o si hay un embarazo
                        derivado de la violación).
                      </li>
                    </ul>
                    <p className="mb-4">
                      Un resultado negativo de la prueba no necesariamente
                      significa que se puede descartar un embarazo. Te
                      recomendamos repetir la prueba de embarazo tres o cuatro
                      semanas después de la violación. Si después de este
                      periodo la prueba es negativa, es altamente probable que
                      no haya un embarazo.
                    </p>
                    <p className="mb-4">
                      Si la prueba es positiva recuerda que todas las mujeres en
                      nuestro país tienen derecho a interrumpir el embarazo
                      cuando es producto de una violación, aunque no siempre se
                      respeta este derecho. Te recomendamos acercarte a algunas
                      de las organizaciones que vienen en directorio y que
                      acompañan casos de aborto.
                    </p>
                    <ul className="list-disc pl-4">
                      <li className="mb-4 font-semibold">
                        Pruebas serológicas para detectar infecciones de
                        transmisión sexual: gonorrea e infección por Chlamydia,
                        trachomatis, Sífilis, Hepatitis B y VIH (se recomienda
                        hacerla al menos 30 días después de la agresión) .
                      </li>
                    </ul>
                    <TitleText className="mb-4">
                      Revisión para brindar tratamiento médico y recolectar
                      evidencia
                    </TitleText>
                    <p className="mb-4">
                      En este momento es posible que muchas evidencias se hayan
                      perdido, no obstante, el personal médico debe realizar un
                      examen físico completo para brindar atención médica si es
                      necesario y recabar evidencia. También, si lo consideran y
                      tú estás de acuerdo, pueden realizar revisión vaginal y
                      anal. En esta revisión se buscan lesiones y se toman
                      muestras para en busca de infecciones de transmisión
                      sexual (ITS): sífilis,gonorrea, Chlamydia y trachomatis.
                    </p>
                    <TitleText className="text-marron mb-4">
                      Recuerda: Aunque la ley (NOM-046-SSA2-2005) establece cómo
                      se deben atender estas situaciones por parte del personal
                      médico, la realidad es que no siempre saben cómo hacerlo.
                    </TitleText>
                    <TitleText className="mb-4">
                      IMPORTANTE: el personal médico siempre debe ser
                      respetuoso, cuidadoso y pedir tu consentimiento en cada
                      momento de la revisión.
                    </TitleText>{" "}
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </Layout>
  )
}

export default SistemaSalud
