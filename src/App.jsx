// Routes
import { Routes, Route } from "react-router-dom"

// Pages
import Home from "./pages/home/Home"

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />}/>
    </Routes>
  )
}

export default App