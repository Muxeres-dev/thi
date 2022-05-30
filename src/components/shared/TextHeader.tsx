import React from "react"

const TextHeader = ({
  children,
  className,
}: {
  children
  className?: string
}) => {
  return (
    <h2 className={`text-2xl sm:text-4xl mb-4 ${className ? className : ""}`}>
      {children}
    </h2>
  )
}

export default TextHeader
