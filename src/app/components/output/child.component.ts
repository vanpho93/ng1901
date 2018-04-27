import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `
        <div>
            <button class="btn btn-success" (click)="increase();">
                Increase
            </button>
            <button class="btn btn-danger">
                Descrease
            </button>
            <button class="btn btn-warning">
                Reset
            </button>
        </div>
    `
})

export class ChildComponent {
    @Output() onIncrease = new EventEmitter();

    increase() { this.onIncrease.emit(); }
}
