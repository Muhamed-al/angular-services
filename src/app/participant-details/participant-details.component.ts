import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParticipantService } from '../services/participant.service';

@Component({
  selector: 'app-participant-details',
  standalone: false,
  templateUrl: './participant-details.component.html',
  styleUrl: './participant-details.component.css'
})
export class ParticipantDetailsComponent {

  participantId : any;
  participant : any;

  constructor(private route : ActivatedRoute , private participantService : ParticipantService){}


  ngOnInit():void{
   this.participantId = this.route.snapshot.params['id'];
   this.participantService.getParticipantById(this.participantId).subscribe(
    res =>{
      this.participant = res;
    },
    error =>{
      console.log(error);
    }
   )
  }

  

}
