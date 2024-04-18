import { Component } from '@angular/core';
import { JourneyShortModel, ReservationModel } from '../journey-model';
import { BackendService } from '../backend.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  public shorts: JourneyShortModel[] = [];
  public reservation: ReservationModel = new ReservationModel();
  public error:string = "";

  constructor (public backend: BackendService,
              public router :Router,
              private route: ActivatedRoute
  ) {
    
    this.backend.getJourneyShorts().subscribe(
    (data) => {
      this.shorts = data;
    });

    this.route.params.subscribe(
      (param) =>{
        this.reservation.journeyId = param['id'];
      }
    )

  }

  Kuldes() {
    this.error = "";
    this.backend.postReservation(this.reservation).subscribe(
      (data) => {
        alert(data.id);
        this.router.navigateByUrl("/journeys");
      },
      (backenderror) =>{
        //console.log(backenderror.error);
        this.error = backenderror.error;
      }
    );
  }



}
