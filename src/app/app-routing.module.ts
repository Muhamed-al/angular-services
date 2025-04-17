import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFilmComponent } from './add-film/add-film.component';
import { UpdateFilmComponent } from './update-film/update-film.component';
import { MoviesListComponent } from './movies-list/movies-list.component';

const routes: Routes = [
  {path : '' , component : MoviesListComponent},
  {path : 'add' , component : AddFilmComponent},
  {path : 'update/:id' , component : UpdateFilmComponent},
  // Lazy loading (chargement paresseux) : on charge le module admin.module.ts uniquement lorsque l'url contient /admin
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Permet de configurer les routes de l'application
  exports: [RouterModule] 
})
export class AppRoutingModule { }
