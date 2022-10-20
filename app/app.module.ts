import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { ModalComponent } from './components/modal/modal.component';
import { NewTaskFormComponent } from './components/new-task-form/new-task-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    AddTaskComponent,
    ModalComponent,
    NewTaskFormComponent 
  ],
  imports: [
    BrowserModule ,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
