"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_bootstrap_1 = require("react-bootstrap");
var Autocomplete_1 = __importDefault(require("./Components/Autocomplete"));
var ViewInvoices_1 = __importDefault(require("./Components/ViewInvoices"));
var ViewSelectedVehicles_1 = __importDefault(require("./Components/ViewSelectedVehicles"));
var HttpService_1 = __importDefault(require("./Services/HttpService"));
var App = function () {
    var _a = (0, react_1.useState)(''), startInterval = _a[0], setStartInterval = _a[1];
    var _b = (0, react_1.useState)(''), endInterval = _b[0], setEndStartInterval = _b[1];
    var _c = (0, react_1.useState)(''), cost = _c[0], setCost = _c[1];
    var _d = (0, react_1.useState)([]), vehicleData = _d[0], setVehiclegData = _d[1];
    var _e = (0, react_1.useState)([]), selectedItems = _e[0], setSelectedItems = _e[1];
    var _f = (0, react_1.useState)([]), invoiceItems = _f[0], setInvoiceItems = _f[1];
    var apiService = new HttpService_1.default('https://localhost:42898/');
    (0, react_1.useEffect)(function () {
        // Replace with your actual base URL
        var fetchDataFromApi = function () { return __awaiter(void 0, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, apiService.fetchData('api/vehicles')];
                    case 1:
                        data = _a.sent();
                        setVehiclegData(data);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error('Error fetching data:', error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        fetchDataFromApi();
    }, []);
    var handleSelectionChange = function (selectedItems) {
        setSelectedItems(selectedItems);
    };
    function PostBuilingData() {
        return __awaiter(this, void 0, void 0, function () {
            var billingData, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setSelectedItems([]);
                        billingData = {
                            LisencePlates: selectedItems.map(function (x) { return x.licensePlate; }),
                            startInterval: new Date(startInterval),
                            endInterval: new Date(endInterval),
                            cost: parseFloat(cost),
                            uploadType: 'json'
                        };
                        return [4 /*yield*/, apiService.postData('api/billcalculation', billingData)];
                    case 1:
                        data = _a.sent();
                        console.log(data);
                        setInvoiceItems(data);
                        return [2 /*return*/];
                }
            });
        });
    }
    return (react_1.default.createElement(react_bootstrap_1.Container, { fluid: true, className: 'd-flex align-items-center justify-content-center vh-100 text-center' },
        react_1.default.createElement(react_bootstrap_1.Row, { className: 'mx-auto w-50' },
            react_1.default.createElement(react_bootstrap_1.Row, null,
                react_1.default.createElement(Autocomplete_1.default, { searchData: vehicleData, onSelectionChange: handleSelectionChange },
                    react_1.default.createElement(react_bootstrap_1.Form, null,
                        react_1.default.createElement(react_bootstrap_1.Form.Group, { controlId: "startInterval" },
                            react_1.default.createElement(react_bootstrap_1.Form.Label, null, "Start Interval"),
                            react_1.default.createElement(react_bootstrap_1.Form.Control, { type: "datetime-local", value: startInterval, onChange: function (e) { return setStartInterval(e.target.value); } })),
                        react_1.default.createElement(react_bootstrap_1.Form.Group, { controlId: "endInterval" },
                            react_1.default.createElement(react_bootstrap_1.Form.Label, null, "End Interval"),
                            react_1.default.createElement(react_bootstrap_1.Form.Control, { type: "datetime-local", value: endInterval, onChange: function (e) { return setEndStartInterval(e.target.value); } })),
                        react_1.default.createElement(react_bootstrap_1.Form.Group, { controlId: "cost" },
                            react_1.default.createElement(react_bootstrap_1.Form.Label, null, "Cost"),
                            react_1.default.createElement(react_bootstrap_1.Form.Control, { type: "number", value: cost, onChange: function (e) { return setCost(e.target.value); }, className: "mb-2" })),
                        react_1.default.createElement(react_bootstrap_1.Form.Group, { controlId: "submit" },
                            react_1.default.createElement(react_bootstrap_1.Button, { onClick: PostBuilingData, variant: "primary", size: "sm", title: "Submit" }, "Submit"))),
                    react_1.default.createElement(react_bootstrap_1.Col, null,
                        react_1.default.createElement(ViewInvoices_1.default, { invoices: invoiceItems }))),
                react_1.default.createElement(react_bootstrap_1.Row, null,
                    react_1.default.createElement(ViewSelectedVehicles_1.default, { vehicles: selectedItems }))))));
};
exports.default = App;
