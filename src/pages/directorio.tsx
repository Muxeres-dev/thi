import React, { useEffect, useState, useMemo } from "react"
import ReactPaginate from "react-paginate"
import Layout from "../components/layout/Layout"
import CloseIcon from "../components/shared/CloseIcon"
import TextIlustration from "../components/shared/TextIlustration"
import Button from "../components/shared/Button"

import Ilus8 from "../images/ilus8.png"

import { directorio, Organizacion } from "../assets/directorio"

const Lupa = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="14.4961"
      cy="14.4954"
      r="8.7498"
      transform="rotate(45 14.4961 14.4954)"
      stroke="#CF9783"
      strokeWidth="3"
    />
    <line
      x1="22.2737"
      y1="21.9199"
      x2="27.1523"
      y2="26.7986"
      stroke="#CF9783"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
)

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
      {active && <CloseIcon />}
    </div>
  )
}

const Directorio = () => {
  const [directorioFiltered, setDirectorioFiltered] = useState(directorio)
  const [activeTags, setActiveTags] = useState([])
  const [activeEstado, setActiveEstado] = useState("")
  const [loading, setLoading] = useState(false)

  const estados = useMemo(
    () => [...new Set(directorio.map(dir => dir.estado))],
    [directorio]
  )
  const tags = useMemo(() => {
    const tagarr = []
    directorio
      .map(org => org.tags)
      .forEach(tag => {
        tag.split(",").forEach(t => {
          tagarr.push(t.trim().toLowerCase())
        })
      })

    return [...new Set(tagarr)]
  }, [directorio])

  useEffect(() => {
    if (activeTags.length === 0 && activeEstado === "")
      setDirectorioFiltered(directorio)
    else {
      const orgsFiltered = []
      let tagarr = []
      if (activeEstado !== "") {
        orgsFiltered.push(
          ...directorio.filter(org => org.estado === activeEstado)
        )
      }
      activeTags.forEach(tag => {
        tagarr.push(
          ...directorio
            .filter(org => org.estado !== activeEstado)
            .filter(org => org.tags.toLowerCase().includes(tag.toLowerCase()))
        )
      })

      tagarr = [...new Set(tagarr)]
      orgsFiltered.push(...tagarr.filter(org => org.estado === "Nacional"))
      orgsFiltered.push(
        ...tagarr
          .filter(org => org.estado !== "Nacional")
          .sort((a, b) => a.estado.localeCompare(b.estado))
      )

      setDirectorioFiltered(orgsFiltered)
    }
  }, [activeTags, activeEstado])

  const handleEstado = e => {
    setActiveEstado(e.target.value)
  }

  const clearfilters = () => {
    setActiveEstado("")
    setActiveTags([])
  }

  const Items = ({ currentItems }: { currentItems: Organizacion[] }) => {
    return (
      <>
        {currentItems &&
          currentItems.map((org, j) => (
            <React.Fragment key={`orgpaged${j}`}>
              {(j === 0 ||
                (j !== 0 &&
                  currentItems[j].estado !== currentItems[j - 1].estado)) && (
                <h3 className="text-beige1 font-semibold text-2xl sm:text-3xl px-16 sm:px-0 mt-6">
                  {org.estado}
                </h3>
              )}
              <div className="accordion-item">
                <h2
                  className="accordion-header mb-0 block"
                  id={`heading${j}${j}`}
                >
                  <button
                    className="accordion-button collapsed relative flex items-center w-full py-6 sm:py-4 pl-16 sm:pl-4 pr-16 sm:pr-4 !rounded-none text-lg !text-gray1 text-left bg-white border-b-2 border-beige1 transition focus:outline-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${j}${j}`}
                    aria-expanded="true"
                    aria-controls={`collapse${j}${j}`}
                  >
                    <div className="pr-4 flex flex-col">
                      <p className="font-light text-lg sm:text-xl">
                        {org.name}
                      </p>
                      <p className="text-beige1 text-base font-semibold">
                        {org.tipo}
                      </p>
                    </div>
                  </button>
                </h2>
                <div
                  id={`collapse${j}${j}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`heading${j}${j}`}
                >
                  <div className="accordion-body bg-beige1 text-lg text-white pt-4 sm:pt-4 pb-4 sm:pb-4 px-16 sm:px-4">
                    <div className="w-full text-base flex flex-col sm:flex-row">
                      <div className="sm:w-1/6">
                        {org.phones && (
                          <div className="">
                            <p className="font-semibold">Contacto</p>
                            <p className="break-words">{org.phones}</p>
                          </div>
                        )}
                      </div>
                      <div className="sm:w-3/6 sm:px-3 break-words">
                        {org.addres && (
                          <div className="">
                            <p className="font-semibold">Dirección</p>
                            <p className="break-words">{org.addres}</p>
                          </div>
                        )}
                      </div>
                      <div className="sm:w-2/6 break-all">
                        {org.web && (
                          <div className="">
                            <p className="font-semibold">Sitio Web</p>
                            <a
                              className="text-purple1 underline"
                              href={org.web}
                              target="_blank"
                            >
                              {org.web}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
      </>
    )
  }

  const PaginatedItems = ({ itemsPerPage }) => {
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null)
    const [pageCount, setPageCount] = useState(0)
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0)

    useEffect(() => {
      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage
      setCurrentItems(directorioFiltered.slice(itemOffset, endOffset))
      setPageCount(Math.ceil(directorioFiltered.length / itemsPerPage))
    }, [itemOffset, itemsPerPage])

    // Invoke when user click to request another page.
    const handlePageClick = event => {
      const newOffset =
        (event.selected * itemsPerPage) % directorioFiltered.length
      setItemOffset(newOffset)
    }

    return (
      <>
        <Items currentItems={currentItems} />
        <div className="font-semibold flex justify-center mt-8 mb-4 text-xl">
          <ReactPaginate
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            pageCount={pageCount}
            previousLabel="<"
            pageClassName="mx-2"
            pageLinkClassName="page-link"
            previousClassName="text-beige1"
            previousLinkClassName="page-link"
            nextClassName="text-beige1"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="mx-2"
            containerClassName="flex"
            activeClassName="text-beige1"
            renderOnZeroPageCount={null}
          />
        </div>
      </>
    )
  }

  return (
    <Layout title="Directorio">
      <section>
        <div className="container mt-32 sm:mt-44">
          <TextIlustration ilus={Ilus8} title="Directorio">
            <p className="text-lg sm:text-3xl text-gray1 font-light mt-8">
              <span className="text-beige1 font-semibold">Conoce</span> las
              organizaciones que pueden ayudarte si has sufrido violencia
              sexual.
            </p>
          </TextIlustration>
        </div>
      </section>
      <section>
        <div className="container mt-20">
          <div className="flex items-center text-base sm:text-lg font-semibold">
            <Lupa />
            <p className="ml-4">
              Puedes filtrar tu búsqueda por tema o Estado.
            </p>
          </div>
          <p className="font-semibold my-6 text-lg sm:text-xl">Temática:</p>
          <div className="flex flex-col sm:flex-row justify-between">
            <div className="sm:pr-12">
              {tags.map((tag, i) => (
                <React.Fragment key={`${i}tagph`}>
                  <Tag
                    value={tag}
                    setActiveTags={setActiveTags}
                    activeTags={activeTags}
                  />
                  {i !== tags.length - 1 && (
                    <span className="text-beige1 mx-2">/</span>
                  )}
                </React.Fragment>
              ))}
            </div>
            <select
              className="w-full flex-0 sm:w-80 border-b border-beige1 p-4 text-center accent-beige1 sm:mt-0 mt-8 bg-white outline-none"
              onChange={handleEstado}
              value={activeEstado}
            >
              <option value="">Filtrar por estado</option>
              {estados.map((estado, i) => (
                <option key={`${i}estado`} value={estado}>
                  {estado}
                </option>
              ))}
            </select>
          </div>
        </div>
        {(activeTags.length > 0 || activeEstado !== "") && (
          <div className="container mt-12 mb-4">
            <Button
              text="Otra búsqueda"
              variant="option"
              className="mx-auto"
              action={() => clearfilters()}
            />
          </div>
        )}

        <div className="sm:container mt-16">
          <PaginatedItems itemsPerPage={11} />
        </div>
      </section>
    </Layout>
  )
}

export default Directorio
