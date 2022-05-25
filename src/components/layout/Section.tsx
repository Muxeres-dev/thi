import React from "react"

const Section = ({
  children,
  id,
  className,
}: {
  children: React.ReactNode
  id?: string
  className?: string
}) => {
  return (
    <section id={id}>
      <div
        className={`min-h-screen w-screen flex sm:items-center ${
          className ? className : ""
        }`}
      >
        <div className="container">{children}</div>
      </div>
    </section>
  )
}

export default Section
