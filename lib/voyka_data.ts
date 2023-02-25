import {VoykaModel, VoykaRawModel} from './voyka_model'

export class VoykaData {
  //...
  private readonly VRM: string
  private readonly series: string
  private readonly model: string
  private readonly year: string
  private readonly fuel: string
  private readonly make: { DVLA: string, SMMT: string }
  private readonly marque: { name: string, code: string }
  private readonly engine: { capacity: string, number: string }
  private readonly BHP: number
  private readonly torque: number

  constructor(json: VoykaRawModel) {
    //...
    const meta = json.DataItems
    //...
    this.VRM = meta.VehicleRegistration.Vrm
    this.model = meta.ClassificationDetails.Dvla.Model
    this.year = meta.VehicleRegistration.YearOfManufacture
    this.series = meta.SmmtDetails.Series
    this.fuel = meta.VehicleRegistration.FuelType
    this.marque = {
      code: meta.SmmtDetails.MarqueCode,
      name: meta.SmmtDetails.Marque
    }
    this.make = {
      DVLA: meta.ClassificationDetails.Dvla.Make,
      SMMT: meta.ClassificationDetails.Smmt.Make
    }
    this.engine = {
      capacity: meta.VehicleRegistration.EngineCapacity,
      number: meta.VehicleRegistration.EngineNumber
    }
    this.BHP = meta.TechnicalDetails.Performance.Power.Bhp
    this.torque = meta.TechnicalDetails.Performance.Torque.Nm
  }

  public toJson(): VoykaModel {
    //...
    return {
      data: {
        BHP: this.BHP,
        VRM: this.VRM,
        engine: this.engine,
        fuel: this.fuel,
        make: this.make,
        marque: this.marque,
        model: this.model,
        series: this.series,
        torque: this.torque,
        year: this.year,
      }
    }
  }
}
