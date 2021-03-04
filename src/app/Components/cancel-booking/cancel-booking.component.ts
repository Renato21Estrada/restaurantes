import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-cancel-booking',
  templateUrl: './cancel-booking.component.html',
  styleUrls: ['./cancel-booking.component.scss']
})
export class CancelBookingComponent implements OnInit {

  state = "Tu reserva aun no ha sido cancelada"

  public CodeReservation:string;

  constructor(
    private service:AppService
    ) { }

  ngOnInit(): void {
  }

  sendCancel(){
    this.service.cancelReservation(this.CodeReservation).subscribe((result:any) => {
      this.state = "Tu reserva se ha cancelado con exito"
      console.log(result);
    })
    console.log(this.CodeReservation)
  }

}
