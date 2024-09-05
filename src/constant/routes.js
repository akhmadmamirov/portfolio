import Homepage from "../pages/homepage";
import About from "../pages/about";
import Projects from "../pages/projects";
import Experiences from "../pages/experience";
import Contact from "../pages/contact";
import Notfound from "../pages/404";

const routes = [
  {   
    path: "/", 
    name: "Home", 
    Component: Homepage 
  },
  { 
    path: "/about", 
    name: "About", 
    Component: About 
  },
  { 
    path: "/projects", 
    name: "Projects", 
    Component: Projects 
  },
  { 
    path: "/experience", 
    name: "Experience", 
    Component: Experiences 
  },
  { 
    path: "/contact", 
    name: "Contact", 
    Component: Contact 
  },
  { 
    path: "*", 
    name: "Not Found", 
    Component: Notfound 
  },
];

export default routes;