import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-movies-list',
  standalone: false,
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent {

    films: any; 
    constructor(private filmService : FilmService){}

    ngOnInit(){
      this.filmService.getAllFilms().subscribe(
        (res) =>{
          this.films = res  ;
          console.log("Films : " , this.films)
        },
        (err) =>{
          console.error("Error while fetching films : " , err);
        }
      )
    }


    onDelete(id :number){
      this.filmService.deleteFilm(id).subscribe(
        (res) =>{
          alert("Film supprimé avec succces");
        },
        (err)=>{
          console.error(err)
        }
      )
    }





}
