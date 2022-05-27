import React from "react"
import { AnimatePresence } from "framer-motion"

import { AppProvider } from "./src/context/AppContext"

import "tw-elements"

import "./src/styles/global.scss"

export const wrapRootElement = ({ element }) => (
  <AppProvider>
    <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
  </AppProvider>
)
