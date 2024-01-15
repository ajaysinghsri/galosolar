import Header from "./components/Header";
import { Route,Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
;
import Latestpost from "./pages/Latestpost";
import Famouspost from "./pages/Famouspost";
import Trandingpost from "./pages/Trandingpost";
import Videopost from "./pages/Videopost";

import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  return (
   <>
   <Header/>
   <section style={{height:"650px" }} >
    <Routes>
    <Route path="/" element={<About/>}/>
      <Route path="/latestpost" element={<Latestpost/>}/>
      <Route path="/famouspost" element={<Famouspost/>}/>
      <Route path="/trandingpost" element={<Trandingpost/>}/>
      <Route path="/videopost" element={<Videopost/>}/>
      
      <Route path="/aboutus" element={<About/>}/>
      
    </Routes>
   </section>
   <Footer/>
   </>
  );
}

export default App;
