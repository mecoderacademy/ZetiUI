import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Invoice } from '../Models/Invoice';

interface ViewInvoiceProps {
  invoices: Invoice[];
}

const ViewInvoices: React.FC<ViewInvoiceProps> = ({ invoices }) => {
  return (
    <Col>
      {invoices.map((invoice, key) => (
        <Card className="mb-3" key={key}>
          <Card.Header>Invoice #{invoice.InvoiceNumber}</Card.Header>
          <Card.Body>
            <Card.Text>Total Miles: {invoice.TotalMiles}</Card.Text>
            <Card.Text>Total Cost: {invoice.TotalCost}</Card.Text>
            <Card.Text>Invoice Date: {invoice.InvoiceDate}</Card.Text>
            <Card.Text>Reading Date From: {invoice.ReadingDateFrom}</Card.Text>
            <Card.Text>Reading Date To: {invoice.ReadingDateTo}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Col>
  );
};

export default ViewInvoices;
