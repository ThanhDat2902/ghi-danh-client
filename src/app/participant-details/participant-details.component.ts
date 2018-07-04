import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location, DatePipe } from '@angular/common';
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
    pipe: DatePipe;

    genders = ["male", "female", "others"];
    workgroups = ["wg1", "wg2", "wg3"];
    classes = [1,2,3,4, 'none'];
    means_of_transports = ['plane', 'train', 'others'];
    previous_seminars = ['first time', '1-2', 'multiple'];
    countries = ["Germany", "Albania","Andorra", "Armenia","Austria","Azerbaijan","Belarus","Belgium","Bulgaria","Croatia","Cyprus","Czech Republic","Denmark","Estonia","Finland","France","Georgia","Germany","Greece","Hungary","Iceland","Ireland","Italy","Kosovo","Latvia","Liechtenstein","Lithuania","Luxembourg","Macedonia","Malta","Moldova","Monaco","Montenegro","Netherlands","Norway","Poland","Portugal","Romania","Russia","Serbia","Slovakia","Slovenia","Spain","Sweden","Switzerland","Turkey","Ukraine","United Kingdom","Vietnam"];


    constructor(
	    private route: ActivatedRoute,
	    private participantService: ParticipantService,
	    private location: Location
	  ) {}

  ngOnInit(): void {
    this.getParticipant();
    this.getBedrooms();
    this.pipe = new DatePipe('en-US');
  }

  getParticipant(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.participantService.getParticipant(id)
      .subscribe(participant => {
        participant.birth_date = this.pipe.transform(participant.birth_date, 'dd.MM.yyyy');
        this.participant = participant
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
   this.participant.bedroom = this.searchBedroomByName(this.participant.bedroom, this.bedrooms);

   if(this.participant.birth_date){
        var datearray = this.participant.birth_date.split(".");
        this.participant.birth_date = datearray[1] + '/' + datearray[0] + '/' + datearray[2];
   }
    this.participantService.updateParticipant(this.participant)
      .subscribe(() => this.goBack());
  }

  searchBedroomByName(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].name === nameKey) {
            return myArray[i];
        }
    }
  }
}


