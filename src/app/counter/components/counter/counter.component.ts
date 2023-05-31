import { Component} from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
        <h3>Counter : {{counter}}</h3>

    <button (click)="onClickIncrease(+1)">+1</button>
    <button (click)="onClickReset()">Reset</button>
    <button (click)="onClickIncrease(-1)">-1</button>

    `
})

export class CounterComponent{
    public counter : number = 10;

    onClickIncrease(value:number):void{
        this.counter += value;
    }
    onClickReset():void{
        this.counter = 10;
    }
}
