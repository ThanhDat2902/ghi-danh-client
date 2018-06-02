import { Component, OnInit } from '@angular/core';

import { BedroomService } from '../bedroom.service';
import { Bedroom } from '../classes/bedroom';
import { Participant } from '../classes/participant';

@Component({
	selector: 'app-bedrooms',
	templateUrl: './bedrooms.component.html',
	styleUrls: ['./bedrooms.component.css']
})

export class BedroomsComponent implements OnInit {

  bedrooms: Bedroom[];
  selected_bedroom: Bedroom;
  bedroomCount: any;
  participants: Participant[];

	constructor(private bedroomService: BedroomService) { }

	ngOnInit() {
		    this.getBedrooms();
	}

	getBedrooms(): void{
		this.bedroomService.getBedrooms()
		.subscribe(data => {
			this.bedrooms = data;
			this.getCount(this.bedrooms);
		});
	}

	getCount(rooms: Bedroom[]): void{
		if(rooms){
			console.log('not null');
			for (let e of rooms) {
				this.bedroomService.getOneBedroom(e._id).subscribe(listOfSleeper => {
					e.free_capacity = e.capacity-listOfSleeper.data.length;
					e.count = listOfSleeper.data.length;
				});
			}
		}else{
			console.log('null');
		}
	}

	onSelectBedroom(bedroom: Bedroom): void {
		console.log(bedroom._id)
	    this.bedroomService.getOneBedroom(bedroom._id)
    	.subscribe(data => {
    		this.participants = data.data;
    		this.selected_bedroom = bedroom;
    	});
	}

}
