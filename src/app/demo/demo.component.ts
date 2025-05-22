import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: false,
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {


  produit = {
    name: "pc portable",
    description: "Le PC portable est un ordinateur léger et puissant conçu pour répondre à tous vos besoins professionnels et personnels. Équipé d’un processeur de dernière génération, d’un écran Full HD de 15,6 pouces et d’un SSD ultra-rapide, il garantit des performances fluides et une grande réactivité. Sa batterie longue durée vous permet de travailler ou de vous divertir toute la journée sans interruption. Grâce à son design élégant et compact, il se glisse facilement dans un sac pour vous accompagner partout. Idéal pour la bureautique, la navigation web, les appels vidéo et même le divertissement multimédia.",
    price: 2000.00,
    dateSortie: new Date(),
    rating: 0.75
  };



}
