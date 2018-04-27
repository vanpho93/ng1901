import { Component } from '@angular/core';

@Component({
    selector: 'app-word-item',
    template: `
        <h3>{{ word.isMemorized ? '------' : word.en }}</h3>
        <p>{{word.vn}}</p>
        <button class="btn btn-warning">
            Remove
        </button>
        <button class="btn btn-danger" *ngIf="word.isMemorized">
            Forgot
        </button>
        <button class="btn btn-success" *ngIf="!word.isMemorized">
            Memorized
        </button>
    `
})

export class WordItemComponent {
    word = { _id: 'a', en: 'One', vn: 'Mot', isMemorized: true };
}
