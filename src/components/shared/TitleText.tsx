import React from "react"

const TitleText = ({
  children,
  className,
}: {
  children
  className?: string
}) => {
  return (
    <h2 className={`font-semibold ${className ? className : ""}`}>
      {children}
    </h2>
  )
}

export default TitleText
