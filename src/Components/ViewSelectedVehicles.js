"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_bootstrap_1 = require("react-bootstrap");
var ViewSelectedVehicles = function (_a) {
    var vehicles = _a.vehicles;
    return (react_1.default.createElement(react_bootstrap_1.Col, null, vehicles.map(function (vehicle, key) { return (react_1.default.createElement(react_bootstrap_1.Card, { className: "mb-3", key: key },
        react_1.default.createElement(react_bootstrap_1.Card.Header, null,
            "Invoice #",
            vehicle.make),
        react_1.default.createElement(react_bootstrap_1.Card.Body, null,
            react_1.default.createElement(react_bootstrap_1.Card.Text, null,
                "license Plate: ",
                vehicle.licensePlate),
            react_1.default.createElement(react_bootstrap_1.Card.Text, null,
                "Model: ",
                vehicle.model),
            react_1.default.createElement(react_bootstrap_1.Card.Text, null,
                "Vin: ",
                vehicle.vin)))); })));
};
exports.default = ViewSelectedVehicles;
