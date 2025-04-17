import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]', // appHover est le nom de la directive 
  standalone: false
})
export class HoverDirective {

  // Injection de dépendance : 
  // ElementRef : permet de récupérer l'élément HTML sur lequel la directive est appliquée
  // Renderer2 : permet de modifier les styles de l'élément HTML
  constructor( private el : ElementRef ,private renderer : Renderer2) { }

  // @HostListener : permet de récupérer les événements de l'élément HTML
  // mouseenter : événement de survol de l'élément HTML
  // onMouseEnter() : fonction qui sera appelée lorsque l'événement mouseenter sera déclenché
  @HostListener('mouseenter') onMouseEnter(){
    this.renderer.setStyle(this.el.nativeElement , 'background-color' , 'green')
  }

  // @HostListener : permet de récupérer les événements de l'élément HTML
  // dblclick : événement de double clic sur l'élément HTML
  // onDbClick() : fonction qui sera appelée lorsque l'événement dblclick sera déclenché
  @HostListener('dblclick') onDbClick(){
    this.renderer.setStyle(this.el.nativeElement , 'background-color' , 'red')
  }

  // @HostListener : permet de récupérer les événements de l'élément HTML
  // click : événement de clic sur l'élément HTML
  // onClick() : fonction qui sera appelée lorsque l'événement click sera déclenché
  @HostListener('click') onClick(){
    this.renderer.setStyle(this.el.nativeElement , 'background-color' , 'yellow')
  }
}
