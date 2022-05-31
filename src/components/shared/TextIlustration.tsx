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
    <div className="flex w-full gap-4 flex-col md:flex-row mb-8">
      <div className="flex items-center justify-center md:w-1/3 md:order-2 p-4 mt-12 sm:mt-0">
        <img
          src={ilus}
          alt="Tu historia importa - ilustración"
          className="w-full max-w-xs"
        />
      </div>
      <div className="flex items-center md:w-2/3 md:order-1">
        <div className="w-full">
          {title && (
            <p className="text-beige1 font-medium text-2xl sm:text-4xl">
              {title}
            </p>
          )}
          {children}
        </div>
      </div>
    </div>
  )
}

export default TextIlustration
