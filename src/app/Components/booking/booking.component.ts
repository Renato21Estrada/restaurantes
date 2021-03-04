import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

import { AppService } from 'src/app/services/app.service';
import { Booking } from 'src/app/shared/booking-models';
import { DialogsComponent } from 'src/app/shared/dialogs/dialogs.component';
import { Restaurant } from 'src/app/shared/models/restaurant-models';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
public bookingForm

public booking = new Booking()

private restaurantId:number

public restaurant : Restaurant

  constructor(
    public dialog:MatDialog,
    private fb:FormBuilder,
    private service:AppService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.restaurantId = Number(this.route.snapshot.paramMap.get('id'))
    this.getRestaurant()
    this.initForm();
  }

  getRestaurant(){
    this.service.getRestaurant(this.restaurantId).subscribe((result:any) =>{
      this.restaurant = result.data
    })
  }

  initForm(){
    this.bookingForm = this.fb.group({
      date:[new Date() ,Validators.required],
      time:['',Validators.required],
      customers:['',Validators.required]
    })
  }

  setBooking(){
    this.booking.restaurantid = this.restaurantId;
    this.booking.person = this.bookingForm.get('customers').value
    this.booking.date = this.bookingForm.get('date').value
    this.booking.turnid = this.bookingForm.get('time').value
  }

  sendBooking(){
    this.setBooking();
    this.service.createReservation(this.booking).subscribe((result:any)=> {
      console.log(result.data)
      const title = "CODIGO DE RESERVA:" + result.data
      const info = "Necesitaras el codigo para acceder al restaurante o cancelar una reserva"
      this.openDialog(title , info)
    })
  }

  openDialog(title: string , info:string): void {
    const dialogRef = this.dialog.open(DialogsComponent, {
      width: '350px',
      data: {title: title, info: info}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}



