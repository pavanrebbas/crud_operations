import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import Home from "./src/components/Home";
import Create from "./src/components/Cretate";
import Update from "./src/components/update";
import Read from "./src/components/read";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



////////// In 2 Ways we write the routings//////////////


/////////////// THIS IS ONE METHOD/////////////////////////
const AppLayout = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/create" element={<Create />}></Route>
                <Route path="/update/:id" element={<Update />}></Route>
                <Route path="/read/:id" element={<Read />}></Route>
            </Routes>
        </BrowserRouter>
    )
}


//////////////////// THIS IS SECOND METHOD //////////////////////////////
/* const AppLayout = () => {

    return (
        <Fragment>
            <div>
                <Outlet></Outlet>
            </div>
        </Fragment>
    )
}

const appRouter = createBrowserRouter([

    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/create",
                element: <Create />
            },
            {
                path: "/update",
                element: <Update />
            },
            {
                path: "/read",
                element: <Read />
            }
        ]
    }
]) */



const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)


