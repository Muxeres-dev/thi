import React, { useState } from "react"
import { Link, navigate } from "gatsby"
import Layout from "../../components/layout/Layout"
import TextHeader from "../../components/shared/TextHeader"
import { useAnimateOnInView } from "../../hooks/useAnimateOnInView"
import { motion } from "framer-motion"
import { fromLeft, visible } from "../../constants/animations"

const BakcIcon = () => {
  return (
    <svg
      width="11"
      height="16"
      viewBox="0 0 11 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="sm:hidden cursor-pointer"
      onClick={() => navigate("/autocuidado")}
    >
      <path
        d="M9 2L3 8L9 14"
        stroke="#CF9783"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  )
}

export const Tab = ({ title, read, children }: { title?; read?; children }) => {
  return (
    <div className="mt-8 child-style:mb-4">
      {title && <TextHeader className="text-beige1">{title}</TextHeader>}
      {read && <p className="text-base my-8">Tiempo de lectura: {read}</p>}
      {children}
    </div>
  )
}
export const TabList = ({ children }) => {
  const total = children.length / 2
  const [index, setIndex] = useState(0)

  return (
    <>
      {total !== 1 && (
        <div className="sm:container">
          <div className="w-full relative flex text-xl sm:text-2xl">
            <div className="relative font-normal border-b border-beige1 pr-2 sm:pr-16 pl-4 sm:pl-0 flex items-center">
              <p>Capítulos</p>
              <div className="h-1 w-full bg-beige1 absolute left-0 bottom-0"></div>
            </div>
            <div className="relative w-full flex border-b border-beige1 py-4">
              {children.map(
                (tab: any, i: number) =>
                  i < total && (
                    <a
                      key={`tab${i}`}
                      className={`text-center flex-1 cursor-pointer ${
                        i === index ? "text-gray1 font-semibold" : "text-beige1"
                      }`}
                      onClick={e => {
                        e.preventDefault()
                        setIndex(i)
                      }}
                    >
                      {i + 1}
                    </a>
                  )
              )}
              <div
                className="h-1 bg-beige1 absolute left-0 bottom-0"
                style={{ width: `${((index + 1) * 100) / total}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}
      <div className="container">
        <div className="sm:w-3/4">
          <div className="mb-12">{children[index]}</div>
          {total !== 1 && index !== total - 1 && (
            <a
              className="block text-beige1 text-xl sm:text-3xl cursor-pointer mb-8"
              onClick={e => {
                e.preventDefault()
                window.scrollTo(0, 0)
                setIndex(index === total - 1 ? 0 : index + 1)
              }}
              href="#"
            >
              Siguiente capítulo
            </a>
          )}
          <Link className="text-beige1 text-xl sm:text-3xl" to="/autocuidado">
            Ver todos los artículos
          </Link>
          <div className="my-12 text-base">{children[index + total]}</div>
        </div>
      </div>
    </>
  )
}

const AutocuidadoLayout = ({ title, children }) => {
  const { ref: refText, controls: controlText } = useAnimateOnInView()
  return (
    <Layout title={`Autocuidado - ${title}`}>
      <section ref={refText}>
        <div className="sm:container">
          <motion.div
            variants={fromLeft}
            initial="hidden"
            animate={controlText}
            transition={{ duration: 1 }}
          >
            <div className="mt-40 sm:mt-48 mb-4 pl-4 sm:pl-0 flex items-center">
              <BakcIcon />
              <div
                className={`text-lg sm:text-4xl text-beige1 font-medium sm:font-light ml-4 sm:ml-0`}
              >
                {title}
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={visible}
          initial="hidden"
          animate={controlText}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {children}
        </motion.div>
      </section>
    </Layout>
  )
}

export default AutocuidadoLayout
