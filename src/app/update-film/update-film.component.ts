import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-update-film',
  standalone: false,
  templateUrl: './update-film.component.html',
  styleUrl: './update-film.component.css'
})
export class UpdateFilmComponent {


  filmId : any;
  film : any;

  constructor(private filmService : FilmService , private activatedRoute : ActivatedRoute){}


  ngOnInit(){
    //recuperer l'id de la participant a modifier
    this.filmId= this.activatedRoute.snapshot.params['id'];
    //recuperer les données de la film a modifier
    this.filmService.getFilmById(parseInt(this.filmId)).subscribe(
      (res) =>{
        this.film = res;
        console.log("FILM :" , this.film)
      },
      (err) =>{
        console.error("error :" , err)
      }
    )
  }


  onUpdate(data : any){
    this.filmService.updateFilm(this.filmId , data).subscribe(
      (res) =>{
        alert("Film mis ajour avec succés")
      },
      (err) =>{
        console.error(err)
      }
    )
  }



}
