"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_bootstrap_1 = require("react-bootstrap");
var ViewInvoices = function (_a) {
    var invoices = _a.invoices;
    return (react_1.default.createElement(react_bootstrap_1.Col, null, invoices.map(function (invoice, key) { return (react_1.default.createElement(react_bootstrap_1.Card, { className: "mb-3", key: key },
        react_1.default.createElement(react_bootstrap_1.Card.Header, null,
            "Invoice #",
            invoice.InvoiceNumber),
        react_1.default.createElement(react_bootstrap_1.Card.Body, null,
            react_1.default.createElement(react_bootstrap_1.Card.Text, null,
                "Total Miles: ",
                invoice.TotalMiles),
            react_1.default.createElement(react_bootstrap_1.Card.Text, null,
                "Total Cost: ",
                invoice.TotalCost),
            react_1.default.createElement(react_bootstrap_1.Card.Text, null,
                "Invoice Date: ",
                invoice.InvoiceDate),
            react_1.default.createElement(react_bootstrap_1.Card.Text, null,
                "Reading Date From: ",
                invoice.ReadingDateFrom),
            react_1.default.createElement(react_bootstrap_1.Card.Text, null,
                "Reading Date To: ",
                invoice.ReadingDateTo)))); })));
};
exports.default = ViewInvoices;
