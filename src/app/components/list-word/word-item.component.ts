import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Word } from './types';

@Component({
    selector: 'app-word-item',
    template: `
        <h3>{{ wordInfo.isMemorized ? '------' : wordInfo.en }}</h3>
        <p>{{wordInfo.vn}}</p>
        <button class="btn btn-warning" (click)="remove();">
            Remove
        </button>
        <button class="btn btn-danger" *ngIf="wordInfo.isMemorized" (click)="toggle();">
            Forgot
        </button>
        <button class="btn btn-success" *ngIf="!wordInfo.isMemorized" (click)="toggle();">
            Memorized
        </button>
    `
})

export class WordItemComponent {
    @Input() wordInfo: Word;
    @Output() onRemove = new EventEmitter<string>();
    @Output() onToggle = new EventEmitter<string>();

    remove() {
        this.onRemove.emit(this.wordInfo._id);
    }

    toggle() {
        this.onToggle.emit(this.wordInfo._id);
    }
}
