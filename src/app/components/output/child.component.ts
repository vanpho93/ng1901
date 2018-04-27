import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `
        <div>
            <button class="btn btn-success" (click)="increase();">
                Increase
            </button>
            <button class="btn btn-danger" (click)="descrease();">
                Descrease
            </button>
            <button class="btn btn-warning" (click)="reset();">
                Reset
            </button>
        </div>
    `
})

export class ChildComponent {
    @Output() onIncrease = new EventEmitter<void>();
    @Output() onDescrease = new EventEmitter<void>();
    @Output() onReset = new EventEmitter<void>();
    @Output() onChangeValue = new EventEmitter<boolean>();

    increase() { this.onChangeValue.emit(true); }
    descrease() { this.onChangeValue.emit(false); }
    reset() { this.onReset.emit(); }
}
