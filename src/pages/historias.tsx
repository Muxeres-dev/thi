import { motion } from "framer-motion"
import { navigate } from "gatsby"
import React, { useState, useEffect, useMemo } from "react"
import Layout from "../components/layout/Layout"
import Button from "../components/shared/Button"
import TextIlustration from "../components/shared/TextIlustration"
import { visible, fromBottom } from "../constants/animations"
import { useAnimateOnInView } from "../hooks/useAnimateOnInView"

import Ilus4 from "../images/ilus7.png"

const Close = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-flex cursor-pointer ml-2"
    >
      <path
        d="M2 2L12 12"
        stroke="#CF9783"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M12 2L2 12"
        stroke="#CF9783"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  )
}

const Story = ({ title, summary, action, index }) => {
  const { ref, controls } = useAnimateOnInView()
  return (
    <div
      className={`relative mb-4 sm:mb-20 ${index % 3 === 0 ? "sm:mr-2" : ""} ${
        index % 3 === 1 ? "sm:mx-2" : ""
      } ${index % 3 === 2 ? "sm:ml-2" : ""}`}
    >
      <motion.div
        ref={ref}
        variants={visible}
        initial="hidden"
        animate={controls}
        className="box"
        transition={{ duration: 1 }}
      >
        <p className="sm:absolute text-beige1 text-lg sm:text-2xl sm:top-0">
          {title}
        </p>
        <p className="text-base sm:text-lg py-4 sm:pt-24 sm:pb-20">{summary}</p>
        <Button
          text="Leer completo"
          action={action}
          variant="option"
          className="sm:absolute sm:bottom-0"
        />
      </motion.div>
    </div>
  )
}

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
      {active && <Close />}
    </div>
  )
}

const Historias = () => {
  const tags = [
    {
      parent: "lugar",
      children: [
        "escuela",
        "espacio público",
        "casa",
        "departamento",
        "discoteca",
        "bar",
        "redes sociales",
      ],
    },
    {
      parent: "tipo de violencia",
      children: [
        "hostigamiento sexual",
        "violación",
        "abuso sexual",
        "infantil",
        "violencia familiar",
        "ciberacoso",
      ],
    },
    {
      parent: "relación con agresor",
      children: [
        "maestro",
        "pareja",
        "familiar",
        "amigo",
        "vecino",
        "ex pareja",
      ],
    },
  ]

  const historias = [
    {
      order: 1,
      title: "Acoso en la secundaria",
      summary:
        "Tengo una niña de 16 años que hace 2 años fue acosada sexualmente por su maestro de matemáticas en la secundaria.",
      tags: ["violación", ""],
      slug: "acoso-secundaria",
    },
    {
      order: 1,
      title: "Trauma generacional",
      summary:
        "Hace un rato, mientras la familia desayunaba, comenzamos a platicar sobre la forma en que sus relaciones surgieron.",
      tags: ["violación", "familiar"],
      slug: "trauma",
    },
    {
      order: 1,
      title: "Los agresores también pueden ser tus familiares",
      summary:
        "Cuando tenía como 5 o 6 años, mi tío político abusó de mí. Me hacía sexo oral cada que tenía oportunidad, me tocaba mis pechos y me ponía pornografía.",
      tags: ["bar", "departamento"],
      slug: "agresores",
    },
    {
      order: 1,
      title: "Acoso en la secundaria",
      summary:
        "Tengo una niña de 16 años que hace 2 años fue acosada sexualmente por su maestro de matemáticas en la secundaria.",
      slug: "acoso-secundaria",
    },
    {
      order: 1,
      title: "Trauma generacional",
      summary:
        "Hace un rato, mientras la familia desayunaba, comenzamos a platicar sobre la forma en que sus relaciones surgieron.",
      slug: "trauma",
    },
    {
      order: 1,
      title: "Los agresores también pueden ser tus familiares",
      summary:
        "Cuando tenía como 5 o 6 años, mi tío político abusó de mí. Me hacía sexo oral cada que tenía oportunidad, me tocaba mis pechos y me ponía pornografía.",
      slug: "agresores",
    },
    {
      order: 1,
      title: "Acoso en la secundaria",
      summary:
        "Tengo una niña de 16 años que hace 2 años fue acosada sexualmente por su maestro de matemáticas en la secundaria.",
      slug: "acoso-secundaria",
    },
    {
      order: 1,
      title: "Trauma generacional",
      summary:
        "Hace un rato, mientras la familia desayunaba, comenzamos a platicar sobre la forma en que sus relaciones surgieron.",
      slug: "trauma",
    },
    {
      order: 1,
      title: "Los agresores también pueden ser tus familiares",
      summary:
        "Cuando tenía como 5 o 6 años, mi tío político abusó de mí. Me hacía sexo oral cada que tenía oportunidad, me tocaba mis pechos y me ponía pornografía.",
      slug: "agresores",
    },
  ]
  const stories = useMemo(
    () => historias.sort((a, b) => a.order - b.order),
    [historias]
  )

  const [activeTags, setActiveTags] = useState([])
  const [storiesFiltered, setStoriesFiltered] = useState(stories)

  useEffect(() => {
    if (activeTags.length === 0) setStoriesFiltered(stories)
    else
      setStoriesFiltered(
        stories.filter(story =>
          story.tags?.some(r => activeTags.indexOf(r) >= 0)
        )
      )
  }, [activeTags])

  const { ref, controls } = useAnimateOnInView()

  return (
    <Layout title="Historias">
      <section>
        <div className="container mt-32 sm:mt-44">
          <TextIlustration ilus={Ilus4}>
            <p className="text-xl sm:text-4xl text-beige1 font-medium mb-8">
              Historias
            </p>
            <p className="text-lg sm:text-3xl text-gray1 font-light">
              Las historias que se presentan han sido compartidas por mujeres
              víctimas y sobrevivientes de violencia sexual. Son historias que
              narran hechos reales de violencia sexual y tienen contenido
              sensible.
            </p>
          </TextIlustration>
          <div className="mt-8 sm:mt-16">
            <motion.div
              ref={ref}
              variants={fromBottom}
              initial="hidden"
              animate={controls}
              className="box"
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              <p className="text-base sm:text-lg">
                Selecciona una de las siguientes categorías para filtrar tu
                búsqueda:
              </p>
              <div className="mt-4">
                {tags.map((parent, i) => (
                  <React.Fragment key={`${i}tagph`}>
                    <p className="capitalize font-semibold mt-4">
                      {parent.parent}:
                    </p>
                    {parent.children.map((tag, j) => (
                      <React.Fragment key={`${i}${j}tagph`}>
                        <Tag
                          value={tag}
                          setActiveTags={setActiveTags}
                          activeTags={activeTags}
                        />
                        {j !== parent.children.length - 1 && (
                          <span className="text-beige1 mx-2">/</span>
                        )}
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <div className="container">
        {storiesFiltered.length > 0 ? (
          <div className="w-full sm:grid sm:grid-cols-3 mb-16 mt-8 sm:my-20">
            {storiesFiltered.map((story, i) => (
              <Story
                key={`${i}story`}
                title={story.title}
                summary={story.summary}
                action={() => navigate(`/historias/${story.slug}`)}
                index={i}
              />
            ))}
          </div>
        ) : (
          <div className="w-full flex items-center justify-center flex-col pt-8 pb-16 sm:py-16 text-xl sm:text-4xl">
            <Button
              text="Otra búsqueda"
              variant="option"
              className="mb-12 sm:mb-20"
              action={() => setActiveTags([])}
            />
            <p className="text-beige1 font-semibold">Lo sentimos.</p>
            <p className="">Tu búsqueda no generó resultados.</p>
          </div>
        )}
      </div>
      <div className="bg-beige1">
        <div className="container pt-8 pb-8 sm:pt-16 sm:pb-20 text-white">
          <div className="sm:w-3/4">
            <p className="text-xl sm:text-3xl">
              Si deseas que tu historia sea publicada por favor toma en cuenta
              lo siguiente:
            </p>
            <p className="text-marron my-8 font-semibold">
              Estás son las reglas que necesitas saber:
            </p>
            <ul className="pl-4 list-decimal font-semibold child-style:mb-4">
              <li>
                Este espacio busca ser un espacio seguro y de acompañamiento
                para mujeres que han pasado por algo similar a lo que tú
                viviste. Si quieres compartir información y recomendaciones que
                consideras podrían ser útiles a mujeres en una situación igual a
                la tuya, no dudes en hacerlo.
              </li>
              <li>
                Tu historia puede ser publicada con un seudónimo. Por seguridad
                tuya y de la página, preferimos que no se usen nombres
                verdaderos.
              </li>
              <li>
                Evita usar datos que vuelvan identificable a tu agresor (nombre
                completo, puesto de trabajo, dirección, entre otros). Esto lo
                pedimos para evitar ser acusadas de difamación y poner en riesgo
                la operación de la página. Esto lo pedimos para evitar poner en
                riesgo la operación de la página.
              </li>
              <li>
                Puedes enviarnos tu historia a{" "}
                <a href="mailto:historias@tuhistoriaimporta.com">
                  historias@tuhistoriaimporta.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Historias
