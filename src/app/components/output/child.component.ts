import { Component } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `
        <div>
            <button class="btn btn-success">
                Increase
            </button>
            <button class="btn btn-danger">
                Descrease
            </button>
            <button class="btn btn-warning">
                Reset
            </button>
        </div>
    `
})

export class ChildComponent {
}
