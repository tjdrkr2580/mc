import React, { FunctionComponent } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

const App: FunctionComponent = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/:id" element={<Detail />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
