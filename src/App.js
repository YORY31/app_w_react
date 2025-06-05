import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Menu from"./components/Menu";
import Inicio from"./pages/Inicio";
import Sumadora from "./pages/Sumadora";
import Traductor from "./pages/Traductor";
import TablaMultiplicar from "./pages/TablaMultiplicar";
import Experiencia from "./pages/Experiencia";


function App() {
  return(
    <Router>
      <Menu />
      <Routes>
        <Route path = "/" element ={<Inicio/>}></Route>
        <Route path = "/sumadora" element ={<Sumadora/>}></Route>
        <Route path = "/traductor" element ={<Traductor/>}></Route>
        <Route path = "/tabla" element ={<TablaMultiplicar/>}></Route>
        <Route path = "/Experiencia" element ={<Experiencia/>}></Route>
          
      </Routes>
      
      
    </Router>
  );
}
export default App;