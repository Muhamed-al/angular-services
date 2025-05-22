import { Component } from '@angular/core';
import { ParticipantService } from '../services/participant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-participant',
  standalone: false,
  templateUrl: './list-participant.component.html',
  styleUrl: './list-participant.component.css'
})
export class ListParticipantComponent {

  participants : any[] = [];

  constructor(private participantService : ParticipantService){}

  ngOnInit():void{
    this.participantService.getAllParticipant().subscribe(
      data =>{
        this.participants = data;
      }
      ,error =>{
        console.log(error);
      }
    )
  }

  onDelete(id : number){
    this.participantService.deleteParticipant(id).subscribe(
      res =>{
        alert("participant deleted successfully");
      },
      error =>{
        console.log(error);
      }
    )
  }

}
