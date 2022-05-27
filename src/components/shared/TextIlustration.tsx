import React from "react"

const TextIlustration = ({
  ilus,
  title,
  children,
}: {
  ilus
  title?
  children
}) => {
  return (
    <div className="flex w-full gap-4 flex-col sm:flex-row">
      <div className="flex justify-center sm:w-1/3 sm:order-2">
        <img src={ilus} alt="Tu historia importa - ilustración" />
      </div>
      <div className="flex items-center sm:w-2/3 sm:order-1">
        <div className="">
          {title && <p className="text-beige1 font-medium text-2xl sm:text-4xl">{title}</p>}
          {children}
        </div>
      </div>
    </div>
  )
}

export default TextIlustration
