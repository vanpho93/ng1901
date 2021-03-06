import { Component } from '@angular/core';

@Component({
    selector: 'app-condition',
    template: `
        <div>
            <img [src]="word.isMemorized ? imageSrc1 : imageSrc2" />
            <h3>{{word.en}}</h3>
            <p>{{word.vn}}</p>
            <button
                class="btn btn-danger"
                *ngIf="word.isMemorized"
                (click)="toggle();"
            >
                Forgot
            </button>
            <button
                class="btn btn-success"
                *ngIf="!word.isMemorized"
                (click)="toggle();"
            >
                Memorized
            </button>
            <button
                class="btn btn-primary"
                [disabled]="!word.isMemorized"
            >
                Remove
            </button>
        </div>
    `
})
// directive
export class ConditionComponent {
    word = {
        en: 'One',
        vn: 'Mot',
        isMemorized: false
    };
    imageSrc1 = 'https://zmp3-photo.zadn.vn/banner/c/b/d/3/cbd38a122a6a6897fd906d68a97d31b1.jpg';
    imageSrc2 = 'https://zmp3-photo.zadn.vn/banner/c/0/5/a/c05a9a464d4cec9814f8bfa1cd6d729b.jpg';
    toggle() {
        this.word.isMemorized = !this.word.isMemorized;
    }
}
