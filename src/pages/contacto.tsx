import axios from "axios"
import React, { useRef, useState } from "react"
import SyncLoader from "react-spinners/SyncLoader"
import Layout from "../components/layout/Layout"
import Button from "../components/shared/Button"
import Section from "../components/shared/Section"

const convertJsontoUrlencoded = obj => {
  let str = []
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      str.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]))
    }
  }
  return str.join("&")
}

const Contacto = ({ id }) => {
  const [form, setForm] = useState({ name: "", email: "" })
  const [errorFormName, setErrorFormName] = useState("")
  const [errorFormMail, setErrorFormMail] = useState("")
  const [errorFormMsj, setErrorFormMsj] = useState("")
  const [loading, setLoading] = useState(false)
  const [formMessage, setFormMessage] = useState("")
  const comment = useRef(null)
  const TOKEN =
    typeof window !== "undefined" && window.btoa(`Alepad90:9VrM%kBC2YCO#`)

  const handleChanges = e => {
    e.preventDefault()
    setErrorFormName("")
    setErrorFormMail("")
    setErrorFormMsj("")
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const sendForm = async e => {
    let errors = 0
    e.preventDefault()
    if (form.name.trim() === "") {
      setErrorFormName("Ingresa tu nombre")
      errors++
    }
    if (form.email.trim() === "") {
      setErrorFormMail("Ingresa tu email")
      errors++
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email)
    ) {
      setErrorFormMail("Ingresa un email correcto")
      errors++
    }
    if (comment.current.innerText.trim() === "") {
      setErrorFormMsj("Ingresa tu mensaje")
      errors++
    }
    if (errors === 0) {
      setLoading(true)
      try {
        await axios({
          url: `https://tuhistoriaimporta.com/wp/wp-json/contact-form-7/v1/contact-forms/5/feedback`,
          headers: {
            Authorization: `Basic ${TOKEN}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
          method: "POST",
          data: convertJsontoUrlencoded({
            ["your-subject"]: "Contacto",
            ["your-name"]: form.name,
            ["your-email"]: form.email,
            ["your-message"]: comment.current.innerText,
          }),
        })
        setLoading(false)
        setFormMessage("Gracias por contactarnos. Tu mensaje ha sido enviado")
        setForm({ name: "", email: "" })
        comment.current.innerText = ""
      } catch (error) {
        setLoading(false)
        setFormMessage("Ocurrió un error")
      }
    }
  }
  return (
    <Layout title="Contacto">
      <Section>
        <p className="text-beige1 text-3xl sm:text-4xl mb-4 mt-20 sm:mt-12">
          Contacto
        </p>
        <p className="text-lg text-gray1 sm:text-2xl ">
          Contáctanos en caso de que tengas una sugerencia.
        </p>
        <form
          className="w-full text-black mt-12 my-4"
          onSubmit={e => sendForm(e)}
        >
          <div className="sm:grid sm:grid-cols-2 sm:gap-12 text-gray1">
            <div className="relative flex flex-col items-center py-2 mt-4 sm:mt-0 sm:w-4/5">
              <input
                name="name"
                className="appearance-none bg-transparent w-full mr-3 pb-6 px-2 focus:outline-none text-lg sm:text-2xl placeholder:text-gray1"
                type="text"
                placeholder="Nombre"
                aria-label="Name"
                value={form.name}
                onChange={e => handleChanges(e)}
              />
              <div
                className={`absolute h-px border-b border-beige1 left-0 bottom-0 transition-all duration-1000 ease-in-out visible w-full`}
              ></div>
              {errorFormName !== "" && (
                <div className="absolute left-0 -bottom-6 text-sm text-beige1">
                  {errorFormName}
                </div>
              )}
            </div>
            <div className="relative flex flex-col items-center py-2 mt-4 sm:mt-0 sm:w-4/5">
              <input
                name="email"
                className="appearance-none bg-transparent w-full mr-3 pb-6 px-2 focus:outline-none text-lg sm:text-2xl placeholder:text-gray1"
                type="mail"
                placeholder="Email"
                aria-label="Email"
                value={form.email}
                onChange={e => handleChanges(e)}
              />
              <div
                className={`absolute h-px border-b border-beige1 left-0 bottom-0 transition-all duration-1000 ease-in-out delay-500 visible w-full`}
              ></div>
              {errorFormMail !== "" && (
                <div className="absolute left-0 -bottom-6 text-sm text-beige1">
                  {errorFormMail}
                </div>
              )}
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-2 sm:gap-12 sm:mt-16 ">
            <div className="relative flex flex-col items-center py-2 mt-4 sm:mt-0 sm:w-4/5">
              <span
                ref={comment}
                contentEditable="true"
                className="outline-none w-full mr-3 pb-6 px-2 focus:outline-none text-lg sm:text-2xl"
                placeholder="Mensaje"
                onChange={() => setErrorFormMsj("")}
                onClick={() => setErrorFormMsj("")}
              ></span>
              <div
                className={`absolute h-px border-b border-beige1 left-0 bottom-0 transition-all duration-1000 ease-in-out delay-1000 visible w-full`}
              ></div>
              {errorFormMsj !== "" && (
                <div className="absolute left-0 -bottom-6 text-sm text-beige1">
                  {errorFormMsj}
                </div>
              )}
            </div>
            <div className="text-center sm:text-left mt-8 sm:mt-4">
              {loading ? (
                <SyncLoader color="#CF9783" />
              ) : formMessage === "" ? (
                <Button type="submit" text="Enviar" variant="beige" />
              ) : (
                <p className="text-lg text-beige1 text-xl">{formMessage}</p>
              )}
            </div>
          </div>
        </form>
      </Section>
    </Layout>
  )
}

export default Contacto
