import { Component } from '@angular/core';

@Component({
    selector: 'app-parent',
    template: `
        <div>
            <p>Count = {{ count }}</p>
            <h3>Count = {{ count }}</h3>
            <h1>Count = {{ count }}</h1>
            <app-child
                (onIncrease)="onIncrease();"
                (onDescrease)="onDescrease();"
                (onReset)="onReset();"
                (onChangeValue)="onChangeValue($event)"
            ></app-child>
        </div>
    `
})

export class ParentComponent {
    count = 1;

    onIncrease() { this.count++; }
    onDescrease() { this.count--; }
    onReset() { this.count = 0; }
    onChangeValue(isIncrease: boolean) {
        this.count += isIncrease ? 1 : -1;
    }
}
