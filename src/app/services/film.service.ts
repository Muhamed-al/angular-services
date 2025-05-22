import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValuesFromArray } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http : HttpClient) { }

  getAllFilms(): Observable<any>{
      return this.http.get("http://localhost:8080/api/v0/movies");
  }

  deleteFilm(id : number) : Observable<any>{
    return this.http.delete(`http://localhost:8080/api/v0/movies/${id}`);
  }

  addFilm(data : any) : Observable<any>{
    return this.http.post("http://localhost:8080/api/v0/movies" , data)
  }

  getFilmById(id : number)  :Observable<any>{
    return this.http.get(`http://localhost:8080/api/v0/movies/${id}`)
  }

  updateFilm(id : number , data :any)  :Observable<any>{
    return this.http.put(`http://localhost:8080/api/v0/movies/${id}` , data)
  }
}
