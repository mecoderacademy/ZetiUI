export interface Vehicle {
    vin: string;
    licensePlate: string;
    make: string;
    model: string;
    state: {
      odometerInMeters: number;
      speedInMph: number;
      asAt: string;
    }|null;
  }