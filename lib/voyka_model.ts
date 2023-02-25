//...
export type VoykaModel = {
  DataItems: {
    ClassificationDetails: {
      Dvla: {
        // Vehicle make as defined by DVLA.
        Make: string
        // Vehicle model as defined by DVLA.
        Model: string
      }
      Smmt: {
        // Vehicle make as defined by SMMT.
        Make: string
        Mvris: {
          // MVRIS make code.
          MakeCode: string
          // MVRIS model code.
          ModelCode: string
        }
        // Vehicle range as defined by SMMT.
        Range: string
        // Vehicle trim as defined by SMMT.
        Trim: string
      }
      Ukvd: {
        // Indicates whether this is an electric vehicle.
        IsElectricVehicle: boolean
        VrmFormat: {
          // Set to true if the VRM format matches one of the
          // formats used for general registrations in Great
          // Britain.
          IsGbGeneralFormat: boolean
          // Set to true if the VRM format matches one of the
          // formats used for general registrations in Northern
          // Ireland.
          IsNiGeneralFormat: boolean
        }
      }
    }
    SmmtDetails: {
      // The style of the vehicle's body.  E.g. 'Estate',
      // 'MPV', 'Saloon', etc.
      BodyStyle: string
      // Refers to HGVs only. Describes if any cabin is
      // available to sleep in.
      CabType: string
      // The country the vehicle originated from.
      CountryOfOrigin: string
      // SMMT data version number.
      DataVersionNumber: number
      // Identifies the number of wheels the vehicle has and how
      // many of them are driving the vehicle.  E.g. '4x2' or
      // '4x4'.
      DriveType: string
      // The exact engine cubic capacity in cubic centimetres e.g.
      // '1998' (whereas NominalEngineCapacity cc may be given as
      // '2.0L').
      EngineCapacity: string
      // Type of fuel or power source used. E.g. 'Petrol'.
      FuelType: string
      // SMMT 2 digit market sector of the model variant: E.g. 'AA'
      // = 'CAR (EXC. OFF ROAD)' & 'DC' = 'LCVs ALL 2601 - 3500 KGS'.
      MarketSectorCode: string
      // The 'badge' on the vehicle.  E.g. 'Ford', 'Vauxhall', etc.
      Marque: string
      // Two-digit code that identifies the marque of the vehicle.
      MarqueCode: string
      // 2 or 3-digit code that identifies the model of the vehicle.
      ModelCode: string
      // Vehicle model and trim as detailed by the manufacturer.
      ModelVariant: string
      // The approximate engine  capacity in cubic centimetres e.g.
      // 2.0L (whereas EngineCapacity is the exact engine capacity.
      NominalEngineCapacity: number
      // The number of doors on a passenger car.
      NumberOfDoors: number
      // The number of gears (forward driving gear ratios) in the
      // vehicle transmission.  E.g. '6'.
      NumberOfGears: number
      // The collective name for a family of model variants.  E.g.
      // 'MONDEO', 'FOCUS', 'ASTRA'.
      Range: string
      // The factory code or the manufacturer's internal code which
      // distinguishes the evolution of the model from the previous
      // version. Series enables a vehicle within a model range to
      // be distinguished from other models in the same model range.
      // The differences do not qualify the vehicle to be described
      // as a new Range because the modifications only amount to a
      // 'face lift'.
      Series: string
      // Identifies the model variant system setup date of the vehicle.
      SysSetupDate: string
      // Identifies the model variant termination date of the vehicle.
      TerminateDate: string
      // A description of the Transmission Type.  E.g. 'Automatic',
      // 'CVT', 'Manual'.
      Transmission: string
      // Identifies the model variant visibility date of the vehicle.
      VisibilityDate: string
    }
    TechnicalDetails: {
      Consumption: {
        Combined: {
          // Fuel efficiency in litres per 100km for the 'combined'
          // engine cycle as stipulated in Directive 1999/100/EC. The
          // combined figure presented is for the urban and the extra
          // -urban cycle together. It is therefore an average of the
          // two other parts of the fuel consumption test, Urban and
          // Extra-urban cycles, weighted by the distance covered in
          // each part.
          Lkm: number
          // Fuel efficiency in miles per gallon for the 'combined'
          // engine cycle as stipulated in Directive 1999/100/EC. The
          // combined figure presented is for the urban and the extra
          // -urban cycle together. It is therefore an average of the
          // two other parts of the fuel consumption test, Urban and
          // Extra-urban cycles, weighted by the distance covered in
          // each part.
          Mpg: number
        }
        ExtraUrban: {
          // Fuel efficiency in litres per 100km for the 'extra urban'
          // engine cycle as stipulated in Directive 1999/100/EC. The
          // extra-urban cycle is conducted immediately following the
          // urban cycle and consists roughly half steady-speed driving
          // and the remainder accelerations, decelerations and some
          // idling. Maximum speed is 75mph (120 km/h), average speed
          // is 39mph (63 km/h) and the distance covered is 4.3 miles
          // (7 km).
          Lkm: number
          // Fuel efficiency in miles per gallon for the 'extra urban'
          // engine cycle as stipulated in Directive 1999/100/EC. The
          // extra-urban cycle is conducted immediately following the
          // urban cycle and consists roughly half steady-speed driving
          // and the remainder accelerations, decelerations and some
          // idling. Maximum speed is 75mph (120 km/h), average speed
          // is 39mph (63 km/h) and the distance covered is 4.3 miles
          // (7 km).
          Mpg: number
        }
        UrbanCold: {
          // Fuel efficiency in litres per 100km for the 'urban cold'
          // engine cycle as stipulated in Directive 1999/100/EC. The
          // urban test cycle is carried out in a laboratory at an
          // ambient temperature of 20 degrees Celsius to 30 degrees
          // Celsius on a rolling road from a cold start, i.e. the
          // engine has not run for several hours. The cycle consists
          // of a series of accelerations, steady speeds, decelerations
          // and idling. Maximum speed is 31mph (50 km/h), average speed
          // 12 mph (19 km/h) and the distance covered is 2.5 miles
          // (4 km).
          Lkm: number
          // Fuel efficiency in miles per gallon for the 'urban cold'
          // engine cycle as stipulated in Directive 1999/100/EC. The
          // urban test cycle is carried out in a laboratory at an
          // ambient temperature of 20 degrees Celsius to 30 degrees
          // Celsius on a rolling road from a cold start, i.e. the
          // engine has not run for several hours. The cycle consists
          // of a series of accelerations, steady speeds, decelerations
          // and idling. Maximum speed is 31mph (50 km/h), average speed
          // 12 mph (19 km/h) and the distance covered is 2.5 miles
          // (4 km).
          Mpg: number
        }
      }
      Dimensions: {
        // Additional Variant Description field for commercial vehicles
        // to allow relative roof heights and body shape versions of
        // same variant.
        BodyShape: string
        // The distance in millimetres between a vertical line at the
        // front bumper of the vehicle to a similar line at the most
        // extreme point at the rear of the vehicle.
        CarLength: number
        // Version number for this data.
        DataVersionNumber: number
        // Capacity of vehicle fuel tank in litres.
        FuelTankCapacity: number
        // Standard abbreviation: GCW. The total maximum weight of an
        // articulated vehicle as driven, i.e. with semi-trailer,
        // payload, driver and all fluids.
        GrossCombinedWeight: number
        // Standard abbreviation: GTW. The total maximum weight of a
        // rigid vehicle together with its loaded draw-bar trailer.
        // (NOTE: Sometimes manufacturers use the term GCW for both
        // rigid and articulated vehicles).
        GrossTrainWeight: number
        // Standard abbreviation: GVW. The total maximum weight of a
        // rigid vehicle as driven, i.e. with body, payload, driver
        // and all fluids.
        GrossVehicleWeight: number
        // The distance in millimetres from a horizontal line touching
        // the highest point of the vehicle roof to the point of contact
        // with the road surface.
        Height: number
        // The weight of the complete vehicle and all equipment without
        // payload or driver.
        KerbWeight: number
        // Measured in millimetres at floor level from behind the driver's
        // seat to the end of floor space.
        LoadLength: number
        // Total number of Axles.
        NumberOfAxles: number
        // Number of doors the vehicle has.
        NumberOfDoors: number
        // Total number of seats to include driver as specified on the
        // Certificate of Conformity.
        NumberOfSeats: number
        // The cubic capacity of the load space for the vehicle measured
        // in cubic metres. (This value is entered for factory built
        // panel vans. For other body types and chassis cabs, the
        // equivalent for the panel van version in the range may be
        // entered).
        PayloadVolume: number
        // The maximum weight of goods that can be carried on a specific
        // vehicle, not to exceed limits set by the Construction & Use
        // regulations.
        PayloadWeight: number
        // Descriptive field that indicates if the vehicle has a
        // permanent or semi-permanent pivoting joint (Artic) or not
        // (Rigid).
        RigidArtic: string
        // Standard abbreviation: ULW. The total weight of an unladen
        // vehicle with body, less driver, ready for operation on the
        // road.
        UnladenWeight: number
        // The distance in Millimeters between the front and rear axles.
        WheelBase: number
        // The distance in Millimetres between two vertical lines touching
        // the opposite sides of the vehicle excluding the Wing Mirrors.
        Width: number
      }
      General: {
        // Version number for this data.
        DataVersionNumber: number
        // Driver side position within vehicle.
        DriverPosition: string
        // Location of powered axle/s.
        DrivingAxle: string
        ElectricVehicleBattery: {
          // Capacity of Electric Vehicle Battery used.
          Capacity: string
          // Type of charge port used to charge the Electric Vehicle
          // Battery.
          ChargePort: string
          // Time required to charge Electric Vehicle Battery.
          ChargeTime: string
          // Type of Electric Vehicle Battery used.
          Type: string
        }
        Engine: {
          // The method by which the engine breathes. E.g.
          // 'NATURALLY ASPIRATED', 'SUPERCHARGER', 'TURBO'.
          Aspiration: string
          // Internal Diameter of the Engine Cylinder in (mm).
          Bore: string
          // Physical Arrangement of the cylinders â€“ 'VEE' (The
          // cylinders and pistons are aligned, in two separate
          // planes or 'banks', so that they appear to be in a 'V'
          // when viewed along the axis of the crankshaft) , 'INLINE'
          // (Cylinders arranged in a single row side by side and
          // parallel to one another)
          CylinderArrangement: string
          // Manufacturer specific engine description.
          Description: string
          // Fuel catalyst.
          FuelCatalyst: string
          // Method of fuel delivery used.
          FuelDelivery: string
          // Summary description of fuel system.
          FuelSystem: string
          // Location of the engine â€“ FRONT - A front-mounted engine
          // describes the placement of an automobile engine in front of
          // the vehicle passenger compartment. MIDDLE - A mid - engine
          // layout describes the placement of an automobile engine
          // between the rear and front axles. REAR - A rear - engine
          // design layout places the engine at the rear of the vehicle.
          // The center of gravity of the engine itself is past the rear
          // axle.
          Location: string
          // Brand name of the engine manufacturer e.g. 'Peugeot',
          // 'Honda'.
          Make: string
          // The number of cylinders in the engine.
          NumberOfCylinders: number
          // 'Y' flag indicates principal fuel in multi fuel vehicle.
          PrimaryFuelFlag: string
          // Distance between Top dead centre and Bottom dead centre of
          // piston travel (mm).
          Stroke: number
          // The abbreviation of valve actuation mechanism type - 'SOHC'
          // (Single OverHead Camshaft), 'DOHC' (Double OverHead Camshaft)
          // or 'PUSHROD' (valves actuated by rocker arms actuated by
          // 'pushrods') where known.
          ValveGear: string
          // The number of valves per cylinder (four-stroke engines have
          // at least 2 poppet valves per cylinder).
          ValvesPerCylinder: number
        }
        // The highest European engine standard which the engine meets
        // (e.g. '3','4','5'). Recorded on V5C document.
        EuroStatus: string
        // Indicates whether the vehicle is part of a limited edition.
        IsLimitedEdition: boolean
        // Descriptive field to indicate Hybrid or non-hybrid power-trains
        // (Normal).
        PowerDelivery: string
        // Vehicle series description.
        SeriesDescription: string
        // European Vehicle Type - e.g  Passenger Car = 'M1',
        TypeApprovalCategory: string
      }
      Performance: {
        Acceleration: {
          // The time, in seconds, taken by the vehicle to accelerate from
          // 0 to 100 Kilometres per hour.
          Kph: number
          // The time, in seconds, taken by the vehicle to accelerate from
          // 0 to 60 Miles per Hour.
          Mph: number
          // The time, in seconds, taken by the vehicle to accelerate from
          // 0 to 100 Kilometres per hour.
          ZeroTo100Kph: number
          // The time, in seconds, taken by the vehicle to accelerate from
          // 0 to 60 Miles per Hour.
          ZeroTo60Mph: number
        }
        // Exhaust emission of carbon dioxide, measured as part of the type
        // approval process, expressed in grams per kilometre.
        Co2: number
        // Version Number for this data.
        DataVersionNumber: number
        MaxSpeed: {
          // Maximum speed of the model variant as per the brochure in
          // kilometres per hour.
          Kph: number
          // Maximum speed of the model variant as per the brochure in
          // miles per hour.
          Mph: number
        }
        // Vehicle noise emissions level.
        NoiseLevel: number
        // Vehicle particulate emissions.
        Particles: number
        Power: {
          // Maximum power expressed in brake horsepower.
          Bhp: number
          // Maximum power expressed in kilowatts.
          Kw: number
          // Engine speed in revolutions per minute at which the maximum
          // power occurs.
          Rpm: number
        }
        Torque: {
          // Maximum torque of the engine as reported by the manufacturer
          // in foot pounds.
          FtLb: number
          // Maximum torque of the engine as reported by the manufacturer
          // in Newton Metres
          Nm: number
          // Engine speed in revolutions per minute at which the maximum
          // torque occurs.
          Rpm: number
        }
      }
      Safety: {
        EuroNcap: {
          Adult: number
          Child: number
          Pedestrian: number
        }
      }
    }
    UkvdEnhancedData: {
      ElectricVehicleData: object
      Identification: {
        // Indicates whether this is an electric vehicle.
        IsElectricVehicle: boolean
      }
    }
    VehicleHistory: {
      ColourChangeCount: number
      ColourChangeList: []
      // Number of records in the KeeperChangesList.
      KeeperChangesCount: number
      // List of keeper change records.
      KeeperChangesList: Array<KeeperChangeDetails>
      // This is the number of previous keepers for this vehicle
      NumberOfPreviousKeepers: number
      // Count of elements in the plate change list.
      PlateChangeCount: number
      // List of plate change details.
      PlateChangeList: Array<PlateChangeDetails>
      // Count of entries in the V5C certificate list.
      V5CCertificateCount: number
      // List of V5C certificate details.
      V5CCertificateList: Array<V5cCertificateDetails>
      // Count of entries in the Vehicle ID Check list.
      VicCount: number
      // List of Vehicle ID Check details.
      VicList: Array<VicDetails>
    }
    VehicleRegistration: {
      // This flag is set to True when a certificate of destruction
      // has been issued for the vehicle.
      CertificateOfDestructionIssued: boolean
      // CO2 emissions figure for vehicle.
      Co2Emissions: number
      // The current colour of the vehicle.
      Colour: string
      // The date that the vehicle was exported. Only present if
      // the vehicle has been exported.
      DateExported: string
      // Date when the vehicle was first registered.  This may be the
      // before the date the vehicle was first registered in the UK.
      DateFirstRegistered: string
      // Date when the vehicle was first registered in the UK with
      // the DVLA.
      DateFirstRegisteredUk: string
      // Date of the last update to the vehicle's core registration
      // description details.
      DateOfLastUpdate: string
      // The date that the vehicle was scrapped.  Only present if the
      // vehicle has been scrapped.
      DateScrapped: string
      // DVLA door plan code for this vehicle.
      DoorPlan: string
      // Door plan description for this vehicle.
      DoorPlanLiteral: string
      // The vehicle's registered engine capacity measured in c.c.
      EngineNumber: string
      // The vehicle's engine number.
      EngineCapacity: string
      // Boolean value indicating whether the vehicle has been exported.
      Exported: boolean
      // Fuel type used by the vehicle.
      FuelType: string
      // Number of gears (forward driving gear ratios) in the vehicle's
      // transmission.
      GearCount: number
      // Vehicle gross weight.  For commercial vehicles only.
      GrossWeight: number
      // Boolean value indicating whether the vehicle has been imported.
      Imported: boolean
      // Boolean value indicating whether the vehicle has been imported
      // from outside the EU.
      ImportNonEu: boolean
      // Vehicle make.
      Make: string
      // Vehicle make and model.
      MakeModel: string
      // Maximum permissible weight for the vehicle.
      MaxPermissibleMass: number
      // Vehicle model.
      Model: string
      // MVRIS (Motor Vehicle Registration Information System) make code
      // for this vehicle.
      MvrisMakeCode: string
      // MVRIS (Motor Vehicle Registration Information System) model code
      // for this vehicle.
      MvrisModelCode: string
      // PreviousVrmGb is supplied by the DVLNI prior to 2009. It is the
      // VRM that was on this vehicle prior to it being registered with the
      // DVLNI, but only if the vehicle was registered with the DVLA
      // immediately prior to being registered with the DVLA.
      PreviousVrmGb: string
      // PreviousVrmNi is supplied by the DVLA prior to 2009.  It is the
      // VRM that was on this vehicle prior to it being registered with the
      // DVLA, but only if the vehicle was registered with the DVLNI
      // immediately prior to being registered with the DVLA.
      PreviousVrmNi: string
      // Boolean value indicating whether the vehicle has been scrapped.
      Scrapped: boolean
      // Seating capacity of the vehicle.
      SeatingCapacity: number
      // Description of transmission.
      Transmission: string
      // Code indicating type of transmission used in the vehicle.
      TransmissionCode: string
      // Type of transmission used in this vehicle.
      TransmissionType: string
      // Classification of the general type of this vehicle (e.g.
      // Motorcycle, Car, LCV, HCV, PCV or Other).
      // Code indicating type of transmission used in the vehicle.
      VehicleClass: string
      // Boolean value indicating whether the vehicle was used before the date
      // of first registration in the UK.
      VehicleUsedBeforeFirstRegistration: boolean
      // The vehicle's unique Vehicle Identification Number.
      Vin: string
      // Only present if optional key_vin was passed in to query.  'Partial
      // match' indicates a partial match, 'FullMatch' indicates a full match,
      // null indicates no match.
      VinConfirmationFlag: string
      // The last 5 characters of the Vehicle Identification Number.
      VinLast5: string
      // The DVLA assigned Vehicle Registration Mark for this vehicle.
      Vrm: string
      // Vehicle wheel plan.  For commercial vehicles only.
      WheelPlan: string
      // Year and month when the vehicle was first registered.  This may be
      // the before the date the vehicle was first registered in the UK
      YearMonthFirstRegistered: string
      // The year in which the vehicle was manufactured.
      YearOfManufacture: string
    }
    VehicleStatus: {
      MotVed: {
        // VED band (may differ from VedCo2Band).
        VedBand: string
        // VED CO2 band.
        VedCo2Band: string
        // VED CO2 emissions figure expressed in g/km.
        VedCo2Emissions: number
        VedRate: {
          FirstYear: {
            // Six month VED rate for first year after a new vehicle is
            // registered.
            SixMonth: number
            // Twelve month VED rate for first year after a new vehicle is
            // registered.
            TwelveMonth: number
          }
          PremiumVehicle: {
            YearTwoToSix: {
              // Six month VED rate for the second to sixth years after a new
              // vehicle with Â£40,000 or greater list price (including options)
              // is registered.
              SixMonth: number
              // Twelve month VED rate for the second to sixth years after a new
              // vehicle with Â£40,000 or greater list price (including options)
              // is registered.
              TwelveMonth: number
            }
          }
          Standard: {
            // Standard six month VED rate.  Standard rate applies when no special
            // rate, such as the 'first year' rate takes precedence.
            SixMonth: number
            // Standard twelve month VED rate.  Standard rate applies when no
            // special rate, such as the 'first year' rate takes precedence.
            TwelveMonth: number
          }
        }
      }
    }
  }
}

type KeeperChangeDetails = {
  // Date of last keeper change.
  DateOfLastKeeperChange: string
  // Date of transaction.
  DateOfTransaction: string
  // Number of previous keepers.
  NumberOfPreviousKeepers: number
}

type PlateChangeDetails = {
  // Current VRM
  CurrentVRM: string
  // Date of receipt for the transfer.
  DateOfReceipt: string
  // Date of transaction.
  DateOfTransaction: string
  // Previous VRM.
  PreviousVRM: string
  // Type of transfer.
  TransferType: string
}

type V5cCertificateDetails = {
  // Date for this certificate.
  CertificateDate: string
}

type VicDetails = {
  // Date of VIC test.
  VICDate: string
  // Result of the VIC test.  Value will be 'PASS' or 'FAIL'.
  VICResult: string
}
