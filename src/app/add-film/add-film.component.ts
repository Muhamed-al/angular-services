import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FilmService } from '../services/film.service';


@Component({
  selector: 'app-add-film',
  standalone: false,
  templateUrl: './add-film.component.html',
  styleUrl: './add-film.component.css'
})
export class AddFilmComponent {

  constructor(private filmService : FilmService){}

  filmForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    genre: new FormControl(''),
    image: new FormControl(''),
    rating: new FormControl(''),
    year : new FormControl(''),
    isNew : new FormControl(false),
  })

  onAddFilm(){
    this.filmService.createFilm(this.filmForm.value).subscribe(
      (res) =>{
        alert("Film Ajouté avec succes")
      },
      (err) =>{
        console.error(err)
      }
    )
  }



}
