import React, { ReactNode } from "react";
import { useState, ChangeEvent, FC } from "react";
import { Col, Form, FormCheck, FormControl, ListGroup, Row } from "react-bootstrap";
import { Vehicle } from "../Models/Vehicle";


  interface AutoCompleteProps {
  searchData: Vehicle[];
  onSelectionChange: (selectedItems: Vehicle[]) => void;
  children?: ReactNode; 
}
  const AutoComplete: FC<AutoCompleteProps> = ({searchData,onSelectionChange,children}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Vehicle[]>([]);
  const [selectedItem, setSelectedItem] = useState<Vehicle |null>(null);
  const [selectedItems, setSelectedItems] = useState<Vehicle[]>([]);
  
    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
      const term = e.target.value.toLowerCase();
      setSearchTerm(term);
  
      const results = term === ''
      ? [] // Set to empty array if search term is empty
      : searchData.filter((vehicle) =>
        vehicle.vin.toLowerCase().includes(term) ||
        vehicle.licensePlate.toLowerCase().includes(term) ||
        vehicle.make.toLowerCase().includes(term) ||
        vehicle.model.toLowerCase().includes(term)
      );
      setSearchResults(results);
    };
 
    function handleItemClick(item: Vehicle): void {
      //setSelectedItem(item);
      setSearchResults([]);
      const updatedSelectedItems = [...selectedItems];
      const itemIndex = updatedSelectedItems.findIndex((selectedItem) => selectedItem.vin === item.vin);
  
      if (itemIndex === -1) {
        updatedSelectedItems.push(item);
      } else {
        updatedSelectedItems.splice(itemIndex, 1);
      }
  
      setSelectedItems(updatedSelectedItems);
      onSelectionChange(updatedSelectedItems);
      //setSearchTerm(item.make);
    }
    return (<Col className="mb-3" lg={8}>
 
        <Form className="col">
          
            <Row className='mb-1'>
              <FormControl
              onFocus={()=>setSearchTerm('')}
                type="text"
                placeholder="Search items..."
                value={searchTerm}
                onChange={handleSearch}
              />
            </Row>
        
        </Form>
        <Col>
  
              <ListGroup>
              {searchResults.map((item,index) => (
                <Row>
        <ListGroup.Item key={index} action variant="light">
        <FormCheck
                  type="checkbox"
                  id={`checkbox-${index}`}
                  label={`VIN: ${item.vin}`}
                  checked={selectedItems.some(selectedItem => selectedItem.vin === item.vin)}
                  onChange={() => handleItemClick(item)}
                />
        
        <p>License Plate: {item.licensePlate}</p>
        <p>Make: {item.make}</p>
        <p>Model: {item.model}</p></ListGroup.Item>
                </Row>
              ))}
      </ListGroup>
            
          
        </Col>
        {children}
        </Col>)
}
    export default AutoComplete