import React, {Fragment, StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import App from './App';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Router>
      <Fragment >
          <Routes>
              <Route exact path='/' element={<App />} />
          </Routes>
      </Fragment >
  </Router>
);