import { Component } from '@angular/core';

@Component({
  selector: 'app-list-word',
  templateUrl: './list-word.component.html',
  styleUrls: ['./list-word.component.css']
})

export class ListWordComponent {
  words = [
    { _id: 'a', en: 'One', vn: 'Mot' },
    { _id: 'b', en: 'Two', vn: 'Hai' },
    { _id: 'c', en: 'Three', vn: 'Ba' },
    { _id: 'd', en: 'Four', vn: 'Bon' },
  ];
}
