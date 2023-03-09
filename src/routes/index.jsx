import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

import StudentDataTable from "../pages/StudentDataTable";

const Router = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={ <StudentDataTable /> } />
        </Routes>
    </BrowserRouter>
    )
}

export default Router;
