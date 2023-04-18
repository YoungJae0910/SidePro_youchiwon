import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./component/Main/Main";
import Navbar from "./component/Navbar/Navbar";

export default function Router() {
  return (
    <Suspense>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
