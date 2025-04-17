import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-movies-list',
  standalone: false,
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent {

  // Variable pour stocker les films
  films: any;

  // Injection de dépendance : Injecter le service FilmService dans le constructeur
  constructor(private filmService: FilmService) { }

  ngOnInit() {
    // On récupère tous les films
    // subscribe : permet de souscrire à l'observable et de recevoir les données,
    this.filmService.getAllFilm().subscribe(
      // Si la requête est réussie, on récupère les données et on les affiche
      (res) => {
        this.films = res;
        console.log("Films : ", this.films)
      },
      // Si la requête est échouée, on affiche l'erreur
      (err) => {
        console.error("Erreur lors de la récupération des films : ", err)
      }
    )
  }

  // Supprimer un film
  deleteMovie(id : number){
    this.filmService.delete(id).subscribe(
      // Si la requête est réussie, on affiche un message de succès
      (res) =>{
        alert("Film supprimé avec succés")
      }, 
      // Si la requête est échouée, on affiche l'erreur
      (err)=>{
        console.error(err)
      }
    )
  }





}
