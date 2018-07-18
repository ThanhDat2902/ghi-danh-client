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
  to_be_printed: number;
  printed: number;
  male_count: number;
  child_count: number;
  thieu_count: number;
  ov_count: number;
  countries: any[];
  female_count:number;
  monk_donation: number;
  semiar_donation: number;
  rice_donation: number;

  constructor(private participantService: ParticipantService) { }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.participantService.getParticipantsCount().subscribe(data => {
      this.participant_count = data;
      this.to_be_printed = data-this.printed;
    })

    this.participantService.getParticipantsCurrentCount().subscribe(data => {
      this.current_participant_count = data;
    })

    this.participantService.getParticipantsCountNametag().subscribe(data => {
      this.printed = data;
      this.to_be_printed = this.participant_count-data;
    })

    this.participantService.getParticipantsCountMale().subscribe(data => {
      this.male_count = data;
      this.female_count = this.participant_count-this.male_count;
    })

    this.participantService.getParticipantsCountChild().subscribe(data => {
      this.child_count = data;
      this.thieu_count = data-this.ov_count;
    })

    this.participantService.getParticipantsCountOV().subscribe(data => {
      this.ov_count = data;
      this.thieu_count = this.child_count-data;
    })

    this.participantService.getDonations().subscribe(data => {
      this.monk_donation = data[0].monk_donation;
      this.semiar_donation = data[0].semiar_donation;
      this.rice_donation = data[0].rice_donation;
    })

  }

}
