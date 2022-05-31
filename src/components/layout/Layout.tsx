import React from "react"
import { Helmet } from "react-helmet"
import { motion } from "framer-motion"

import Header from "./Header"
import Salida from "./Salida"

interface IProps {
  title: string
  children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal
  description?: string
  ogtitle?: string
  image?: any
  url?: string
}

const Layout = (props: IProps) => {
  const { title, ogtitle, description, image, url } = props
  const defaultDescr =
    "Brindamos información útil y pertinente para todas aquellas personas que han vivido violencia sexual, tomando en cuenta su proceso de sanación y recuperación."
  const defaultTitle = "Tu historia importa"
  const defaultImg = ""
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>THI - {title}</title>
        <link rel="canonical" href="https://www.pactoverde.mx/" />
        <meta property="og:site_name" content="Pacto Verde" />
        <meta
          name="description"
          content={
            description && description !== "" ? description : defaultDescr
          }
        />
        <meta name="image" content={image ? image : defaultImg} />
        <meta
          property="og:url"
          content={`https://www.pactoverde.mx${url ? url : ""}`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={ogtitle && ogtitle !== "" ? ogtitle : defaultTitle}
        />
        <meta
          property="og:description"
          content={
            description && description !== "" ? description : defaultDescr
          }
        />
        <meta property="og:image" content={image ? image : defaultImg} />
        <meta
          property="og:image:secure_url"
          content={image ? image : defaultImg}
        />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:description"
          content={
            description && description !== "" ? description : defaultDescr
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={ogtitle && ogtitle !== "" ? ogtitle : defaultTitle}
        />
        <meta
          name="twitter:description"
          content={
            description && description !== "" ? description : defaultDescr
          }
        />
        <meta name="twitter:image" content={image ? image : defaultImg} />
      </Helmet>
      <Header />
      <Salida />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          type: "spring",
          mass: 0.35,
          stiffness: 50,
          duration: 0.5,
        }}
      >
        <div className="overflow-hidden">{props.children}</div>
      </motion.main>
    </>
  )
}

export default Layout
