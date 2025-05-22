import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParticipantService } from '../services/participant.service';

@Component({
  selector: 'app-update-participant',
  standalone: false,
  templateUrl: './update-participant.component.html',
  styleUrl: './update-participant.component.css'
})
export class UpdateParticipantComponent {

  participantId ?: number;
  participant:any;

  constructor(private route:ActivatedRoute,private participantService:ParticipantService){

  }

  ngOnInit():void{
    // recuperer le participant par son id
    this.participantId=this.route.snapshot.params['id'];
    // recuperer le participant par son id
    if(this.participantId){
      this.participantService.getParticipantById(this.participantId).subscribe(data=>{
        this.participant=data;
      })
    }
  }

  onSubmit():void{
    if(this.participantId){
      this.participantService.updateParticipant(this.participantId,this.participant).subscribe(
        data=>{
          console.log(data);
        },
        error=>{
          console.log(error);
        }
      )
    }
  }
}