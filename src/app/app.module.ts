import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';

import { LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './/app-routing.module';
import { MatToolbarModule, MatListModule, MatAutocompleteModule, MatCheckboxModule, MatSidenavModule, MatSelectModule, MatCardModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { ParticipantsComponent } from './participants/participants.component';

import { AddParticipantComponent } from './add-participant/add-participant.component';
import { ParticipantDetailsComponent } from './participant-details/participant-details.component';
import { BedroomsComponent } from './bedrooms/bedrooms.component';
import { AddBedroomComponent } from './add-bedroom/add-bedroom.component';

import { MessageService } from './message.service';
import { ParticipantService } from './participant.service';
import { BedroomService } from './bedroom.service';
import { BedroomDetailsComponent } from './bedroom-details/bedroom-details.component';
import { SearchPipe } from './search.pipe';
import { ClassDetailComponent } from './class-detail/class-detail.component';
import { SpeedBedroomComponent } from './speed-bedroom/speed-bedroom.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
	declarations: [
		AppComponent,
		MessagesComponent,
		ParticipantsComponent,
		AddParticipantComponent,
		ParticipantDetailsComponent,
		BedroomsComponent,
		AddBedroomComponent,
		BedroomDetailsComponent,
		SearchPipe,
		ClassDetailComponent,
		SpeedBedroomComponent,
		DashboardComponent,

	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		AppRoutingModule,
		HttpClientModule,
		MatDatepickerModule,
		MatFormFieldModule,
		MatNativeDateModule,
		MatInputModule,
		MatAutocompleteModule,
		OwlDateTimeModule, 
		OwlNativeDateTimeModule,
		BrowserAnimationsModule,
		MatCheckboxModule,
		MatCardModule,
		MatSelectModule,
		MatSidenavModule,
		MatListModule,
		MatToolbarModule,

	],
	providers: [    
		MessageService,
		ParticipantService,
		BedroomService,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
