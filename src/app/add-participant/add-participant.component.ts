import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ParticipantService } from '../services/participant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-participant',
  standalone: false,
  templateUrl: './add-participant.component.html',
  styleUrl: './add-participant.component.css'
})
export class AddParticipantComponent {

  constructor(private participantService : ParticipantService,
    private router : Router
  ){}

  participantForm = new FormGroup({
    name : new FormControl('' , [Validators.minLength(5) , Validators.maxLength(10)]),
    email : new FormControl('', [Validators.required , Validators.email]),
    telephone : new FormControl(''),
    status : new FormControl('')
  })

  isInvalidAndTouchedOrDirty(formControl : FormControl){
    return formControl.invalid && (formControl.touched || formControl.dirty);
  }



  onSubmit(){
    if(this.participantForm.valid){
      this.participantService.createParticipant(this.participantForm.value).subscribe(
        res  =>{
          alert("Participant created successfully");
          this.router.navigate(['/participants']);
        },
        error =>{
          console.log(error);
        }
      )
    }
  }



}
