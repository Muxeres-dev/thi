import React from "react"
import Layout from "../components/layout/Layout"
import Section from "../components/shared/Section"
import TextIlustration from "../components/shared/TextIlustration"

import Ilus5 from "../images/ilus5.png"

const Nosotras = () => {
  return (
    <Layout title="Nosotras">
      <Section>
        <TextIlustration ilus={Ilus5} title="Nosotras" small>
          <div className="text-lg">
            <p className="mb-4 mt-4">
              Somos un grupo de mujeres interesadas en dar a conocer información
              útil y honesta para víctimas y sobrevivientes de violencia sexual.
              Nuestro objetivo es que las personas cuenten con herramientas para
              tomar decisiones informadas al enfrentar situaciones de violencia
              sexual y que esto sea útil a lo largo de su proceso de sanación.
            </p>
            <p className="mb-4">
              Aunque cada vez hay más información acerca de qué puedes hacer y a
              dónde puedes acudir después de vivir cualquier acto de violencia
              sexual, la realidad es que sigue siendo poca y no todas las
              personas la conocen.
            </p>
            <p className="mb-4 text-beige1 font-semibold">
              <span className="text-xl font-light">Tu Historia Importa.</span> Y
              nos importa a nosotras. Estamos para apoyarte a ti, a esa amiga
              que no le ha podido contar a nadie y a todas nosotras que
              decidimos crear este espacio porque lo necesitamos.
            </p>
          </div>
        </TextIlustration>
      </Section>
    </Layout>
  )
}

export default Nosotras
