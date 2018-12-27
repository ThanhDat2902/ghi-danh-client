	import { Component, OnInit } from '@angular/core';
	import { Location } from '@angular/common';

	import {map, startWith} from 'rxjs/operators';
	import {FormControl} from '@angular/forms';
	import {Observable} from 'rxjs';

	import { Bedroom } from '../../classes/bedroom';

	import { Participant } from '../../classes/participant';
	import { ParticipantService } from '../../services/participant.service';

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

		addParticipant(): void{
	       this.newParticipant.bedroom = this.searchBedroomByName(this.newParticipant.bedroom, this.bedrooms);

	  	this.participantService.addParticipant(this.newParticipant)
	      .subscribe(() => this.goBack());

	  }

	  searchBedroomByName(nameKey, myArray){
	    for (var i=0; i < myArray.length; i++) {
	        if (myArray[i].name === nameKey) {
	            return myArray[i];
	        }
	    }
	  }

		goBack(): void {
			this.location.back();
		}

	}
