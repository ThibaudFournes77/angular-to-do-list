import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor() { }

  @Output() submitEvent = new EventEmitter();

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.submitEvent.emit(form.value);
  }

}
