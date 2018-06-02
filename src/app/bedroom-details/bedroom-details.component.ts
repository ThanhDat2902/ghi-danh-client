import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Bedroom } from '../classes/bedroom';
import { BedroomService } from '../bedroom.service';
import { Participant } from '../classes/participant';


@Component({
  selector: 'app-bedroom-details',
  templateUrl: './bedroom-details.component.html',
  styleUrls: ['./bedroom-details.component.css']
})
export class BedroomDetailsComponent implements OnInit {
	@Input() selected_bedroom: Bedroom;
	@Input() participants: Participant[];
	bedrooms: Bedroom[];
	id: string;

	constructor(
  		private route: ActivatedRoute,
	    private bedroomService: BedroomService,
	    private location: Location) { }

	ngOnInit(): void {

	}

}
