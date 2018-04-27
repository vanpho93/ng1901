import { Component, ViewChild } from '@angular/core';
import { WordFilterComponent } from './word-filter.component';
import { Word } from './types';

@Component({
  selector: 'app-list-word',
  template: `
  <div>
    <app-word-filter></app-word-filter>
    <br>
    <app-word-form (onAddWord)="onAddWord($event)"></app-word-form>
    <div *ngFor="let word of filteredWords">
        <app-word-item
          [wordInfo]="word"
          (onRemove)="onRemove($event)"
          (onToggle)="onToggle($event)">
        </app-word-item>
    </div>
  </div>
  `,
})

export class ListWordComponent {
  words: Word[] = [
    { _id: 'a', en: 'One', vn: 'Mot', isMemorized: true },
    { _id: 'b', en: 'Two', vn: 'Hai', isMemorized: false },
    { _id: 'c', en: 'Three', vn: 'Ba', isMemorized: true },
    { _id: 'd', en: 'Four', vn: 'Bon', isMemorized: false },
  ];
  @ViewChild(WordFilterComponent) filterComponent: WordFilterComponent;

  get filteredWords(): Word[] {
    return this.words.filter(word => {
      if (this.filterComponent.filterMode === 'SHOW_ALL') return true;
      if (this.filterComponent.filterMode === 'SHOW_FORGOT') return !word.isMemorized;
      return word.isMemorized;
    });
  }

  onAddWord(word: Word) {
    this.words.unshift(word);
  }

  onRemove(_id: string) {
    const index = this.words.findIndex(word => word._id === _id);
    this.words.splice(index, 1);
  }

  onToggle(_id: string) {
    const wordItem = this.words.find(word => word._id === _id);
    wordItem.isMemorized = !wordItem.isMemorized;
  }
}
