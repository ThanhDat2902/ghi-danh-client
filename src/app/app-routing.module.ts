import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParticipantsComponent }  from './participants/participants.component';
import { AddParticipantComponent } from './add-participant/add-participant.component';
import { ParticipantDetailsComponent } from './participant-details/participant-details.component';

import { BedroomsComponent } from './bedrooms/bedrooms.component';
import { AddBedroomComponent } from './add-bedroom/add-bedroom.component';
import { BedroomDetailsComponent } from './bedroom-details/bedroom-details.component';
import { ClassDetailComponent } from './class-detail/class-detail.component';
import { SpeedBedroomComponent } from './speed-bedroom/speed-bedroom.component';
import { DashboardComponent } from './dashboard/dashboard.component';



const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'participants', component: ParticipantsComponent },
	{ path: 'add-participant', component: AddParticipantComponent },
	{ path: 'participant-detail/:id', component: ParticipantDetailsComponent },
	
	{ path: 'bedrooms', component: BedroomsComponent },
	{ path: 'add-bedroom', component: AddBedroomComponent },
	{ path: 'bedroom-detail/:id', component: BedroomDetailsComponent },
	{ path: 'class', component: ClassDetailComponent },
	{ path: 'speed', component: SpeedBedroomComponent },

];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}