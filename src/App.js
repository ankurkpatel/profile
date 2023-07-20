import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from './Home';
import {Resume} from './Resume';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile" element={<Resume />}/>
      </Routes>
    </BrowserRouter>
  );
}

//test