import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from "react-router-dom"

//pages
import Home from "./components/home.jsx";
import About from "./components/about.jsx";
import Faq from "./components/help/faq.jsx";
import Contact, { contactAction } from "./components/help/contact.jsx";
import NotFound from "./components/notFound.jsx";
import Careers, { careersLoaders } from "./components/careers.jsx";
import CareerDetails, { careerDetailsLoader } from "./components/careerDetails.jsx";
import CareerError from "./components/CareerError.jsx";


//layouts
import RootLayout from "./components/rootLayout.jsx";
import HelpLayout from "./components/helpLayout.jsx";
import CareersLayout from "./components/careersLayout.jsx";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/help" element={<HelpLayout />}>
          <Route path="faq" element={<Faq />}/>
          <Route path="contact" element={<Contact />} action={contactAction}/>
        </Route>

        <Route path="careers" element={<CareersLayout />} errorElement={<CareerError />}>
          <Route index element={<Careers />} loader={careersLoaders} />
          <Route path=":id" element={<CareerDetails />} loader={careerDetailsLoader}/>
        </Route>
        
        <Route path="*" element={<NotFound />} />
      </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>

  );
}

export default App
