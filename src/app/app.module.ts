import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WordComponent } from './components/word.component';
import { ConditionComponent } from './components/condition.component';
import { MyInputComponent } from './components/my-input.component';
import { ListWordComponent } from './components/list-word/list-word.component';

import { WordFilterComponent } from './components/list-word/word-filter.component';
import { WordFormComponent } from './components/list-word/word-form.component';
import { WordItemComponent } from './components/list-word/word-item.component';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    ConditionComponent,
    ListWordComponent,
    MyInputComponent,
    WordFilterComponent,
    WordFormComponent,
    WordItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
