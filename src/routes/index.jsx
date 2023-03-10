import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

import StudentDataTable from "../pages/StudentDataTable";
import Result from "../pages/Results";

const Router = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={ <StudentDataTable /> } />
            <Route exact path="/result" element={ <Result /> } />

        </Routes>
    </BrowserRouter>
    )
}

export default Router;
