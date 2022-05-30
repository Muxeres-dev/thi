import React from "react"

interface IProps {
  text: string
  variant: string
  action?: () => void
  disabled?: boolean
  className?: string
  type?: "button" | "submit" | "reset"
  active?: boolean
}

const Button = ({
  text,
  variant,
  action,
  disabled,
  className,
  type,
  active,
}: IProps) => {
  return (
    <>
      {variant === "beige" && (
        <button
          className={`${className} w-full sm:w-52 bg-white border-solid border border-beige1 text-lg p-2 text-beige1 rounded-xl hover:bg-beige1 hover:text-white`}
          onClick={action}
          type={type ? type : "button"}
          disabled={disabled}
        >
          {text}
        </button>
      )}
      {variant === "option" && (
        <div
          className={`sm:w-72 border-2 border-beige1 rounded-xl py-2 px-8 sm:px-4 text-base font-medium cursor-pointer text-center ${
            active ? "text-white bg-beige1" : "text-beige1 "
          }  hover:bg-beige1 hover:text-white`}
          onClick={action}
        >
          {text}
        </div>
      )}
      {variant === "option-white" && (
        <div
          className={`${className} sm:w-72 border-2 border-white rounded-xl py-2 px-8 sm:px-4 text-base font-medium cursor-pointer text-center  hover:bg-white hover:text-beige1`}
          onClick={action}
        >
          {text}
        </div>
      )}
    </>
  )
}

export default Button
