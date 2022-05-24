import React, { createContext, Dispatch, SetStateAction, useState } from "react"

interface IProps {
  children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal
}

interface IContext {
  menuOpen: boolean
  setMenuOpen: Dispatch<SetStateAction<boolean>>
}

const AppContext = createContext<IContext>({
  menuOpen: false,
  setMenuOpen: () => {},
})
const { Provider } = AppContext

const AppProvider = (props: IProps) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  return <Provider value={{ menuOpen, setMenuOpen }}>{props.children}</Provider>
}

export { AppContext, AppProvider }
