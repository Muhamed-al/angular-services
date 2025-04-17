import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesPipesComponent } from './directives-pipes/directives-pipes.component';
import { HoverDirective } from './hover.directive';
import { TruncatePipe } from './truncate.pipe';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddFilmComponent } from './add-film/add-film.component';
import { UpdateFilmComponent } from './update-film/update-film.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesPipesComponent,
    HoverDirective,
    TruncatePipe,
    MoviesListComponent,
    AddFilmComponent,
    UpdateFilmComponent,
    LifeCycleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Pour permettre Utiliser le service HttpClient
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
