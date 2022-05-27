import React from "react"

const Section = ({ children }) => {
  return (
    <section>
      <div className="min-h-screen w-screen">
        <div className="container">
          <div className="pt-24 sm:pt-48">{children}</div>
        </div>
      </div>
    </section>
  )
}

export default Section
