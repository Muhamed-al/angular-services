import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableLike } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  constructor(private http : HttpClient) { }

  getAllParticipant() : Observable<any>{
      return this.http.get('http://localhost:8080/api/v0/participants');
  }

  getParticipantById(id : number) : Observable<any>{
    return this.http.get(`http://localhost:8080/api/v0/participants/${id}`);
  }

  createParticipant(participant : any) : Observable<any>{
    return this .http.post('http://localhost:8080/api/v0/participants' , participant);
  }

  deleteParticipant(id  : number) : Observable<any>{
    return this.http.delete(`http://localhost:8080/api/v0/participants/${id}`);
  }

}
