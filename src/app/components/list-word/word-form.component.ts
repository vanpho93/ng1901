import { Component } from '@angular/core';

@Component({
    selector: 'app-word-form',
    template: `
        <button *ngIf="!shouldShowForm" class="btn btn-success form-control" style="width: 300px">
            Add new word
        </button>
        <div *ngIf="shouldShowForm" class="form-group" style="width: 300px; padding-top: 20px">
            <input class="form-control" placeholder="English">
            <br>
            <input class="form-control" placeholder="Vietnamese">
            <br>
            <button class="btn btn-success form-control">
                Add
            </button>
            <br>
            <br>
            <button class="btn btn-warning form-control">
                Cancel
            </button>
        </div>
    `
})

export class WordFormComponent {
    shouldShowForm = false;
}
