"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const react_1 = __importDefault(require("react"));
const Home_1 = require("./pages/Home/Home");
const Psychologists_1 = require("./pages/Psychologists/Psychologists");
const Favorites_1 = require("./pages/Favorites/Favorites");
const react_router_dom_1 = require("react-router-dom");
const App = () => {
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(react_router_dom_1.Route, { index: true, element: react_1.default.createElement(Home_1.Home, null) }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/phycologist", element: react_1.default.createElement(Psychologists_1.Psychologists, null) }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "favorite", element: react_1.default.createElement(Favorites_1.Favorite, null) }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "*", element: react_1.default.createElement(react_router_dom_1.Navigate, { to: "/" }) })));
};
exports.App = App;
