import "./App.css";
import { Routes, Route } from "react-router-dom";

import MyReads from './MyReads';
import SearchLibrary from './SearchLibrary';
import { ROUTES } from './contants';

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path={ROUTES.HOME} exact element={<MyReads />} />
        <Route path={ROUTES.SEARCH} exact element={<SearchLibrary />} />
      </Routes>
    </div>
  );
}

export default App;
