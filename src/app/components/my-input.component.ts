import { Component } from '@angular/core';

@Component({
    selector: 'app-my-input',
    template: `
        <div class="form-group" style="width: 300px; padding-top: 20px">
            <input
                class="form-control"
                placeholder="Email"
                [(ngModel)]="email"
            >
            <br>
            <input
                class="form-control"
                placeholder="Password"
                type="password"
                [(ngModel)]="password"
            >
            <br>
            <button class="btn btn-success form-control" (click)="email = ''">
                Sign In
            </button>
            <pre>Email: {{ email }}</pre>
            <pre>Password: {{ password }}</pre>
        </div>
    `
})

export class MyInputComponent {
    email = '';
    password = '';
    show(x) {
        console.log(x.value);
    }
}
