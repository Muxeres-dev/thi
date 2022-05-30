import React from "react"

const Icon = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.07593 4.8712H11.8929V13.6881"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M11.7668 4.99724L6.83116 10.1927L1.89551 15.3881"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
)

const Salida = () => {
  return (
    <div
      className="fixed right-1 sm:right-4 bottom-1 sm:bottom-4 bg-purple1 cursor-pointer rounded-full w-16 h-16 font-medium text-white text-xs flex flex-col justify-center items-center gap-1 z-10"
      onClick={() => (window.location.href = "http://www.google.com")}
    >
      <Icon />
      SALIDA
    </div>
  )
}

export default Salida
