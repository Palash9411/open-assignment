import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tasks  = [{name:'hello',history:[]} ] ; 
  openTaskForm : boolean = false ; 
  openNewTaskComp(event : string ){
    this.openTaskForm = true ;
  }
}
