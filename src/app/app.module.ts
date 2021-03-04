import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CancelBookingComponent } from './Components/cancel-booking/cancel-booking.component';
import { HeaderComponent } from './Components/header/header.component';
import { ExploreComponent } from './Components/explore/explore.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { BookingComponent } from './Components/booking/booking.component';
import {HttpClientModule} from '@angular/common/http';
import { DialogsComponent } from './shared/dialogs/dialogs.component';
import { MatDialogModule } from '@angular/material/dialog';

const appRoutes: Routes = [
  {path: '', component:ExploreComponent},
  {path: 'booking/:id' , component: BookingComponent},
  {path: 'cancel' , component: CancelBookingComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ExploreComponent,
    CancelBookingComponent,
    HeaderComponent,
    BookingComponent,
    DialogsComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserAnimationsModule,
    MatCardModule,
    NgbModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
