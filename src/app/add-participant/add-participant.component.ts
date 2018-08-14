import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {FormControl} from '@angular/forms';

import { Participant } from '../classes/participant';
import { Bedroom } from '../classes/bedroom';
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
  //countries = ["Germany", "Albania","Andorra", "Armenia","Austria","Azerbaijan","Belarus","Belgium","Bulgaria","Croatia","Cyprus","Czech Republic","Denmark","Estonia","Finland","France","Georgia","Germany","Greece","Hungary","Iceland","Ireland","Italy","Kosovo","Latvia","Liechtenstein","Lithuania","Luxembourg","Macedonia","Malta","Moldova","Monaco","Montenegro","Netherlands","Norway","Poland","Portugal","Romania","Russia","Serbia","Slovakia","Slovenia","Spain","Sweden","Switzerland","Turkey","Ukraine","UK","Vietnam"];
  countries = ["Đức Quốc", "Pháp Quốc", "Đan Mạch", "Thụy Điển", "Thụy Sĩ", "Hà Lan", "Ý Quôc", "Anh Quôc", "Phần Lan", "Áo Quôc", "Việt Nam"];
  workgroups = ["Rửa chến", "Vệ sinh", "Hành đường", "Trai soạn", "Miễn"];
  classes = [0,1,2,3,4, 'none'];
  bedrooms: Bedroom[];
  means_of_transports = ['plane', 'train', 'coach', 'others'];
  previous_seminars = ['first time', 'multiple'];
  
  myControl: FormControl = new FormControl();

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
       this.newParticipant.bedroom = this.searchBedroomByName(this.newParticipant.bedroom, this.bedrooms);

    if(this.newParticipant.birth_date){
        var datearray = this.newParticipant.birth_date.split(".");
        this.newParticipant.birth_date = datearray[1] + '/' + datearray[0] + '/' + datearray[2];
     }
  	this.participantService.addParticipant(this.newParticipant)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  searchBedroomByName(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].name === nameKey) {
            return myArray[i];
        }
    }
  }

}
