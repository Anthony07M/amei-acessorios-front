import { RoutesProvider } from "./routes/index."
import { GlobalStyle } from "./styles/global"

export const App = () => {

  return (
    <>
      <GlobalStyle />
      <RoutesProvider />
    </>
  )
}

export default App
