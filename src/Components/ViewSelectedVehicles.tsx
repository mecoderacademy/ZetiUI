import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Invoice } from '../Models/Invoice';
import { Vehicle } from '../Models/Vehicle';

interface ViewVehicleProps {
  vehicles: Vehicle[];
}

const ViewSelectedVehicles: React.FC<ViewVehicleProps> = ({ vehicles }) => {
  return (
    <Col>
      {vehicles.map((vehicle, key) => (
        <Card className="mb-3" key={key}>
          <Card.Header>Invoice #{vehicle.make}</Card.Header>
          <Card.Body>
            <Card.Text>license Plate: {vehicle.licensePlate}</Card.Text>
            <Card.Text>Model: {vehicle.model}</Card.Text>
            <Card.Text>Vin: {vehicle.vin}</Card.Text>
           
          </Card.Body>
        </Card>
      ))}
    </Col>
  );
};

export default ViewSelectedVehicles;
