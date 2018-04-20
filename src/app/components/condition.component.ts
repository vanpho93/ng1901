import { Component } from '@angular/core';

@Component({
    selector: 'app-condition',
    template: `
        <div>
            <h3>{{word.en}}</h3>
            <p>{{word.vn}}</p>
            <button class="btn btn-danger">Forgot</button>
            <button class="btn btn-success">Memorized</button>
        </div>
    `
})

export class ConditionComponent {
    word = {
        en: 'One',
        vn: 'Mot',
        isMemorized: false
    };
}
