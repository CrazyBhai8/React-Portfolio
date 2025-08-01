import { BrowserRouter, Route, Routes } from "react-router-dom"
import  Home  from "./pages/Home"
import NotFound from "./pages/NotFound"
import { Toaster } from "./components/ui/toaster"
import { Analytics } from "@vercel/analytics/react"
import Testing from "./pages/Testing"



function App() {
  
  return (
    <>
        <Toaster />
        <Analytics />
       <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/testing" element={<Testing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
