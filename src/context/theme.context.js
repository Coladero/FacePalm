import { createContext, useState } from "react";

const ThemeContext = createContext();

function ThemeWrapper(props) {

  const [ darkMode, setDarkMode ] = useState(false)

  const darkTheme = {
    minHeight:"100vh",
    backgroundColor: "black",
    color: "darkGray"
  }

  const lightTheme = {
    minHeight:"100vh",
    backgroundColor: "white",
    color: "black"
  }

  const switchTheme = () => {
    return darkMode ? darkTheme : lightTheme
  }

  // creamos el obj con todo el contexto
  const passedContext = {
    darkMode,
    setDarkMode,
    switchTheme,
  }


  return (
    <ThemeContext.Provider value={passedContext}>
      {props.children}
    </ThemeContext.Provider>
  )
}
export { ThemeContext, ThemeWrapper }