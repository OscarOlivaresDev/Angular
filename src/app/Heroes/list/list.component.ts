import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public superHero : string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor', 'Capitán América'];
  public deleteHero?: string;

  removeHero():void{
    this.deleteHero = this.superHero.pop();
  }
  resetForm():void{
    this.superHero = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor', 'Capitán América'];
  }
}
