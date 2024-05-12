import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css'
})
export class LazyImageComponent {

  @Input()
  public url!: string;

  public hasLoaded: boolean = false

  onLoad(){
    setTimeout(() => {
      this.hasLoaded = true
    }, 1000)  
  }

}
