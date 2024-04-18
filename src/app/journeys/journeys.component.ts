import { Component } from '@angular/core';
import { JourneyModel, ReservationModel } from '../journey-model';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-journeys',
  templateUrl: './journeys.component.html',
  styleUrls: ['./journeys.component.css']
})
export class JourneysComponent {
  displayedColumns: string[] = [
    'country',
    'vehicle', 
    'departure', 
    'capacity',
    'description',
    'pictureUrl',
    ];
  dataSource: JourneyModel[] = [];



  constructor (public backend:BackendService) {
    this.backend.getJourneys().subscribe(
      (data) =>{
        this.dataSource = data;
      }
    );
  }
}
