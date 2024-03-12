import {BrowserRouter, Routes, Route} from "react-router-dom";
import MatkulList from "./components/MatkulList";
import AddMatkul from "./components/AddMatkul";
import EditMatkul from "./components/EditMatkul";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MatkulList/>}/>
        <Route path="add" element={<AddMatkul/>}/>
        <Route path="edit/:id" element={<EditMatkul/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
