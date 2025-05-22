import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  standalone: false,
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
  currency = 'TND';
  PrixCars = [
    {
      id: 1,
      modele: 'Kia Seltos',
      prix: 104000,
    },
    {
      id: 2,
      modele: 'Toyota CH-R',
      prix: 88900,
    },
    {
      id: 3,
      modele: 'Nissan Juke',
      prix: 86500,
    },
  ];
  ngOnInit() {
  }
}


