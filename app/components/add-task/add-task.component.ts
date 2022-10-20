import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  constructor() { }
  @Output() openModal  = new EventEmitter<string>()
  ngOnInit(): void {
  }
  addNewTask(){
    this.openModal.emit('open')
  }
}
