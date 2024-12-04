import { createBrowserRouter } from "react-router";
import App from "../App";
import Library from "./library.js";



export const router = createBrowserRouter([
    {path: '/', element: <App />},
    {path: '/library', element: <Library />},

]);