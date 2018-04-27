import { Component, Input } from '@angular/core';
import { Word } from './types';

@Component({
    selector: 'app-word-item',
    template: `
        <h3>{{ wordInfo.isMemorized ? '------' : wordInfo.en }}</h3>
        <p>{{wordInfo.vn}}</p>
        <button class="btn btn-warning">
            Remove
        </button>
        <button class="btn btn-danger" *ngIf="wordInfo.isMemorized">
            Forgot
        </button>
        <button class="btn btn-success" *ngIf="!wordInfo.isMemorized">
            Memorized
        </button>
    `
})

export class WordItemComponent {
    @Input() wordInfo: Word;
}
