import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // for better assertions
import AutoComplete from './Autocomplete'; // Update the import path
import { Vehicle } from '../Models/Vehicle';
import '@testing-library/jest-dom'

// Mock vehicle data
const mockData:Vehicle[] = [
  { vin: 'ABC123', licensePlate: '123XYZ', make: 'Toyota', model: 'Camry',state:null },
  { vin: 'DEF456', licensePlate: '456ABC', make: 'Honda', model: 'Civic',state:null },
  // Add more mock data as needed
];

test('renders AutoComplete component with mock data', () => {
  // Mock function for item click
  const mockHandleItemClick = jest.fn();
  mockHandleItemClick.mockReturnValue(mockData[0]);

  render(
    <AutoComplete searchData={mockData} onSelectionChange={function (selectedItems: Vehicle[]): void {
      throw new Error('Function not implemented.');
    } }  />
  );

  // Input and list items should be present
  const inputElement = screen.getByPlaceholderText('Search items...');
  expect(inputElement).toBeInTheDocument();

  // Initial rendering should include all items
  const vinElement = screen.queryByText(/VIN: 173hvidvde/i);
    expect(vinElement).not.toBeInTheDocument();


  // Type in the input to filter results
  fireEvent.change(inputElement, { target: { value: 'Toyota' } });

  // Only matching items should be visible
  const toyotaVinElement = screen.getByText('VIN: ABC123');
  const hondaVinElement = screen.queryByText('VIN: DEF456'); // Should not be present
  expect(toyotaVinElement).toBeInTheDocument();
  expect(hondaVinElement).toBeNull();

  // Click on an item
  fireEvent.click(toyotaVinElement);

  const inputElementValue = screen.getByDisplayValue(/Toyota/i);
  // Check if handleItemClick was called with the correct item
  expect(inputElementValue).toBeInTheDocument();
});
test('mock api call', () => {



});