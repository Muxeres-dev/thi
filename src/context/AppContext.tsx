import React, { createContext, Dispatch, SetStateAction, useState } from "react"

interface IProps {
  children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal
}

interface IContext {
  menuOpen: boolean
  setMenuOpen: Dispatch<SetStateAction<boolean>>
  menuColor: string
  setMenuColor: Dispatch<SetStateAction<string>>
}

const AppContext = createContext<IContext>({
  menuOpen: false,
  setMenuOpen: () => {},
  menuColor: "beige1",
  setMenuColor: () => {},
})
const { Provider } = AppContext

const AppProvider = (props: IProps) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const [menuColor, setMenuColor] = useState("beige1")

  return (
    <Provider value={{ menuOpen, setMenuOpen, menuColor, setMenuColor }}>
      {props.children}
    </Provider>
  )
}

export { AppContext, AppProvider }
