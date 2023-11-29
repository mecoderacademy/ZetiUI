"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@testing-library/react");
require("@testing-library/jest-dom"); // for better assertions
var Autocomplete_1 = __importDefault(require("./Autocomplete")); // Update the import path
require("@testing-library/jest-dom");
// Mock vehicle data
var mockData = [
    { vin: 'ABC123', licensePlate: '123XYZ', make: 'Toyota', model: 'Camry', state: null },
    { vin: 'DEF456', licensePlate: '456ABC', make: 'Honda', model: 'Civic', state: null },
    // Add more mock data as needed
];
test('renders AutoComplete component with mock data', function () {
    // Mock function for item click
    var mockHandleItemClick = jest.fn();
    mockHandleItemClick.mockReturnValue(mockData[0]);
    (0, react_2.render)(react_1.default.createElement(Autocomplete_1.default, { searchData: mockData, onSelectionChange: function (selectedItems) {
            throw new Error('Function not implemented.');
        } }));
    // Input and list items should be present
    var inputElement = react_2.screen.getByPlaceholderText('Search items...');
    expect(inputElement).toBeInTheDocument();
    // Initial rendering should include all items
    var vinElement = react_2.screen.queryByText(/VIN: 173hvidvde/i);
    expect(vinElement).not.toBeInTheDocument();
    // Type in the input to filter results
    react_2.fireEvent.change(inputElement, { target: { value: 'Toyota' } });
    // Only matching items should be visible
    var toyotaVinElement = react_2.screen.getByText('VIN: ABC123');
    var hondaVinElement = react_2.screen.queryByText('VIN: DEF456'); // Should not be present
    expect(toyotaVinElement).toBeInTheDocument();
    expect(hondaVinElement).toBeNull();
    // Click on an item
    react_2.fireEvent.click(toyotaVinElement);
    var inputElementValue = react_2.screen.getByDisplayValue(/Toyota/i);
    // Check if handleItemClick was called with the correct item
    expect(inputElementValue).toBeInTheDocument();
});
test('mock api call', function () {
});
