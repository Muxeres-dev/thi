import React from "react"
import Footer from "../layout/Footer"

const Section = ({ children, footer }: { children; footer?: boolean }) => {
  return (
    <section>
      <div className={`min-h-screen w-screen ${footer ? "flex flex-col" : ""}`}>
        <div className={`container ${footer ? "grow" : ""}`}>
          <div className="pt-24 sm:pt-44">{children}</div>
        </div>
        {footer && <Footer />}
      </div>
    </section>
  )
}

export default Section
