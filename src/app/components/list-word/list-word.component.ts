import { Component } from '@angular/core';

@Component({
  selector: 'app-list-word',
  template: `
  <div>
    <app-word-filter></app-word-filter>
    <br>
    <app-word-form [words]="words"></app-word-form>
    <div *ngFor="let word of words">
        <app-word-item [wordInfo]="word"></app-word-item>
    </div>
  </div>
  `,
})

export class ListWordComponent {
  words = [
    { _id: 'a', en: 'One', vn: 'Mot', isMemorized: true },
    { _id: 'b', en: 'Two', vn: 'Hai', isMemorized: false },
    { _id: 'c', en: 'Three', vn: 'Ba', isMemorized: true },
    { _id: 'd', en: 'Four', vn: 'Bon', isMemorized: false },
  ];
}
