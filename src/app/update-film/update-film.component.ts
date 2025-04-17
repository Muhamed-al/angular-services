import { Component } from '@angular/core';
import { FilmService } from '../services/film.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-film',
  standalone: false,
  templateUrl: './update-film.component.html',
  styleUrl: './update-film.component.css'
})
export class UpdateFilmComponent {

    filmId : any;
    film : any;
    constructor(private activatedRoute : ActivatedRoute , private filmService : FilmService){}

    ngOnInit(){
        this.filmId = this.activatedRoute.snapshot.params['id'];
        console.log("Film ID : " , this.filmId);
        this.filmService.getFilmById(this.filmId).subscribe(
          (res) =>{
            this.film = res;
            console.log("Film : " , this.film)
          },
          (err) =>{
           console.error(err)
          },
          
        )
    }

    onUpdate(data :any){
      this.filmService.updateFilm(this.filmId , data).subscribe(
        (res) =>{
          alert("Film mis a jour avec succés")
        },
        (err) =>{
          console.error(err)
        }
      )
    }


}
