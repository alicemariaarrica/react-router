import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Posts from "./pages/Posts"
import Chisiamo from "./pages/Chisiamo"
import PostsDetail from "./pages/PostsDetail"

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
            <Route path="/posts/:id" element={<PostsDetail />} />

          </Route>

        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App
