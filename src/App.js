import { Routes , Route} from "react-router-dom";

import Home from "./routes/home/home.compnent";
import Navigation from "./routes/navigation/navigation.component";
import Singin from "./routes/sing-in/sing-in.component";



const App = () =>{

  return(
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='sign-in' element={<Singin/>}/>
      </Route>
    </Routes>
  )
}

export default App;
