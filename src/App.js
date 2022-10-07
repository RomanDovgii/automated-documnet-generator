import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from './utils/const';
import Main from './pages/main';
import Select from './pages/select';
import Form from './pages/form';
import Document from './pages/document';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.MAIN}
          element={<Main/>}
        />
        <Route
          path={AppRoute.SELECT}
          element={<Select/>}
        />
        <Route
          path={AppRoute.FORM}
          element={<Form/>}
        />
        <Route
          path={AppRoute.DOCUMENT}
          element={<Document/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
