import React from "react";
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import Main from "./components/pages/main/Main";
import About from "./components/pages/about/About";
import './css/common.css';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Main />} />
        <Route path={'/about'} element={<About />} />
      </Routes>
    </HashRouter>
  )
};

export default App;