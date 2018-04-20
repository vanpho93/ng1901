import { Component } from '@angular/core';

@Component({
    selector: 'app-word',
    template: `
        <div>
            <p>Count = {{ count }}</p>
            <h3>Count = {{ count }}</h3>
            <h1>Count = {{ count }}</h1>
            <div>Count = {{ count }}</div>
            <button
                class="btn btn-success"
                (click)="count = count + 1"
            >
                Increase
            </button>
            <button
                class="btn btn-danger"
                (click)="count = count - 1"
            >
                Descrease
            </button>
            <button
                class="btn btn-warning"
                (click)="count = 1"
            >
                Reset
            </button>
        </div>
    `,
    styles: [
        `p { color: red; }`
    ]
})

export class WordComponent {
    count = 1;
}
