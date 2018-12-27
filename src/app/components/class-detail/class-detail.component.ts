import { Component, OnInit } from '@angular/core';
import { ParticipantService } from '../../services/participant.service';


@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.css']
})
export class ClassDetailComponent implements OnInit {

  classes: any[];

  constructor(private participantService: ParticipantService) { }

  ngOnInit() {
  	this.participantService.getClassesCSV();
  }

}
