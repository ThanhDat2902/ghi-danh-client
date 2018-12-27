import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';

import { LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './/app-routing.module';
import { MatToolbarModule, 
			MatListModule,
			MatAutocompleteModule,
			MatCheckboxModule,
			MatSidenavModule,
			MatSelectModule,
			MatCardModule,
			MatInputModule,
			MatFormFieldModule,
			MatDatepickerModule,
			MatButtonModule,
			MatIconModule,
			MatGridListModule,
			MatProgressBarModule,
			MatNativeDateModule,
			MatSnackBarModule} from '@angular/material';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {FlexLayoutModule} from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { ParticipantsComponent } from './components/participants/participants.component';

import { AddParticipantComponent } from './components/add-participant/add-participant.component';
import { ParticipantDetailsComponent } from './components/participant-details/participant-details.component';
import { BedroomsComponent } from './components/bedrooms/bedrooms.component';
import { AddBedroomComponent } from './components/add-bedroom/add-bedroom.component';

import { MessageService } from './message.service';
import { ParticipantService } from './services/participant.service';
import { BedroomService } from './services/bedroom.service';
import { BedroomDetailsComponent } from './components/bedroom-details/bedroom-details.component';
import { SearchPipe } from './search.pipe';
import { ClassDetailComponent } from './components/class-detail/class-detail.component';
import { SpeedBedroomComponent } from './components/speed-bedroom/speed-bedroom.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


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
		FlexLayoutModule,
		FormsModule,
		ReactiveFormsModule,
		AppRoutingModule,
		HttpClientModule,
		MatDatepickerModule,
		MatFormFieldModule,
		MatGridListModule,
		MatNativeDateModule,
		MatInputModule,
		MatAutocompleteModule,
		MatButtonModule,
		MatProgressBarModule,
		MatSnackBarModule,
		OwlDateTimeModule, 
		OwlNativeDateTimeModule,
		BrowserAnimationsModule,
		MatCheckboxModule,
		MatIconModule,
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
