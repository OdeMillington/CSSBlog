import HomePage from "./pages/HomePage"
import ProfilePage from "./pages/ProfilePage"
import NewPostPage from "./pages/NewPostPage"

import {BrowserRouter, Route, Routes} from "react-router-dom"

import './App.css'

function App() {

  return (
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/profile" element={<ProfilePage/>} />
          <Route path="/post/new" element={<NewPostPage/>} />
        </Routes>

      </BrowserRouter>
  )
}

export default App
