import {VoykaModel} from "./models/voyka";

class Voyka {
  //...
  private readonly key: string

  constructor(key: string) {
    //...
    this.key = key
  }

  async getVehicleData(VRM: string): Promise<VoykaModel> {
    //...
    const key = this.key
    const req = "VehicleData"
    const opt = {method: 'GET'}
    const auth = "?auth_apikey=" + key
    const host = "https://uk1.ukvehicledata.co.uk/api/datapackage/"
    const queries = "&v=2" + "&api_nullitems=1" + "&key_vrm=" + VRM
    //...
    return fetch(host + req + auth + queries, opt)
      .then(response => response.json() as object)
      .then(value => voykaOf(value));
  }
}

function voykaOf(model: object): VoykaModel {
  //...
  return model['Response']['DataItems'] as VoykaModel
}


//...Run
const voyka = new Voyka('44c65e9e-63b5-45dc-bd33-1b3d0a128e31')
const vehicleData = voyka.getVehicleData('KM14AKK')
vehicleData.then(value => console.log(value.toJson()))
