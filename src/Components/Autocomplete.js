"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var AutoComplete = function (_a) {
    var searchData = _a.searchData, onSelectionChange = _a.onSelectionChange, children = _a.children;
    var _b = (0, react_2.useState)(''), searchTerm = _b[0], setSearchTerm = _b[1];
    var _c = (0, react_2.useState)([]), searchResults = _c[0], setSearchResults = _c[1];
    var _d = (0, react_2.useState)(null), selectedItem = _d[0], setSelectedItem = _d[1];
    var _e = (0, react_2.useState)([]), selectedItems = _e[0], setSelectedItems = _e[1];
    var handleSearch = function (e) {
        var term = e.target.value.toLowerCase();
        setSearchTerm(term);
        var results = term === ''
            ? [] // Set to empty array if search term is empty
            : searchData.filter(function (vehicle) {
                return vehicle.vin.toLowerCase().includes(term) ||
                    vehicle.licensePlate.toLowerCase().includes(term) ||
                    vehicle.make.toLowerCase().includes(term) ||
                    vehicle.model.toLowerCase().includes(term);
            });
        setSearchResults(results);
    };
    function handleItemClick(item) {
        //setSelectedItem(item);
        setSearchResults([]);
        var updatedSelectedItems = __spreadArray([], selectedItems, true);
        var itemIndex = updatedSelectedItems.findIndex(function (selectedItem) { return selectedItem.vin === item.vin; });
        if (itemIndex === -1) {
            updatedSelectedItems.push(item);
        }
        else {
            updatedSelectedItems.splice(itemIndex, 1);
        }
        setSelectedItems(updatedSelectedItems);
        onSelectionChange(updatedSelectedItems);
        //setSearchTerm(item.make);
    }
    return (react_1.default.createElement(react_bootstrap_1.Col, { className: "mb-3", lg: 8 },
        react_1.default.createElement(react_bootstrap_1.Form, { className: "col" },
            react_1.default.createElement(react_bootstrap_1.Row, { className: 'mb-1' },
                react_1.default.createElement(react_bootstrap_1.FormControl, { onFocus: function () { return setSearchTerm(''); }, type: "text", placeholder: "Search items...", value: searchTerm, onChange: handleSearch }))),
        react_1.default.createElement(react_bootstrap_1.Col, null,
            react_1.default.createElement(react_bootstrap_1.ListGroup, null, searchResults.map(function (item, index) { return (react_1.default.createElement(react_bootstrap_1.Row, null,
                react_1.default.createElement(react_bootstrap_1.ListGroup.Item, { key: index, action: true, variant: "light" },
                    react_1.default.createElement(react_bootstrap_1.FormCheck, { type: "checkbox", id: "checkbox-".concat(index), label: "VIN: ".concat(item.vin), checked: selectedItems.some(function (selectedItem) { return selectedItem.vin === item.vin; }), onChange: function () { return handleItemClick(item); } }),
                    react_1.default.createElement("p", null,
                        "License Plate: ",
                        item.licensePlate),
                    react_1.default.createElement("p", null,
                        "Make: ",
                        item.make),
                    react_1.default.createElement("p", null,
                        "Model: ",
                        item.model)))); }))),
        children));
};
exports.default = AutoComplete;
