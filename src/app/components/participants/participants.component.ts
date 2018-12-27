import { Component, OnInit } from '@angular/core';

import { Participant } from '../../classes/participant';
import { ParticipantService } from '../../services/participant.service';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})

export class ParticipantsComponent implements OnInit {

  participants: Participant[];
  newParticipant : Participant;
  bedrooms: string[];
  type = 'all';
  search: string;

  constructor(private participantService: ParticipantService) { }

  ngOnInit() {
    this.getParticipants();
    this.getBedrooms();
    this.newParticipant = new Participant();
  }

  getParticipants(): void {

    this.participantService.getParticipants()
    .subscribe(data => {
        console.log(data);
        this.participants = data;
      });
  }

  getBedrooms(): void{
    this.participantService.getBedrooms()
    .subscribe(data => {
        this.bedrooms = data;
      });
  }

  delete(participant: Participant): void {
    this.participants = this.participants.filter(h => h !== participant);
    this.participantService.deleteParticipant(participant).subscribe();
  }

}