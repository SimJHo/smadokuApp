import React, { useState } from 'react';
import Main from './src/pages/main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './src/components/Layout';

const AppInner = (props) => {
  return (
    <BrowserRouter basename={'/'}>
      <Routes>
        <Route element={<Layout />}>
          <Route path={'/home'} element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppInner;
