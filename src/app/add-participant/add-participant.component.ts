import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Participant } from '../classes/participant';
import { ParticipantService } from '../participant.service';

@Component({
  selector: 'app-add-participant',
  templateUrl: './add-participant.component.html',
  styleUrls: ['./add-participant.component.css']
})

export class AddParticipantComponent implements OnInit {

  participants: Participant[];
  newParticipant : Participant;
  genders = ["male", "female", "others"];
  workgroups = ["wg1", "wg2", "wg3"];
  classes = [1,2,3,4, 'other'];
  bedrooms: any;
  means_of_transports = ['plane', 'train', 'others'];


  constructor(
    private participantService: ParticipantService,
    private location: Location) { }

  ngOnInit() {
    this.getParticipants();
    this.getBedrooms();
    this.newParticipant = new Participant();
    this.newParticipant.tho_ngu_gioi = false;
    this.newParticipant.tho_bo_tat_gioi = false;
    this.newParticipant.recieved_nametag = false;

  }

  getParticipants(): void {

    this.participantService.getParticipants()
    .subscribe(data => {
        this.participants = data;
      });
  }

    getBedrooms(): void{
    this.participantService.getBedrooms()
    .subscribe(data => {
        this.bedrooms = data;
      });
  }

  addParticipant(): void{
    console.log(this.newParticipant.bedroom);
  	this.participantService.addParticipant(this.newParticipant)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
