import Navbar from "./components/layout/navigation/navbar";
import Course from "./components/course/Course";  
import Name from "./components/Useeffect";
import Name1 from "./components/userref";
import CrudTable from "./components/course/CrudApp";
import Name2 from "./components/Usememo";
import Game from "./components/Usereducer";
import Name3 from "./components/Api";
import Name4 from "./components/Apidoc";

function App(){
  return(
    <div className="App">
      <Navbar value= "Mycourses" />
      <Course />
      <Name />
      <Name1 /> 
      <CrudTable />
      <Name2 />
      <Game/>
      <Name3 />
      <Name4 />
    </div>
  )
}
export default App;