import './App.css';
import Home from "./pages/Home/Home";
import {Routes, Route, useNavigate, useParams} from "react-router-dom";


import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";

function App() {

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/about/contacts" element={<Contacts/>}/>
            </Routes>
        </div>
    );
}

export default App;
