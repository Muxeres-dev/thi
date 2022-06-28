import { Link, navigate } from "gatsby"
import React, { useState, useEffect } from "react"
import axios from "axios"
import Layout from "../components/layout/Layout"
import SyncLoader from "react-spinners/SyncLoader"

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

const Historia = props => {
  const baseUrl = "https://tuhistoriaimporta.com/wp/wp-json/wp/v2/"
  const {
    location: { search },
  } = props
  const createMarkup = html => {
    return {
      __html: html,
    }
  }

  const [story, setStory] = useState<null | {
    title
    name
    yearOccured?
    year
    content
    nextId
  }>()
  //const [id, setId] = useState(0)

  useEffect(() => {
    setStory(null)
    const id = Number(search.split("=")[1])
    axios
      .get(`${baseUrl}categories?timestamp=${new Date().getTime()}`)
      .then(res => {
        const idCat = res.data.find(cat => cat.name === "historia").id

        axios
          .get(
            `${baseUrl}posts?categories=${idCat}&timestamp=${new Date().getTime()}`
          )
          .then(response => {
            const storiesWp: {
              id
              title
              content
              year
              name
              yearOccured
              nextId
            }[] = []
            const posts = response.data
              .sort((a, b) => a.acf.order - b.acf.order)
              .map(post => ({ id: post.id, ...post.acf }))
            posts.forEach((post, i) =>
              storiesWp.push({
                id: post.id,
                title: post.title,
                content: post.content,
                year: post.year,
                name: post.name,
                yearOccured: post.yearOccured,
                nextId: i < posts.length - 1 ? posts[i + 1].id : 0,
              })
            )
            setStory(storiesWp.find(story => story.id === id))
          })
      })
  }, [search])

  return (
    <>
      {story ? (
        <Layout title={`Historias ${story.title}`}>
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
                  {story.title}
                </p>
                {story.name && (
                  <p className="font-semibold text-marron text-lg sm:text-lg">
                    {story.name}
                  </p>
                )}
                {story.yearOccured && (
                  <p className="text-white font-semibold text-lg sm:text-lg">
                    Año que ocurrió: {story.yearOccured}
                  </p>
                )}
                {story.year && (
                  <p className="text-white font-semibold text-lg sm:text-lg">
                    Año de testimonio: {story.year}
                  </p>
                )}
              </div>
            </div>
            <div className="container">
              <div className="sm:w-3/4 text-base py-12">
                <div
                  className="child-style:mb-4"
                  dangerouslySetInnerHTML={createMarkup(story.content)}
                  style={{ whiteSpace: "pre-wrap" }}
                ></div>
              </div>
              {story.nextId !== 0 && (
                <Link
                  to={`/historia?id=${story.nextId}`}
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
      ) : (
        <div className="flex justify-center items-center min-h-screen">
          <SyncLoader color="#CF9783" />
        </div>
      )}
    </>
  )
}

export default Historia
