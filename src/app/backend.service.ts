import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JourneyModel, JourneyShortModel, ReservationModel } from './journey-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient ) { }

  getJourneys() :Observable<JourneyModel[]> {
    return this.http.get<JourneyModel[]>("https://utazasi-iroda.jedlik.cloud/api/journeys");
  }

  getJourneyShorts() :Observable<JourneyShortModel[]> {
    return this.http.get<JourneyShortModel[]>("https://utazasi-iroda.jedlik.cloud/api/journeys/short");
  }

  postReservation(kuldendoAdat:ReservationModel):Observable<any> {
    let seged: ReservationModel = new ReservationModel();
    seged.name = kuldendoAdat.name;
    seged.email = kuldendoAdat.email;
    seged.acceptedConditions = kuldendoAdat.acceptedConditions;
    seged.journeyId = Number(kuldendoAdat.journeyId);
    seged.lastCovidVaccineDate = kuldendoAdat.lastCovidVaccineDate;
    seged.numberOfParticipants = kuldendoAdat.numberOfParticipants;
    
    return this.http.post("https://utazasi-iroda.jedlik.cloud/api/reserve",
                  seged);
  }

}
