import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from "react-router-dom"

//pages
import Home from "./components/home.jsx";
import About from "./components/about.jsx";
import Faq from "./components/help/faq.jsx";
import Contact from "./components/help/contact.jsx";

//layouts
import RootLayout from "./components/rootLayout.jsx";
import HelpLayout from "./components/helpLayout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<HelpLayout />}>
          <Route path="faq" element={<Faq />}/>
          <Route path="contact" element={<Contact />}/>
        </Route>
      </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>

  );
}

export default App
