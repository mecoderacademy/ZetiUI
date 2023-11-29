import React, { useState, ChangeEvent, useEffect } from 'react';
import { Form, FormControl, Button, Card, Col, Row, Container, ListGroup } from 'react-bootstrap';
import AutoComplete from './Components/Autocomplete';
import ViewInvoices from './Components/ViewInvoices';
import ViewSelectedVehicles from './Components/ViewSelectedVehicles';
import BillCalculationRequest from './Models/BillCalculationRequest';
import { Invoice } from './Models/Invoice';
import { Vehicle } from './Models/Vehicle';
import HttpService from './Services/HttpService';



const App: React.FC = () => {
  const [startInterval, setStartInterval] = useState<string>('');
  const [endInterval, setEndStartInterval] = useState<string>('');
  const [cost, setCost] = useState<string>('');
  const [vehicleData, setVehiclegData] = useState<Vehicle[]>([]);
  const [selectedItems, setSelectedItems] = useState<Vehicle[]>([]);
  const [invoiceItems, setInvoiceItems] = useState<Invoice[]>([]);
  const apiService = new HttpService('https://localhost:42898/');
  useEffect(() => {
     // Replace with your actual base URL
    const fetchDataFromApi = async () => {
      try {
        const data = await apiService.fetchData<Vehicle>('api/vehicles'); // Replace 'vehicles' with your actual API endpoint
        setVehiclegData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataFromApi();
  }, []);

  const handleSelectionChange = (selectedItems: Vehicle[]) => {
    setSelectedItems(selectedItems);
  };
  async function PostBuilingData(): Promise<void> {
    setSelectedItems([]);
    const billingData : BillCalculationRequest={
      LisencePlates : selectedItems.map(x=>x.licensePlate),
        startInterval: new Date(startInterval),
        endInterval: new Date(endInterval),
        cost: parseFloat(cost),
        uploadType:'json'
    }

    const data = await apiService.postData<Invoice>('api/billcalculation',billingData);
    console.log(data);
    setInvoiceItems(data);
  }
  return (
  
      <Container fluid className='d-flex align-items-center justify-content-center vh-100 text-center'>
         <Row className='mx-auto w-50'>
          <Row>
         
<AutoComplete searchData={vehicleData} onSelectionChange={handleSelectionChange}>
<Form>
        <Form.Group controlId="startInterval">
          <Form.Label>Start Interval</Form.Label>
          <Form.Control
            type="datetime-local"
            value={startInterval} // Use the startInterval state here
            onChange={(e)=>setStartInterval(e.target.value)} // Handle changes in the input
            
          />
        </Form.Group>

        <Form.Group controlId="endInterval">
          <Form.Label>End Interval</Form.Label>
          <Form.Control type="datetime-local"
            value={endInterval} // Use the startInterval state here
            onChange={(e)=>setEndStartInterval(e.target.value)} // Handle changes in the input
            />
        </Form.Group>

        <Form.Group controlId="cost">
          <Form.Label>Cost</Form.Label>
          <Form.Control type="number"  value={cost} // Use the startInterval state here
            onChange={(e)=>setCost(e.target.value)} className="mb-2" />
        </Form.Group>
        <Form.Group controlId="submit">
        <Button onClick={PostBuilingData} variant="primary" size="sm" title="Submit">
  Submit
</Button>
        </Form.Group>
      </Form>
      <Col>
  <ViewInvoices invoices={invoiceItems}/>
  </Col>
</AutoComplete>

<Row>
<ViewSelectedVehicles vehicles={selectedItems} />
</Row>
</Row>  


  </Row>
      </Container>
  );
};

export default App;
