import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Posts from "./pages/Posts"
import Chisiamo from "./pages/Chisiamo"
import PostDetail from "./pages/PostDetail"

import Defaultlayout from "./pages/Defaultlayout"

function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route element={<Defaultlayout />}>

            <Route path="/" element={<Home />} />
            <Route path="/Posts" element={<Posts />} />
            <Route path="/Chisiamo" element={<Chisiamo />} />

          </Route>

        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App
