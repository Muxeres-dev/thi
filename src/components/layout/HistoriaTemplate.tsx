import { Link, navigate } from "gatsby"
import React from "react"
import Layout from "./Layout"

const BakcIcon = () => {
  return (
    <svg
      width="11"
      height="16"
      viewBox="0 0 11 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="sm:hidden cursor-pointer"
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

const HistoriaTemplate = ({ pageContext }) => {
  const { title, name, year, yearOcured, content, nextlink } = pageContext.data
  const createMarkup = html => {
    return {
      __html: html,
    }
  }

  return (
    <Layout title={`Historias ${title}`}>
      <section>
        <div
          className="mt-40 sm:hidden mb-4 pl-4 sm:pl-0 flex items-center cursor-pointer"
          onClick={() => navigate("/historias")}
        >
          <BakcIcon />
          <div
            className={`text-lg sm:text-4xl text-beige1 font-medium sm:font-light ml-4 sm:ml-0`}
          >
            Historias
          </div>
        </div>
        <div className="mt-0 sm:mt-44 bg-beige1 py-4 sm:pt-12 sm:pb-8">
          <div className="container">
            <p className="text-white text-xl sm:text-3xl mb-4 sm:mb-8">
              {title}
            </p>
            {name && (
              <p className="font-semibold text-marron text-lg sm:text-lg">
                {name}
              </p>
            )}
            {yearOcured && (
              <p className="text-white font-semibold text-lg sm:text-lg">
                Año que ocurrió: {yearOcured}
              </p>
            )}
            {year && (
              <p className="text-white font-semibold text-lg sm:text-lg">
                Año de testimonio: {year}
              </p>
            )}
          </div>
        </div>
        <div className="container">
          <div className="sm:w-3/4 text-base py-12">
            <div
              className="child-style:mb-4"
              dangerouslySetInnerHTML={createMarkup(content)}
            ></div>
          </div>
          {nextlink && (
            <Link
              to={`/historias/${nextlink}`}
              className="block text-beige1 text-xl sm:text-3xl mb-6 sm:mb-8"
            >
              Siguiente Historia
            </Link>
          )}
          <Link
            to="/historias"
            className="block text-beige1 text-xl sm:text-3xl mb-6 sm:mb-8"
          >
            Ver todas las historias
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default HistoriaTemplate
