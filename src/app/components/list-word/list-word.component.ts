import { Component } from '@angular/core';

@Component({
  selector: 'app-list-word',
  templateUrl: './list-word.component.html',
  styleUrls: ['./list-word.component.css']
})

export class ListWordComponent {
  words = [
    { _id: 'a', en: 'One', vn: 'Mot', isMemorized: true },
    { _id: 'b', en: 'Two', vn: 'Hai', isMemorized: false },
    { _id: 'c', en: 'Three', vn: 'Ba', isMemorized: true },
    { _id: 'd', en: 'Four', vn: 'Bon', isMemorized: false },
  ];

  toggle(_id: string) {
    const word = this.words.find(w => w._id === _id);
    word.isMemorized = !word.isMemorized;
  }

  remove(_id: string) {
    const index = this.words.findIndex(w => w._id === _id);
    this.words.splice(index, 1);
  }
}
