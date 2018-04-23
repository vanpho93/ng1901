import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WordComponent } from './components/word.component';
import { ConditionComponent } from './components/condition.component';
import { MyInputComponent } from './components/my-input.component';
import { ListWordComponent } from './components/list-word/list-word.component';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    ConditionComponent,
    ListWordComponent,
    MyInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
