import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Booking } from '../shared/booking-models';
import { LightRestaurant } from '../shared/models/restaurant-light-models';

const API = 'http://localhost:7071/booking-restaurant/v1/'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }

  getAllRestaurants(){
    return this.http.get(API + 'restaurants')

  }
  getRestaurant(id:number){
    return this.http.get(API + 'restaurant'+'/' +id)
  }

  createReservation(booking:Booking){
    return this.http.post(API + 'reservation' , booking)
  }

  cancelReservation(reservationCode:string){
    const option = {
      headers: new HttpHeaders({
        'content-type':'application/json'
      })
    }
    return this.http.delete(API + 'deleteReservation?locator='+reservationCode , option)
  }

  getAllRestaurantsMock(){

    const restaurants: LightRestaurant[] = []
    let restaurant = new LightRestaurant()
    restaurant.address='Jr Pedro Silva';
    restaurant.id = 1;
    restaurant.image= "https://supermamaspanama.com/wp-content/uploads/2019/06/restaurante-1-1280x720.jpg";
    restaurant.name="Cevicheria Renua";

    
  const restaurants2: LightRestaurant ={
      address: "Gran Rama",
      id:2,
      image:"https://media-cdn.tripadvisor.com/media/photo-s/0f/70/b8/e3/huerto-organico.jpg",
      name:"tupapi"
    }
    restaurants.push(restaurant)
    restaurants.push(restaurants2)

    return of(restaurants)
  

  }

}
