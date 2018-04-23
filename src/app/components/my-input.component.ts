import { Component } from '@angular/core';

@Component({
    selector: 'app-my-input',
    template: `
        <div class="form-group" style="width: 300px; padding-top: 20px">
            <input class="form-control" placeholder="Email">
            <br>
            <input class="form-control" placeholder="Password" type="password">
            <br>
            <button class="btn btn-success form-control">Sign In</button>
        </div>
    `
})

export class MyInputComponent {
}
