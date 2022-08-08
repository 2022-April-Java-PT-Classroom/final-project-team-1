import React from "react";
import { BrowserRouter } from 'react-router-dom';
import PortHeader from "../Portal/Port-Components/Port-Header";
import PortFooter from "../Portal/Port-Components/Port-Footer";
import PortRouter from "./Port-Components/Port-Router";

const Portal = () => {
    return (
        <div>
            <BrowserRouter>
            <PortHeader />
            <PortRouter />
            <PortFooter />
            </BrowserRouter>
        </div>
    );
}

export default Portal;