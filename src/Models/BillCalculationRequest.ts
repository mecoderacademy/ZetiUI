interface BillCalculationRequest {
  startInterval: Date;
  endInterval: Date;
  cost: number;
  LisencePlates: string[];
  uploadType: string;
}

export default BillCalculationRequest;