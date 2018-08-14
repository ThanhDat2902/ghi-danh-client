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
  total_count = 0;
  total_space = 0;
  load = 0;

	constructor(private bedroomService: BedroomService) { }

	ngOnInit() {
		    this.getBedrooms();
	}

	getBedrooms(): void{
		this.bedroomService.getBedrooms()
		.subscribe(data => {
			this.bedrooms = data;
      console.log(this.bedrooms);
			this.getCount(this.bedrooms);
		});
	}

	getCount(rooms: Bedroom[]): void{
		if(rooms){
			for (let e of rooms) {
				this.bedroomService.getOneBedroomToday(e._id).subscribe(listOfSleeper => {
					e.free_capacity = e.capacity-listOfSleeper.data.length;
					e.count = listOfSleeper.data.length;
          this.total_count = this.total_count + listOfSleeper.data.length;
          this.total_space = this.total_space + e.capacity;
          this.load = this.total_count/this.total_space*100;
				});
			}
		}
	}

	onSelectBedroom(bedroom: Bedroom): void {
		console.log(bedroom._id)
	    this.bedroomService.getOneBedroomToday(bedroom._id)
    	.subscribe(data => {
    		this.participants = data.data;
    		this.selected_bedroom = bedroom;
    	});
	}

}
