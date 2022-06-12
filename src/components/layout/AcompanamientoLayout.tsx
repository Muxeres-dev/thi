import { Link, navigate } from "gatsby"
import React, { useContext, useEffect, useRef } from "react"
import { AppContext } from "../../context/AppContext"
import useMenuColor from "../../hooks/useMenuColor"
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

const AcLayout = ({ title, textLink, url, children }) => {
  const { setMenuColor } = useContext(AppContext)
  const refSection = useRef(null)
  const menuColor = useMenuColor([refSection])

  useEffect(() => {
    setMenuColor(menuColor)
  }, [menuColor])

  return (
    <Layout title={title}>
      <div
        className="mt-40 sm:hidden mb-4 pl-4 sm:pl-0 flex items-center cursor:pointer"
        onClick={() => navigate("/acompanamiento")}
      >
        <BakcIcon />
        <div
          className={`text-lg sm:text-4xl text-beige1 font-medium sm:font-light ml-4 sm:ml-0`}
        >
          Acompañamiento
        </div>
      </div>
      <div ref={refSection} className="mt-0 sm:mt-44 bg-beige1 py-4 sm:py-6">
        <div className="container">
          <div className="sm:w-3/4">
            <p className="text-xl sm:text-4xl text-white font-normal">
              {title}
            </p>
          </div>
        </div>
      </div>
      <div className="py-4 container">
        <div className="sm:w-3/4 child-style:mb-4 pt-4 sm:pt-8">{children}</div>
        <div className="">
          <Link
            to={url}
            className="block text-beige1 text-xl sm:text-3xl mt-6 sm:mt-8"
          >
            {textLink}
          </Link>
          <Link
            to="/acompanamiento"
            className="block text-beige1 text-xl sm:text-3xl mt-6 sm:mt-8"
          >
            Ver todos
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default AcLayout
