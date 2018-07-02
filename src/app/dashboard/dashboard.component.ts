import { Component, OnInit } from '@angular/core';

import { Participant } from '../classes/participant';
import { ParticipantService } from '../participant.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  participant_count: number;
  current_participant_count: number;
  to_print: number;


  constructor(private participantService: ParticipantService) { }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.participantService.getParticipantsCount().subscribe(data => {
      this.participant_count = data;
    })

    this.participantService.getParticipantsCurrentCount().subscribe(data => {
      this.current_participant_count = data;
    })

    this.participantService.getParticipantsCountNametag().subscribe(data => {
      this.to_print = data;
    })

  }

}
