import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Posts from "./pages/Posts"
import About from "./pages/About"

import Defaultlayout from "./pages/Defaultlayout"

function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route element={<Defaultlayout />}>

            <Route path="/" element={<Home />} />
            <Route path="/Posts" element={<Posts />} />
            <Route path="/About" element={<About />} />

          </Route>

        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App
