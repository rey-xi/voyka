//...
export type VoykaModel = {
  data: {
    BHP: number,
    VRM: string,
    model: string,
    year: string,
    fuel: string,
    series: string,
    torque: number,
    make: { DVLA: string, SMMT: string },
    marque: { name: string, code: string },
    engine: { capacity: string, number: string },
  }
}

export type VoykaRawModel = {
  DataItems: {
    ClassificationDetails: {
      Smmt: { Make: string },
      Dvla: { Make: string, Model: string },
    },
    VehicleStatus: {},
    VehicleHistory: {},
    VehicleRegistration: {
      Vrm: string,
      YearOfManufacture: string,
      FuelType: string,
      EngineNumber: string,
      EngineCapacity: string,
    },
    TechnicalDetails: {
      Performance: {
        Power: { Bhp: number }
        Torque: { Nm: number }
      }
    },
    SmmtDetails: {
      Marque: string,
      MarqueCode: string,
      Series: string
    },
  }
}