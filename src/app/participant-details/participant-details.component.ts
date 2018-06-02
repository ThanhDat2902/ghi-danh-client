import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {FormControl} from '@angular/forms';


import { Participant } from '../classes/participant';
import { ParticipantService } from '../participant.service';

@Component({
  selector: 'app-participant-details',
  templateUrl: './participant-details.component.html',
  styleUrls: ['./participant-details.component.css']
})
export class ParticipantDetailsComponent implements OnInit {
  @Input() participant: Participant;
    bedrooms: any;
  myControl: FormControl = new FormControl();


    constructor(
	    private route: ActivatedRoute,
	    private participantService: ParticipantService,
	    private location: Location
	  ) {}

  ngOnInit(): void {
    this.getParticipant();
    this.getBedrooms();
  }

  getParticipant(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.participantService.getParticipant(id)
      .subscribe(participant => {
        this.participant = participant
        console.log(this.participant);
      });
  }

  getBedrooms(): void{
    this.participantService.getBedrooms()
    .subscribe(data => {
        this.bedrooms = data;
      });
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.participantService.updateParticipant(this.participant)
      .subscribe(() => this.goBack());
  }

}
