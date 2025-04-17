import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate', // le nom de la pipe
  standalone: false
})
export class TruncatePipe implements PipeTransform {

  // les pipes sont des fonctions qui permettent de transformer des données
  // Exemple : on veut tronquer une chaîne de caractères à limit=10 caractères
  // Si la chaîne est plus longue que 10 caractères, on affiche les 10 premiers caractères et on ajoute ... à la fin
  // Si la chaîne est plus courte que 10 caractères, on affiche la chaîne telle quelle
  transform(value: string, limit : number): unknown {
    return value.length > limit ? value.slice(0 , limit) + '. . .' : value;
  }

}
