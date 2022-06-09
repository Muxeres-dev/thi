import React from "react"
import Footer from "../layout/Footer"

const Section = ({ children, footer }: { children; footer?: boolean }) => {
  return (
    <section>
      <div
        className={`sm:min-h-screen w-screen mb-20 sm:mb-0 ${
          footer ? "flex flex-col" : ""
        }`}
      >
        <div className={`container ${footer ? "grow" : ""}`}>
          <div className="pt-24 sm:pt-44">{children}</div>
        </div>
        {footer && <Footer />}
      </div>
    </section>
  )
}

export default Section
