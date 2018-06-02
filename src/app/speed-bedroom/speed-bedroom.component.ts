import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import {map, startWith} from 'rxjs/operators';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';

import { Bedroom } from '../classes/bedroom';

import { Participant } from '../classes/participant';
import { ParticipantService } from '../participant.service';

@Component({
	selector: 'app-speed-bedroom',
	templateUrl: './speed-bedroom.component.html',
	styleUrls: ['./speed-bedroom.component.css']
})
export class SpeedBedroomComponent implements OnInit {

	newParticipant : Participant;
	bedrooms: any;
	myControl: FormControl = new FormControl();


	constructor(
		private participantService: ParticipantService,
		private location: Location) { }

	ngOnInit() {
		this.newParticipant = new Participant();
		this.getBedrooms();
	}

	getBedrooms(): void{
		this.participantService.getBedrooms()
		.subscribe(data => {
				this.bedrooms = data;
			});
	}

	// filter(val: string): string[] {
	//     return this.bedrooms.filter(bedroom =>
	//       bedroom.name.toLowerCase().includes(val.toLowerCase()));
	//   }


	addParticipant(): void{
		console.log(this.newParticipant.bedroom);
		this.participantService.addParticipant(this.newParticipant)
			.subscribe(() => this.goBack());
	}

	goBack(): void {
		this.location.back();
	}

}
