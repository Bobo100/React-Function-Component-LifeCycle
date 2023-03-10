import React, { useEffect } from 'react';
import './css/App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Home } from './pages/Home';
import { NotFoundPage } from './pages/Error';
import Prism from "prismjs";
import "prismjs/components/prism-typescript";
import "prismjs/themes/prism-tomorrow.css";


function App() {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return (
    <div className="App" id='App'>
      <Router basename="/React-Function-Component-LifeCycle">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
