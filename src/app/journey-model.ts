export interface JourneyModel {
  id: number
  vehicle: Vehicle
  country: string
  description: string
  departure: string
  capacity?: number
  pictureUrl: string
}

export interface Vehicle {
  id: number
  type: string
}

export interface JourneyShortModel {
    id: number
    destination: string
}

export class ReservationModel {
  journeyId: number = 0;
  name: string = "";
  email: string = "";
  numberOfParticipants: number = 0;
  lastCovidVaccineDate: string = "";
  acceptedConditions: boolean = false;
}